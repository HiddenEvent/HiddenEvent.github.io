---
title: (spring) 스크럼 개발방법론
excerpt: "기획안 정리"
categories:
  - Spring 
tags:
  - Spring
  - eclipse
last_modified_at: 2020-04-11
---

## 1. 프로젝트 구상
- 프로젝트를 기획하고, 기획한 프로젝트를 관리하는 통합 관리 기능
- 애자일 스크럼 개발방법론
- 소프트웨어를 사용하거나 팔기를 원하는 사람은 그것을 만드는 사람과 의사소통을 해야한다.


## 2. 스크럼 구성원

### 1) 제품책임자 (Product Owner)
- 고객과 팀의 의견을 수렴해서 개발해야할 제품에 대한 다양한 요구사항이 담겨있는 작성
- 클라이언트와 스크럼 팀 사이에서 의견을 취합하여 제품의 특성과 기능을 정의하여 **백로그(Product Backlog)** 를 작성하고, 출시 일자와 내용을 결정한다.

### 2) 스크럼 마스터 (Scrum Master)
- 팀이 완전히 생산적이고 기능적이게 움직일 수 있도록 보장해 준다. 
- 외부에서 간섭하고 방해하는 장애물을 제거하여 팀을 보호하고 스크럼 프로세스가 준수되도록 보장한다. 
- 일일 스크럼, 스프린트 계획 및 리뷰회의에 참석한다.

### 3) 스크럼 팀 (Scrum Team)
- 스크럼에서 제품의 생산에 참여하는 인원을 말한다. 개발자, 디자이너 등등이 모여 구성원을 이루고 있다.


## 3. 스크럼 프로세스
- 스크럼에서는, 30일간의 주기로 실제 동작하는 제품을 만들면서 개발을 진행시킨다. 
일반적인 권장기간은 30일 이지만, 스크럼 적응도 및 진행 상황에 따라 1주~4주의 유연성을 가진다.

### 1) 제품 백로그(Product Backlog)
~~~
개발할 제품에 대한 요구 사항 목록( 제품 기능 목록) 작성.
제품 기능 목록은 우선순위가 매겨진, 사용자의 요구 사항 목록이라고 할 수 있어요.
이 제품기능 목록은 사용자와 계속 미팅하면서 목록이 완성되게 됩니다.
한 번 결정된 제품 기능 목록은 확정된 것이 아니고 
개발 중이라도 수정이 가능하지만, 
일반적으로 한 주기가 끝날 때까지는 제품 기능 목록을 수정하지 않습니다.
~~~
- ID :자동으로 매겨지는 고유 식별자, 이름을 바꾸더라도 **스토리를 추적할 수 있게 하기 위한 것**
- Name :  스토리를 설명하는 짧은 이름으로 명확하게 만들어서 **그 이름만 보고도 스토리의 내용을 대충 파악할 수 있게 만들어야 한다.**
- 중요도 :  제품 책임자가 생각하는 스토리의 중요도 **숫자가 클수록 더 중요하다**는 의미를 내포한다
- 최초 추정치 :  다른 스토리와 비교하여 이 스토리를 구현하는 데 상대적으로 얼마나 많은 노력이 필요한지에 대한 팀의 man-day(한 사람이 하루에 하는 일의 양)로 구현한다.
- 데모 방법 : Sprint Demo에서 이 스토리를 어떤 형태로 데모할 것인지에 대한 상위 수준의 묘사. 이것은 간단한 테스트 명세로써, "A를 하고 나서, B를 하면, C가 되어야 한다" 식이다.
- Track : 대강의 스토리 분류로서 Back Office나 최적화 같은 것이 될 수 있다. 이렇게 하면 제품 책임자가 쉽게 필요한 항목만 필터링하여 **그들의 우선순위를 한꺼번에 조정할 수 있다**
- Components : 보통 엑셀 문서의 체크박스로 표현된다. 데이터베이스, 서버, 클라이언트 같은 것을 말한다. 이 항목을 보고 팀이나 제품 책임자가 해당 스토리를 구현하는 데 관련된 기술적 컴포넌트가 어떤 것인지 식별할 수 있다. **백 오피스 팀과 클라이언트 팀처럼 스크럼 팀이 여럿 있고, 그 중 어느 팀이 어떤 스토리를 가져갈지 결정할 때 유용하게 사용할 수 있다**



