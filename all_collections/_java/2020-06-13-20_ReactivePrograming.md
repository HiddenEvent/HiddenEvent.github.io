---
title: (spring) Spring Reactive 프로그래밍
excerpt: "Spring Reactive 프로그래밍 관련 내용 정리"
categories:
  - Spring 
tags:
  - Spring
  - eclipse
last_modified_at: 2020-06-13
---

💼📝🔑⏰ 📙📓📘📒🎓

# 💼 Reactive Programming란?
- 비동기 데이터 흐름과 전달에 기반을 둔 프로그래밍 패러다임
- 막힘 없이 흘러 다니는 데이터(이벤트)를 통해 사용자에게 자연스러운 응답 제공 
	+ 데이터의 흐름을 먼저 정의하고 데이터가 변경되었을 때 연관되는 수식이나 함수가 업데이트되는 방식 
	+ 정적 또는 동적 데이터 흐름을 쉽게 표현할 수 있어야하며 데이터 흐름을 통해 하부 실행 모델이 자동으로 변화를 전파

## Spring에서 비동기처리
**spring-webflux** : 스프링에서 사용하는 비동기 컴포넌트이다.

> 네트워크 상에서 요청하는 작업이 있는 경우에 비동기 방식을 사용해야 더 효율적이다.
