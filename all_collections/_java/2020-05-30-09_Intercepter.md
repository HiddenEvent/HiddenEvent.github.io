---
title: (spring) 인터셉터 / 날짜형식 변환
excerpt: "인터셉터를 사용하는 이유 및 개념 / 날짜 형식 변환"
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

**xml로 설정 예제**
```xml
	<interceptors>
		<interceptor>
			<mapping path="/edit/**" />
			<exclude-mapping path="/edit/help/**" />
			<beans:bean class="interceptor.AuthCheckInterceptor" />
		</interceptor>
	</interceptors>
```
**java class로 설정한 예제**
```java
public class AuthCheckInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(
			HttpServletRequest request,
			HttpServletResponse response,
			Object handler) 
					throws Exception {
		HttpSession session = request.getSession(false);
		if (session != null) {
			Object authInfo = session.getAttribute("authInfo");
			if (authInfo != null) {
				return true;
			}
		}
		response.sendRedirect(request.getContextPath() + "/login");
		return false;
	}
	
}
```

## 📝필터 vs 인터셉터

- `필터`: 모든 요청에 다 적용됨
- `인터셉터`: controller에 요청이 들어올 때만 처리
- spring mvc를 사용할때는 필터보다는 인터셉터를 사용하기를 추천..
왜? 요청전,후 등의 컨

# 💼 날짜 형식 변환
  - 날짜는 자동변환이 안된다.(나라마다 다르므로...)
  - date객체를 Controller에 요청될 때 변환과정이 없으면 에러남

```java
// 객체 안에 date 타입의 데이터가 있는 경우 사용
@DateTimeFormat(pattern = "yyyyMMddHH")
private LocalDateTime from;
```