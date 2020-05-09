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
~~~


## 파일과 디렉터리의 소유와 허가권
- 파일 허가권(Permission)
  + "rw-", "r--", "r--" 3개씩 끊어서 읽음
  + 첫 3자리 : **소유자**의 파일접근 권한
  + 두번쨰 3자리 : **그룹**의 파일접근 권한
  + 세번째 3자리 : **그 외 사용자**의 파일접근 권한
  + chmod 777 명령어로 권한 바꾸기..
  + chmod ugo+rwx  : u 유저 g 그룹 o 그외 의 심볼릭 방식으로 사용가능
