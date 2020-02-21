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
1. 함수로 분리 하자!
2. quickSort 함수에 array(정렬할 데이터가 들어가 있는 배열) ,Start(초기값), End(사이즈)을 넘겨준다
3. 퀵소트 함수 호출부에서는 파티션을 호출하여 왼쪽 정렬, 오른쪽 정렬을 하고 정렬이 계속 될때 까지
   퀵소트 함수를 재귀 호출 하여 정렬하게 한다.
4. **파티션 부분**에서는 pivot을 배열의 중간 값으로 정하고,
  start와 pivot을 비교 더 크냐를 비교,
  end와 pivot을 비교 더 작냐를 비교 ,
  start 와 end가 만나면 swap 함수 호출하여 큰값, 작은값 자리 교체
  


~~~java
//메인 부분
fun main(){
    println("quick Sort 알고리즘")
    val array = arrayOf(8,5,1,7,6,4,3,2,9) //정렬 할 데이터 값
    printArr(array)
    quickSort(array, 0, array.size -1)
    printArr(array)
}
~~~
~~~java
// 퀵소트 함수 호출부
fun quickSort(arr: Array<Int>, start:Int, end:Int){
    var part2 = partition(arr, start, end);
    if(start < part2 - 1){ // Left의 반
        quickSort(arr, start, part2-1);
    }
    if(part2 < end){     // right의 반쪽
        quickSort(arr, part2, end)
    }
}
~~~
~~~java
// 파티션 함수 호출부
fun  partition(arr:Array<Int>,start:Int, end:Int): Int {
    var temStart = start
    var temEnd = end;
    var pivot = arr[(start + end) / 2 ]
    while (temStart <= temEnd){ // 분할 정복
        while(arr[temStart] < pivot) temStart++
        while(arr[temEnd] > pivot) temEnd--
        if( temStart <= temEnd){
            swap(arr, temStart, temEnd);
            temStart++
            temEnd--
        }
    }
    return temStart
}
~~~
~~~java
// 큰값 <=> 작은값 변경 + 출력 함수 부
fun swap(arr:Array<Int>, start:Int, end:Int) {
    var temp = arr[end]
    arr[end] = arr[start]
    arr[start] = temp
}
fun printArr(arr:Array<Int>){
    arr.forEach { print("$it, ")  }
    println()
}
~~~