### 2) 스프린트 계획 회의(Sprint Planning Meeting)
~~~
스프린트 목표와 스프린트 백로그를 계획하는 회의

이 일일 스크럼 회의는 스프린트 기간에 하는 회의로, 여러 특징을 가지고 있는데요,
하나씩 살펴보겠습니다. 
매일 한다.
서서 한다.
약속된 시간에 한다.
짧게(15분 정도) 한다.
진행 상황만 점검한다.
스프린트 작업 목록을 잘 개발하고 있는지 확인한다.
모든 팀원이 참석한다.
한 사람씩 어제 한 일을 이야기한다.
한 사람씩 오늘 할 일을 이야기한다. 
한 사람씩 문제점 및 어려운 점 정도만 이야기한다. 
매일 완료된 세부 작업 항목을 완료 상태로 옮겨 스프린트 현황판을 업데이트한다.
개별 팀원에 대한 진척 상태를 확인힌다.
그날의 남은 작업량을 소멸 차트에 표시한다. 
~~~
1. 스프린트 현황판

2. 소멸차트


### 3) Sprint Backlog
~~~
반복적인 개발 주기 (회사에서 정하는 이터레이션이 개발 주기가 된다. 계획 회의 부터 제품 리뷰가 진행 되는 날짜 까지의 기간이 1스프린트 이다)

각각의 스프린트 목표에 도달하기 위해 필요한 작업목록
제품 기능 목록이 사용자가 원하는 
우선순위가 부여된 제품의 기능 목록이라면, 

스프린트 구현 목록은 각각의 스프린트 주기에서 
개발할 작업 목록을 말합니다. 

작업 목록에는 

1. 세부적으로 어떤 것을 구현해야 하는지에 대한 세부 작업 항목
2 .작업자
3. 예상 작업 시간 

등에 관한 정보를 작성합니다. 
이와같은 자료를 기반으로 
스프린트를 개발하는 데 걸리는 일정을 계산할 수 있고, 
필요한 자원도 확보하여
 최종적으로는 개발이 어떻게 진행되고 있는지 진척상황을 파악할 수 있습니다. 
스프린트 구현 목록을 스프린트 계획 회의에서 결정하며, 
이 작업 목록 하나하나가 개발이 완료되면 스프린트 주기는 완성됩니다.
~~~

### 4) Sprint
~~~
위에서 계속 스프린트, 스프린트라고 그래서 
"스프린트가 도대체 뭐야?"
라고 생각하셨을 것 같아요.

스프린트는 영어단어로,
Sprint

- (짧은 거리를) 전력질주하다.

- 전력질주 

라는 뜻을 가지고 있습니다.

 전력 질주가 마라톤 같은 장거리 달리기가 아닌 단거리 달리기에서 가능한 것처럼, 스프린트는 작업량으로 볼 때 그렇게 많지 않고, 개발 기간도 짧습니다. 

즉, 스크럼 모델에서의 스프린트 뜻은 

"반복적인 개발 주기"를 의미합니다. 


예를 들어서, 내가 한달동안 문제를 

3~5일에 5개씩 총 40개를 푸는 것으로 계획을 세웠다면, 

3~5일의 단위가 반복되면서 문제들을 풀어나가게 됩니다.

여기서 3~5일 단위가 반복 주기이고,

스크럼에서는 이것(3~5일 단위)을

스프린트라고 합니다. 

스크럼에서 반복 주기의 기간은 스프린트 계획 회의를 통해 결정하는데,

보통은 2~4주 정도로 수행합니다.

요구사항이 안정적이고, 

개발 팀이 애자일 방법에 대해 지식과 경험이 풍부하다면 

2주 정도의 짧은 기간을 스프린트 주기로합니다.
그러나 요구사항의 변화가 많고, 
개발팀의 역량이 낮다면 4주정도의 기간을 스프린트 주기로 합니다. 
스프린트 주기가 결정되면, 
개발 팀은 팀원의 역량에 맞게 
스프린트에 배정된 작업을 중간에 멈추는 일이 없이 
전력 질주해서 끝내야 합니다.
그러려면 
결정된 스프린트의 목표과 내용이 개발 도중에 바뀌지 않아야 하고, 
그 누구도 팀원들의 동이 없이 바꿀 수 없다는 원칙을 지켜야합니다.
즉, 스프린트를 간단하게 요약하자면,
작은 단위의 개발 업무를 단기간 내에 전력 질주하여 개발한다
는 뜻으로 보면 될 것 같습니다. 
~~~

