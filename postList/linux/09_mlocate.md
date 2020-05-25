---
title: "(linux) mlocate 사용법"
permalink: aws/09_mlocate
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

# mlocate 설치 및 사용법
## 사용이유
- 파일을 탐색해주는 것인데 엄청나게 빠르다. 
- 단점은 검색하기전에 sudo updatedb로 파일을 최신화 해주어야한다는게 단점..

## 설치 및 사용방법
- `sudo yum install mlocate` : mlocate 설치
- `sudo updatedb` : mlocate가 미리 파일들을 읽어오는 작업(검색하기전에 매번..)
- `locate [검색할 키워드]` : 해당하는 텍스트의 파일을 찾아온다.
- `locate html | fgrep [키워드]` : 키워드가 포함된 모든 파일 % 검색이라고 보면 된다