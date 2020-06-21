---
title: "(linux) PHP 7.4, FPM 설치 및 NGINX 와 연동"
permalink: aws/13_php_FPM
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

# 💼 PHP 설치
## 📝 1. 설치하기전 php 삭제 해주는 작업
- `sudo yum remove php*` : 기존 php 삭제

## 📝 2. php 7.4 설치 및 설정 
**순서가 매우중요**
- `sudo yum update -y` : yum 업데이트 작업
- `sudo yum install epel-release` : 
- `sudo yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm`
- `sudo yum -y install https://rpms.remirepo.net/enterprise/remi-release-7.rpm`
- `sudo yum -y install yum-utils`
- `sudo yum-config-manager --enable remi-php74`
- `sudo yum install php php-common php-devel php-mysqlnd php-fpm php-opcache php-gd php-mbstring php-cli php-zip php-mcrypt php-curl php-xml php-pear php-bcmath php-json`
- `php -v` : php7.2 설치 확인하는 명령어


# 💼 PHP | nginx 연동설정
<!-- - `sudo systemctl php-fpm` : PHP - nginx 연동설정 명령어 -->
- `sudo systemctl enable php-fpm` : php 항상키는 명령어
- `sudo systemctl restart php-fpm` : php 다시시작(설정변경시에도 자주 쓰임)
- `sudo vim /etc/php.ini` : php 설정파일 열기
- `sudo vim /etc/nginx/conf.d/php_vhost.conf.include` : nginx랑 연동하는 스크립트 작성용 파일 생성
  + 스크립트 내용 추가
    ```
    ndex index.php index.html index.htm;
    root $documentRoot;

    location ~ \.php$ {
        root $documentRoot;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $documentRoot/$fastcgi_script_name;
        include /etc/nginx/fastcgi_params;
        fastcgi_read_timeout 600;
    }
    ```
- `sudo vim /etc/nginx/conf.d/vhost.conf` : nginx랑 연동하는 서버 등록용 설정파일 생성
  + 서버 내용 추가
    ```
    server {
        listen 8031;
        server_name _;

        set $documentRoot /web/site1/public;

        location / {
            try_files $uri $uri/ /index.php?$args;
        }

        include /etc/nginx/conf.d/php_vhost.conf.include;
    }

    server {
        listen 8032;
        server_name _;

        set $documentRoot /web/site2/public;

        location / {
            try_files $uri $uri/ /index.php?$args;
        }
    }

    server {
        listen 8033;
        server_name _;

        set $documentRoot /web/site3/public;

        location / {
            try_files $uri $uri/ /index.php?$args;
        }

        include /etc/nginx/conf.d/php_vhost.conf.include;
    }

    ```
- `sudo systemctl restart nginx` : nginx 재시작, 설정 반영을 위해
- `포트포워딩 하기` :8031,8032 포트 
- `php가 반영이 안되는 부분 확인`