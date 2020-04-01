---
title: (Machine) 5. Linear algebra
excerpt: "python 기초"
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-04-01
---
```
- 들어가기전 용어 정리
1. 스칼라 vs 벡터
벡터(vector)는 크기와 방향을 갖는 개념이다.
벡터와 대비하는 개념으로, 스칼라(scalar)는 방향을 갖지 않고 크기만 갖는 개념

예를 들어 속도(velocity)는 크기와 방향을 갖지만, 
        속력(speed)은 크기만 있다.

```

## 1. 학습 목표
선형대수의 여러가지 간단한 기법들을 python code 로 표현하는 방법을 학습해보자!

## 2. Vector representation
- Vector를 파이썬으로 표시하는 다양한 방법 존재
- 최선의 방법은 없다.
- 값의 변경 유무,속성값 유무에 따라 선택할 수 있음
- 이번예제 에서는 기본적으로 list로 vector 연산 실시

#### Vector계산 코드 예제
~~~python
# 기본코드
u = [2,2]
v = [2,3]
z = [3,5]

result = [sum(t) for t in zip(u,v,z)]
print(result)

# =======출력 값 ======
# [7, 10]
~~~
~~~python
# vector의 계산 Scalar-Vector product
u = [1,2,3]
v = [4,5,6]
alpha = 2

result = [alpha*sum(t) for t in zip(u,v)]
print(result)

# =======출력 값 ======
# [10, 14, 18]
~~~
## 3. Matrix representation
- Matrix 역시 Python으로 표시하는 다양한 방법이 존재
- 특히 dict로 표현할 떄는 많은 표현 방법이 있음
- 이번 코드에서는 two-dimensional list형태로 표현함


#### Matrix계산 코드 예제
- Matric 표현 방법   

~~~python
matrix_a = [[3, 6],[4, 5]]# List로 표현했을 경우
matrix_b = [(3, 6),(3, 5)] #Tuple로 표현했을 경우
matrix_c = {(0,0):3,(0,1):6,(1,0):4,(1,1):5} #dict로 표현했을 경우
~~~

- matrix의 계산 : Matrix addition(메트릭스에서 vactor처럼 계산)   

~~~python
matrix_a = [[3, 6], [4, 5]]
matrix_b = [[5, 8], [6, 7]]
result = [[sum(row)for row in zip(*t)] for t in zip(matrix_a, matrix_b)]
print(result)

# =======출력 값 ======
# [[8, 14], [10, 12]]
~~~

- Scalar-Matrix Product (scalar 값을 매트릭에 각가 곱해주다고 생각하자)

~~~python
matrix_a = [[3, 6], [4, 5]]
alpha = 4
result = [[ alpha*element for element in t] for t in matrix_a]
print(result)

# =======출력 값 ======
# [[8, 14], [10, 12]]
~~~

- Matrix Transpose ( 열과 행을 바꾼다고 생각하자...)  

~~~python
matrix_a = [[1, 2, 3], [4, 5, 6]]
reulst = [[element for element in t] for t in zip(*matrix_a)]
print(reulst)

# =======출력 값 ======
# [(1, 4), (2, 5), (3, 6)]
~~~

- Matrix Product (3x3 을 행기준으로 곱해 2x2로 만든다)

~~~python
matrix_a = [[1, 2, 3], [4, 5, 6]]
matrix_b = [[1, 4], [2, 5], [3,6]]
result = [[sum(a * b for a, b in zip(row_a, column_b)) for column_b in zip(*matrix_b)] for row_a in matrix_a]
print(result)

# =======출력 값 ======
# [[14, 32], [32, 77]]
~~~