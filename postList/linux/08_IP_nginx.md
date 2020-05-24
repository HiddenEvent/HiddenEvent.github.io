---
title: "(linux) nginx 최신버전, 고정IP, systemctl, wget"
permalink: aws/08_IP_nginx
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

# IP 고정 설정
**- 고정 IP를 설정해야하는 이유는 접속할 떄마다 설정을 변경해야되기 떄문에 고정 IP를 설정해 놓아야한다.**
- `sudo vim /etc/sysconfig/network-scripts/ifcfg-enp0s3` : 랜카드 설정 파일 열기
  1. `BOOTPROTO=static` : 부트프로토콜을 static으로 변경
  1. `IPADDR=[아이피주소]` : 맨 아랫줄에 추가 => `ip addr` 명령어로 찾은 내 아이피
  1. `GATEWAY=10.0.2.2` : 맨 아랫줄에 추가 => `ip route` 명령어로 찾은 게이트웨이 주소
  1. `NETMASK=255.255.255.0` :  맨 아랫줄에 추가
  1. `DNS1=8.8.8.8` : 맨 아랫줄에 추가
  1. `DNS2=8.8.4.4` : 맨 아랫줄에 추가

<u>이 설정을 적용한다고해서 바로 반영되는 것이아니다. 재시작을 반드시 해줘야한다!</u>

- `systemctl restart network`: 수정된 네트워크 반영 작업
- `systemctl status network` : 네트워크 잘 작동하는지 확인

# nginx 설치 및 구동
- `sudo yum install nginx` : nginx 설치
- `sudo systemctl status nginx` : nginx 켜져있는지 상태확인 명령
- `sudo systemctl start nginx` : nginx 켜는 명령어
- `sudo systemctl stop nginx` : nginx 끄는 명령어 

## nginx가 종료되지 않는 경우
**1) 첫번째 방법 stop 보단 kill을 사용하자**   

**2) 두번째 방법!!**   
- `sudo systemctl stop nginx`로 한다고 바로 작동이 멈추지 않는 경우가 발생한다.
- 해결 방법은 window 에서 netstate를 해서 pid를 사용해 kill 하는 방식으로 해주어야함.
- `ps -aux | fgrep nginx` : nginx를 사용하는 프로세스를 보는 명령어
- `kill -9 [pid]` : 프로세스 강제 종료

**3) 세번째 방법 nginx를 최신버전으로 설치하자**   
- `vi /etc/yum.repos.d/nginx.repo` : 파일 수정
  + 
  ```
  [nginx]
  name=nginx repo
  baseurl=http://nginx.org/packages/centos/7/$basearch/
  gpgcheck=0
  enabled=1
  ```
- `yum remove nginx` : 삭제
- `yum install nginx` : 다시 설치


# wget
**- window의 웹 브라우저를 통해서 웹서버로 접속하는 기능**
- `wget https://www.naver.com` : 네이버의 index.html을 다운받아서 볼수 있음
- `wget 127.0.0.1` : 서버에서 nginx를 구동중인 경우 index.html을 받을 수 있음.
