---
title: "(linux)리눅스 명령어"
permalink: aws/01_commend
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

## 명령어
~~~php
`1) man 명령어 : 도움말 출력` 

`2) ls 명령어 : 파일목록 보여줘라` 
ls 파일경로     `해당경로의 목록을 모여줌`
ls -a          `숨겨진 파일명을 보여줘라`
ls -l          `상세 파일 리스트 보기`
ll             `파일 리스트 출력(좀더 자세한 정보)`

`3) rm 명령어 : 파일 지우기` 
rm 파일명      `지울지 묻고 파일 지우기`
rm -f 파일명   `묻지 말고 바로 지워라`

`4) cp 명령어 : 파일 / 폴더 복사`
cp [파일1] [.]         `현재경로 파일 복사`
cp [파일1] [파일명]     `현재경로 파일명으로 복사`
cp -r [디렉토리명] [복사할디렉터리명]     `현재 경로에 폴더 자체를 복사`

`5) touch 명령어 : 생성날짜 업데이트 / 빈파일 생성`

`6) cat 명령어 : 파일의 내용을 출력해준다. (head, tail, more, less 명령어 전부 출력용) `
cat [파일명]
~~~

## USB 연결하기
- USB 파일시스템이 FAT32로 되어 있어야지만 linux에 연결이 가능하다.

~~~php
`1) mount / umount 명령어 : 장치 연결 / 해제 명령어` 
~~~

## 사용자와 그룹 관련 명령어
- 사용자는 /etc/passwd 파일에 정의되어 있다.
- 사용자의 비밀번호는 /etc/shadow 파일에 정의되어 있다.
- 그룹은 /etc/group 파일에 정의되어 있다.
- 사용자를 생성하면 /home 에 사용자들의 방이 생기는 곳이다.

~~~php
`1) useradd : 새로운 사용자 추가` 
useradd newuser

`2) passwd : 사용자의 비밀번호를 지정하거나 변경`
passwd newuser

`3) usermod : 사용자의 속성을 변경`
usermod -g root newuser

`4) userdel : 사용자를 삭제`
userdel newuser

`5) chage : 사용자의 암호를 주기적으로 변경하도록 설정`
change -m 2 newuser    `2달에 한번`

`6) groups : 현재 사용자가 속한 그룹을 보여줌`
 groups

`7) groupadd : 새로운 사용자 그룹을 생성`
groupadd newgroup

`8) groupmod : 그룹의 속성을 변경`
groupmod -n newgroup mygroup

`9) gpasswd : 그룹의 암호를 설정하거나, 그룹의 관리를 수행`
gpasswd newgroup

`유저 보기`

~~~

## 포트 관련 명령어
~~~php
`포트상태 확인`
netstat -tnl

`포트 확인`
iptables -t nat -L

`iptable 상태 확인`

~~~
-

## 파일과 디렉터리의 소유와 허가권
- 파일 허가권(Permission)
  + "rw-", "r--", "r--" 3개씩 끊어서 읽음
  + 첫 3자리 : **소유자**의 파일접근 권한
  + 두번쨰 3자리 : **그룹**의 파일접근 권한
  + 세번째 3자리 : **그 외 사용자**의 파일접근 권한
  + chmod 777 명령어로 권한 바꾸기..
  + chmod ugo+rwx  : u 유저 g 그룹 o 그외 의 심볼릭 방식으로 사용가능


## mlocatie 명령어
-  mlocate 설치 및 사용방법 숙지
```php
sudo yum install mlocate
//초고속 파일 검색 명령어 mlocate 설치
sudo updatedb
//mlocate가 빠른 검색을 하려면 DB를 구축해야 합니다.
//updatedb 명령어는 새벽 4시 정도에 매일 한번씩 자동으로 실행됩니다.
//위와 같이 수동으로 실행해 줄 수 도 있습니다.
sudo locate nginx
//nginx 라는 이름을 가진 파일 전부 리스팅
sudo locate html | fgrep dns
//nginx 라는 이름을 가진 파일 전부 리스팅 후 거기서 또 dns 라는 이름을 가진 라인만 추리기
```



## 명령어 모아보기
~~~php
ls : 파일 리스트 출력
ls -l : 파일 리스트 출력(좀더 자세한 정보)
ls -al : 파일 리스트 출력(좀더 자세한 정보 + 숨김파일까지 표시)
clear : 화면 지우기
pwd : 현재 위치 표시
cd ~ : 자신(운영체제 사용자)의 개인폴더로 이동
cd /폴더명A/폴더명B : 루트폴더 기준에서 해당 폴더로 이동(절대이동)
팁 : 대부분의 경우 ./는 생략가능
cd ./폴더명 : 해당 폴더로 이동(상대이동)
cd .. : 상위 폴더로 이동(상대이동)
rmdir ./폴더명 : 디렉토리 삭제(디렉토리안에 파일이 없어야 함)
mkdir ./폴더명 : 디렉토리 생성
mkdir -p ./폴더명A/폴더명B : 디렉토리를 한번에 여러개 생성
vim 문서파일명 : 문서파일을 수정하거나 만들기 위한 VIM 에디터를 실행한다.
a : vim에서 수정모드로 변경한다.
esc : vim에서 메뉴모드로 변경한다.
메뉴 모드에서 :wq : 저장한다.
rm 파일명 : 파일을 지운다.
echo ~ : 현재 사용자의 폴더경로를 화면에 출력한다.
echo 1 : 1을 화면에 출력한다.
echo "화면 출력 내용" : 내용을 화면에 출력한다.
echo "화면 출력 내용" > sample.txt : 내용을 sample.txt 파일안에 출력한다.
cat sample.txt : sample.txt의 내용을 화면에 출력한다.
ls -al | fgrep 'sshd' : 현재 디렉토리의 파일리스트 중에서 결과중에서 sshd가 포함된 줄만 추린다.
zip a.zip a.txt b.txt : a.txt와 b.txt를 a.zip로 압축한다.
unzip a.zip : a.zip의 압축을 푼다.
sudo chown 소유자이름:그룹이름 파일/폴더이름
sudo chown -R 소유자이름:그룹이름 파일/폴더이름
폴더의 경우 밑의 모든 파일의 소유권 변경
사용자 확인
whoami
사용자 추가하는 방법
adduser 사용자이름
사용자의 패스워드 재설정 방법
passwd 사용자이름
특정 사용자로 로그인 하는 방법
su 사용자이름
특정 사용자 제거
userdel 사용자이름
관리자 권한으로 실행하는 방법
sudo 명령어
~~~