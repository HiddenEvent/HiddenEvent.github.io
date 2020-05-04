---
title: 서브쿼리
toc: true
toc_sticky: true
toc_label: "<a href='/database/oracle/'>서브쿼리 관련</a>"
categories:
  - oracle
tags:
  - 오라클
  - join
  - equi join
last_modified_at : 2020-02-15
---
### 서브쿼리 종류
- 일반 서브쿼리 = *WHERE* 절에
- **인라인 뷰** = *FROM*절에 위치
- **스칼라 쿼리** = *SELECT* 절에 위치
- 서브쿼리를 사용하면 내부적으로 쿼리 블럭이 생성되므로 느려질 수 있음, 되도록 join을 사용하는 것이 좋음.
- JOIN을 먼저 하기 보다는 서브쿼리로 GROUP BY 결과를 먼저 도출하여 JOIN하는 것이 이상적임,  
  하지만 그럴수 없는경우도 생김


### 인라인 뷰(FROM절)
#### 인라인 뷰 실습
~~~sql
  SELECT * FROM EMP;
  SELECT * FROM DEPT;
  
  SELECT D.DEPTNO, D.DNAME, E.SAL
  FROM DEPT D, (
              SELECT DEPTNO, MAX(SAL) SAL 
              FROM EMP
              GROUP BY DEPTNO
              ) E
  WHERE E.DEPTNO = D.DEPTNO;
~~~
#### 인라인 뷰 실습2
- student 테이블과 department 테이블을 사용하여 학과별로 학생들의 최대 키와 최대 몸무게,    학과이름을 출력하세요.
- 조건별 그룹을 만드려면 student 테이블을 인라인 뷰로 잡아야한다...   
- 키워드 (학과별 학생들의 키와 몸무게) 이거는 student 테이블에 키와 몸무게가 있기 때문에...   

~~~sql
  SELECT D.DNAME, S.HEIGHT, S.WEIGHT
  FROM DEPARTMENT D,(                 
                      SELECT DEPTNO1 DEPTNO,MAX(HEIGHT) HEIGHT, MAX(WEIGHT) WEIGHT
                      FROM STUDENT
                      GROUP BY DEPTNO1
                      ) S
WHERE D.DEPTNO = S.DEPTNO;
~~~

#### 인라인 뷰 실습3
~~~sql
  SELECT S1.GRADE, S1.NAME, S1.HEIGHT, S2.HEIGHT
  FROM STUDENT S1,(                 
                      SELECT GRADE,AVG(HEIGHT) HEIGHT
                      FROM STUDENT
                      GROUP BY GRADE
                      ) S2
  WHERE
        S1.GRADE = S2.GRADE AND
        S1.HEIGHT > S2.HEIGHT
  ORDER BY S1.GRADE;
~~~
### 일반 서브쿼리(where절)
#### 서브쿼리(where절) 실습 1

~~~sql
  select S.name, D.DNAME
  from STUDENT S, DEPARTMENT D
  where
      S.deptno1 = ( select deptno1
                  from STUDENT
                  where name = 'Anthony Hopkins')
      and S.deptno1 = D.deptno;
~~~

#### 서브쿼리(WHERE절) 실습 2
~~~sql
  select NAME, WEIGHT
  FROM STUDENT
  WHERE WEIGHT > (
              select avg(WEIGHT)
              FROM STUDENT
              WHERE deptno1 = 201
              group by deptno1
              );
~~~

#### 다중행 sub Query 실습 1
~~~sql
  SELECT empno, name, deptno
  from emp2
  where deptno IN(
                  select dcode
                  from dept2
                  where area = 'Pohang Main Office'
                  );
~~~
#### 다중행 sub Query 실습 2
~~~sql
  select name, position, to_char(pay, '999,999,999,999') salary
  from emp2
  where pay > (
              SELECT min(pay)
              from emp2
              where position = 'Section head'
              group by position
              );
~~~
#### 다중행 sub Query 실습 3
~~~sql
  select E.name,D.dname,to_char(E.pay, '$999,999,999,999') salary
  from emp2 E, dept2 D
  where E.deptno = D.dcode
      and E.pay < all(
                  SELECT avg(pay)
                  from emp2
                  group by deptno
                  );
~~~
#### 다중열 sub Query 실습 1
- 결과 값이 두개 이상의 컬럼을 반환하는 subquery
- and 로 두개로 빼지말고 무조건 2개 컬럼을 동시 비교하는 문으로 짜야한다!!(다른결과)   

~~~sql
  select empno, ename, sal, deptno
  from emp
  where (sal, deptno) in (
                          select SAL, DEPTNO
                          from emp
                          where
                              deptno = 30
                              AND comm > 0
                          );
~~~
#### 다중열 sub Query 실습 2
~~~sql
  SELECT GRADE, NAME, WEIGHT
  FROM STUDENT
  WHERE (GRADE, WEIGHT) IN(
                          SELECT GRADE, MAX(WEIGHT) 
                          FROM STUDENT
                          GROUP BY GRADE
                          );
~~~

#### 상호연관 서브쿼리 실습 1
- 키워드 "자기자신의 직급....(여러건)"
- 내부적으로 exists로 풀린다... 그러므로 차라리 exists로 푸는게 맞는거 같음...   

~~~sql
  SELECT NAME 사원이름, POSITION 직급, PAY 급여
  FROM emp2 E1
  WHERE  pay >= (
                  select avg(pay)
                  from emp2 E2
                  where E1.position = E2.position
                  );
~~~

### 스칼라 서브쿼리(SELECT절)
- 데이터 row 갯수만큼 쿼리블럭이 생성되므로 엄청 느려질수 있음... 조심해야함....
- "캐싱된다" = 중복된 여러건을 내부적으로 1건으로 처리 한다는 의미
- 배치업무에서는 절대로 사용되어서는 안되는 스칼라 서브쿼리....
- 데이터가 없는경우: null 데이터로 표시 해준다 /// 2건이상 나오는 경우: 에러가 발생...

#### 스칼라 쿼리 실습 1
- dept 테이블을 모체로 잡고, emp테이블 그룹함수를 써서 최대값을 구할 수 있음(대입 하는 개념)   

~~~sql
  select d.deptno, d.dname, (
                              select max(sal)
                              from emp
                              where deptno = d.deptno
                            ) sal
  from  dept d;
~~~

=> 아래와 같이 스칼라쿼리는 쿼리 튜닝을 해주어야 한다.

~~~sql
  select d.deptno deptno, d.dname, max(e.sal)
  from dept d left outer join emp e  --outer join으로 바꿈... null값을 찾기위해
  on d.deptno = e.deptno
  group by d.deptno, d.dname;
~~~