---
title: (flutter) 에러상황 모음
excerpt: "플루터 토이프로젝트"
toc_label: "<a href='/language/flutter/'>Flutter 관련</a>"
categories:
  - flutter
  - dart
tags:
  - flutter
  - android
  - 콜백
  - callBack
  - 앱 개발
last_modified_at: 2020-03-15
---
# flutter 에러
## 1) TextField 입력 에러
### 문제
- textField에 문자 입력후 문자열의 V표시를 누르면 text값이 초기화 되서 null 값이 반환됨... 그냥 버튼을 누르면 정상 값이 넘어가는데...


### 해결방안
1. statefull 위젯으로 바꾼다.
2. Wiget build 위쪽으로 TextField를 저장할 String 변수를 선언한다.
3. 끝.

### 문제 발생 이유
1. stateless 위젯인 경우.
2. Wiget build 아래쪽에 변수를 선언 했을 경우...
3. stateless은 기본적으로 변수가 final 이기 때문에 text가 바뀌기는 하되 키보드가 접히게 되면 null 값으로 초기화되는 현상이 일어나는 것 같음...