---
title: (Machine) 15. Linear Regression
excerpt: "선형회귀 관련 이론"
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-04-04
---

## 1. Linear Regression(선형회귀) 란
- 데이터를 가장 잘 대변하는 직선의 방정식을 찾는 것
- 선형회귀 가설 식 :
$$
y = ax + b
$$ 


## 2. Cost(비용)
- 어떤 가설이 나은가를 판단하는 기준
- Cost 구하기 
$$
H(x) - y
$$
- H(x)는 현재 가설 y는 실제 데이터를 뜻함.

$$
cost(W, b) = \frac{1}{m}\sum_{i=1}^m{(H( x^{(i)}) - y^{(i)})^2}
$$

## 3. Minimize cost
- 머신러닝의 러닝부분이며,
- 최종적으로 우리가 해야할 것은 Cost 값을 최소화시키는 데이터 모델을 만드는 것이다.
- 함수 : 
$$
\begin{align}
minimize\ cost(W,b)
\end{align}
$$