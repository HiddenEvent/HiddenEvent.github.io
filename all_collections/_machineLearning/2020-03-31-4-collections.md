---
title: (Machine) 4. Data Structure - Collections
excerpt: "python 기초"
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-03-31
---
## 1. 학습 목표
tuple, dict 에 대한 확장 데이터 구조를 제공하는 Collections 안에 포함된 모듈을 이용하여 Data Sturcture 의 기본 개념을 이해하고 사용하는 방법을 알아봅니다.  

## 2. Collections
- List, Tuple, Dict에 대한 Python Built-in 확장 자료 구조(모듈)
- 편의성, 실행 효율 등을 사용자에게 제공함
- 아래 모듈이 존재함
```
from collections import deque
from collections import Counter
from collections import OrderedDict
from collections import defaultdict
from collections import namedtuple
```

### 1) deque
- Stack과 Queue를 지원하는 모듈
- List에 비해 효율적인 자료 저장 방식을 지원함
- rotate, reverse등 Linked List의 특성을 지원함
- 기존 list 형태의 함수를 모두 지원함
- deque는 기존 list보다 효율적인 자료구조를 제공
- 효율적 메모리 구조로 처리 속도 향상

#### deque 코드 예제
~~~python
# 기본코드
from collections import deque

deque_list = deque()
for i in range(5):
    deque_list.append(i)
print(deque_list)

deque_list.appendleft(10)
print(deque_list)

# =======출력 값 ======
# deque([0, 1, 2, 3, 4])
# deque([10, 0, 1, 2, 3, 4])
~~~
~~~python
deque_list = deque()
for i in range(5):
    deque_list.append(i)

# rotate 활용 코드
deque_list.rotate(2)
print(deque_list)
# =======출력 값 ======
# deque([3, 4, 0, 1, 2])

# reversed 활용 코드
deque(reversed(deque_list))
# =======출력 값 ======
# deque([4, 3, 2, 1, 0])
~~~

### 2) OrderedDict
- Dict와 달리, 데이터를 입력한 순서대로 dict를 반환함
- Dict type의 값을, vlue 또는 key 값으로 정렬할 때 사용 가능


#### OrderedDict 코드 예제
~~~python
####### 기본코드
from collections import OrderedDict
d = OrderedDict()
d['x'] = 100
d['y'] = 200
d['z'] = 300
d['l'] = 500

for k, v in d.items():
    print(k, v)
# =======출력 값 ======
# x 100
# y 200
# z 300
# l 500

####### key 값으로 정렬한 예 
#######                                                 t[0]은 key값을 의미 t[1]은 value값을 의미함
for k, v in OrderedDict(sorted(d.items(), key=lambda t: t[0])).items():
    print(k,v)

# =======출력 값 ======
# l 500
# x 100
# y 200
# z 300
~~~

### 3) defaultdict
- Dict type의 값에 기본 값을 지정, 신규값 생성시 사용하는 방법
- 

#### defaultdict 코드 예제
~~~python
####### 기본코드
from collections import defaultdict
d = defaultdict(object) # Default dictionary를 생성
d = defaultdict(lambda: 0) # Default 값을 0으로 설정한다.
print(d["first"])
~~~

~~~python
####### 글자의 수를 세는 프로그램 
from collections import OrderedDict
from collections import defaultdict
text = """Code navigation is available!
Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository. Learn more""".lower().split()
print(text)

### (defaultdict를 사용하면 key가 있는지 없는지 비교할 로직 필요없이 바로 count가 가능하다)
word_count = defaultdict(object)
word_count = defaultdict(lambda: 0)
for word in text:
    word_count[word] += 1
print(word_count)
for i, v in OrderedDict(sorted(
    word_count.items(), key=lambda t: t[1], reverse=True)).items():
    print(i, v)
~~~

### 4) Counter
- Sequence tpye의 data element들의 갯수를 dict 형태로 반환 한다.

#### Counter 코드 예제
~~~python
####### 기본코드
from collections import Counter
c = Counter() # 빈객체 생성..
c = Counter('gallahad')  
print(c)
# =======출력 값 ======
# Counter({'a': 3, 'l': 2, 'g': 1, 'h': 1, 'd': 1})
~~~

### 5) namedtuple
- Tuple 형태로 Data 구조체를 저장하는 방법
- 저장되는 data의 variable을 사전에 지정해서 저장함

~~~python
####### 기본코드
from collections import namedtuple
Point = namedtuple('Point',['x','y'])
p = Point(11, y=22)
print(p[0] + p[1])
~~~