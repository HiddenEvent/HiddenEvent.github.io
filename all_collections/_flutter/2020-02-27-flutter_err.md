---
title: 플루터 에러 정리
excerpt: "플루터 각종 에러를 정리한다."
categories:
  - flutter
tags:
  - flutter
  - alt enter
  - wrap with new wiget
  - 안드로이드
  - ios
  - 앱 개발
last_modified_at: 2020-02-27
---

### 위젯 감싸기 단축키(alt+enter) 오작동
- 갑자기 뭘 잘못 만졌는지... alt enter 가 안됨...
- alt + enter(wrap with new wiget) 을 사용하려는데 자꾸
- Adjust code style settings 만 나온다, 그래서 확인해 봤다.

#### 현상 
![사진설명]({{ site.url }}{{ site.baseurl }}/assets/img/flutter/flutter_basic/img-02.PNG){: .align-center}

#### 해결

![상단메뉴에 File -> settings -> intentions 검색 -> dart 검색 -> 체크]({{ site.url }}{{ site.baseurl }}/assets/img/flutter/flutter_basic/img-03.PNG){: .align-center}

- 이것땜에 한참을 고생한 듯....