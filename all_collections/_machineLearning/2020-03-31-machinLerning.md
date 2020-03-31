---
title: (Machine) Pythonic Code
excerpt: "노드 기초"
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-03-28
---
## 1. 개념
- 남이 이해하기 쉬운 코드를 짜기 위한 파이썬 스타일의 코딩 기법
- 파이썬 특유의 문법을 활용하여 효율적으로 코드를 표현함
- 고급코드를 작성 할 수록 더 많이 필요해짐

### 1) Pythonic Code 코드 예
~~~python
# 일반 코드의 예...
colors = ["a","b","c","d"]
result = ""
for s in colors:
    result +=s
print(result)
~~~

~~~python
# Pythonic Coded의 예
# 배열안에 데이터를 하나의 문자열로 만들기 궂이 for문을 사용하지 않는다.
colors = ["a","b","c","d"]
result = ''.join(colors)
print(result)
~~~

## 2. python 함수
- 머신러닝 입문에 앞서 머신러닝에서 많이 사용되는 파이썬 기본 함수에 대해 공부.

### 1) Split 함수
- String Type의 값을 나눠서 List 형태로 변환

~~~python
# split 함수에 아무것도 없으면 빈칸을 기준으로 나눈다.
items = 'zero one two three'.split()
print(items)

example = 'python,jquery,javascript'
example.split(",")
print(example)

# 리스트에 있는 값을 a, b, c 변수로 unpacking 한다.
a, b, c = example.split(",")
~~~

### 2) Join 함수
- String List를 합쳐 하나의 String으로 반환할 떄 사용   

~~~python
colors = ['red', 'blue', 'green', 'yellow']
result = ''.join(colors)
print(result)

## join 하면서 추가 String을 붙일 수 있는 옵션을 부여 할 수 있음
result = '-'.join(colors) # 연결 시 "-"로 연결
print(result)
~~~

## 3. List comprehensions
- 기존 List 사용하여 간단히 다른 List를 만드는 기법
- 포괄적인 List, 포함되는 리스트라는 의미로 사용됨
- 파이썬에서 가장 많이 사용되는 기법 중 하나
- 일반적으로 for + append보다 속도가 빠름

### 1) List comprehensions 코드
~~~python
# 일반적인 방법
result = []
for i in range(10): # range = 0~9
    result.append(i)
print(result)
~~~

~~~python
# List compreHensions 방법
result = [i for i in range(10)]
print(result)
even = [i for i in range(10) if i % 2 == 0] # if 라는 필터를 적용한 예이다.
~~~

~~~python
# 중첩 List comprehensions
word_1 = "Hello"
word_2 = "World"
wordCompare = [i+j for i in word_1 for j in word_2]
# Nested For loop란 : for 내부에 for 루프가 있는 것
print(wordCompare)
~~~

~~~python
# 중첩 List comprehensions + if 문
case_1 = ["A", "B", "C"]
case_2 = ["D", "E", "A"]

result = [i+j for i in case_1 for j in case_2]
print(result)

# if 문 추가
result = [i+j for i in case_1 for j in case_2 if not(i==j)]
result.sort()

print(result)
~~~

~~~python
# List comprehensions 2차원 데이터 만들기
case_1 = ["A", "B", "C"]
case_2 = ["D", "E", "A"]

# case_2가 기준으로 case_1이 for loop를 돌면서 2차원 배열을 생성한다
result = [[i+j for i in case_1] for j in case_2]
print(result)
~~~

## 4. Enumerate
- List의 element를 추출할 때 번호를 붙여서 추출

~~~python
# list의 있는 index와 값을 unpacking
for i, v in enumerate(['tic','tack','tok']):

    print(i,v)
~~~
~~~python
# list의 있는 index와 value를 unpacking하여 list로 저장
mylist = ['a','b','c','d']
enumList = list(enumerate(mylist))
print(enumList)
~~~
~~~python
# 문장을 list로 만들고 list의 index와 값을 unpacking하여 dict로 저장
test = {i:j for i, j in enumerate('Hellow World i\'m find thankyou and you?'.split())}
print(test)
~~~

## 5. Zip
- 두 개의 list의 값을 병렬적으로 추출함

~~~python
# 병렬적으로 값을 추출
alist = ['a1','a2','a3']
blist = ['b1','b2','b3']
for a, b in zip(alist, blist): 
    print(a,b)

# ==== 출력 값==== 
a1 b1
a2 b2
a3 b3
~~~
~~~python
# 각 tuple의 값은 index끼리 묶음
a,b,c = zip((1,2,3),(10,20,30),(100,200,300))
print(a,b,c)

# ==== 출력 값====
(1, 10, 100) (2, 20, 200) (3, 30, 300)
~~~
~~~python
#각 Tuple 같은 index를 묶어 합을 List로 변환
zipTupleSum = [sum(x) for x in zip((1,2,3),(10,20,30),(100,200,300))]
print(zipTupleSum)

# ==== 출력 값====
[111, 222, 333]
~~~

### 1) Enumerate & Zip
- 두개를 한꺼번에 사용한 예제

~~~python
alist = ['a1','a2','a3']
blist = ['b1','b2','b3']
for i, (a,b) in enumerate(zip(alist,blist)):
    print(i,a,b)
# ==== 출력 값====
0 a1 b1
1 a2 b2
2 a3 b3
~~~