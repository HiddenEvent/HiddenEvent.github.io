---
title: (spring) Spring Boot 세팅
excerpt: "Spring Boot 환경세팅"
categories:
  - Spring Boot
tags:
  - Spring Boot
  - eclipse
last_modified_at: 2020-12-05
---

💼📝🔑⏰ 📙📓📘📒🎓

# 💼 Spring boot 환경세팅
- https://chocolatey.org/install
## 📝 1) Chocolatey 환경설치 (npm 같은 기능)
1. https://chocolatey.org/install 접속하여 명령어 복사
2. 윈도우 `power shell`을 이용하여 커멘드 입력
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
3. `cmd` 관리자 권한 접속

  ~~~php
  # choco 다운 로드 확인
  choco -v

  # Chocolatey 사이트에서 openjdk8 검색하여 설치
  choco install openjdk8  # 설치과정에서 물어보면 a입력
  # Chocolatey 사이트에서 maven 검색하여 설치
  choco install maven 
  ~~~
4. 이후부터 https://www.youtube.com/watch?v=FYkn9KOfkx0&list=PLPtc9qD1979DG675XufGs0-gBeb2mrona 로 유튜브 보고 설치



## 📝 2) VSCODE html 수정용
- liveServer 페키지 다운로드
  - 마우스 오른쪽 클릭하여 open with live server 클릭

