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
- `php -v` : php7.4 설치 확인하는 명령어


# 💼 PHP | nginx 연동설정
<!-- - `sudo systemctl php-fpm` : PHP - nginx 연동설정 명령어 -->
- `sudo systemctl enable php-fpm` : php 항상키는 명령어
- `sudo systemctl restart php-fpm` : php 다시시작(설정변경시에도 자주 쓰임)
- `sudo vim /etc/php.ini` : php 설정파일 열기
- `sudo vim /etc/nginx/conf.d/php_vhost.conf.include` : nginx랑 연동하는 스크립트 작성용 파일 생성
  + 스크립트 내용 추가
    ```
    index index.php index.html index.htm;
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

    ```
- `sudo systemctl restart nginx` : nginx 재시작, 설정 반영을 위해
- `포트포워딩 하기` :8031,8032 포트 
- .php 확장자 파일을 만들어서 작동 되는지 확인하기

# 💼 PHP | MySql 연동 설정
- 8031 server에 `mysqlConect.php` 파일을 생성하고 Connection 설정하기
    + 설정 관련 코드
      ~~~php
      <?php
      mysqli_connect("127.0.0.1", "site1", "비밀번호", "site1") or die('DB CONNECTION ERROR');
      ~~~
- __DB CONNECTION ERROR__ 발생 시 mysql 접속하여 확인
    + `sudo mysql -u root -p`: mysql 접속
    + 계정있는지 확인
      ~~~sql
      select user from mysql.user;
      ~~~
    + 계정생성
      ~~~sql
      grant all privileges on site1.* to site1@`%` identified by '비번';
      grant all privileges on site2.* to site2@`%` identified by '비번';
      create database site1;
      create database site2;
      ~~~
- 이상 mysql 연동도 끝나게 된다 와우!!

# 💼 웹호스팅 실습
**php를 사용하여 실제 웹서비스를 구축해보자**

## 📝 게시물 테이블 생성
- site1에 게시물 테이블 생성 작업
  ~~~sql
  CREATE TABLE ARTICLE (
    ID INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(ID),
    REG_DATE DATETIME NOT NULL,
    TITLE VARCHAR(100) NOT NULL,
    `BODY` TEXT NOT NULL
  );

  INSERT INTO ARTICLE
  SET REG_DATE = NOW(),
  TITLE = '제목입니다.',
  `BODY` = '내용입니다.';

  INSERT INTO ARTICLE
  SET REG_DATE = NOW(),
  TITLE = '제목입니다.02',
  `BODY` = '내용입니다.02';

  INSERT INTO ARTICLE
  SET REG_DATE = NOW(),
  TITLE = '제목입니다.03',
  `BODY` = '내용입니다.03';

  SELECT * FROM ARTICLE;
  ~~~

## 📝 editPlus로 php 페이지 만들기
**에디트 플러스로 site1의 페이지를 만들어 보자**
- index.php 생성 후 아래 코드 추가
  ~~~php
  <?php
  // 1. DB 접속
  $db_conn = mysqli_connect("127.0.0.1", "site1", "richard2020!@", "site1") or die("DB CONNECTION ERROR");

  // 2. 쿼리 실행
  $sql = "
  SELECT * 
  FROM ARTICLE
  ORDER BY ID DESC
  ";
  $rs = mysqli_query($db_conn, $sql);
  //var_dump($rs);

  // 3. DB에서 조회된 결과값을  1ROW 씩 꺼내오는 작업
  $rows = [];
  while ( $row = mysqli_fetch_assoc($rs) ) {
    $rows[] = $row;
  }
  ?>

  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>게시물 리스트</title>
  </head>
  <body>
    <h1>게시물 리스트</h1>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>날짜</th>
          <th>제목</th>
          <th>내용</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ( $rows as $row ) { ?>

        <tr>
          <td><?=$row["ID"]?></td>
          <td><?=$row['REG_DATE']?></td>
          <td><?=$row['TITLE']?></td>
          <td><?=$row['BODY']?></td>
        </tr>

        <?php } ?>
      </tbody>
    </table>
  </body>
  </html>
  ~~~

- `sudo vim /etc/php.ini`: php 설정 파일 열기
  + `display_errors = Off` => `On` 으로 바꿔줘야 php 오류를 출력한다.
- `sudo systemctl restart php-fpm` : 설정 변경 후 재시작