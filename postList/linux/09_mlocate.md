---
title: "(linux) mlocate, SFTP 설정"
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

# Filezilla와 EditPlus SFTP 설정
## 사용이유
- putty로 원격에서 텍스트로 HTML작업등을 하기에는 너무 힘듬
- 그래서 내 PC에서 파일을 업로드 할 수 있는 환경을 구축하기 위해서 FTP를 사용한다.
- 문제는 vim처럼 수정된 것을 바로 바로 적용할 수 없다.(수정할때 마다 Filezilla로 업로드 해야됨)
- 위 문제점을 해결하기위해 editPlus를 사용하는 방법에 대해서 알아보자!

## Filezilla SFTP 설정하기
1. SFTP 로 접속
2. 파일 => 사이트 관리자
3. 새 사이트 => 이름을 root@127.0.0.1(SFTP)
4. 프로토콜 => SFTP(SSH)
5. 비밀번호 묻기로 ㄱㄱ

## editPlus SFTP 설정하기
**-editPlus를 SFTP로 연결해 놓으면 수정한 내용이 바로바로 리눅스에 적용된다!!**

![상단메뉴 => 파일 => FTP => FTP 설정 => 추가](/assets/img/common/2020-05-26-00-56-29.png)

- 도구 => 기본설정
- 파일  => 저장시 백업 파일 생성 체크해제
- 새 파일 형식 => UNIX / MAC
- 기본 인코딩 => UFT-8
- 백업옵션 => 전부체크 해제
- **처음만 이렇게 설정해 놓으면 된다.**

