---
title: "동적 프로그래밍"
permalink: algorithm/03_DynamicProgramming
toc_label: "<a href='/algorithm/'>알고리즘 홈이동 Click</a>"
layout: single
comments: true
read_time: true
share: true
related: true
toc: true
toc_ads: true
toc_sticky: true
sidebar:
  nav: "algorithm"
---
[알고리즘 바로가기](../algorithm)


## #동적 프로그래밍 방법의 원리
- 문제의 크기가 작은 소문제에 대한 해를 저장해 놓고, 이를 이용하여 크기가 보다 큰 문제의 해를 점진적으로 만들어가는 상향식 접근 방법
  + 각 작은 문제는 원래의 문제와 동일한 문제이지만 입력의 크기만 작음
  + 입력의 크기가 아주 작은 단순한 문제가 되면 쉽게 해를 구할 수 있고, 이를 테이블에 저장
  + 이후 해당 소문제의 해가 필요할 떄마다 테이블에 저장된 결과를 바로 이용
- 동적 **프로그래밍** => 동적 계획법
  + 컴퓨터에서의 프로그래밍과는 무관, 해를 구축하는 테이블을 이용한다는 의미
- 주로 최솟값/최댓값을 구하는 최적화 문제에 적용
- 최적화 문제에 동적 프로그래밍 방법을 적용하려면?
  + **최적성의 원리**를 반드시 만족시켜야 함
    * 주어진 문제에 대한 최적해는 주어진 문제의 소문제에 대한 최적해로 구성된다.

### 동적 프로그래밍 방법의 처리 과정
1. 주어진 문제에 대해서 최적해를 제공하는 점화식을 도출.
2. 가장 작은 소문제부터 점화식의 해를 구한 뒤 이를 테이블에 저장.
3. 테이블에 저장되어 있는 소문제의 해를 이용하여 점차적으로 큰 상위 문제의 해를 구함.

### 동적 프로그래밍 / 분할정복 방법 비교
1. 분할정복 방법은 하향식 접근 방법으로 상위 레벨의 큰 문제를 순환적으로 부분 배열로 분할하는데 이 분할된 작은 문제들은 서로 독립적이며 이들의 해를 결합해서 원래 문제를 해결하는 방법으로 사용하는 방면  
동적 프로그래밍 방법은 상향식 접근 방법으로 입력크기가 작은 소문제들을 모두 해결하여 해를 테이블에 저장한 후, 이 해들을 이용하여 보다 큰 크기의 문제를 해결하는 방법이다. 이때 소문제들은 분할 정복 방법과 다르게 서로 독립적이지 않고, 중복되는 부분이 존재한다.


### 적용 알고리즘
  1. 피보나치 수열
  2. 연쇄 행렬 곱셈
  3. 스트링 편집 거리
  4. 모든 정점 간의 최단 경로(플로이드 알고리즘)
  5. 저울 문제

## 1. 피보나치 수열 
### 개념과 원리
- 배열이 0, 1번 째의 해가 주어진 상태에서 f-1, f-2 해를 더 해서 배열안에 넣어준다.
- 시간 복잡도는 O(n)

### 분할 정복 방법을 적용하면(순환 형태의 알고리즘)
- 소문제가 독립이 아니기 떄문에 중복된 계산이 필요하다 ( 매우 비효율적)

### 성능 
- O(n)

### 파이썬 코드로 피보나치 수열
~~~python
# 피보나치 수열 알고리즘

fibo_num = 6

def Fibo(n):
    f = [0, 1] # 초기값 세팅
    
    for i in range(2,n):
        add_int = f[i-1] + f[i-2]
        f.append(add_int)
    return f
result = Fibo(fibo_num)
# print(sum(result))

## 순환형태(재귀함수)로 만든다면..
# fib(1) = 1, fib(2) = 1, fib(3) = 2
# fib (6) = fib(5) + fib(4)
# fib (5) = fib(4) + fib(3)
# ...
# 재귀를 형태를 사용하면 팩토리얼 연산이 된다
# 정말 느리다 이건 절대 사용하지 말자...
def fib(n):
    if n <= 1 : return n
    else: return(fib(n-1)+fib(n-2))
result = fib(fibo_num)
print(result)
~~~


