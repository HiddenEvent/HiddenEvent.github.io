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

# 💼 프로젝트 패키지 war설정 하고 빌드
```php
// 자바 설치
sudo yum install java-1.8.0-openjdk-devel.x86_64 -y
```
# 💼 리눅스 배포후 실행
```php
//tomcat
// 배포 후 실행하기
java -jar -Dspring.profiles.active=production 빌드파일명.jar
// 백그라운로 실행
nohup java -jar -Dspring.profiles.active=production 빌드파일명.jar > /dev/null 2>&1 &


// 종료하기
sudo netstat -nlp | grep java
sudo kill -9 프로세스번호


// 실서버 포트번호 확인후 방화벽 열어주기
sudo firewall-cmd --permanent --add-port=포트번호/tcp
sudo firewall-cmd --reload

```
# 💼 nginx => tocat 스프링 포트포워딩
```php
//아래 설정파일에서 추가
sudo vim /etc/nginx/conf.d/vhost.conf
`
server {
  listen 엔진엑스포트; 
  server_name 도메인;
  location / {
      proxy_connect_timeout 7d;
      proxy_send_timeout 7d;
      proxy_read_timeout 7d;
      proxy_pass http://127.0.0.1:스프링포트/;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header Host $host;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      # WebSocket support (nginx 1.4)
      proxy_http_version 1.1;
  }
}
`


// nginx 재실행
sudo systemctl restart nginx
```

# 4. 폴더 생성및 권한 설정
```php
// 폴더 생성
mkdir -p /web/sit2

// 현재 경로 모든 권한 변경
sudo chown richardkim:richardkim -R .
```

# 💼 도메인구매
- oa.gg 같은 2자리수 도메인을 구매하자
- DNS설정으로 들어가서 호스트는 www, @ 등등 등록 하고 실서버 ip값을 넣주면 끝...
- 포트 포워딩 설정 
  ```php
  sudo vim /etc/nginx/conf.d/vhost.conf
  `
  server {
      listen 80;
      server_name 도매인;
      location / {
          proxy_connect_timeout 7d;
          proxy_send_timeout 7d;
          proxy_read_timeout 7d;
          proxy_pass http://127.0.0.1:포트번호/;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header Host $host;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          # WebSocket support (nginx 1.4)
          proxy_http_version 1.1;
      }
  }
  `
  ```
# 💼 SSL설정
- certbot.eff.org 에서 스팩선택후 그대로 따라가면 설정 끝..
- `sudo certbot --nginx`
- `sudo vim /etc/nginx/conf.d/vhost.conf` 에서 확인하면 코드가 변경되어있다..
- `sudo systemctl restart nginx` 설정변경 후 재시작
- `sudo certbot renew --dry-run` 3개월마다 자동으로 재인증해주는 명령어


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
systemctl disable httpd

```
# nginx 에러
```php
 sudo cat /var/log/nginx/error.log

//에러나는 경우 내부에서 오류나는지 확인
 wget 127.0.0.1:5053 

 // 문제는 php... 따로 해줘야 한다..
 sudo systemctl enable  php-fpm
``