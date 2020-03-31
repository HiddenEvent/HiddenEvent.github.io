---
title: (Machine) 2. Lambda & MapReduce
excerpt: "python 기초"
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-03-31
---
## 1. 학습 목표
함수처럼 사용가능한 익명함수인 Lambda, Sequence 자료형의 데이터에서 함수를 적용하는 방법인 Map Function 과
Reduce Function 에 대해서 여러 예제 코드를 이용해 실습하면서 Pythonic Code 를 작성하는 방법에 대해 공부합니다.

## 2. Lambda
- 함수 이름 없이, 함수처럼 쓸 수 있는 익명함수
- 수학의 람다 대수에서 유래함
- python 3부터는 권장하지는 않으나 여전히 많이 쓰임
(List comprehensions 기능으로 대체 가능하기 때문에...)

### 1) Lamda 코드 예제
~~~python
def f(x, y):
    return x + y

print(f(1, 4))

f = lambda x, y: x + y
print(f(1, 4))

# 제곱
f = lambda x: x ** 2
print(f(3))

f = lambda x: x / 2
print(f(3))

print((lambda x: x + 1)(5))
~~~

## 2. Map Function
- Sequence 자료형 각 element에 동일한 function을 적용함
- Sequence 자료형 = List, Tuple 등

### 1) Map Function 코드 예제
~~~python
ex = [1, 2, 3, 4, 5]
f = lambda x: x ** 2
print(list(map(f, ex)))
# ======출력======
# [1, 4, 9, 16, 25]
~~~

~~~python
# zip 형식으로 사용한 예제
ex = [1, 2, 3, 4, 5]
f = lambda x, y: x + y
print(list(map(f, ex, ex)))
# ======출력======
# [2, 4, 6, 8, 10]
~~~
~~~python
# lamda 내에 필터를 적용한 예제
# 필터를 적용할때 else를 꼭 명시해야된다.
ex = [1, 2, 3, 4, 5]
list(map(
    lambda x: x ** 2 if x % 2 == 0 else x, ex)
    )

# ======출력======
# [1, 4, 3, 16, 5]
~~~

## 2. Reduce Function
- map function과 달리 list에 똑같은 함수를 적용해서 통합

### 1) Reduce Function 코드 예제
~~~python
# list안에 있는 모든 element를 왼쪽에서 오른쪽으로 하나씩 합친 결과...
print(reduce(lambda x, y: x+y, [1, 2, 3, 4, 5]))
# ======출력======
# 15
~~~

~~~python
# factorial 이 Reduce 를 이해하기 좋다..
def factorial(n):
    return reduce(
            lambda x, y: x*y, range(1, n+1))

# 1*2 부터 시작하여 5까지 차례차례 곱해나가는게 Reduce 개념
factorial(5)
# ======출력======
# 120
~~~