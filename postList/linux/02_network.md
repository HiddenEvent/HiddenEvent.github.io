---
title: "(linux)네트워크 필수개념"
permalink: aws/02_network
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

## 네트워크 필수 개념
1. TCP/IP
- 컴퓨터끼리 네트워크 상으로 의사소통을 하는 "프로토콜" 중 가장 널리 사용되는 프로토콜의 한 종류
2. 호스트이름과 도메인 이름
- 호스트 이름은 각각의 컴퓨터에 지정된 이름
- 도메인 이름(또는 도메인 주소)은 hanbit.co.kr과 같은 형식
3. IP주소
- 각 컴퓨터의 랜카드에 부여되는 중복되지 않는 유일한 주소
- 4바이트로 이루어져 있으며, 각 자리는 0~255 까지의 숫자
4. 네트워크 주소
- 같은 네트워크에 속해 있는 공통된 주소(C클래스 예: 192.168.111.0)
5. 브로드캐스트(Broadcast) 주소
- 내부 네트워크의 모든 컴퓨터가 듣게 되는 주소
- 현재 주소의 제일 끝자리를 255로 바꾼 주소(C클래스)
6. 게이트웨이(Gateway), 라우터(Router)
- 라우터 = 게이트웨이
- 네트워크 간에 데이터를 전송하는 컴퓨터 또는 장비
- VMware의 게이트웨이 주소는 192.168.111.2로 고정
7. 넷마스크(Netmask) & 클래스(Class)
- 넷마스크: 네트워크의 규모를 결정(예:255.255.255.0 - C클래스)
8. DNS(Domain Name System) 서버(=네임 서버) 주소
- URL을 해당 컴퓨터의 IP주소로 변환해 주는 서버
- 설정 파일은 /etc/resolv.conf
- VMware를 사용하면 VMware가 192.168.111.2번을 게이트웨이 및 DNS 서버로, 192.168.111.254를 DHCP 서버로 설정함

## 리눅스에서의 네트워크 장치 이름
- CenOS 8은 랜카드를 ens160 인식함
- VMware에 CentOS를 설치할 경우에는 Vmware버전에 따라서 완저히 다른 이름으로 인식할 수도 있음.

## 네트워 관련 명령어 (중요!)
1. nmtui
- 네트워크와 관련된 대부분의 작업을 이 명령어에서 수행
- 텍스트 기반으로 작동함
2. systemctl (strt/stop/restart/status) NetworkManager
- 네트워크의 설정을 변경한 후에, 변경된 내용을 시스템에 적용시키는 명령어
3. ifup (장치이름) 및 ifdown (장치이름)
- 네트워크 장치를 On 또는 Off 시키는 명령어
4. ifconfig (장치이름)
- 장치의 IP주소 설정 정보를 출력
5. nslookup
- DNS 서버의 작동을 테스트하는 명령어
6. ping (IP주소 또는 URL)
- 해당 컴퓨터가 네트워크상에서 응답하는지를 테스트하는 간편한 명령어


## 네트워크 설정관련 주요파일
1. /etc/sysconfig/network
- 네트워크의 기본적인 정보가 설정되어 있는 파일
2. /etc/sysconfig/network-script/ifcfg-ens160
- ens32장치에 설정된 네트워크 정보가 모두 들어 있는 파일
3. /etc/resolv.conf
- DNS 서버의 정보 및 호스트 이름이 들어 있는 파일
4. /etc/hosts
- 현 컴퓨터의 호스트 이름 치 FQDN이 들어 있는 파일
 