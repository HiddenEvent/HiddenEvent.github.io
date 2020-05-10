---
title: "(linux)응급 복구"
permalink: aws/04_restore
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

## 응급 복구
- 시스템이 부팅이 되지 않을 경우 수행: `root 비밀번호 분실 시`

### 실습
1. 부팅화면이 뜨면 `↑` `↓` 키를 눌러 위쪽에 있는 곳에 포커스를 맞추고 알파벳 `e`를 클릭
2. `rhgb quiet`를 지워준다. 맨뒤로 이동하여 `init=/bin/sh`를 입력해준다.
3. `CTRL+X`를 눌러 재부팅
4. root로 접속된다.
5. `mount -o remount,rw /` : 루트 파티션에 있는 것을 읽고, 수정할수 있게 변경하는 명령어 입력
6. `passwd` : 패스워드 재설정 하는 명령어 입력

### 문제점
- 누구나 이런식으로 응급복구를 해서 루트 비밀번호를 마음대로 변경할수 있기 때문에 복구모드 자체에 비밀번호를 걸어놔야 한다.

### GRUB 부트로더 변경
- 위 문제점을 해결하기 위해 부트로더를 변경하는 방법을 익혀보자!
- GRUB에 비밀번호를 지정하는 방법을 익힌다.

1. `vi /etc/default/grub` : grub 편집 모드 명령어
2. `grub2-mkconfig -o /boot/grub2/grub.cfg` : 편집한 후 적용하는 명령어
3. `cd /etc/grub.d/` : grub 관련 파일이 있는 경로이동
4. `vi 00_header` : grub 비밀번호 관련 내용이 저장되어 있음

~~~php
# 아래 내용으로 grub 비밀번호 설정을 해주면 된다.
cat << EOF
set superusers="thisislinux"
password thisislinux 4321
EOF

#편집한 내용을 저장한 후 아래 명령어 입력하여 적용
 `grub2-mkconfig -o /boot/grub2/grub.cfg` : 편집한 후 적용하는 명령어
~~~