---
title: 다트 페키지 및 라이브러리 사용법
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


## 패키지
- 다른 사람들이 만든 pakages 작은단위의 코드 묶음 이라고 생각하면됨
- 예를 들어 집을 만들기위해 창문, 문, 울타리 등을 직접 만들지 않고 때오는 개념
- 패키지는 누군가가 특정 목표를 달성하기 위해 작성한 코드 묶음이다.

### 적용방법
1. <https://pub.dev/packages/> 패키지 찾기
2. 의존성 확인, pubspec.yaml 파일에 의존성 설정 코드 추가 후 상단에 packages get 클릭 다운
3. 사용할 곳에 import 해준다.


## async 키워드
1. 비동기 처리를 위한 키워드 
2. geolocator 패키지 이용할 떄 사용함.
3. GPS위치 파악과 같은 시간이 거릴는 작업을 수행 할 수 있는 방법


### 사용 예제
~~~java
  void getLocation() async{
    Position position = await Geolocator().getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
  }

~~~



## 내가 사용한 패키지 들
1. english_world
    - 영어의 동사,명사 등의 집합이고, 랜덤하게 갖고 올수도 있음

2. health
    - 인앱결재 기능 을 갖는 패키지

3. assets_audio_player 1.2.3
    - 노래 파일들을 재생,정지, 다음, 이전 등의 기능을 제공하는 패키지

4. geolocator: ^5.3.0
    - 장치의 현재위치를 알려주는 기능

5. http: ^0.12.0+4
  - 인터넷에 있는 데이터를 가져올 떄 쓰는 라이브러리