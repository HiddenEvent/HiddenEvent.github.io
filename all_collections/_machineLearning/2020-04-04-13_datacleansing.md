---
title: (Machine) 13. Data cleansing
excerpt: "머신러닝 데이터 전처리"
categories:
  - Machine
tags:
  - Machine
  - 머신러닝
last_modified_at: 2020-04-04
---

# # 학습 목표
데이터에 있는 여러 이슈(ex. 결측치, scale  문제 등)와 이 이슈들을 처리하기 위해 사용하는 방법들을 소개하고, 
pandas를 이용하여 데이터를 cleansing 하는 방법에 대해 공부해보자!!


# # 데이터가 없을 떄 할 수 있는 전략
- 데이터가 없으면 sample을 drop
- 데이터가 없는 최소 개수를 정해서 sample을 drop
- 데이터가 거의 없는 feature는 freature 자체를 drop
- 최빈값, 평균값으로 비어있는 데이터를 채우기

## 1. Nan값 처리하기


~~~python
raw_data = {'first_name': ['Jason', np.nan, 'Tina', 'Jake', 'Amy'],
        'last_name': ['Miller', np.nan, 'Ali', 'Milner', 'Cooze'],
        'age': [42, np.nan, 36, 24, 73],
        'sex': ['m', np.nan, 'f', 'm', 'f'],
        'preTestScore': [4, np.nan, np.nan, 2, 3],
        'postTestScore': [25, np.nan, np.nan, 62, 70]}
df = pd.DataFrame(raw_data, columns = ['first_name', 'last_name', 'age', 'sex', 'preTestScore', 'postTestScore'])
print(df)
########################
# 0      Jason    Miller  42.0    m           4.0           25.0
# 1        NaN       NaN   NaN  NaN           NaN            NaN
# 2       Tina       Ali  36.0    f           NaN            NaN
# 3       Jake    Milner  24.0    m           2.0           62.0
# 4        Amy     Cooze  73.0    f           3.0           70.0
~~~

~~~python 
1. isnull로 sum()을 하면 전체 null 개수 리턴 하고 
전체 row갯수로 나누어 백분율을 구함

df.isnull().sum() / len(df)
###################
# first_name       0.2
# last_name        0.2
# age              0.2
# sex              0.2
# preTestScore     0.4
# postTestScore    0.4
~~~

~~~python
2-1 nan값 데이터 Row를 날려버리기

df_no_missing = df.dropna()
print(df_no_missing)
##################
#   first_name last_name   age sex  preTestScore  postTestScore
# 0      Jason    Miller  42.0   m           4.0           25.0
# 3       Jake    Milner  24.0   m           2.0           62.0
# 4        Amy     Cooze  73.0   f           3.0           70.0
~~~

~~~python
2-2 Row 전체가 nan인 경우에 만 Row 삭제 하기

df_cleaned = df.dropna(how='all')
#################
#   first_name last_name   age sex  preTestScore  postTestScore
# 0      Jason    Miller  42.0   m           4.0           25.0
# 2       Tina       Ali  36.0   f           NaN            NaN
# 3       Jake    Milner  24.0   m           2.0           62.0
# 4        Amy     Cooze  73.0   f           3.0           70.0
~~~

## 2. Nan값에 값 치환
~~~python
1. 0으로 치환
df.fillna(0)

2. Colum의 평균값으로 치환
df["preTestScore"].fillna(df["preTestScore"].mean(), inplace=True)

#   first_name last_name   age  sex  preTestScore  postTestScore
# 0      Jason    Miller  42.0    m           4.0           25.0
# 1        NaN       NaN   NaN  NaN           3.0            NaN
# 2       Tina       Ali  36.0    f           3.0            NaN
# 3       Jake    Milner  24.0    m           2.0           62.0
# 4        Amy     Cooze  73.0    f           3.0           70.0
~~~