### 5) 제품완성과 스프린트 검토회의 (Finished Work)
~~~
모든 스프린트 주기가 끝나면 제품 기능 목록에서 개발하려고 했던 제품(finished work)이 완성되게 됩니다.

이 최종 제품이 나오게되면 스프린트 검토 회의(sprint review)란 것을 
하게 되는데요, 우리가 만든 최종 제품이 처음에 계획했던, 
즉 고객이 요구했던 사항에 얼마나 부합하는지 
참석자(고객포함)들 앞에서 시연합니다. 
그러고 나서 개선할 점 등에 관해 피드백을 받아요.
~~~


### 6) 스프린트 회고(spring Retrospective)
~~~
회고는 지나간 일을 돌이켜 생각해보는 것이죠? 
그러므로 스프린트 회고는 
그동안 스프린트에서 수행한 활동과 개발한 것을 되돌아 보고, 
개선점은 없는지, 팀이 정한 규칙이나 표준을 잘 준수했는지
 등을 검토하는 것이에요. 
이때 팀의 단점을 찾기보다는 강점을 찾아 더 극대화하는 데 주안점을 둡니다. 또한 문제점에 대한 해결 방안을 찾는 회의가 아니므로 
문제점을 확인하고 기록하는 정도로만 진행합니다. 
그리고 추정 속도와 실제속도를 비교해보고, 차이가 크면 
그 이유를 분석해보지만, 프로세스 품질은 측정하지 않습니다. 
~~~

## 4. 스크럼 순서도
1. 제품 책임자가 이해관계자와 프로젝트 관계자들의 의견을 취합하여 제품 백로그 작성
2. 스프린트 계획 미팅 진행 (스프린트 목표 설정, 스프린트 백로그 작성)
3. 스프린트 주기동안 제품 제작 (일일 스탠드업 회의 진행하여 팀원간 정보 공유)
4. 스프린트 종료 시 모든 이해관계자가 모인 자리에서 회의 진행
5. 스프린트 회고
6. 다시 1번으로 돌아가서 반복

## 5. 스크럼 구성요소
1. 사람(Who)
2. 목적(What)
3. 행동(How)

### Product Backlog
- 시스템에서 해결해야 하거나, 시스템에 포함되어야 할 기능, 특성과 기술에 대한 모든 기술 나열 
- 요구되는 제품의 요구사항의 우선순위를 나열

### Sprint Backlog
- 해당 Sprint 기간에 수행되어야 하는 TASK 목록으로 Sprint 기간 동안 개발 가능한 기능의 목록을 Product  Backlog에서 선택

### Sprint
- 통산 4~6주(30)일 정도의 Time box 성격을 가진 잘 정의된 반복 개발주기
- 각 Sprint 단계 종료 시 새로운 기능이 추가되어 실행 가능 제품이 인도 되어야 함

### Daily Scrum
- 매일 약 15분 정도의 짧은 회의
- SCRUM Master는 진척 사항 검토, 정상적 종료를 방해하는 위험 및 작업 계획을 확인

## 6. 스크럼 산출물
### Product Backlog
- 제품에 담고자 하는 기능의 우선순위를 정리한 목록
- 제품 책임자가 우선순위 결정

### Sprint Backlog
- 하나의 스프린트 동안 개발할 목록으로 사용자 스토리와  이를 완료하기 위한 작업을 태스크로 정의
- 포스트잇 등에 테스크를 옮겨 적고, 벽면에 우선순위 별로 부착함
- 스크럼 미팅통해 할일, 진행중, 완료 순으로 벽에 붙임
- 소멸차트 이용 속도 확인

### Burn Down Chart (소멸 차트)
- 개발을 완료하기까지 남은 작업량을 보여주는 그래프
- 그래프의 하강 기울기를 통하여 스프린트의 속도를 조절



> 참고 사이트 [소프트웨어 개발 방법론](https://zeddios.tistory.com/24)