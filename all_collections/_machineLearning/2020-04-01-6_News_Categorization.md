---
title: (Machine) 6. News Categorization
excerpt: "python 기초"
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-04-01
---
```
들어가면서...
- 컴퓨터는 문자를 그대로 이해하지 못함 그래서 문자를 숫자로 바꿔줘야한다.
- 숫자로 유사하다는 것을 어떻게 표현할까? (유사하다 = 가깝다)
- 가깝다는 것을 숫자로 표현하기 위해서는 숫자를 벡터로 바꿔 좌표평면에 올라갈 수 있는 데이터로 만들어 준다면 가깝다는 기준을 설정 할 수 있다.
```

## 1. 학습 목표
List Comprehension, Data Structure(Collections), Pythonic Code 작성법 등을 기반으로
다른 패키지 사용 없이 Python 만을 이용하여 한 뉴스에 대해 비슷한 뉴스를 찾아내도록 작성된 코드를 분석해 보자!

## 2. one-hot Encoding (문자를 Vector로)
- 하나의 단어를 Vector의 index로 인식, 단어 존재시 1 없으면 0
- Bag of words 기법
  - 단어별로 인덱스를 부여해서, 한 문장(또는 문서)의 단어의 개수를 Vector로 표현

## 3. Cosine Distance 
- 두 점 사이의 각도를 이용해 유사성을 검증할 때 사용

## 4. Process
```
1) 파일을 불러오기
2) 파일을 읽어서 단어사전 (corpus) 만들기
3) 단어별로 index 만들기
  - split을 해준 상태에서 소문자로 바꾼다음 set으로 묶어준다.
  - 단어가 몇개인지 찾는 것이지, 총 단어수가 몇개 인지가 목적이 아니기에 set함수로 묶어주는 것이다.
  - Ordered dict로 index를 추가해준다.
4) 만들어진 인덱스로 문서별로 Bag of words vector 생성
5) 비교하고자 하는 문서 비교하기
6) 얼마나 맞는지 측정하기
```
- 위 내용은 [코드](https://github.com/HiddenEvent/ai_python_newsProject) 로 확인해 보라! 

