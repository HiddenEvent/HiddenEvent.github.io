---
title: (네트워크관리사 2급) 네트워크 일반
excerpt: "네트워크 일반과목 개념 정리"
categories:
  - network
tags:
  - 네트워크관리사2급
last_modified_at: 2020-08-15
---
💼📝🔑⏰ 📙📓📘📒🎓

# 💼 IPv4 주소 계산
아이피 주소 주정 방식에는 2가지 지정 방식이 존재한다.


## 📝 클래스기반 주소지정방식
1. `A 클래스`: 0 ~ 127
- 127은 loopback 주소라서 사용하지 않는다(1.0.0.0 ~ 126.255.255.255)
- 8bit 중 첫번째 1bit [0] 으로 시작
- 나머지 7비트는 `NETWORK ID` / 나머지 24 비트는 `HOST ID` ()
- 2^7 =  128 개의 
2. `B 클래스`: 128 ~ 191
- 128.0.0.0 ~ 191.255.255.255
- 16bit 중  첫번째 2bit [10] 으로 시작
- 나머지 14비트는 `NETWORK ID` / 나머지 16 비트는 `HOST ID` ()
- 2^14 =  16,384 개의 호스트의 수(컴퓨터의 수)
3. `C 클래스`: 192 ~ 223
- 192.0.0.0 ~ 223.255.255.255
- 24it 중  첫번째 3bit [110] 으로 시작
- 나머지 21비트는 `NETWORK ID` / 나머지 8 비트는 `HOST ID` ()
- 2^21 =  2,097,152 개의 호스트의 수(컴퓨터의 수)
4. `D 클래스`: 멀티캐스트용
- 224.0.0.0 ~ 
5. `E 클래스`: 연구용


## 📝 클래스 없는 주소지정방식
- IP주소가 고갈되어 가는 문제를 해결하기 위해 고안됨
- (/) 슬래쉬 표기법을 이용한다. ex) 190.87.140.205/29
- /29 가 의미하는 것은 preFix 나머지 3비트는 subFix 주소이다.
- 주소의 갯수는 subFix에 해당하는 2^3 = 8 개이다.
- 시작 주소 계산 : 기존 주소와 넷마스크 주소를 AND 연산을 하면 블록의 주소가 나온다.
- 마지막 주소 계산 : 넷마스크 주소를 not 연산 한 결과를 기존 주소와 or 연산을 해준다.


## 📝IPV4 vs IPV6 차이
IPV4 : 유니캐스트, 멀티캐스트, 브로드캐스트
IPV6 : 유니캐스트, 멀티캐스트, 애니캐스트


# 💼 IDS(침입탐지시스템) 문제
탐지 기법은 `오용 탐지 기법`과 `이상 탐지 기법`이 있다.

## 📝 오용탐지 기법
- 이미 발견되고 정립된 공격 패턴을 미리 입력해 두고, 거기에 해당하는 패턴을 탐지하는 기법이다.
- 알려진 공격 이외에는 탐지할 수 가 없어 새로운 공격에는 비효율적이다.
- 다른말로 Signature Base나 Knowledge Base로 불린다.
- 미탐율이 높다.

## 📝 이상탐지 기법
- 통계적 패턴을 분석하여 통계적 패턴과 일치하지 않을 경우 침입으로 간주하는 개념
- 오탐율이 높다

# 💼 리눅스 명령어
- 


# 💼 프로토콜 문제
- TCP = FTP(20,21),SMTP(25),TELNET(23)
- UDP = TFTP(69~70),DHCP(67~68),BOOTP,SNMP(161)
- 둘다 사용 = DNS(53)

# 💼 OSI 7계층 문제
물리 계층 - 리피터, 허브
데이터링크 계층 - 브릿지
네트워크 계층 - 라우터
이외에 상위계층 - 게이트웨이

# 💼 라우터 문제
## 📝 확인 문제
인터페이스 정보를 확인해라 : en - sh int - copy r s
접속한 사용자를 확인해라 : en - sh user - copy r s
라우팅 테이블을 확인해라 : en - `sh ip route` - copy r s
플래쉬를 확인해라 : en - show flash - copy r s
버전 및 부팅정보 등 : en - show version

## 📝 설정문제
### 🔑 주석 설정
en - conf t - int e 0 - description ICQA

### 🔑 클럭속도 설정 (56K로 설정하고), NVRAM에 저장하시오
en - conf t - int S2/0 - clock rate 56000

### 🔑 대역폭 설정 (2048로 설정하라), NVRAM에 저장하시오
en - conf t - int S3/0 - bandwidth 2048

### 🔑 Secondary 와 IP 설정
en - conf t - int F0/0
`ip add 192.168.2.1 255.255.255.252`
`ip add 192.168.2.1 255.255.255.252 se`

### 🔑 default-gateway 설정
en - conf t - ip default-gateway 192.168.0.10 


### 🔑 Telnet/AUX/console Port 설정에 접근하는 설정
`console 설정`
en - conf t - line console 0 - password NETPass - login 

`AUX 설정`
en - conf t - line aux 0 - password NETPass - login

### 🔑 Telnet 5분50초 동안 신호 없을 시 해당 세션을 자동종료 설정
en - conf t - line vty 0 4 - `exec-timeout 05 50`

### 🔑 Interface FestEthernet0/0을 활성화 시키고 저장
en - conf t - int F0/0 - no shutdown - 저장

### 🔑 dhcp 설정 네임을 icqa로 설정후 네트워크 설정
en - conf t - ip dhcp pool icqa - network 192.x.x.x 255.255.255.0

### 🔑 OSPF 설정
en - conf t - router ospf 1 - network x.x.x.0 0.0.0.255 area 1
en - conf t - router ospf 1 - network x.x.x.0 0.0.0.255 area 1

### 🔑 acess list 문제
en - conf t - int f0/0 - ip access-group 1 in - ip access-group 1 out