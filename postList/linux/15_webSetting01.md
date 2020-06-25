---
title: "(linux) 11. 자바, 이클립스, 서블릿, MySQL 개발환경 세팅, 1부"
permalink: aws/15_webSetting01
toc_label: "<a href='/aws/'>서버 홈 이동 Click</a>"
layout: single
comments: true
read_time: true
share: true
related: true
toc: true
toc_ads: true
toc_sticky: true
sidebar:
  nav: "aws"
---
[서버 홈바로가기](../aws)

💼📝🔑⏰ 📙📓📘📒🎓

# 💼 개발 및 운영환경 
**1. 개발환경**
- 윈도우, 윈도우 10
- 웹서버 : X
- 자바 서블릿 컨테이너 : Tomcat 9.0 (dynamic_web 4.0 지원)
- DBMS : MySQL

**1-1 개발환경 설치해야하는 것들**
- JDK 1.8
- STS 4
- 톰캣
- DBMS : MySQL

**2. 운영환경**
- 리눅스, Centos 7
- 웹서버: NGINX
- 자바 서블릿 컨테이너 : Tomcat
- DBMS : MySQL


# Spring 세팅
**인코딩 설정**
- window > Preferences 이동
- `file` 이라고 치고 utf8로 바꿔주는 작업

**jDK 변경 설정**
- window > Preferences 이동
- `jr` 이라고 치고 jre => jdk로 변경
- `SpringToolSuite4.ini` : sts설정 파일 열고, 아래 내용 추가
  ~~~php
  # 스프링이 jre를 찾으려고 하는 걸 방지해주는 설정
  --vm
  C:\Program Files\Java\jdk1.8.0_241\bin
  ~~~

**`Emmet` 인스톨하기**
  - help -> install -> add ->  Name: Emmet / location: http://emmet.io/eclipse/updates
  - html만 사용함.. jsp도 설정해주어야함
  - window - preferences - emmet -> 맨 뒤에 `.jsp` `.jspf`를 추가
  - html 테그 자동완성 도와주는 도구 (단축키 `ctrl + e` )
  - 키를 바꾸고 싶다면 Ctrl + Shift + L 을 두번 눌러서 Expand Abbreviation의 키를 변경해주면 된다~!


https://www.youtube.com/watch?v=7gflHsR7dyE