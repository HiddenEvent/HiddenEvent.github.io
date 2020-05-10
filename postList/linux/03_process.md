---
title: "(linux) 프로세스 / 데몬 개념"
permalink: aws/03_process
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

## 파이프(pipe)
- 두 개의 프로그램을 연결해 주는 연결통로의 의미
- "|" 문자를 사용한다.
- ex) ps -ef | grep bash

## 필터(filter)
- 필요한 것만 걸러 주는 명령어
- grep, tail, wc, sort, grep, awk, sed 등
- 주로 파이프와 같이 사용
- ex) ps -ef | grep bash

## 리디렉션 (redirection)
- 표준 입출력의 방향을 바꿔 줌
- ex) ls -l > list.txt          `리스트 목록을 파일로 저장`

## 프로세스
- 정의
  + 하드디스크에 저장된 실행코드(프로그램)가, 메모리에 로딩되어 활성화된 것
- 포그라운드 프로세스
  + 실행하면 화면에 나타나서 사용자와 상호작용을 하는 프로세스
  + 대부분의 응용프로그램
- 백그라운드 프로세스
  + 실행은 되었지만, 화면에는 나타나지 않고 실행되는 프로세스
  + 백신 프로그램, 서버 데몬 등
- 프로세스 번호
  + 각각의 프로세스에 할당된 고유 번호
- 작업 번호
  + 현재 실행되고 있는 백그라운드 프로세스의 순차번호
- 부모 프로세스와 자식 프로세스
  + 모든 프로세스는 부모 프로세스를 가지고 있음
  + 부모 프로세스를 kill 하면, 자식 프로세스도 자동 kill

### 프로세스 관련 명령
- ps
  + 현재프로세스의 상태를 확인하는 명령어

~~~php
ps -ef | grep bash  `bash 프로세스가 있는지 확인`

Cntl + Z   `프로세스 잠시 중단 단축키`
bg        `중단된 프로세스 백그라운드 보내는 명령어(& 를 더 많이 사용함)`
fg 1        ` 포그라운드로 다시 바꾸는 명령어`
Cntl + C   `프로세스 중단 단축키`
~~~

- kill
  + 프로세스를 강제로 종료하는 명령어
  + "kill -9 [프로세스번호]"는 강제종료
- pstree
  + 부모 프로세스와 자식 프로세스의 관계를 트리 형태로 보여줌

## 서비스와 소켓
### 서비스(데몬이라고도 부른다.)
- 시스템과 독자적으로 구동되어 제공하는 프로세스를 말한다
  + 웹 서버(http)
  + DB 서버(mysql)
  + FTP 서버(vsftpd) 등이 있다.
- 실행 및 종료는 아래 명령어를 많이 사용한다. 
  + systemctl start/stop/restart [서비스이름]
- 서비스의 실행 스크립트 파일은 
  + /url/lib/systemd/system/ 디렉터리에 '서비스이름.service'라는 이름으로 확인할 수 있다. 예를 들어 Cron 서비스는 crond.service라는 이름의 파일로 존재한다.

  ### 소켓
  - 서비스는 항상 가동되지만, 소켓은 외부에서 특정 서비스를 요청할 경우에 systemd가 구동 시킨다. 그리고 요청이 끝나면 소켓도 종료된다.