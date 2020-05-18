---
title: "(linux)리눅스 초기 세팅 2"
permalink: aws/05_startSetting
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

## 사용자 만들기
- root 계정은 위급할 때만 접속 (보안을 위해서)
- 마스터 계정을 만들어 준다.
- `adduser [유저이름]` 명령어를 통해 마스터 유저 생성
- `passwd [유저이름]` 명령어로 유저 패스워드 생성
- `vi /etc/sudoers` 에 들어가서 유저에 마스터 권한을 줘야함
  + `/root` + `n` 키로 찾아서 바로 아랫줄에 아이디를 적고 root 권한과 똑같이 만들어준다.
  
