---
title: 플루터 기본
excerpt: "플루터 토이프로젝트"
categories:
  - flutter
tags:
  - flutter
  - android
  - 안드로이드
  - ios
  - 앱 개발
last_modified_at: 2020-02-26
---
### 1. 플루터의 프로젝트 구조 

![사진설명]({{ site.url }}{{ site.baseurl }}/assets/img/flutter/flutter_basic/img-01.PNG){: .align-center}

### 2. 기본 실행 코드 작성(StatelessWidget: 고정화면)
~~~java
import 'package:flutter/material.dart';

void main() => runApp(MyApp());// 앱 실행

class MyApp extends StatelessWidget { // 상태 변경이 없는 위젯. 한번 UI가 그려지면 그대로 있음
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {  // UI를 만드는 부분.
    return MaterialApp( // 구글 기본 디자인인 Material Design을 써서 앱을 만든다.
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold( //스케폴드 구조 (레이아웃의 스타일?)
        appBar: AppBar( // 앱의 상단 타이틀
            title: Text('헬로우 월드'),
        ),
        body: Text('헬로 월드',
          style:TextStyle(fontSize: 30),
        ) // 앱 화면에 표시되는 텍스트
      )

    );
  }
}
class HelloPage extends StatefulWidget {// 상태 변경을 할수 있는 위젯.
  final String title; // 전역변수에는 값이 변경할 수 없게 final을 규칙으로 한다.
  HelloPage(this.title); // 생성자를 만듬.

  @override
  _HelloPageState createState() => _HelloPageState();
}

class _HelloPageState extends State<HelloPage> {
  @override
  Widget build(BuildContext context) {
    return Text(widget.title,style:TextStyle(fontSize: 30)) ; // 전역변수에 있는 title을 가져온다.
  }

}
~~~

### 3. 버튼클릭시 상태값 변경 예제(StatefulWidget: 동적화면)

~~~java
import 'package:flutter/material.dart';

void main() => runApp(MyApp());// 앱 실행

class MyApp extends StatelessWidget { // 상태 변경이 없는 위젯. 한번 UI가 그려지면 그대로 있음
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {  // UI를 만드는 부분.
    return MaterialApp( // 구글 기본 디자인인 Material Design을 써서 앱을 만든다.
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HelloPage("hello World")

    );
  }
}
class HelloPage extends StatefulWidget {// 상태 변경을 할수 있는 위젯.
  final String title; // 전역변수에는 값을 변경할 수 없게 final을 규칙으로 한다.
  HelloPage(this.title); // 생성자를 만듬.

  @override
  _HelloPageState createState() => _HelloPageState();
}

class _HelloPageState extends State<HelloPage> {
  String _message = 'Hello World'; // '_'를 붙이면 private임
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: 
        FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: _changeMessage, // 메서드 호출
        ),
      appBar:AppBar(
        title: Text( widget.title )
      ),
      body: Text( _message , style: TextStyle (fontSize: 30))
    ); // 전역변수에 있는 title을 가져온다.
  }

  void _changeMessage() {
    setState(() { //setState는 상태를 변경하겠다.
      _message = "값 변경 확인";
    });
  }
}
~~~

### 4. 버튼클릭시 카운트 추가
~~~java
import 'package:flutter/material.dart';

void main() => runApp(MyApp());// 앱 실행

class MyApp extends StatelessWidget { // 상태 변경이 없는 위젯. 한번 UI가 그려지면 그대로 있음
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {  // UI를 만드는 부분.
    return MaterialApp( // 구글 기본 디자인인 Material Design을 써서 앱을 만든다.
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HelloPage("hello World")

    );
  }
}
class HelloPage extends StatefulWidget {// 상태 변경을 할수 있는 위젯.
  final String title; // 전역변수에는 값을 변경할 수 없게 final을 규칙으로 한다.
  HelloPage(this.title); // 생성자를 만듬.

  @override
  _HelloPageState createState() => _HelloPageState();
}

class _HelloPageState extends State<HelloPage> {
  String _message = 'Hello World'; // '_'를 붙이면 private임
  int _count = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: 
        FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: _changeMessage, // 메서드 호출
        ),
      appBar:AppBar(
        title: Text( widget.title )
      ),
      body: Center(
        child:Column(
          mainAxisAlignment: MainAxisAlignment.center,  //열 기준 가운데 정렬
          children: <Widget>[
            Text(_message, style: TextStyle(fontSize: 30),),
            Text('$_count', style: TextStyle(fontSize: 30),), // int를 String으로 형변환
          ],
        )
      )
    ); // 전역변수에 있는 title을 가져온다.
  }

  void _changeMessage() {
    setState(() { //setState는 상태를 변경하겠다.
      _message = "값 변경 확인";
      _count++;
    });
  }
}
~~~
> <https://flutter.dev/docs/reference/widgets>  [flutter doc 사용법페이지]
> <https://flutterstudio.app/>  [flutter Studio UI확인용] (실제로 개발하는 소스로 사용하기는 부적절)
> <https://material.io/design/> [material.io 사용법]