## 2. 연쇄 행렬 곱셈 문제
- 결합 법칙 성립
- n개의 행렬을 연쇄적으로 곱할 떄 최적의 곱셈 순서를 구하는 문제
  + 최소의 기본 곱셈 횟수를 가진 행렬의 곱셈 순서를 구하는 문제

### 점화식
- n개의 행렬 M_i(d_i-1  +  d_i 차원) ( 1 <= i <= n ) 

### 성능 
- O(n^3)

### 파이썬 코드로 연쇄 행렬 곱셈 구현
~~~python
# 연쇄 행렬 곱셈

## 행렬의 갯수 별 경우의 수 구하기 => (n-1)의 팩토리얼
# 3개의 행렬 => 2가지
# 4개의 행렬 => 처음 3가지 * 2가지
# 5개의 행렬 => 4 * 3 * 2
# n개의 행렬 => (n-1)!
# 결론 적으로 경우의 수는(n-1)의 팩토리얼 개이다.
import sys
N = 4
d = [10, 30, 5, 60]
M = [[0 for x in range(N)] for y in range(N)]

for diag in range(1, N):
    for i in range(1, N - diag):
        j = i + diag
        M[i][j] = sys.maxsize
        for k in range(i, j):
            M[i][j] = min(M[i][j],
                          M[i][k] + M[k + 1][j] + d[i - 1] * d[k] * d[j])

print(M[1][N-1])
~~~


## 3.스트링 편집 거리 문제
- 두 문자열 X와 Y사이의 **편집 거리**
  + 두 문자열 사이의 근접성 또는 유사성을 판단하는 척도
  + 문자열 X를 Y로 변환하는 데 필요한 전체 편집 연산에 대한 최소 비용
    * 삽입비용, 삭제비용, 변경비용의 최소 비용을 구하는 목적(편집거리)

### 개념과 원리
1. 최적성의 원리 만족여부 확인
+ X와 Y사이의 편집 거리는 이들의 부분 문자열 사이의 편집 거리를 포함
  * X의 마지막 글자가 Y의 마지막 글자와 **같거나** / **같게 변경된 경우** = 같은경우 : 편집비용 0 / 변경하는경우 : 편집비용 2
  * X의 마지막 글자가 삭제된 경우 : 편집비용 1
  * Y의 마지막 글자가 삽입된 경우 : 편집비용 1

2.  최적성의 원리 이해 하기
- X = n 으로 Y = m 으로
- X의 마지막 글자가 Y의 마지막 글자와 **같거나** / **같게 변경된 경우**
  * X<sub>n-1</sub>과 Y<sub>m-1</sub>의 최소 편집 비용 + 마지막 글자의 변경 비용
- X의 마지막 글자가 삭제된 경우 (Y는 이미 다 처리가 됬다는 의미)
  *  X<sub>n-1</sub>과 Y<sub>m</sub> + X의 마지막 글자의 삭제 비용
- Y의 마지막 글자가 삽입된 경우( X는 다 처리가 됬다는 의미)
  *  X<sub>n</sub>과 Y<sub>m-1</sub> + Y의 마지막 글자의 삽입 비용


### 점화식 구하기
$$
E(i,j) = min[E (i-1, j )+ del,
          E (i, j-1 ) + ins, 
          E (i-1, j-1 ) + chg ]
$$

### 적용 방법
1. X * Y 크기를 갖는 테이블을 만든다 
2. 행 for문 안에 열 for 문으로 구성한다 (2중 for문)
3. 그런 다음 삽입(1), 삭제(1), 변경여부(0,2) 의 편집거리를 구한다.( 끝 )

### 성능
- O(nm)

### 특징
- P(i,j) <- E(i,j)로 선택되는 최솟값이 어떤 연산으로 결정되는 지를 표시 => 적용된 편집 연산을 구할 수 있음.

## 4. 두 정점 간의 최단 경로
- 가중 방향 그래프에서 두 정점을 연결하는 경로 중에서 간선의 가중치의 합이 가장 작은 경로
- 유형
  + 하나의 특정 정점에서 다른 모든 정점으로의 최단 경로
    * 다익스트라 알고리즘( 욕심쟁이 방법)
  + 모든 정점에서 다른 모든 정점으로의 최단 경로
    * **플로이드 알고리즘**

