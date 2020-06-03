---
title : "AdapterView와 Adapter의 관계"
toc: true
toc_sticky: true
toc_label: "<a href='/language/kotlinApp/'>안드로이드 기본2</a>"
categories:
  - 안드로이드
tags:
  - 자바
  - java
last_modified_at : 2020-06-02
---

💼📝🔑⏰ 📙📓📘📒🎓
```
AdapterView와 Adapter 객체의 관계에 대해서 설명하시오.
```

# 💼 AdapterView
- AdapterView는 여러개의 자식 View를 통합하여 화면에 표시할 수 있다.
- LinearLayout, RelativeLayout과 같이 배치만 담당하는 레이아웃과는 달리 사용자와 상호 작용도 처리할 수 있으며 항목의 선택이 가능하다.
- 표시할 항목(데이터)를 Adapter 객체로부터 전달받아 화면에 출력한다.
- 항목의 개수는 제한이 없으며, 실행 중에 항목이 바뀔 수 있고 표시할 수 있는 데이터의 원본도 다양하다.

## 📝 ListView
- 여러 개의 항목들을 수직으로 표시하는 위젠이며, 주소록이나 상품 목록과 같이 다수의 항목을 출력해야 하는 앱에서 많이 사용된다.
- ListView가 출력하는 항목(데이터)은 임의의 View이며, 레이아웃을 사용하면 어떠한 형태로든 정보를 표현할 수 있다.
- Adapter로부터 받은 항목들을 수직으로 펼쳐서 보여준다.

## 📝 Spinner
- ListView는 항목이 항상 펼쳐져 있지만, Spinner는 클릭할 때만 팝업으로 펼처짐
- 목록을 보려면 팝업을 열어야 하고 선택을 위해 최소한 두번 클릭해야 함
- Spinner도 Adapter로부터 데이터를 공급받으며 Adapter를 만드는 방법은 ListView와 동일하다.

# 💼 Adapter와 AdapterView를 이용한 기본적인 동작
- Adapter 객체는 화면에 출력될 데이터를 관리하는 객체이다.
- AdapterView는 Adapter가 전달한 데이터를 화면에 출력하는 위젯이다.
- Adapter라는 객체가 데이터들을 가지고 있다가 이 데이터들을 AdapterView로 넘겨준다.
- 그러면 AdapterView에 있는 ListView객체나 Spionner객체에 전달 받아서 Acitvity 쪽으로 다시 넘겨주면
- Acitvity는 화면에 출력해주게 된다.

# 💼 AdapterView와 Adapter 객체의 관계
위에서 보다시피 AdapterView 위젯의 하위 위젯으로 LListView 위젯과 Spinner위젯이 존재한다. AdapterView는 두개의 하위 위젯을 사용하여 사용자와 상호 작용할 수 있는 뷰를 만들어 주는 역할을 하는 것이다.
여기서 생각해야될 부분은 사용자와 상호작용 할 수 있는 뷰를 만들어 주긴 하는데 도대체 무엇을? 이라는 생각을 갖어야 한다.
그래야 Adapter라는 객체를 이해하기 쉬울 것이다.
보다시피 사용자와 상호작용 할 수 있는 뷰 만 가지고는 사용자가 상호 작용 할 것이 무엇인지 모른다.
그렇기 때문에 Adapter라는 객체를 생성해서 사용자와 상호작용할 데이터를 넣어주고 AdapterView위젯에 넘겨줌으로써 상호작용 할수 있는 데이터가 있는  완전한 뷰가 탄생하게 되는 것이다!