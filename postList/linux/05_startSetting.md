---
title: "(linux)리눅스 초기 세팅"
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

## 1. Filezila(client)
[설치 경로](https://filezilla-project.org/download.php?type=client)
- 일반버전 설치(PRO 버전 X)
- 설치시 바이러스 체크 프로그램과 오페라 브라우저는 설치 X

## 2. Putty 설치
[설치 경로](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
- putty-64bit-0.71-installer.msi 다운로드 후 설치

## 3. virtualbox 다운로드
[설치 경로](https://www.virtualbox.org/wiki/Downloads)
- 자신이 현재 사용하고 있는 운영체제 선택

## 4. virtualbox 확장팩 다운
[설치 경로](https://www.virtualbox.org/wiki/Downloads)
- virualBox 6.0.0 Oracle VM VirtualBox Extension Pack 클릭

## 5. CENTOS 7 다운로드 및 설치
[설치 경로](http://mirrors.oit.uci.edu/centos/7.6.1810/isos/x86_64/)
- http://ftp.kaist.ac.kr/CentOS/7.6.1810/isos/x86_64/CentOS-7-x86_64-DVD-1810.iso 클릭
- VirtualBox => 새로 만들기
- Name : centos7-이니셜
- 종류 : 리눅스
- 버전 : Red Hat 64
- 좌측바에서 내가만든 운영체제(centos7-이니셜) 선택
- 우측상단에 설정 누름
- 저장소 => 컨트롤러 IDE 비어있음 클릭 => IDE 세컨더리 마스터 우측 아이콘 클릭 후 => 가상 광 디스크 파일 선택 => 다운받은 centos iso 선택
- 시작옵션 중 => 떼어낼 수 있도록 시작
- 기본 웹서버
- 보안설정 끄기
- ※ cpu의 vitualization을 enable로 설정해줘야 한다.(오류시 확인)※



> 참조 블로그 : https://medium.com/@js230023/%EB%A6%AC%EB%88%85%EC%8A%A4-%EC%B4%88%EA%B8%B0-%EC%84%A4%EC%A0%95-1-f5aab02cc3b3