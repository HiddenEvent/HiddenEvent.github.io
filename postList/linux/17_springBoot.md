---
title: "(linux) 스프링 부트 리눅스 설정"
permalink: aws/17_springBoot
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

# 1. 최초 유저 설정
~~~php
`1) useradd : 새로운 사용자 추가` 
useradd newuser
`관리자의 경우 sudous설정`
vi /etc/sudoers

// 루트 외부접속 막기
sudo vim /etc/ssh/sshd_config
`
PermitRootLogin no
`
`추가된 설정 적용`
sudo systemctl restart sshd



`유저 보기`
cat /etc/passwd
`userdel : 사용자를 삭제`
userdel newuser
~~~

# 2. nginx 설치 및 설정
```php
//들어갈 내용
sudo vim /etc/yum.repos.d/nginx.repo
`
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
`
//명령어
sudo yum install nginx -y

// nginx 실행
sudo systemctl start nginx
sudo systemctl enable nginx

// 포트설정
sudo vim /etc/nginx/conf.d/vhost.conf

```

# 💼 방화벽 설정하기
```
sudo systemctl enable firewalld

sudo systemctl start firewalld

기본 존 확인
sudo firewall-cmd --get-default-zone

기본 존에 21 포트 추가
sudo firewall-cmd --permanent --add-port=21/tcp

기본 존에 22 포트 추가
sudo firewall-cmd --permanent --add-port=22/tcp

기본 존에 8011 포트 추가
sudo firewall-cmd --permanent --add-port=8011/tcp

기본 존에 8012 포트 추가
sudo firewall-cmd --permanent --add-port=8012/tcp

기본 존에 8013 포트 추가
sudo firewall-cmd --permanent --add-port=8013/tcp

기본 존에 3306 포트 추가
sudo firewall-cmd --permanent --add-port=3306/tcp

기본 존에 77 포트 추가
sudo firewall-cmd --permanent --add-port=77/tcp

기본 존에 77 포트 제거
sudo firewall-cmd --permanent --remove-port=77/tcp

기본 존에 설정된 내용을 방화벽에 적용
sudo firewall-cmd --reload

열려있는 포트 확인
sudo firewall-cmd --zone=public --list-ports

```

# 4. 폴더 생성및 권한 설정
```php
// 폴더 생성
mkdir -p /web/sit2

// 현재 경로 모든 권한 변경
sudo chown richardkim:richardkim -R .
```


# 💼 관련 명령어
```php
`네트워크 상황을 보는 명령어`
netstat -nlp
`서비스 확인`
systemctl list-units --type=service

```

# 아파치 중지..
```php
//apache stop
systemctl stop httpd
//apache start
systemctl start httpd

```
# nginx 에러
```php
 sudo cat /var/log/nginx/error.log

//에러나는 경우 내부에서 오류나는지 확인
 wget 127.0.0.1:5053 

 // 문제는 php... 따로 해줘야 한다..
 sudo systemctl enable  php-fpm
``