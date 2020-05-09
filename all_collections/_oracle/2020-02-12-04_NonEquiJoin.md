---
title : "NONE-EQUI JOIN(비등가 JOIN) 문법"
toc: true
toc_sticky: true
toc_label: "<a href='/database/oracle/'>INSERT ALL 관련</a>"
categories:
  - oracle
tags:
  - 오라클
  - oracle
  - insert
  - insert all
last_modified_at : 2020-02-12
---

## NONE-EQUI JOIN(비등가 JOIN) 요약

- 등급과 관련된 MIN && MAX 값이  있는 테이블이 있는상태...(BETWEEEN을 사용)
- INTO 절과 VALUES 절에 기술한 <u>컬럼의 개수</u>와 <u>데이터 타입</u>은 동일해야 한다.
- 임시테이블을 생성해서, 필요한 조건만을 뽑기 위해 위한 용도에 많이 쓸것 같다.

### 예제 1 연봉에 따른 등급을 뽑아냄
~~~sql
SELECT ENAME, SAL, GRADE
    FROM EMP,SALGRADE
    WHERE SAL BETWEEN LOSAL AND HISAL;
~~~

### 예제 2 범위함수
~~~sql
SELECT C.GNAME, TO_CHAR(C.POINT, 'L999,999'),G.GNAME --ORACLE 방식
FROM customer C, GIFT G
WHERE C.POINT BETWEEN G_START AND G_END;

SELECT C.GNAME, TO_CHAR(C.POINT, 'L999,999'),G.GNAME --ANSI 방식
FROM customer C JOIN GIFT G
ON C.POINT BETWEEN G_START AND G_END;
~~~

### 예제 3 카운트
~~~sql
SELECT G.GNAME, COUNT(*)||'개' 카운트 --ORACLE 방식
FROM customer C, GIFT G
WHERE C.POINT BETWEEN G_START AND G_END
GROUP BY G.GNAME
ORDER BY 카운트 DESC;
~~~

### 예제 4 3개테이블 조인
~~~sql
SELECT A.NAME, B.TOTAL, C.GRADE
FROM STUDENT A, SCORE B, HAKJUM C
WHERE A.STUDNO = B.STUDNO
AND B.TOTAL BETWEEN C.MIN_POINT AND MAX_POINT;
~~~