---
title: "Language"
layout: home
permalink: /language-archive/
collection: language-archive
sidebar:
  nav: "language-archive"
---

This is showing all notes

노트 전반적으로 어떤게 있는지 다 보여줄거임.

시프/운체/종합설계 이렇게..

링크들이랑 콜렉션 내 콜렉션?가능?

대표 포스팅들 보여주고 싶은데 그룹별로..

그룹별 나눠서 하이퍼링크 달고 시포



일단 이 페이지는 Notes 설명 페이지! 운체/시프 이런것들 링크 달아주고!

사이드바는 https://mmistakes.github.io/minimal-mistakes/docs/collections/# 이거처럼 하면 될 것 같다! 큰제목으로만 링크달아서.. 알고리즘안에느 ㄴ작은거 코드/오답 이렇게 있고.. 



가운데는 리스트/그리드 혼합해서..혹은 리스트 모두 보여주는거 말고 최근 몇개씩만 보여주기.

예시사진 

/home/sunmon/Downloads/Photos/mail.naver.com.jpeg



//

title: "All Notes"
layout: collection
permalink: /notes/
author_profile: true

했더니 잘 나온다!




    # _notes
  - scope:
      path: ""
      type: notes
    values:
      layout: single
      share: true
      comments: true
      read_time: true
      sidebar:
        nav: "notes"


1. 19:01  _notes: path 수정. 
2. 19:22 navigation notes에 tips  추가
3. _note/subnote/어쩌구.md 추가
4. collection dir 생성;
5. subnote 생성. testing   sub/_subNote 되나? navi도 추가.
6. subnote 위치 옮김
7. algorithm_code categories 추가
8. notes를 누르면 왜 네비게이션이 옛날꺼일까??
9. collection archive 추가. YAML에 collection: 이건 무슨소용?



title: "NOTES"
layout: collection
permalink: /notes/
collection: notes
sidebar:
  nav: "notes"