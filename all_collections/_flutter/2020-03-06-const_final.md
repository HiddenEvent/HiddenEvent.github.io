---
title: [다트] Const vs Final
excerpt: "플루터 토이프로젝트"
toc_label: "<a href='/language/flutter/'>Flutter 관련</a>"
categories:
  - flutter
tags:
  - flutter
  - android
  - 안드로이드
  - ios
  - 앱 개발
last_modified_at: 2020-03-06
---
## final 키워드
- statelessWidget안에 변수는 실제로 한번 값이 정해지면 변하지 않는다. 쉽게 생각하면 돌이라고 생각하면된다.
- 어디에서나 재사용은 가능, 값은 변경 불가능
- 차이점
    1. 한번만 설정할 수 있다.
    2. 동일한 패턴으로 재사용 가능

## const 키워드
- final 키워드와 똑같다.
- 차이점
    1. 컴파일 타임 상수이다.
    2. 앱이 실행 되면 딱 1번만 값이 정해지면 다시 컴파일 할때 까지 값을 할당할 수 없음.

## 예제 활용 이해
~~~java

void main() {
    
    const int myConst = 2 + 5 * 8; // 컴파일시 값을 할당 가능 한 값이어야함
    const int myConst = DateTime.now(); 
    // 컴파일 되고나서 DateTime.now()를 실행하기 하여 현재시간을 갖고 와야하기 때문에
    // 에러가 난다.

    final int myFinal = 2 + 5 * 8; // 언제든지 한번 값을 할당하면 상관 없음
    const int myConst = DateTime.now(); // 언제든지 한번 값을 할당하면 상관 없음  

    myConst = 4; // 다시 값을 할당 할 수 없음.
    myFinal = 4; // 다시 값을 할당 할 수 없음.


}

~~~