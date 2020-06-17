---
title: "(linux) MariaDB 설정"
permalink: aws/10_MariaDB
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

```
관련성
putty, filezila, editplus ====> 리눅스 안에 있는 ssh서버.(22)
크롬, 파이어폭스, IE ======> nginx와 관련(80)
sqlyog =========> 마리아DB와 관련 있음(3306)

```

# 💼 MariaDB 설치/삭제 과정
**마리아 DB 삭제 시**
- `sudo yum remove mariadb` : 마리아 DB삭제
- `sudo rm -rf /var/lib/mysql` : 라이브러리 까지도 삭제 해주어야 깔끔하게 삭제된다.

**마리아 DB 설치 시**
- `sudo vim /etc/yum.repos.d/mariadb.repo` : 마리아 DB 다운받기 전 최신 버전 설정
  + 
  ```
  [mariadb]
  name = MariaDB
  baseurl = http://yum.mariadb.org/10.1/centos7-amd64
  gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
  gpgcheck=1
  ```
- `sudo yum install MariaDB-server MariaDB-client -y` : 마리아 DB서버와 클라이언트 2개다 설치 명령어
-
## 📝 DB 인코딩 작업
- `sudo vim /etc/my.cnf.d/server.cnf` : mySql 설정파일 편집하자!

**아래 내용을 추가해 주어야한다.**
```
[mysqld]
collation-server = utf8_unicode_ci
init-connect='SET NAMES utf8'
character-set-server = utf8
```
- `sudo systemctl enable mariadb`: mariadb 계속 킨 상태로 바꾸기
- `sudo systemctl start mariadb` : mariadb 시작

## 📝 DB 보안설정
- `sudo /usr/bin/mysql_secure_installation` : mysql 보안 설정 (설치하고 한번만 하면된다.)
  + 모두다 Y를 선택하면 된다.
  + DB 접속 패스워드 설정도 여기서 한다.

## 📝 mysql 접속
- `mysql -u root -p` : mysql 접속 명령어
  + 패스워드 입력하면 접속 완료











```
브라우저 VS wget  둘의 차이점?

웹서버 입장에서 보면 둘다 client 이다.
- 브라우저 : 윈도우에서 들어오는 손님이다.
- wget : 리눅스에서 들어 오는 손님이다.

같은 개념으로 
- SQLYog : 윈도우에서 온 손님
- MariaDB-client : 리눅스에서 들어오는 손님이다.

```