---
title : "테이블 생성/복사/삭제 및 임시테이블 생성 등"
toc: true
toc_sticky: true
toc_label: "<a href='/database/oracle/'>Oracle 홈이동</a>"
categories:
  - oracle
tags:
  - 오라클
  - oracle
  - insert
  - insert all
last_modified_at : 2020-02-12
---

💼📝🔑⏰ 📙📓📘📒🎓

# 💼 DDL 테이블 생성
- TABLESPACE 를 적지 않으면 Defalut로 만들어진다.
    + (예, D:,C:,E:,F: 드라이브로 나누는 개념)    ※무조건 생성이됨....
- `select * from database_properties` : 데이터 베이스 속성을 확인 할 수 있다. tablespace도 확인가능(temp)
- 테이블 이름은 30byte가 기본으로 잡혀있었는데, 12cR2 이후 버전부터 128바이트까지 생성가능 )
- 숫자 시작 안됨, 특수문자 쓸수 있지만 되도록 x 쓸라면 쌍따옴표로 묶어주라...
- 글로벌 temp테이블 (배치할때 많이 사용한다)

~~~sql
CREATE TABLE userTBL --회원 테이블
( userID CHAR(8),
  userName NVARCHAR2(10),
  birthYear NUMBER(4),
  addr NUMBER(2),
  mobile1 CHAR(3),
  mobile2 CHAR(8),
  height NUMBER(3),
  mData DATE
  );
  --TABLESPACE scottXX;
~~~

~~~sql  
CREATE TABLE buyTBL
(
    idNum NUMBER(8),
    userID CHAR(8),
    prodName NCHAR(6),
    groupName NCHAR(4),
    price NUMBER(8),
    amount NUMBER(3)
);
~~~


# 💼 테이블 복사기능! CTAS라 한다!
## 📝 모든 테이블 복사
~~~sql
  CREATE TABLE 생성할 테이블명
  AS SELECT * FROM 원본 테이블명;
  -- EX)
  CREATE TABLE dept6
      AS
      SELECT dcode, dname
      FROM dept2
      WHERE dcode IN(1000,1001,1002);
~~~

## 📝 테이블의 구조만 복사하기
~~~sql
    CREATE TABLE DEPT5
    AS 
        SELECT * 
        FROM dept2
        WHERE 1=2;  -- 조건을 false로 만들기
        --그렇기 떄문에 테이블 구조만 가져온다.
~~~
# 💼 테이블 삭제 
- `TRUNCATE` : 테이블 구조는 남아 있다
- `DROP TABLE` : 테이블 구조 자체도 없에 버림



# 💼 읽기 전용 테이블로 변경하기  (11g 버전 부터 나옴)
- read only로 바뀌면 insert 나 update가 되지 않는다.
- 18c 버전이후 부터는 다시, 쓰기로 변경 가능

~~~sql
CREATE TABLE t_readonly
(
    no NUMBER,
    name VARCHAR2(10)
);
INSERT INTO t_readonly values(1,'aaa');
commit;

ALTER TABLE t_readonly read only; --읽기 전용으로 바꿈
~~~

# 💼 임시 테이블
- 메모리에서 작업되기 때문에 빠르다
- COMMIT하면 사라짐

## 📝 임시 테이블 생성
~~~sql
CREATE GLOBAL TEMPORARY TABLE temp01
(
    no number,
    name varchar2(10)
)
ON COMMIT DELETE ROWS;

INSERT INTO temp01 VALUES(1,'AAA');

SELECT * FROM temp01;
commit; 

CREATE GLOBAL TEMPORARY TABLE temp03
    AS
    SELECT dcode, dname
    FROM dept2;

-- 가상 컬럼 테이블 생성하기 11g 버전이상
CREATE TABLE vt001(
  no1 number,
  no2 number,
  no3 number GENERATED ALWAYS AS ((no11*12)+12) 
); 
-- 가상 컬럼 에는 자동으로 데이터가 부여된다. 직접 데이터를 넣는건 불가능 하다
--가상과 디폴트의 차이
    -- 디폴트는 직접 데이터를 넣는게 가능
    -- 가상 컬럼은 직접 데이터 넣는게 불가능

~~~

# 💼 컬럼 제어문
~~~sql
-- 컬럼 삭제;
ALTER TABLE dept7 DROP COLUMN loc;
ALTER TABLE dept7 DROP COLUMN loc CASCADE CONSTRAINTS;

-- 컬럼의 데이터 형식 변경
ALTER TABLE dept7 MODIFY (addr NVARCHAR2(10) NULL);

-- 새로운 컬럼을 추가하기
ALTER TABLE dept6
    ADD (LOC VARCHAR2(10));
    
-- 새로운 컬럼을 추가하면서 디폴트값 주기
ALTER TABLE dept6
    ADD (LOC2 VARCHAR2(10), 'seoul');
~~~