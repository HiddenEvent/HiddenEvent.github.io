---
title: (TensorFlow) 17. 다중 선형회귀(Multi-variable Linear Regression)
excerpt: "다중 선형회귀(Multi-variable Linear Regression)의 개념을 알아본다."
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-04-17
---

## 1. 다중 선형회귀
- 多변수 인경우 선형회귀 하는 방법(X값이 여러개)
- X 메트릭의 열과, W 벡터의 헹과 같아야한다!
- Hypothesis using matix 식 :
$$
H(x) = XW
$$ 

### 다중 선형회귀 예제
- Matrix를 사용하지 않는 방법

~~~python
# x변수= 데이터, Y변수= 결과값
x1 = [ 73., 93., 89., 96., 73.]
x2 = [ 80., 88., 91., 98., 66.]
x3 = [ 75., 93., 90., 100., 70.]
Y = [152., 185., 180., 196., 142.]


# random weights (아무데이터나 줘도 된다..)
w1 = tf.Variable(tf.random_normal([1]))
w2 = tf.Variable(tf.random_normal([1]))
w3 = tf.Variable(tf.random_normal([1]))
b = tf.Variable(tf.random_normal([1]))

# 최대한 작은값으로 준다.
learning_rate = 0.000001

for i in range(1000+1):
  # tf.GradientTape() to record the gradient of the cost function
  with tf.GradientTape() as tape:
    hypothesis = w1 * x1 + w2 * x2 + w3 * x3 + b
    cost = tf.reduce_mean(tf.square(hypothesis - Y))

  # tape에 기록된 cost를 경사하강 알고리즘 호출하여 4개의 기울기 값을 구하는 과정
  w1_grad, w2_grad, w3_grad, b_grad = tape.gradient(cost, [w1, w2, w3, b])

  # update w1,w2,w3 and b
  w1.assign_sub(learning_rate * w1_grad)
  w2.assign_sub(learning_rate * w2_grad)
  w3.assign_sub(learning_rate * w3_grad)
  b.assign_sub(learning_rate * b_grad)

  # 50번마다 코스트 값을 호출
  if i % 50 == 0:
  print("{:5} | {:12.4f}".format(i, cost.numpy()))
~~~
- Matrix를 사용하는 방법

~~~python
data = np.array([
  # X1,  X2,  X3,   y
  [ 73., 80., 75., 152. ],
  [ 93., 88., 93., 185. ],
  [ 89., 91., 90., 180. ],
  [ 96., 98., 100., 196. ],
  [ 73., 66., 70., 142. ]
], dtype=np.float32)

# slice data
X = data[:, :-1] # matrix값에서 Y의 값을 뺀 값들
y = data[:, [-1]] # matrix값에서 Y값만 가져온 결과
W = tf.Variable(tf.random_normal([3, 1])) # X에 대한 값 = 변수 3개/ 출력값 1개
b = tf.Variable(tf.random_normal([1])) # y에 대한 값

learning_rate = 0.000001

# hypothesis, prediction function
def predict(X):
  return tf.matmul(X, W) + b # b값은 생략할 수 있음

n_epochs = 2000
for i in range(n_epochs+1):
  # record the gradient of the cost function
  with tf.GradientTape() as tape:
    cost = tf.reduce_mean((tf.square(predict(X) - y)))

  # calculates the gradients of the loss
  W_grad, b_grad = tape.gradient(cost, [W, b])

  # updates parameters (W and b)
  W.assign_sub(learning_rate * W_grad)
  b.assign_sub(learning_rate * b_grad)

  if i % 100 == 0:
  print("{:5} | {:10.4f}".format(i, cost.numpy()))
~~~

## 2. 다중 선형회귀 모델에 Matrix써야 하는 이유
- 중복된 코드를 제거할 수 있다.
  - X변수만큼 weight 값 생성
  - X변수만큼  hypothesis, prediction function 연산 작성
  - weight 갯수 만큼 업데이트 

- 성능도 marix를 쓰는게 훨씬 빠르다.