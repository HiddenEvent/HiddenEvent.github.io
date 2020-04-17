---
title: (TensorFlow) 18. 로지스틱 회귀
excerpt: "로지스틱 회귀/분류(Logistic Regression/Classification)의 개념을 알아본다."
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-04-17
---

## 1. Logistic Regression
- 동그라미 / 세모 등을 분류 하는 등의 용도로 사용됨
- 함수의 흐름 : Linear => Logistic => Decision Boundary

## 2. Classification(분류)
- Exam : Pass / Fail
- 스펨메일: Not Spam / Spam
- 얼굴 인식: Real / Fake
- 위와같이 머신러닝을 하기 위해서는 두가지[0, 1]의 값이 필요
- sigmoid 함수를 사용한 뒤 0.5 보다 큰거/작은거를 분류하는 과정


## 3. Logistic VS Linear
- Logistic은 선을 기준으로 좌,우로 로 데이터들을 분류 하는 개념
- Linear는 데이터를 기준으로 선을 가깝게 하는 개념


## 4. Logistic Hypothesis
- 직선으로 표현 할수 없으면 z자형으로 그래프가 그려진다.

~~~python
hypothesis = tf.matmul(X, 0) + b
~~~

## 5. Cost
~~~python
def loss_fn(hypothis, labels):
  cost = -tf.reduce_mean(labels * tf.log(hypothesis) + (1 - labels) * tf.log(1 - hypothesis))
  return cost
~~~