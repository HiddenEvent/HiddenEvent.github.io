---
title: "(linux) 10. 웹서비스"
permalink: aws/14_webService
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

# 💼 지금까지 한 작업 정리
**전체적인 구조**
- 웹서버(nginx)
- FTP서버(pure_ftpd)
- DB서버(MariaDB)
- 서버사이드언어


**권한 관련 구조**
- nginx : 8031 => /web/site1/public
  + nginx 서버 등록하는 작업
- pureftpd : site1 => /web/site1
  + site1 이라는 사용자만 /web/site1 접속가능하게 만드는 작업
- mysql : site1 => site1 
  + mysql도 계정을 만들어 권한을 관리해야한다.