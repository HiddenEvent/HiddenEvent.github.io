---
title : "퀵소트(quicktSort) 코틀린으로 구현하기"
toc: true
toc_sticky: true
toc_label: "<a href='/algorithm/al_kotlin/'>퀵소트(quicktSort) 코틀린으로 구현하기</a>"
categories:
  - algorithm
tags:
  - algorithm
  - kotlin
  - 퀵소트
  - quickSort
  - 퀵정렬
last_modified_at : 2020-02-18
---
### 퀵소트 문제의 이해
- [8,5,1,7,6,4,3,2,9]의 배열의 원소를 오름차순으로 퀵정렬해보자.
- 분할정복기법 (Divide and conquer)을 활용한다.   
(*문제를 분할처리, 재귀 함수를 이용*)
- **처음 pivot(리스트 가운데 인덱스에서 하나의 원소의 값)**을 정하고 순회를 돌면서   
    1. **pivot**값보다 작은 데이터는 *좌측*에,   
    2. **pivot**값보다 큰 데이터는 *우측*으로 분할   
    3. 다시 퀵 정렬을 적용한다.

### 생각해야될 부분