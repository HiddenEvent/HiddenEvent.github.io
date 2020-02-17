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

- 구현부 
~~~java
fun main(){
    var array = arrayOf(8,10,5,1,7,6,4,3,2,9); //정렬 할 데이터 값
    var temp = 0;
    var count =0 ;
    for (i in array.indices){
        for (j in 0..(array.size-2)-i){
            count++;
            if(array[j] > array[j+1]){
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
        array.forEach { print("$it ,") }
        println()
    }
    print("총 카운트 $count")
}
~~~