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

## nginx 포트포워딩
- `sudo netstat -nlp | fgrep nginx`: 최초 HTTP 기본포트인 80 포트 로 설정되 있음
- VirtualBOX에서 HTTP포트포워딩 설정   

![게스트 IP, 게스트 포트는 맞게 작성해야한다.](/assets/img/common/2020-05-25-22-27-46.png)

- **그럼에도 불구하고 접속이 불가능하다** 왜? 방화벽이라는게 있는데 22번 포트를 제외하고는 모조리 다 막아버리기 때문이다!!!
- `sudo systemctl stop firewalld`: 방화벽 내리는 명령어
- 이제 내 windows 컴퓨터로 돌아와서 웹브라우저를 키고 `127.0.0.1:8081`을 입력 하면 nginx가 구동된 것을 확인 할 수 있다!!
- `cd /usr/share/nginx/html/`: 최초 nginx `indx.html`이 있는 위치이다.

# wget
**- window의 웹 브라우저를 통해서 웹서버로 접속하는 기능과 같다고 보면 됨**
- `wget https://www.naver.com` : 네이버의 index.html을 다운받아서 볼수 있음
- `wget 127.0.0.1` : 서버에서 nginx를 구동중인 경우 index.html을 받을 수 있음.
