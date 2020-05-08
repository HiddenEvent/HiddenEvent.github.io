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