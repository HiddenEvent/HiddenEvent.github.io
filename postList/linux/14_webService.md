---
title: "(linux) 10. 배운내용 정리 및 Mysql 권한관리"
permalink: aws/14_webService
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

# 💼 지금까지 한 작업 정리
**전체적인 구조**
- 웹서버(nginx)
- FTP서버(pure_ftpd)
- DB서버(MariaDB)
- 서버사이드언어


**권한 관련 구조**
- nginx : 8031 => /web/site1/public
  + nginx 서버 등록하는 작업
- pureftpd : site1 => /web/site1
  + site1 이라는 사용자만 /web/site1 접속가능하게 만드는 작업
- mysql : site1 => site1 
  + mysql도 계정을 만들어 권한을 관리해야한다.


# 💼 MariaDB 
- 데이터베이스 관리 시스템 or 데이터베이스 관리 서버
- 하나의 DBMS로 2개 이상의 DB를 관리할 수 있다. 수 천개도 가능하다.

**DB란?**
- 사실 테이블들을 묶어주는 가상의 단위에 불과하다. 일종의 폴더라고 보면 된다.

**테이블이란?**
- 테이블은 하나의 엑셀파일이다. 실제로 엑셀파일처럼 구성되어있고 굉장히 유사하다.
- 테이블을 만들 때 테이블을 구성할 필드를 입력하면 된다.

**필드란?** 
- 테이블에 들어갈 데이터(행)들이 가질 데이터에 대한 메타데이터 이다.
- 예를들어 나이 : 22 에서 나이가 필드이고 22가 데이터 이다.

**DBMS 사용자란?**
- DBMS에 접근해서 DB를 관리하려면 인증을 해야 한다.
- 기본적으로 존재하는 회원은 root 회원 이다.

## 📝 MariaDB 권한 관리
**권한관리를 해야하는 이유?**
- 계정하나로 다른 사용자들에게 다 공유를 해줄 경우 
- 자신이 만든 테이블 말고도 다른 테이블 정보까지 다 공유 될 수 있기 때문이다.
- 그렇기 때문에 사용자 별로 계정을 생성 및 특정 데이터베이스 접근권한만 주어야 한다.

**사용자별 계정 생성 및 데이터베이스 권한 주는 방법**
- `sudo mysql -u root -p` : 리눅스에서 mysql 접속
- 명령어로 MariaDB 사용자 확인
  ~~~sql
  select Host, User from mysql.user
  ~~~
- 명령어로 MariaDB 사용자 확인
  ~~~sql
  -- site1, site2 각각의 개정 생성 및 데이터 베이스 접근 권한을 주는 명령어
  grant all privileges on site1.* to site1@`%` identified by '비번';
  grant all privileges on site2.* to site2@`%` identified by '비번';
  create database site1;
  create database site2;
  ~~~
