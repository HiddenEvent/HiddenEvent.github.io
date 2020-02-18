---
title : "삽입정렬(insertSort) 코틀린으로 구현하기"
toc: true
toc_sticky: true
toc_label: "<a href='/algorithm/al_kotlin/'>삽입정렬(insertSort) 코틀린으로 구현하기</a>"
categories:
  - algorithm
tags:
  - algorithm
  - kotlin
  - 삽입정렬
  - insertSort
last_modified_at : 2020-02-17
---
### 삽입정렬을 코틀린 코드로 구현해보자!
```
구현부 구성
1. [8,10,5,1,7,6,4,3,2,9]의 배열의 원소를 오름차순으로 삽입정렬해보자.
``` 
~~~java
fun main(){
    var array = arrayOf(8,10,5,1,7,6,4,3,2,9); //정렬 할 데이터 값
    var temp: Int;   //비교해서 더 큰값을 임시로 담을 변수
    var count: Int ;  //총 비교횟수
    for(pt in 1 until array.size) { //정렬할 데이터 사이즈만큼 탐색 KEY 값은 1
        for (i in pt - 1 downTo 0) { // pt-1하는 이유는 KEY 인덱스 부터 탐색 내림차순으로 정렬 하기위해...
            count++
            if (array[i] > array[i+1]) {
                temp = array[i+1]
                array[i+1] = array[i]
                array[i] = temp
            } else { //앞 데이터가 더 크지 않으면 KEY 인덱스 값까지 정렬이 완료된 상태이므로 다음 KEY 값으로....
                break
            }
        }
    }
    array.forEach { print("$it ") }
    print("총 카운트 $count")
}
~~~