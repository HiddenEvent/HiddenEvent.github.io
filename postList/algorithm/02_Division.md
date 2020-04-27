---
title: "분할정복 알고리즘"
permalink: algorithm/02_Division
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


## # 분할정복 방법의 원리
- 순환적으로 문제를 푸는 하향식 접근 방법
  - 주어진 문제의 입력을 더이상 나눌 수 없을 때 까지 순환적으로 분할
  - 분할된 작은 문제들을 각각 해결한 후 그 해를 결합하여 원래 문제의 **해**를 구하는 방식

- 각 순환 호출 시 처리 과정
  1. 분할 : 주어진 문제를 여러 개의 작은 문제로 분할
  2. 정복 : 더 이상 분할되지 않을 정도로 크기가 작다면 순환호출 없이 작은 문제에 대한 해를 구함
  3. 결합 : 정복된 해를 결합하여 원래 문제의 해를 구함.

- 특징 : 분할된 문제는 원래 문제와 동일(입력크기만 감소)하고 서로 독립적

### 적용 알고리즘
  1. 이진탐색
  2. 합볍정렬
  3. 퀵정렬
  4. 선택 문제

## 1. 이진탐색 
### 개념과 원리
1. 정렬된 상태의 데이터에 대해 적용 가능한 효과적인 탐색 방법(오름차순으로 정렬되었다고 가정)

2. 탐색 방법
  - 배열의 가운데 원소와 탐색키 x를 비교
    - 탐색키 = 가운데 원소 => 탐색성공
    - 탐색키 < 가운데 원소 => 왼쪽 부분 배열 **순환호출**
    - 탐색키 > 가운데 원소 => 오른쪽 부분 배열 **순환호출**

### 분할정복 과정
- 분할 
  * 배열의 가운데 원소를 기준으로 왼쪽과 오른쪽 배열로 분할,
  * 탐색키와 가운데 원소가 같으면, 해당 원소의 배열 인덱스를 반환/종료
- 정복
  * 탐색키 X가 가운데 원소보다 크면 왼쪽 부분배열을 대상으로 이진 탐색 순환호출
  * X값이 더 크면 오른 쪽 부분배열을 대상으로 이진탐색을 순환 호출
- 결합
  * 부분배열에 대한 탐색 결과가 직접 반환되므로 결합이 불필요하다.

4. 최대 분할 횟수 ( 입력크기 n일 때 )
  - 최대 분할 횟수 => 입력크기 n은 2의 몇 인가를 구하고 그 지수값이 최대 분할 횟수다.  
  - 최대 분할 횟수 + 1

5. 성능 분석
- T(n) = **logn**

### 특징
- 입력이 정렬된 리스트에 대해서만 적용가능
- 삽입/삭제 연산시 데이터의 정렬 상태 유지가 필요
  + 평균 n/2개의  데이터 이동이 발생
    * **삽입/삭제가 빈번한 응용에는 부적합**

### python 코드로 실제 구현

~~~python
# 이진 탐색( 정렬된 데이터인 경우 사용)
# 순서대로 나열된 배열안에서 원하는 값 1개를 찾기
input_arr = [1,2,3,4,5,6,7,8,9]
x = 3   # 찾을 데이터

def BinarySearch(arr, left, right, x):
    if left > right : return -1

    mid = (left + right)//2

    if x == arr[mid] :
        return mid
    elif x < arr[mid]: return BinarySearch(arr, left, mid-1, x)
    else : return BinarySearch(arr, mid+1, right, x)
result = BinarySearch(input_arr, 0, len(input_arr)-1, x)
print(result)
~~~

## 2. 퀵정렬
### 개념과 원리
- **특정 원소**를 기준으로 주어진 배열을 두 부분배열로 분할 하고, 
- 각 부분배열에 대해서 퀵정렬을 순환적으로 적용하는 방식
- **피벗** (pivot)
  + 두 부분배열로 분할할 때 기준이 되는 특정 원소
  + 피벗을 지정할 떄는 **임의성**이 보장되어야 평균적인 시간복잡도를 가질수 있음!!(랜덤...)

### 성능
- 한 번의 분할 Partition() + 두번의 QuickSort() 순환 호출
- **극심한 불균형적 분할**
- 피벗만 제자리를 잡고, 나머지 모든 원소가 하나의 부분배열로 분할되는 경우 성능은 최악이다.
- 다시말해 입력 **데이터가 정렬된 경우**에서 **피벗을 첫번째 원소**로 지정할 경우 응용에 부적합하다.
- 평균의 경우 시간복잡도 : **O(nlogn)**

## 3. 합병정렬
### 개념과 원리
- 배열을 동일한 크기의 두 개의 부분배열로 분할하고, 각각의 부분배열을 순환적으로 정렬한 후, 정렬된 두 부분배열을 합병하여 하나의 정렬된 배열을 만듦

### 분할정복 과정
- 분할 
  * 입력 크기 n인 배열을 크기 n/2인 두 부분배열로 분할
- 정복
  * 각 부분배열에 대해서 합병 정렬을 순환적으로 적용하여 두 부분배열을 정렬
- 결합
  * 정렬된 두 부분배열을 합병하여 하나의 정렬된 배열을 만듦

  ### 성능
  - 크기가 n/2인 두번의 MergeSort() 순환 호출 + 한번의 합병 Merge()
  - O(nlogn)

## 4. 선택문제
### 개념과 원리
- n 개의 원소가 임의의 순서로 저장된 배열 A에서 i번째로 작은 원소를 찾는 문제
- 직관적인 방법
  + 오름차순으로 정렬한 후 i번째 원소를 찾는 방법 -> O(nlogn)
  + 최솟값 찾는 과정을 i번 반복(i-1)번 까지는 최솟값을 찾은 후 삭제 -> O(in)
- 퀵 정렬의 분할 함수 partition()을 순환적으로 적용

### 분할정복 과정
- 분할 
  * 피벗을 기준으로 주어진 배열을 두 부분배열로 분할, i가 피벗의 인덱스와 같으면 피벗의 값을 반환하고 종료
- 정복
  * 인덱스 i가 포함된 부분배열에 대해서 선택 알고리즘을 순환적으로 적용
- 결합
  * 필요없음

  ### 성능
  - 최악의 경우 = 퀵 정렬의 최악의 경우 O(n^2)
  - 평균 = O(n)