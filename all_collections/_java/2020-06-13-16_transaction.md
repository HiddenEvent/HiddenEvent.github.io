---
title: (spring) Transaction
excerpt: "트랜젝션 관련 내용 정리"
categories:
  - Spring 
tags:
  - Spring
  - eclipse
last_modified_at: 2020-06-13
---

💼📝🔑⏰ 📙📓📘📒🎓

```
예제 프로젝트 : 
```
# 💼 Transaction 란?
- 한 개 이상의 물리적인 동작으로 구성된 논리적인 작업 단위
- 트랜잭션에 포함된 물리적인 작업이 모두 성공하거나 실패하도록 관리
- ACID 특성 
	+ 원자성 (Atomicity) 
	+ 일관성 (Consistency) 
	+ 격리성 (Isolation) 
	+ 영속성 (Durability)

# 💼 Spring 트랜잭션 지원
- 프로그래밍 방식 
	+ TransactionTemplate 클래스 사용
- AOP 방식 
	+ `<tx:advice>`와 `<aop:advisor>` 설정을 사용하는 선언적 트랜잭션 방식
- 어노테이션 방식 
	+ @Transaction 어노테이션을 사용하는 선언적 트랜잭션 방식 
	+ 내부에서는 AOP를 사용해서 트랜잭션 관리

# 💼 트랜잭션 설정 가이드
- 트랜잭션은 서비스 레이어에서 시작
- 삽입, 삭제, 변경 기능을 수행하는 메서드에 기본 값인 TRANSACTION_REQUIRED를 지정해서 기존 트랜잭션에 참여하거나 또는 새 트랜잭션을 시작하도록 설정 
	+ 읽기 메서드에는 트랜잭션이 필요 없으므로 읽기 최적화 지정
- 웹 애플리케이션의 컨트롤러에 트랜잭션 설정을 피하는 것이 권장됨
- Repository 클래스에는 트랜잭션이 필요한 메서드에 TRANSACTION_SUPPORTED를 지정해서 기존 트랜잭션에 참여하도록 설정
- RuntimeException 에 대해서만 롤백 하도록 기본 설정 유지 
	+ 직접 예외 처리할 경우 자동으로 Rollback되지 않으므로 UnexpectedRollbackException 예외에서 명시적인 롤백 처리

# 💼 Spring 트랜잭션 관리자
- 스프링 프레임워크는 데이터 연동 기술에 따라 특화된 트랜잭션 관리자 제공 
	+ 모든 트랜잭션 관리자는 **PlatformTransactionManager**인터페이스 구현
- 종류
	+ `DataSourceTransactionManager`: MyBatis와 같은 JDBC 기반 트랜잭션 관리 
	+ `HibernateTransactionManager` : Hibernate 프레임워크 기반 트랜잭션 관리 
	+ `JpaTranasctionManager` : JPA 기반 트랜잭션 관리 
	+ `JtaTransactionManager` : 분산 트랜잭션 지원
