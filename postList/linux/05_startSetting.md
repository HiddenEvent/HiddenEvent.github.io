---
title: "(linux)리눅스 서버 환경 구성"
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

# Windows 프로그램 설치
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

## 6. Centos7 운영체제 설치과정
- 기본 웹서버
- 보안설정 끄기
- ※ cpu의 vitualization을 enable로 설정해줘야 한다.(오류시 확인)※


# 리눅스 초기 설정
## 1. 계정 생성 및 권한 부여
- 계정 생성을 하는 이유는 root 계정은 정말 위급할 때만 사용.
- root계정을 자주 접속하면 보안에 취약하다.
- 그래서 대부분의 작업은 마스터 계정을 사용해서만 작업을 한다.

### 설정방법
1. `adduser 유저네임` : 유저 생성 (/home/ 디렉터리 밑에 폴더 생김)
2. `passwd 유저네임` : 유저 패스워드 설정
3. `sudo vim /etc/sudoers` : sudo 명령어를 사용할 수 있는 회원목록에 마스터 유저 넣기
  * root ALL=(ALL) ALL # 밑에
  * sbsst ALL=(ALL) ALL # 추가(sbsst라는 이름의 사용자에게 root와 같은 권한 부여)
  * 저장시 꼭 wq! 로 저장(read only file / 읽기 전용 파일이기 때문)

## 2. 랜카드 활성화
**- 처음 Centos를 설치하게 되면 아무것도 연결이 안된 깡통이다.**    
**- 이 인터넷을 연결하려면 설정을 잡아줘야한다.**   
### 설정 방법
1. `ip addr` : 렌카드 종류 확인, lo(루프백은 무시하면 됨)
2. `sudo ifup [랜카드 명]` : if(인터페이스)up(켜겠다) enp0s3(랜카드 장비명)
3. `sudo vim /etc/sysconfig/network-scripts/ifcfg-enp0s3` : 랜카드 관련 설정 파일 이다, `ONBOOT=no` => `ONBOOT=yes`로 바꾸어 줘야 재부팅 할때 마다 다시 랜카드를 연결할 필요가 없어지게 된다.

> 이후 작업은[putty 접속](/aws/07_putty)하여 설정 하는게 가장 편함

## 3. SELINUX 끄기
**- SELINUX는 보안프로그램으로, 프로그램을 설치할 때 방해를 하기 때문에 초기 세팅때는 꺼주어야 한다.**

### 설정방법
1. `sudo vim /etc/selinux/config` : selinux 설정 파일 수정, `SELINUX=disabled` 변경 후 저장
3. `reboot`
shutdown now(수동)/reboot now(자동 리부팅 오류 자주남)

## 4. yum 업데이트
**- Centos를 처음 설치하고 1번만 업데이트 설정해주면 된다.**   
- `sudo yum update -y`
- `sudo yum install epel-release` : yum 자체를 업그레이드 시킴

## 5. Linux 프로그램 설치
**- `sudo yum install [프로그램명]` : 리눅스 프로그램 설치 명령어**   


```
### 방화벽 끄기
**- 방화벽을 끄는 이유는 리눅스는 22번 포트를 제외하고 모든 포트를 방화벽이 막아 놓기 때문에 외부에서 접속하려면 방화벽을 내려야 한다..**
- `systemctl stop firewalld`: 일시적으로 적용
- `systemctl disable firewalld`: 재부팅시에도 변경사항 적용됨
```