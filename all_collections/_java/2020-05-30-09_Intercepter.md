---
title: (spring) 인터셉터
excerpt: "인터셉터를 사용하는 이유 및 개념"
categories:
  - Spring 
tags:
  - Spring
  - eclipse
last_modified_at: 2020-05-30
---

💼📝🔑⏰ 📙📓📘📒🎓

```
예제 프로젝트 : sp5-chap13
```

# 💼 인터셉터란
- 컨트롤러의 요청 처리 전/후에 공통 기능을 적용할 수 있는 도구
- 필터는 모든 요청을 대상으로 하지만 인터셉터는 컨트롤러의 요청 처리만을 대상으로 적용

## 📝 인터셉터 사용하는 이유
- 즐겨찾기 경로를 추가해 놓고 해당 페이지로 접속하는 경우 매번 로그인 한 상태인지 매 Controller마다 sesstion을 체크해야한다.
- 로그인된 사용자인지 등의 공통된 작업을 처리하기 위해 인터셉터를 사용한다.

## 📝 인터셉터 예제
1. web.xml에서 한글 깨짐 현상을 제어하기 위한 설정

```xml
	<filter>
		<filter-name>encodingFilter</filter-name>
		<filter-class>
			org.springframework.web.filter.CharacterEncodingFilter
		</filter-class>
		<init-param>
			<param-name>encoding</param-name>
			<param-value>UTF-8</param-value>
		</init-param>
	</filter>
	<filter-mapping>
		<filter-name>encodingFilter</filter-name>
		<url-pattern>/*</url-pattern>
	</filter-mapping>
```
2. 세션과 쿠키도 여기서 사용됨

## 📝필터 vs 인터셉터

- `필터`: 모든 요청에 다 적용됨
- `인터셉터`: controller에 요청이 들어올 때만 처리
- spring mvc를 사용할때는 필터보다는 인터셉터를 사용하기를 추천..
왜? 요청전,후 등의 컨

# 💼 날짜 형식 변환
  - 날짜는 자동변환이 안된다.(나라마다 다르므로...)
  - date객체를 Controller에 요청될 때 변환과정이 없으면 에러남

```java
// 객체 안에 date 타입의 객체가 있는 경우 사용
@DateTimeFormat(pattern = "yyyyMMddHH")
private LocalDateTime from;
```