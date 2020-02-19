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
### 생각해야될 부분
- [8,5,1,7,6,4,3,2,9]의 배열의 원소를 오름차순으로 삽입정렬해보자.
- **처음 KEY 값**은 **2번째 원소**를 키로 잡는다!
<p class="mermaid">
graph LR;
8-.-5-.-1-.-7-.-6-.-4-.-3-.-2-.-9
5 --> id2(key)
style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5, 5
</p>

- 키값이 +1씩증가 해서 size까지 증가하는 **반복문 1개** 필요.
- 키값을 기준으로 -1씩 감소하며 더 값이 큰지 확인하는 **내부 반복문 1개** 필요 
- 값을 서로 교체하기 위한 변수(temp) 1개 필요.
- 최종적으로 **key 인덱스 기준**으로 **key -1 인덱스 값이** *더 작다*면 이미 앞에는 정렬이 되어 있으므로 if, break; 가 필요.

### 코틀린 삽입정렬 구현부
~~~java
fun main(){
    var array = arrayOf(8,5,1,7,6,4,3,2,9); //정렬 할 데이터 값
    var temp: Int;   //비교해서 더 큰값을 임시로 담을 변수
    var count: Int ;  //총 비교횟수
    for(pt in 1 until array.size) { // 1..size KEY 값 증가
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
### 삽입정렬 시간복잡도

<script src="https://unpkg.com/mermaid/dist/mermaid.min.js">
</script>


