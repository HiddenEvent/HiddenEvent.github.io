---
title: "(linux) putty 접속"
permalink: aws/07_putty
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

# Putty 사용
**- putty를 사용하는 이유?**
- Centos운영 체제를 설치하고 직접 그 장비를 사용하는 것은 정말 드문일이다.
- 대게는 원격접속하여 사용한다. 
- 그렇다! 서버장비를 직접 사용하는 것이 아닌 원격접속을 하기 위해 putty를 사용한다!

# VirtualBox 포트포워딩 설정
- 원격접속 등 외부에서 접근하기 위해서는 포트포워딩을 설정해 놓아야 접속이 가능하다.

![1. VirtualBox 포트포워딩 설정, 이름과 호스트 포트는 아무거나 써도 상관 없다. ](/assets/img/common/2020-05-24-16-20-59.png)

![2. Putty에서 연결하기](/assets/img/common/2020-05-24-16-28-18.png)