### 개념과 원리
- 모든 정점 간의 최단 경로
  + 가정 -> 가중치의 합이 음수인 사이클은 존재하지 않음
- 플루이드 알고리즘
  + 동적 프로그래밍 방법 적용
  + 간선의 인접행렬을 활용하여 경유할 수 있는 정점의 범위가 1인 경로부터 시작해서 \|V\| 까지인 경로까지 단계적으로 범위를 늘려가면서 모든 정점 간의 최단 경로를 구하는 알고리즘

2.  최적성의 원리 이해 하기
  - 시작 정점 i, 종료 정점 j, 경유 정점 k 
  - min ( i ~ j로 바로 가는 경로, i~k + k~j 경유하는 경로) 둘중 더 적은 값을 계속 상향식으로 만들면 문제를 풀 수 있다!! ( 최적성의 원리 만족) 

### 플로이드 알고리즘의 점화식
- 정점 i에서 정점 j까지 경유하는 정점 없이 간선으로 직접 연결된 경로의 길이
- 정점 i에서 정점 j까지의 경로 중에서 정점 1부터 k까지의 정점만을 경유할 수 있는 최소 경로의 길이


### 성능
- 입력 간선 n 의 인접 행렬로 초기화 (n x n) 하기 위해서는 정점의 갯수에 제곱 O(\|V\|^2) 만큼의 시간 복잡도를 갖게 되고, 경유 정점을 기준으로 시작 정점에서 목적지 정점 까지의 계산이 필요한 부분은 O(\|V\|^3) 의 시간복잡도를 갖는다.


### 특징
- 최단 경로 자체를 구할 수 있음
- 경유 정점 k를 경유하여 목적지 정점 j에 가는 가중치가 더 작다면 새로운 행렬 P를 만들어 (i,j)에 경유 정점 k값을 저장해 놓으면 최단 경로 자체를 구할수 있다

## 5. 저울 문제
- 양팔 저울, n개의 추 각추의 무게 w<sub>i</sub>
- 무게 M인 물체를 양팔 저울로 달 수 있는지 확인하는 문제(추의 무게와 물체의 무게는 모두 정수라고 가정)

### 최적성의 원리
- 선택된 k개의 추(s<sub>i</sub>...s<sub>k</sub>)
  + 선택된 추에 n번 추가 포함되지 않는 경우: 1 ~ (n-1)까지의 추를 이용해서 M인 물체를 달수 있는지의 문제
  + 선택된 추에 n번 추가 포함되는 경우 :(s<sub>i</sub> = n 이라고 가정) 1 ~ (n-1)까지의 추를 이용해서 M - w<sub>sk</sub> 인 물체를 달수 있는지의 문제

### 점화식
```

S(i,k)= 1 (달수있다) 또는 0 (달수없다)
- 1번부터 i번까지의 추를 이용하여 / 무게 k인 물체를 달 수 있는지의 여부
```
$$
S(i,k) = max[S(i-1, k) , S(i-1, k-w_{i})]
$$

- 정리하면 S(n,M) : 1..n의 추를 가지고 M무게를 달수 있는가를 달수 있으면 1 / 없으면 0으로 표현

### 성능
- 행열의 0번쨰 열을 1로 초기화 O(n), 무게 M인 물체 만큼 0행을 0으로 초기화 O(M) 하는 과정을 거치고 추의 개수를 기준으로 추의 무게가 선택될수 있는지를 판단하는 과정 O(nM)의 시간복잡도를 가진다.

### 특징
- 추의 무게에 최대공약수 배수인 경우에만 값의 변화가 발생하는 규칙이 있어 k의 증가 폭을 최대공약수 단위로 증가시키면 더 효율적인 알고리즘을 구성할 수 있다.
- 점화식을 적용한 결과 S 테이블과 w를 이용하면 사용된 추를 구할 수 있다. 
- 물체의 무게가 2^n보다 크면 모든 경우를 따져 보는 직관적인 방법보다 비효율적이다.
- 물체의 무게와 각 추의 무게가 정수가 아니면 동적 프로그래밍 방법 적용이 불가능 하다.