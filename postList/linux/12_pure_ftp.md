---
title: "(linux) 8. PURE_FTP 설정 및 사용자별 권한 설정"
permalink: aws/12_pure_ftp
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

# 💼 pure-ftpd 설치 및 활성화
**파일질라로 들어가는 방식은 ssh 방식이고, 진짜 FTP를 사용하기 위해서는 pure-ftpd 설치해주어야 한다.**
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
**ftp 권한을 MySql로 관리하는 이유?**
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


- [6. MariaDB 설정](/aws/10_MariaDB)에서 `SQLYog`로 위 테이블 작업을 하는 방법이 조금더 쉽다. 

![위 리눅스에서 한 작업을 SQLYog로 작업](/assets/img/common/2020-06-20-15-51-39.png)


## 📝 FTP 설치 및 적용 확인
- `sudo yum install ftp` : ftp 설치
- `sudo ftp 127.0.0.1` : ftp 접속 하는 명령어
  + **Name : site1**  : mysql에 등록된 아이디
  + **Password: 비밀번호** : mysql에 등록한 비밀번호 입력

### 🔑 파일질라 접속 확인
![1. sftp 말고 실제 FTP로 접속 되는지 확인\(당연히 포트포워딩 설정을 안해서 접속 안됨\)](/assets/img/common/2020-06-20-15-17-29.png)

![2. virtualBox 포트포워딩 설정](/assets/img/common/2020-06-20-15-21-07.png)

![3. Filezila 전송 설정을 능동형으로 바꿔준다.](/assets/img/common/2020-06-20-15-22-24.png)

**그래도 접속이 안될 경우**
- cmd에 `ipconfig`를 쳐서 VirtualBox Host-Only Network: `IP 확인`
- Filezila  `호스트 IP`로 바꿔주면 접속이 된다.


## 📝 eitplus로 접근하는 방법
1. File > FTP > FTPsetting 메뉴 클릭

![2. 이미지와 같이 설정을 해준다. 반드시 Passive FTP mode를 꺼주어야 한다.](/assets/img/common/2020-06-20-15-41-34.png)

![3. 이곳을 변경해주면 FTP로 접근된다는 것을 알 수 있다.](/assets/img/common/2020-06-20-15-43-46.png)



# 💼 pure-ftpd 실제 사용 예
- 리눅스를 하나도 모르고, 웹만 만들수 있는 친구있다고 가정해보자
- 그러면 그 친구에게 
  + `FTP에 접속할 수 있는 호스트 IP`, `사용자ID`, `비밀번호`를 알려준다.
- 친구가 Filezila로 접속한 경우 내가 부여해놓은 폴더만 접근이 가능하게 된다.

## 📝 새로운 친구가 요청하는 경우
**새로운 친구가 웹 서버를 요구 하더라도 아래와 같이 빠르게 서버 추가 및 접속 권한을 부여할 수 있다!! 와우!!**
1. SQLYog를 통해서 users테이블에 데이터 추가
  ~~~sql
  insert  into `users`(`uidx`,`user`,`password`,`gid`,`uid`,`occurDate`,`status`,`ipaccess`,`comment`,`ulBandWidth`,`dlBandWidth`,`quotaSize`,`quotaFiles`,`dir`) 
  values 
  (4,'site4','비밀번호',1000,1000,NOW(),1,'*','',0,0,0,0,'/web/site4');
  ~~~
1. 리눅스 서버에 접속하여 /web/site4 폴더 만들기
- `mkdir /web/site4/public -p` : 폴더 만드는 명령어
1. 리눅스 서버 추가하는 작업
- `sudo vim /etc/nginx/conf.d/vhost.conf` : 호스트 설정파일 열기
  + site4 내용추가
    ```
    server{
      listen 8014
      server_name _;
      root /web/site4/public;
    }
    ```
1. 마지막으로 리눅스에서 nginx 재시작 해주면 끝이다.
- `sudo systemctl restart nginx`

