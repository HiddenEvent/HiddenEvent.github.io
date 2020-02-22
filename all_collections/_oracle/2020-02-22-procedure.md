---
title : "PROCEDURE 관련"
toc: true
toc_sticky: true
toc_label: "<a href='/database/oracle/'>PROCEDURE 관련</a>"
categories:
  - oracle
tags:
  - 오라클
  - PROCEDURE
  - 함수
last_modified_at : 2020-02-12
---


### =========== PL/SQL 프로시져 ===========
- DB내에서 프로그램밍 할수 있는 기능
- 프로시져 확인하기 (SELECT * FROM USER_SOURCE; )

#### 프로시져를 만드는 예제
~~~sql
SET SERVEROUTPUT ON
CREATE OR REPLACE PROCEDURE nmChange IS
BEGIN
    UPDATE emp SET 
    job = 'CLERK'
    WHERE deptno = 20;
END;
/
execute nmChange;--프로시져를 실행.
~~~

#### (입력)파라미터가 있는 프로시저 예제 1
~~~sql
CREATE OR REPLACE PROCEDURE userProc1(-- 1. 생성
    pi_userID IN USERTBL.USERID%TYPE  -- 입력받을 파라미터명 타입
) AS
    v_uName VARCHAR(10); -- out으로 리턴될 변수명
BEGIN
    SELECT userName INTO v_uName -- 리턴될 변수에 담기.
    FROM userTbl
    WHERE userID = pi_userID; -- 파라미터 입력
    DBMS_OUTPUT.PUT_LINE(v_vName);
END;
/
EXECUTE userProc1('JKW'); -- 2. 실행
~~~
#### (입력)파라미터가 있는 프로시저 예제 2
~~~sql
select * from emp;
CREATE OR REPLACE PROCEDURE sla_sal( p_empno IN emp.empno%type) -- 1.IN은 디폴트이기 때문에 생략 가능하다.
AS
    v_ename emp.ename%type;
    v_sal emp.sal%type;
BEGIN
    SELECT ename,sal INTO v_ename,v_sal
    FROM emp
    WHERE empno = p_empno;
    DBMS_OUTPUT.PUT_LINE('사원명은 '||v_ename||' 입니다');
    DBMS_OUTPUT.PUT_LINE('급여는 '||v_sal||' 입니다');
END;
/
EXECUTE sla_sal(7369); -- 2. 실행
~~~
    
#### (입력 , 출력)파라미터가 있는 프로시저 예제 1
~~~sql
CREATE SEQUENCE userSEQ;
CREATE TABLE testTbl(userId INT, txt NCHAR(10));
-- 1. 프로시져 생성
CREATE OR REPLACE PROCEDURE userProc3( p_txtValue IN testTbl.txt%type, p_outputValue OUT testTbl.userId%type)
AS
BEGIN
    INSERT INTO testTbl VALUES(userSEQ.nextval, p_txtValue);
    SELECT MAX(userID) INTO p_outputValue FROM testTbl;
END;
/
-- 2. 프로시져 실행.(output 데이터가 있으면 DECLARE로 받아서 처리해야함.)
DECLARE
    outData NUMBER;
BEGIN
    userProc3('테스트값 1', outData);
    DBMS_OUTPUT.PUT_LINE('결과는 '||outData||' 입니다');
END;
/
SELECT * FROM STUDENT;
~~~

#### (입력 , 출력)파라미터가 있는 프로시저 예제 2

-- 1. 프로시져 생성
CREATE OR REPLACE PROCEDURE ENUM_NM_SAL( p_no IN professor.profno%type, o_nm OUT professor.name%type, o_sal OUT professor.pay%type) -- 1.IN은 디폴트이기 때문에 생략 가능하다.
AS
BEGIN
    SELECT name, pay
    INTO o_nm, o_sal
    FROM PROFESSOR
    WHERE profno = p_no;
END;
/
-- 2. 프로시져 실행.(output 데이터가 있으면 DECLARE로 받아서 처리해야함.)
DECLARE
    outputData1 VARCHAR(20);
    outputData2 NUMBER;
BEGIN
    ENUM_NM_SAL(1001,outputData1,outputData2);
    DBMS_OUTPUT.PUT_LINE('교수이름은 '||outputData1||' 급여는 '||outputData2||'입니다.');
END;
/

--# (입력)파라미터로 INSERT하는 프로시저 예제 1
-- 1. 프로시져 만들기
CREATE OR REPLACE PROCEDURE EMP_INSERT(p_empno emp.empno%type, p_ename emp.ename%type, p_job emp.job%type, p_mgr emp.mgr%type, p_sal emp.sal%type) --IN 생략가능
IS
BEGIN
    INSERT INTO EMP(empno,ename,job,mgr,sal) VALUES(p_empno,p_ename,p_job,p_mgr,p_sal );
END;
/
-- 2. 프로시져 실행!
EXECUTE EMP_INSERT(4000,'Smith','Clert',7900,3500);

select * from EMP ; --잘 들어갔나 확인


CREATE OR REPLACE PROCEDURE ex2(p_empno emp.empno%type) --IN 생략가능
IS
    v_ename emp.ename%type;
    v_deptno emp.deptno%type;
    v_sal emp.sal%type;
    v_sal2 emp.sal%type;
BEGIN
    SELECT ename, deptno, sal
    INTO v_ename, v_deptno, v_sal
    FROM emp
    where empno = p_empno;
    IF(v_deptno = 10) THEN
        v_sal2 := v_sal*1.1;
    ELSIF(v_deptno = 20) THEN
        v_sal2 := v_sal*1.2;
    ELSIF(v_deptno = 30) THEN
        v_sal2 := v_sal*1.3;
    END IF;
    DBMS_OUTPUT.PUT_LINE(v_ename||' 급여는 '||v_sal||' 인상급여는 '||v_sal2||'입니다.');
END;
/
EXECUTE ex2(1000);