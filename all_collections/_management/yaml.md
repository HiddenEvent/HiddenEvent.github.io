---
title : "yaml 작성 방법"
last_modified_at : 2020-02-10
toc: true
toc_label: "yaml 작성 방법"
toc_icon: "file-alt"
toc_sticky: true
---
------
### <center>" 1. YAML 이란? "</center>
------
<br/>
 YAML (YAML Ain’t Markup Languag) <br/>
 오늘날 XML과 JSON이 데이터 직렬화에 주로 쓰이기 시작하면서, 
 많은 사람들이 YAML을 "가벼운 마크업 언어" 로 사용하려 하고 있다.
 JSON : YAML과 주석 스타일을 제외하고 매우 비슷하다.(*ajax 쓰는 방식과 비슷*)
 어쨋든 개발하때 데이터를 주고 받는 포맷에 대한 약속이라고 생각하면 될 것이다.

### yaml 작성 예
```yaml
title:                      //제목
excerpt:                    //포스트 설명
last_modified_at:           //수정날짜 ex)2019-02-18
layout:                     //레이아웃 (single, splash 등등)
classeds: wide	            //화면 우측에 toc를 넣는 옵션
toc: true/false	            // 목차를 넣는 옵션 (# 제목 기준)
toc_label: "My Toc Title"	//목차의 제목
toc_Icon: "cog"	            //목차 아이콘
toc_sticky: true	        //목차가 화면을 따라옴

categories: [뭐시기,뭐시기]
tags: [뭐시기, 뭐시기]
혹은 tags: -뭐시기 -뭐시기
```