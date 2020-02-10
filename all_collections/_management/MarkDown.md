---
title : "MarkDown 사용법"
title: 마크다운 문법 공부
date: 2020-02-10
description: <center>마크다운 문법 공부</center>

categories:
- 마크다운
- 문법
- MARKDOWN

tags:
- MARKDOWN
- SYNTAX

toc: true
toc_label: "My Table of Contents"
toc_icon: "cog"

---


# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

제목 1
======

제목 2
------

이텔릭체는 *별표(asterisks)* 혹은 _언더바(underscore)_를 사용하세요.
두껍게는 **별표(asterisks)** 혹은 __언더바(underscore)__를 사용하세요.
**_이텔릭체_와 두껍게**를 같이 사용할 수 있습니다.
취소선은 ~~물결표시(tilde)~~를 사용하세요.
<u>밑줄</u>은 `<u></u>`를 사용하세요.

## 목록 (List)
1. 순서가 필요한 목록
1. 순서가 필요한 목록
  - 순서가 필요하지 않은 목록(서브) 
  - 순서가 필요하지 않은 목록(서브) 
1. 순서가 필요한 목록
  1. 순서가 필요한 목록(서브)
  1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  + 더하기(plus sign)
  
## 링크(Links)
[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"

## 이미지(Images)
![대체 텍스트(alternative text)를 입력하세요!](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명(title)을 작성하세요.")

![Kayak][logo]

[logo]: http://www.gstatic.com/webp/gallery/2.jpg "To go kayaking."

## 이미지에 링크
[![Vue](/images/vue.png)](https://kr.vuejs.org/)


<!-- more -->

>마크다운 언어 문법에 대해 알아보자.

# 헤딩을 표현하는 방법 
---

```
# 꽃은 피고 봄은 온다.
## 꽃은 피고 봄은 온다.
### 꽃은 피고 봄은 온다.
#### 꽃은 피고 봄은 온다.
##### 꽃은 피고 봄은 온다.
###### 꽃은 피고 봄은 온다.
```

아래와 같이 출력된다.<br>

# 꽃은 피고 봄은 온다.
## 꽃은 피고 봄은 온다.
### 꽃은 피고 봄은 온다.
#### 꽃은 피고 봄은 온다.
##### 꽃은 피고 봄은 온다.
###### 꽃은 피고 봄은 온다.
<br>
<br>
<br>

# 줄 바꾸는 법
---
&lt;br&gt; 혹은 문장의 마지막에서 스페이스 두번 후 엔터

무궁화 꽃이 피었습니다.무궁화 꽃은 너무나 아름답게 피었습니다.<br>
무궁화 꽃이 피었습니다.무궁화 꽃은 너무나 아름답게 피었습니다.
무궁화 꽆이 피었습니다. 문장은 엔터로 띄어서 썼으나 붙여서 출력됩니다.
밑줄을 표현하기 위해서는 문장은 &lt;br&gt;혹은 공백 2칸이 필요합니다.  
이렇게 말입니다.
```
&lt;br&gt; 혹은 문장의 마지막에서 스페이스 두번 후 엔터

무궁화 꽃이 피었습니다.무궁화 꽃은 너무나 아름답게 피었습니다.<br>
무궁화 꽃이 피었습니다.무궁화 꽃은 너무나 아름답게 피었습니다.
무궁화 꽆이 피었습니다. 문장은 엔터로 띄어서 썼으나 붙여서 출력됩니다.
밑줄을 표현하기 위해서는 문장은 &lt;br&gt;혹은 공백 2칸이 필요합니다.  
이렇게 말입니다.
```
<br>
<br>
<br>

# 밑줄 표현하는 법
---

```
# 넣을 문장
---
```

아래와 같이 출력된다.<br>

# 넣을 문장
---
<br>
<br>
<br>


# list를 표현하는 법(unordered list)
---

- list 1
- list 2
- list 3
* list 4
    - list 5
        + list 5-1
        + list 5-2
    - list 6
        + list 6-1
        + list 6-2      

```
- list 1
- list 2
- list 3
* list 4
    - list 5
        + list 5-1
        + list 5-2
    - list 6
        + list 6-1
        + list 6-2  
```
<br>
<br>
<br>

# list를 표현하는 법 2(ordered list)
---

1. list 1
2. list 2
3. list 3
     
```
1. list 1
2. list 2
3. list 3
```
<br>
<br>
<br>

# dl dt dd 표현
---

<dl>
    <dt>레시피</dt>
    <dd>1.레시피를 표현하는 방법</dd>
</dl>

```
<dl><dt>레시피</dt><dd>1.레시피를 표현하는 방법</dd></dl>
```
<br>
<br>
<br>

# table을 표현하는 법
---

| th | th | th |
|---|---|---|
| 지원 | 미지원 | 지원
| 미지원 | 지원 | 지원   
| 미지원 | 지원 | 지원   

```
| th | th | th |
|---|---|---|
| 지원 | 미지원 | 지원
| 미지원 | 지원 | 지원   
| 미지원 | 지원 | 지원   
```

<br>
<br>
<br>

# 문장 요소 표현
---

**강조**<br>
*기울기*<br>
~~취소선~~<br>
<u>파란나비야, 저 멀리 날아가는구나.밑줄</u><br>
`alert('즐기면서 하세요.')`<br>
>즐기면서 길게 하세요.

```
**강조**<br>
*강조*<br>
~~ddddd~~<br>
<u>파란나비야, 저 멀리 날아가는구나</u><br>
`alert('즐기면서 하세요.')`<br>
>즐기면서 길게 하세요.
```
<br>
<br>
<br>

# 그 외 요소들(abbr, acronym, sub, sup, etc)
---

일반적으로 <sup>두꺼비</sup>과의 개구리류를 통칭하기도 한다. <sub>몸길이 60~100 mm</sub> 이다. 등면은 보통 갈색이고 <cite>피부융기의 위끝 부분은 흑색이다</cite>. 몸통과 네다리의 등면에 불규칙한 흑갈색 무늬가 있다. 몸의 옆쪽에는 흑색 세로줄이 있다. 배면은 전체적으로 연한 황갈색이지만 황색을 띤 회백색의 개체도 있으며, 암갈색의 작은 무늬가 산재한다. 

머리는 몸에 비하여 크며 등면에 골질의 융기가 있다. <acronym title="안하무인 비만 선고ㅋㅋ">안비선(眼鼻線)</acronym>이 현저하고 주둥이의 등면과 뺨 부분이 약간 패어 들어갔다. 고막은 원형 또는 타원형이고 작다. 귀샘은 길고 뚜렷하다. 몸통 등면에는 많은 피부융기가 있고 네다리는 보통 짧다.

암컷은 수컷에 비하여 몸길이가 길고 다리는 짧으며 피부융기는 조밀하고 무늬가 좀 더 확장되어 있다. 주로 육상에서 생활하며 곤충류나 지렁이 등을 포식한다. 산란기에는 하천이나 늪 등에 모여들고 이 시기 이외에는 습한 곳에서 생활하는 것으로 알려진다. 한국, 일본, 중국, 몽골 등지에 분포한다. 
한국 민속에서는 집 지킴과 재복(업)의 상징으로 여겨지기도 한다.

<abbr title="인정?">ㅇㅈ?</abbr>

```
일반적으로 <sup>두꺼비</sup>과의 개구리류를 통칭하기도 한다. <sub>몸길이 60~100 mm</sub> 이다. 등면은 보통 갈색이고 <cite>피부융기의 위끝 부분은 흑색이다</cite>. 몸통과 네다리의 등면에 불규칙한 흑갈색 무늬가 있다. 몸의 옆쪽에는 흑색 세로줄이 있다. 배면은 전체적으로 연한 황갈색이지만 황색을 띤 회백색의 개체도 있으며, 암갈색의 작은 무늬가 산재한다. 

머리는 몸에 비하여 크며 등면에 골질의 융기가 있다. <acronym title="안하무인 비만 선고ㅋㅋ">안비선(眼鼻線)</acronym>이 현저하고 주둥이의 등면과 뺨 부분이 약간 패어 들어갔다. 고막은 원형 또는 타원형이고 작다. 귀샘은 길고 뚜렷하다. 몸통 등면에는 많은 피부융기가 있고 네다리는 보통 짧다.

암컷은 수컷에 비하여 몸길이가 길고 다리는 짧으며 피부융기는 조밀하고 무늬가 좀 더 확장되어 있다. 주로 육상에서 생활하며 곤충류나 지렁이 등을 포식한다. 산란기에는 하천이나 늪 등에 모여들고 이 시기 이외에는 습한 곳에서 생활하는 것으로 알려진다. 한국, 일본, 중국, 몽골 등지에 분포한다. 
한국 민속에서는 집 지킴과 재복(업)의 상징으로 여겨지기도 한다.

<abbr title="인정?">ㅇㅈ?</abbr>
```
<br>
<br>
<br>

# 링크 표현하는 법
---

[Google](https://www.google.com/)  
[naver](https://www.naver.com/)

```
[Google](https://www.google.com/)  
[naver](https://www.naver.com/)
[내가 지은 링크이름](링크주소)
```
<br>
<br>
<br>

# 이미지 표현하는 법
---
![](http://ww1.sinaimg.cn/mw690/81b78497jw1emfgwkasznj21hc0u0qb7.jpg)

![Caption](http://ww3.sinaimg.cn/mw690/81b78497jw1emfgwjrh2pj21hc0u01g3.jpg)

![](http://ww2.sinaimg.cn/mw690/81b78497jw1emfgwil5xkj21hc0u0tpm.jpg)

```
![](http://ww1.sinaimg.cn/mw690/81b78497jw1emfgwkasznj21hc0u0qb7.jpg)

![Caption](http://ww3.sinaimg.cn/mw690/81b78497jw1emfgwjrh2pj21hc0u01g3.jpg)

![](http://ww2.sinaimg.cn/mw690/81b78497jw1emfgwil5xkj21hc0u0tpm.jpg)

```
<br>
<br>
<br>

# 이미지에 링크걸기
---
[![](http://ww1.sinaimg.cn/mw690/81b78497jw1emfgwkasznj21hc0u0qb7.jpg)](https://www.naver.com/)

```
[![](https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/58/3a/42/583a42c5-881a-5c67-ecf2-c38177fd0468/AppIcon-1x_U007emarketing-85-220-0-8.png/246x0w.jpg)](https://www.naver.com/)

```
<br>
<br>
<br>

# 글 정렬하기
---
> 마크다운은 가운데 정렬만 지원한다.
<center>가운데</center>  
<div style="text-align: left"> 왼쪽 </div>
<div style="text-align: right"> 오른쪽 </div>


```
<center>가운데</center>  
<div style="text-align: left"> 왼쪽 </div>
<div style="text-align: right"> 오른쪽 </div>
```
<br>
<br>
<br>

# 인용문 표현하는 법
---

>d
>>d
>>>ddd
>>>>dddd
>>>>>ddddd

```
>d
>>d
>>>ddd
>>>>dddd
>>>>>ddddd
```
<br>
<br>
<br>