---
title: "(linux) 보안설정"
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

