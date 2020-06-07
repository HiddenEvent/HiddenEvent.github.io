---
title : "AlertDialog 객체"
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
AlertDialog객체와 Builder 객체의 관계를 설명하시오.
```
# 💼 AlertDialog란?
- 사용자에게 전달사항을 알리고 질문을 통해 사용자의 선택을 받아들이는 사용자와 애플리케이션 사이의 기본적인 통신수단이다.(상호작용 기능)
- 다이얼로그는 액티비티 위에 나타나는 작은 윈도우이며, 다이얼로그 아래에 놓인 액티비티는 포커스를 잃고, 다이얼로그가 사용자와의 상호작용을 처리한다.
- 하나의 제목, 최대 세 개의 버튼, 선택 가능한 품목/목록 또는 사용자 지정 레이아웃을 표시할 수 있는 대화상자
- Toast도 사용자에게 내용을 알리는 방법 중 하나이지만, 사용자와 상호작용을 할 수 없기 때문에 AlertDialog보다 활용성이 떨어진다.
- Toast 보다 좀 더 복잡한 메시지를 전달할 때 이용되며, Dialog 객체는 사용방법이 복잡하기 때문에 간단한 AlertDialog를 주로 사용한다.
- 문자열 메시지뿐만 아니라 타이틀이나 아이콘도 출력할 수 있으며 버튼을 통해 사용자의 입력을 받아들일 수도 있다.
- AlertDialog의 생성자는 protected로 숨겨져 있으므로 직접적으로 생성할 수 없으며 내부 클래스인 Builder를 통해 생성해야 한다.
- ALertDialog.Builder 객체를 먼저 생성하고, 이 객체의 메소드들을 호출해서 객체 생성 전에 필요한 속성을 지정한 AlertDialog 객체를 생성함.



## 📝 Dialog의 종류
- `AlertDialog ` : 0~3개의 버튼 및 체크박스나 라이도 버튼을 가지는 다이얼로그이며, 가장 대표적인 다이얼로그임
- `ProgressDialog` : AlertDialog의 하위클래스이며, 서비스의 진행을 확인하는데 사용됨
- `DataPickerDialog` : 날짜를 선택할 수 있음
- `TimePickerDialog` : 시간을 선택할 수 있음

## 📝 AlertDialog 출력 과정
1. AlertDialog.Builder를 생성한다.
2. 그 다음 Builder객체는 AlertDialog객체가 필요로 하는 내용 정의 하게 되는데 setTitle로 타이틀 명을 정의하고, setIcon으로 그림을 넣을 수도 있고, setMessage로 전달할 내용을 정의 하는 설정을 하게 된다.
3. 이후 create를 통해서 AlertDialog를 생성해준다.
4. 그 다음 show를 통해서 AlertDialog를 화면에다 뿌려줄 수 있게된다.

# 💼 Builder 객체
- 메시지, 아이콘 및 각종 버튼 등의 적용 옵션들이 많아서 생성자를 통해서 하나씩 모두 지정하기 번거로우므로 별도의 Builder 객체의 메소드를 이용하여 정의한다.
- Builder 객체는 일단 생성해 놓고 필요한 메소드를 호출할 수 있어 생성자보다 편리하다.
- AlertDialog.Builder() 함수를 통해 Builder 객체를 생성함
- 인수로 콘텍스트를 전달하는데 AlertDialog를 생성하는 액티비티를 전달함
- Builder 객체를 생성한 후에 Builder 객체의 메소드(setMessage, setTitle, setIcon)를 통해 AlertDialog의 여러 가지 설정을 정의한다.
- `create() 메소드` :  Builder 객체의 create 메소드는 AlertDialog를 생성(메모리에 올리는 것)만 하고 화면으로 출력하지는 않는다.
- `show() 메소드` : show 메소드를 통해서 화면에 나타나게 된다.

# 💼 Builder 호출 및 반환
- new AlertDialog.Builder는 Context객체를 생성자 매개변수로 받는다.
- Activity는 Context를 상속하고 있으므로 자기 자신이 객체를 넣는다.
- Builder 객체의 생성자와 속성에 관한 설정 메소드들은 모두 Builder 객체, 자체를 반환한다.
- Builder 객체의 생성 후, 별도의 메소드 호출문을 따로 작성할 필요없이 반환되는 Builder 객체에 대한 메소드들을 연쇄적으로 호출해도 상관없음
- Builder 객체에 별도의 이름을 줄 필요도 없고 순서대로 메소드를 호출함
- new 연산자는 Builder를 생성하며, AlertDialog는 최종적으로 호출되는 show 메소드에 의해 생성되어 화면에 보인다.

# 💼 AlertDialog객체와 Builder 객체의 관계에 대한 정리
Builder객체의 속성에 관한 설정 메소드들은 반환되는 값들이 모두 Builder객체이기에 AlertDialog를 보여주기위 한 모든 속성들을 정의 해주는 역할을 한다고 생각하면 된다.
다 정의한 후에는 AlertDialog는 최종적으로 show 메소드에 의해 생성이 되며 화면에 보여지게 되는데, 이때 메모리에 아무것도 남지 않고 AlertDialog만 남게 된다. 
왜냐하면 show메소드는 AlertDialog를 뿌려주려고 하는 과정에서 AlertDialog가 없는 경우 자동으로 create 메소드를 통해서 생성하게 된다.