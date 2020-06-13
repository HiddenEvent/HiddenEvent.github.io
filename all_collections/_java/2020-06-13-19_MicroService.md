---
title: (spring) 마이크로서비스 만들기
excerpt: "Discovery 아키텍쳐 구축"
categories:
  - Spring 
tags:
  - Spring
  - eclipse
last_modified_at: 2020-06-13
---

💼📝🔑⏰ 📙📓📘📒🎓

```
1 예제 프로젝트 : eureka-server
2 예제 프로젝트 : service-one
3 예제 프로젝트 : service-two
```
# 💼 Micro Service
- 독립적으로 서비스를 개발하고 배포할 수 있는 아키텍처 
- 각 서비스는 독립적인 프로세스에서 실행되고 이를 통해 경량 애플리케이션 모델 구현

## 📝 Micro Service 장점
- 출시 주기 단축 
	+ 개발 주기 단축으로 보다 민첩한 배포 및 업데이터 지원
- 높은 확장성 
	+ 특정 서비스에 대한 수요가 증가할 경우 여러 서버 및 인프라에 쉽게 배포
- 뛰어난 복구 능력 
	+ 제대로 구현된 독립적인 서비스는 서로에게 영향을 주지 않기 때문에 한 부분에서 장애가 발생하더라도 전체 애플리케이션이 다운되지 않습니다.

- 손쉬운 배포 
	+ 모듈화 되고 규모가 작아졌기 때문에 배포에 대한 우려 사항 감소
- 편리한 액세스
	+ 큰 애플리케이션을 작은 조각으로 분할했기 때문에 개발자들이 각 조각을 파악하고 개선하기가 용이해짐
- 개방성 향상 
	+ 다중 언어 지원 API 사용 → 필요한 기능에 맞는 최적의 언어와 기술 선택 가능

# 💼 Service Discovery Architecture
- 서비스 등록 
	+ 서비스를 서비스 디스커버리 에이전트에 어떻게 등록하는가
- 클라이언트가 서비스 주소 검색 
	+ 서비스 클라이언트가 어떻게 서비스 정보를 검색하는가
- 정보 공유 
	+ 서비스 정보를 노드 간에 어떻게 공유하는가
- 상태 모니터링 
	+ 서비스가 자신의 상태 정보를 서비스 디스커버리 에이전트에 어떻게 전달하는가

![아키텍쳐 구조도](/assets/img/common/2020-06-13-15-48-08.png)


## 📝 서비스 디스커버리 서버 (Eureka Service) 구축
![1. springStartProject 생성](/assets/img/common/2020-06-13-15-50-20.png)

![2. 스프링 디펜던시 세팅](/assets/img/common/2020-06-13-15-53-40.png)

![3. @EnableEurekaServer를 추가면 서버역할을 하게 된다.](/assets/img/common/2020-06-13-16-09-01.png)

**4. application.properties 설정**
~~~yml
server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
~~~

## 📝 1번쨰 프로젝트

![1.두번째 프로젝트 생성](/assets/img/common/2020-06-13-16-15-15.png)
![2.디펜던시 설정](/assets/img/common/2020-06-13-16-17-18.png)

**3. @EnableEurekaClient 등록하는 작업**
~~~java
@SpringBootApplication
@EnableEurekaClient  //등록시키는 작업은 이게 끝임...
public class ServiceOneApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceOneApplication.class, args);
	}

}
~~~
**4. application.properties 설정**
~~~yml
server.port=8083

eureka.instance.prefer-ip-address=true
eureka.client.register-with-eureka=true
eureka.client.fetch-registry=true      
eureka.client.service-url.default-zone=http://localhost:8761/eureka
spring.application.name=serviceone
~~~

**5. 테스트할 컨트롤러 생성**
~~~java
@RestController
public class DemoController {
	@GetMapping(path = {"/"})
	public String home() {
		return "This is service one 이당";
	}
	@GetMapping(path = {"/get-time-string"})
	public String getTimeString() {
		SimpleDateFormat sdf = 
				new SimpleDateFormat("yyyy-MM-dd");
		return sdf.format(new Date());
	}
}

~~~

# 실행방법
1. 서버를 먼저 실행하고
1. 1번 프로젝트 실행하면 등록되어 있는것이 확인된다.
1. 2번 프로젝트 실행하면 등록되어 있는것이 확인된다.
1. 자세한 코드는 service-two에서 확인