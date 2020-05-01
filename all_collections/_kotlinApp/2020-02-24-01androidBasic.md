---
title : "안드로이드 기본"
toc: true
toc_sticky: true
toc_label: "<a href='/language/kotlinApp/'>안드로이드 기본</a>"
categories:
  - 안드로이드
tags:
  - 코틀린 앱
  - kotlin
last_modified_at : 2020-02-24
---

### 1. 안드로이드 버전과 관련된 정보
- Minimum API level = 최소한의 안드로이드 버전 설정…
- Andorid 버전… icecreamSandwich로 설정하면 모든 디바이스를 지원할수 있음… (구글통계)
- 우리나라에서는 Lolipop으로 설정하면 우리나라에서 대부분 지원가능함…

### 2. 안드로이드 4대 구성요소
- Activity 
  - 사용자와 상호 작용
- Service 
  - activity와 같음 단지 화면이 없음
- Broadcast Receiver 
  - 시스템을 감시하는 목적
- Content Provider
  - 저장한 데이터를 다른 어플리케이션에서 실행되게 만드는 용도


### 3. 안드로이드 폴더 구조 알아보기
-	Project view = (Default) android view 목록으로 보여줌
	- .idea = 프로젝트의 환경설정 정보
	- app = 이것만 개발관련된 폴더임…
    - manifests 폴더 : 실행과 관련된 설정.
      - AndroidManifest.xml 파일 
        - main 화면 activity 파일 이름 설정
	  - Java 폴더 : 소스코드가 들어가는 부분
			- 패키지 : 폴더명으로 지어짐(실제 코틀린 소스)
      - Test 패키지 : junit 테스트 할때 사용 
			- Android Test 패키지 : junit 테스트 할때 사용
		- Res 폴더 : 리소스가 들어가는 부분
      - drawable : 이미지 파일 저장
      - layout : 코틀린 소스에서 R.layout 하는 부분에 해당. 앱 화면과 관련


### 4. Activity 생명주기

#### 4-1.화면 회전기능 사용시 초기화 문제
- 옆으로 돌아가면 화면을 다시 그려야 하기 때문에 개발자가 다 직접 처리해야한다.   
- 화면이 돌아갈때 main-activity 를 새로 생성해서 다시 creat 하기 때문에 초기화 된다.

```
해결 방안!!
1) Activity 생명 주기를 이용해서 소멸시키기 전에 저장하게 끔 기능을 제공 해준는 것을 이용한다.
2) savedInstanceState 에 저장해 놓아야 create 하면서 기억한 정보를 그대로 가지고 다시 만들어준다.
  ※ 오버라이드 할 때는 매개변수 1개 짜리를 해주어야해!! 꼭!!
```
```
§ Activity 라이프 사이클 함수를 사용
  □ onCreate( ) 
    ® 모든것을 초기화 해주는 작업
  □ onStart( )
    ® 초기화 된 요소들을 그려주기 위한 작업(focus는 없는 상태)
  □ onResume( )
    ® Focus 를 받은 상태
  □ Activity Run 상태
  □ onPause( )
    ® 일시정지 ex : 갑자기 문자 왔을 때
  □ onStop( )
    ® 종료 상태 (아직은 메모리에 데이터가 올라가 있는 상태 ex: 전화 왔을 때)
  □ onDestroy( )
    ® 완전히 종료 ( 메모리에서도 삭제)
    ® 화면 회전 하는 경우…..(신기방기)
```
### 5. 안드로이드 국가별 언어 설정
- 핸드폰의 국가정보를 가져와서 각 국가별로 언어를 바꿔 보여줄수 있도록 해주는 기능
- app -> res -> values -> strings 폴더 안에 strings.xml 을 국가별로 만들어준다.   
  또는 오른쪽 상단에 open editor 라는 파란 글자를 클릭해서 만들면 더 편하다.
~~~xml
<!-- 오른쪽 상단에 open editor 클릭해서 국가별 언어로 바꿀 수 있음-->
<resources>
    <string name="app_name">simple app</string>
    <string name="btn_change">Change</string>
    <string name="hello_msg1">hello!</string>
    <string name="hello_msg2">Good morning</string>
</resources>
~~~
~~~xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">어디얌?</string>
    <string name="btn_change">체인지</string>
    <string name="hello_msg1">안녕하세요!</string>
    <string name="hello_msg2">좋은 아침</string>
</resources>
~~~

