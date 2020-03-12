---
title: (Dart) 키워드 종류
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
# static 키워드
## 개념
- static은 변수나 메소드에 키워드로 사용된다.
- 자주 변하지 않는 일정한 값이나 설정 정보같은 공용자원에 대한 접근에 있어서 매번 메모리에 로딩하거나 값을 읽어들이는 것보다 일종의 **전역변수** 와 같은 개념을 통해서 접근하는 것이 비용도 줄이고 효율을 높일 수있다. 
- 객체를 생성해서 무거운 코드들을 전부 메모리에 올릴 필요 없이 바뀌지 않는 속성이나 메소드를 다른 페이지에 쏙 뽑아 먹을때 사용다고 이해하면 쉽다.

## 사용예
1. 이동할 페이지 id(String)을 저장할때 사용함.
  


## 테스트 예제

~~~java
import 'dart:io';
~~~


# mixins 
## 개념
- extends는 1개의 클래스 밖에 상속 못하기 때문에...
- mixins는 여러 클래스 계층에서 클래스 코드를 재사용하는 방법이다.
- 쉽게 mixin 가 나오면 with 키워드를 통해 상속 받는 다고 생각하면 된다.

## 테스트 예제

~~~java
void main() {
  Animal().move();
  Fish().move();
  Bird().move();
  
  Duck().move();
  Duck().fly();
  Duck().swim();

}

class Animal {
  void move () {
    print('changed position');
  }
}

class Fish extends Animal {
  @override
  void move() {
    super.move();
    print('by swimming');
  }

}

class Bird extends Animal {
  @override
  void move() {
    super.move();
    print('by flying');
  }
}

mixin CanFly {
  void fly() {
    print('Changing position by flying');
  }
}

mixin CanSwim {
  void swim() {
    print('Changing position by swimming');
  }
}
// class 를 사용하는 대신 mixin을 사용하면 
// with키워드를 통해 다중 상속을 받아 코드 재사용이 가능.
class Duck extends Animal with CanSwim, CanFly{

}

~~~

> 참고 사이트


<https://dart.dev/guides/language/language-tour#keywords>
