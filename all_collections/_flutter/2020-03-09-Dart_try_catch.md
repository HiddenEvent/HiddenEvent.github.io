---
title: (Dart) 예외처리& Null 체크
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
last_modified_at: 2020-03-09
---

## 예외처리 개념
- 런타임 도중 에러 발생시 에러처리 할떄 사용
- try catch 문을 사용하지 않고 에러발생하면 앱이 종료되는 등 이상 현상 발생되기 때문에 꼭 처리해줘야함

## 테스트 예제

~~~java
import 'dart:io';

void main() {
  String myString = 'abc';

  try {
    double myStringCast = double.parse(myString);
    print(myString + 5 ); 
  }
  catch(e){

  }

}
~~~

## throw 문
- try catch 문 밖에서 throw를 던지면 앱 종료



## null 관련 문법
~~~java
double mydouble;

if(mydouble == null){
  print('null맞음');
}

mydouble = mydouble ?? 10.0  // 널이면 디폴트값을 넣음.

~~~

