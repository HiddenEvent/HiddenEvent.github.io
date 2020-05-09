---
title: "(linux)서버구축을 위한 필수 개념"
permalink: aws/01_setting
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

## 프로그램 설치를 위한 RPM(Readhat package Manager)
- 설치 : rpm -Uvh 패키지파일이름.rpm
  + U : 패키지가 있으면 업데이트, 없으면 설치
  + v : 설치과정의 확인
  + h : 설치진행과정을 "#"마크로 화면에 출력
- 삭제 : rpm -e 패키지 이름
- 설치 확인 : rpm -qa 패키지이름

~~~php
`1) 포트포워딩으로 톰캣 실행하기`
sudo docker run -d --name tc -p 80:8080 tomcat

~~~

## 편리한 패키지 설치 DNF
- 의존관계에 있는 패키지를 한번에 설치해야 할때 사용하는 명령어
- rpm의 의존성 문제를 완전하게 해결할 수 있음
- centos7에서는 YUM 과 동일함

~~~php
`1) 설치 명령어`
dnf -y install [패키지이름]    `-y는 설치하는데 모두 동의 하는 옵션`
`1) 삭제 명령어`
dnf -y remove [패키지이름] 
~~~

### DNF 작동 방식
1. dnf install 입력을 한다.
2. /etc/yum.repos.d/ 디렉터리의 .repo에 저장된 URL주소 확인
3. 전체 패키지 목록 파일을 요청 Centos8 패키지 저장소에 요청
4. 전체 패키지 목록 파일만 다운로드
5. y를 선택하면 설치에 필요한 패키지 파일 요청
6. 설치할 패키지 파일을 다운로드해서 자동 설치

## 파일의 압축과 묶기
- 압축파일 확장명은 xz, bz2, gz, zip, Z 등


## CRON과 AT 자동실행 설정
- **cron**
  + 주기적으로 반복되는 일을 자동적으로 실행 될 수 있도록 설정
  + 관련된 데몬(서비스)은 "crond", 관련 파일은 "/etc/crontab"

~~~php
`/etc/crontab 예 살펴보자!`
`순서: [분별] [시간별] [일별] [월별] [요일]`

`1) /etc/cron.hourly/ 시간별 단위 실행  `
01 * * * * root run-parts /etc/cron.hourly    `모든 01분 마다 실행 (1시간만다)`

`2) /etc/cron.daily/ 일별 단위 실행  `
02 04 * * * root run-parts /etc/cron.daily    `새벽 4시 02분마다 실행(매일)`

`3) /etc/cron.weekly/ 주 단위 실행  `
03 04 * * 0 root run-parts /etc/cron.weekly    `일요일 새벽 4시 03분마다 실행(매주)`

`4) /etc/cron.monthly/ 월 단위 실행  `
03 04 1 * * root run-parts /etc/cron.monthly    `1일 새벽 4시 03분마다 실행(매월)`

~~~

- **at**
  + 일회성 작업을 예약 할 때 사용한다.

### 실습환경
1. 시간설정하는 프로그램을 다운 받아야함(Centos에서 재공 안해줌)

- **crond** 실습해보기

~~~php
`1) 시간설정 하는 프로그램 다운로드`
wget http://download.hanbit.co.kr/centos/8/openrdate-1.2-14.fc30.x86_64.rpm

`2) install`
dnf -y install openrdate-1.2-14.fc30.x86_64.rpm

`3) crond 작동여부 확인`
systemctl status crond  `Active 속성이  running 중인지 확인!`


`4) crontab 작성`
vi /etc/crontab          `에디터를 열고`
01 3 15  *  *  root     run-parts /etc/cron.monthly    `추가 한 후 저장`

`5) /etc/crontab.montly경로에서 작업명.sh로 실제 할 작업을 명시`
vi myBackup.sh  `작업할 명령어 작성`
`
set $(data)
fname="backup-$2$3tar.xz"

tar  cfj /backup/$fname /home
`

`6) 실행권한 부여`
chomod 755 myBackup.sh


`7) crond 변경사항 적용시키기`
systemctl restart crond

~~~

- **at** 실습해보기

~~~php
`1) 내일 새벽 4시에 실행해라`
at 4:00 tomorrow
`
dnf -y update                  전체시스템 업데이트
reboot                         재시작

다 설정한 후  CTRL + D를 누르면 작업설정 완료
`


`2) 예약된 목록 보기`
at -l

`3) 예약된 작업 삭제`
atrm 1       `1번 작업 삭제`
~~~


### 테스트를 위한 시간 강제설정
~~~php
`1) 시간 변경 : 01월15일03시00분2027년`
date 011503002027

date         `현재시간 확인`

`2) 다시 시간 원래대로 복구`
rdate -s time.bora.net
~~~