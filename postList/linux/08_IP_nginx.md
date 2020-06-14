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

💼📝🔑⏰ 📙📓📘📒🎓

# 💼 IP 고정 설정
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

# 💼 nginx
## 📝 nginx를 사용하는 이유?
- PC의 자원을 외부와 공유하기 위해서
- 다른 손님(client) 들은 웹 브라우저를 사용해서 우리 서버에 접근한다

## 📝 nginx 설치
- `sudo yum install nginx` : nginx 설치
- `sudo systemctl status nginx` : nginx 켜져있는지 상태확인 명령
- `sudo systemctl start nginx` : nginx 켜는 명령어
- `sudo systemctl stop nginx` : nginx 끄는 명령어 

## 📝 nginx가 종료되지 않는 경우
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

## 📝 nginx 포트포워딩
- `sudo netstat -nlp | fgrep nginx`: 최초 HTTP 기본포트인 80 포트 로 설정되 있음
- VirtualBOX에서 HTTP포트포워딩 설정   

![게스트 IP, 게스트 포트는 맞게 작성해야한다.](/assets/img/common/2020-05-25-22-27-46.png)

- **그럼에도 불구하고 접속이 불가능하다** 왜? 방화벽이라는게 있는데 22번 포트를 제외하고는 모조리 다 막아버리기 때문이다!!!
- `sudo systemctl stop firewalld`: 방화벽 내리는 명령어
- 이제 내 windows 컴퓨터로 돌아와서 웹브라우저를 키고 `127.0.0.1:8081`을 입력 하면 nginx가 구동된 것을 확인 할 수 있다!!
- `cd /usr/share/nginx/html/`: 최초 nginx `indx.html`이 있는 위치이다.

## 📝 nginx 다중 서버 포트 생성
**- HTTP 80 포트 말고도 다른 포트를 추가로 생성 할 때 설정한다.**
- `sudo vim /etc/nginx/nginx.conf`: nginx 설정파일/ conf.d/ 하위 경로를 다 불러오는 설정을 하는 것을 확인 할 수 있다.
- `sudo vim /etc/nginx/conf.d/virtual.conf`: conf.d 경로 밑에 virtual.conf를 만들어 새로운 서버 설정을 할 수 있다.

```php
# virtual.conf 설정 방법
# A 라는 서버 설정
server {
        listen 8888;
        server_name _;
        root /web/site1/public;
}


# B 라는 서버설정
server {
        listen 8889;
        server_name _;
        root /web/site2/public;
}

```

- `sudo systemctl restart nginx` : nginx 재부팅을 해주어야 설정을 잡을수 있다.
- `sudo mkdir /web/site1/public -p` : server root 경로로 지정해준 site1 폴더 생성 
- `sudo mkdir /web/site2/public -p` : server root 경로로 지정해준 site2 폴더 생성
- 테스트용 index.html 생성
  + `echo "<h1>site1 테스트용 html 생성</h1>" > /web/site1/public/index.html`
  + `echo "<h1>site2 테스트용 html 생성</h1>" > /web/site2/public/index.html`
- `sudo netstat -nlp | fgrep nginx` : nginx와 관련된 내용이 나온다.
- `systemctl stop firewalld`: 방화벽을 내려줘야 외부에서 접속 가능.
- 포트포워딩 해주어야 한다. 8888, 8889 두개 모두 해줘야한다!


# 💼 폴더 권한 설정
**폴더 권한 설정이 왜 필요한가?**
- 만약 내가 친구 20명에게 내 서버(Centos7) 컴퓨터로 nginx서버 20개를 만들어 각각 웹서비스를 대신 올려준다고 가정하자.
- 나는 20명의 친구들에게 각각 수정사항을 반영하려면 직접 수정 반영을 해주어야 하는데
- 이를 방지하기 위해 친구들에게 FTP 접속 권한을 주면 해결된다.
- 하지만 그 친구들이 자신의 파일을 수정하는게 아니라 다른 친구의 폴더를 수정할 수도 있기 때문에
- 각 20개의 폴더에 대한 권한을 설정해주어야 한다.

## 📝 계정 추가 및 폴더 권한 설정 예
1. 친구 20명에게 각각 계정을 생성해준다.
2. 각 계정마다 폴더를 기준으로 권한 주면된다.


# 💼 wget
**- window의 웹 브라우저를 통해서 웹서버로 접속하는 기능과 같다고 보면 됨**
- `wget https://www.naver.com` : 네이버의 index.html을 다운받아서 볼수 있음
- `wget 127.0.0.1` : 서버에서 nginx를 구동중인 경우 index.html을 받을 수 있음.
  + 내가 서버를 올리고 잘 올라가 있는지 테스트할때도 사용한다.
-  `sudo systemctl enable nginx` : nginx 항상켜지게 설정


# 💼 nginx 구동시 에러가 날 경우
- `sudo ps -aux | fgrep nginx` : 구동중인 nginx 확인
- `sudo systemctl status nginx.service` : nginx 구동실패에 대한 대략적인 내용을 출력해줌
- `sudo updatedb` : 새로운 파일들에 대해서 다시 새로고침해준다.(mlocate 관련)
- `locate error | fgrep nginx` : 에러가 로그 파일을 찾는다.
- `sudo cat /var/log/nginx/error.log` : 해당 로그파일을 읽는다.