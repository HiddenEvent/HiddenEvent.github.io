---
title: "(linux) 보안설정 및 실제 FTP 설치"
permalink: aws/11_security
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

# 💼 SSH 외부 root 접속 막기
**⏰ SSH 외부 root 접속을 막는 이유는 root 비밀번호가 뚤렸을 경우 대비하기 위함이다.**
- `sudo vim /etc/ssh/sshd_config` : ssh 데몬 설정 파일을 열어준다.
  + 외부접속을 허용하지 않겠다는 설정 추가 후 wq!
    ```
    PermitRootLogin no 
    ```
- `sudo systemctl restart sshd` : 추가된 설정 적용

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

# 💼 pure-ftpd 설치 및 활성화
**⏰ 파일질라로 들어가는 방식은 ssh 방식이고, 진짜 FTP를 사용하기 위해서는 pure-ftpd 설치해주어야 한다.**
- `sudo yum install pure-ftpd -y` : FTP 설치 명령
- `sudo vim /etc/pure-ftpd/pure-ftpd.conf` : FTP 설정파일 열기
  + 아래 내용 추가/변경 후 저장
    ```
    #1. 10배 이상 늘리기 // (최대 몇명까지 받을지 설정하는 것)
    MaxClientsNumber 500

    # 2 .100배 이상 늘리기 //(외부에서 접속을 최대 몇명까지 설정하는 것)
    MaxClientsPerIP  80

    # 3. MySQLConfigFile 앞에 # 주석 풀기
    MySQLConfigFile /etc/pure-ftpd/pureftpd-mysql.conf 
    ```

## 📝 pure-ftpd 회원관리를 MySql로 설정
**⏰ ftp 권한을 MySql로 관리하는 이유?**
- FTP로 접근가능한 여러명의 사용자들에게 각각 권한을 부여해주기 위해서 사용한다.
- 굳이 Mysql로 설정하지 않아도 된다.
- 만약 파일로 관리하게 되면 굉장히 노가다 작업을 해야한다.

### 🔑 ftp_mysql_conf 설정
- `sudo vim /etc/pure-ftpd/pureftpd-mysql.conf` : ftp_mysql 설정파일 열기
  + 아래 내용 추가/변경 후 저장
    ```  
    # 1. mysql 통신 설정 하는 경로 추가
    #    mysql 소켓 파일 확인 하는 방법
    #    mysql이 돌아가고 있는 상태에서 `sudo updatedb` 명령 후
    #    `sudo locate mysql | fgrep sock` 

    MYSQLSocket /var/lib/mysql/mysql.sock

    # 2. pure-ftpd 에서 mysql 에 접속할 때 사용할 ID
    MYSQLUser pureftpd 

    # 3. pure-ftpd 에서 mysql 에 접속할 때 사용할 PW
    MYSQLPassword 비밀번호입력 

    # 4. ftp 사용자 정보 DB
    MYSQLDatabase pureftpd

    # 5. 비번은 평문으로 저장 하겠다.
    MYSQLCrypt cleartext 
    ```
    
### 🔑 mysql 접속/계정생성
- `sudo mysql -u root -p`: mysql 접속
  + 계정생성 명령어 입력
    ~~~sql
    -- 1. pureftpd 데이터베이스만 조작할 수 있는 계정생성
    grant all privileges on pureftpd.* to pureftpd@'localhost' identified by '비밀번호';

    -- 2. pureftpd 계정에서만 제어할 수 있는 데이터베이스 생성
    CREATE DATABASE pureftpd;

    -- 3. 데이터베이스 생성 확인
    SHOW DATABASES;
    ~~~

- `sudo mysql -u pureftpd -p` : 계정이 생성 및 데이터베이스 생성 확인
  + 데이터베이스 생성 확인
    ~~~sql
    -- 1. 데이터베이스 생성 확인
    SHOW DATABASES;
    ~~~

### 🔑 mysql 권한 테이블 생성
- `sudo vim /etc/passwd` : 리눅스에서 계정번호 확인
  + 계정번호
    ```
    # richard의 계정번호는 1000 이라는 것을 알수 있음
    richard:x:1000:1000::/home/richard:/bin/bash
    ```
- `sudo mysql -u pureftpd -p` :  MySql pureftp 계정 접속
  + 1 테이블 생성/ 계정 insert해주는 작업
    ~~~sql
    -- 1. 데이터베이스 사용하겠다는 명령어
    USE pureftpd;

    -- 2.유저 테이블 생성
    CREATE TABLE users (
      uidx int(10) unsigned NOT NULL AUTO_INCREMENT,
      `user` varchar(100) NOT NULL,
      `password` varchar(100) NOT NULL,
      `gid` int(10) unsigned NOT NULL,
      `uid` int(10) unsigned NOT NULL,
      `occurDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      `status` tinyint(1) unsigned NOT NULL DEFAULT '1',
      `ipaccess` varchar(15) NOT NULL,
      `comment` varchar(100) NOT NULL,
      `ulBandWidth` smallint(5) unsigned NOT NULL,
      `dlBandWidth` smallint(5) unsigned NOT NULL,
      `quotaSize` smallint(5) unsigned NOT NULL,
      `quotaFiles` int(10) unsigned NOT NULL,
      `dir` varchar(100) NOT NULL,
      PRIMARY KEY (`uidx`)
    );

    -- 3. 리눅스 계정별 폴더 접근 권한 설정을 위한 insert
    insert  into `users`(`uidx`,`user`,`password`,`gid`,`uid`,`occurDate`,`status`,`ipaccess`,`comment`,`ulBandWidth`,`dlBandWidth`,`quotaSize`,`quotaFiles`,`dir`) 
    values 
    (1,'site1','비밀번호',1000,1000,NOW(),1,'*','',0,0,0,0,'/web/site1'),
    (2,'site2','비밀번호',1000,1000,NOW(),1,'*','',0,0,0,0,'/web/site2'),
    (3,'site3','비밀번호',1000,1000,NOW(),1,'*','',0,0,0,0,'/web/site3');
    ~~~

- `sudo systemctl status pure-ftpd` : ftp 상태 확인
- `sudo systemctl start pure-ftpd` : ftp 시작
- `sudo systemctl enable pure-ftpd` : ftp 항상 실행상태로 만들기(컴퓨터 껏다켜도..)
- `sudo systemctl restart pure-ftpd` : ftp 재시작 


## 📝 FTP 설치 및 적용 확인
- `sudo yum install ftp` : ftp 설치
- `sudo ftp 127.0.0.1` : ftp 접속 하는 명령어
  + **Name : site1**  : mysql에 등록된 아이디
  + **Password: 비밀번호** : mysql에 등록한 비밀번호 입력
