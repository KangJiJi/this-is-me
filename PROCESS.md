# 프로젝트 제작 프로세스

## A-Z

완벽하지는 않지만 혼자 디자인부터 배포까지 프로젝트를 진행하였다.

## 내용 구상

&nbsp;개인 포트폴리오 사이트를 만들기 위해서 처음으로 시작했던 작업은 `내용 구상`이다. 어떤 내용을 적을지에 대한 대분류 리스트를 만들고 대략적인 내용을 적는다.

- 제목
- 사진, 이름, 연락처, GitHub, Blog
- 기술, 학력과 자격증
- 자기소개(2~5줄)
  - 어떤 경력/경험을 가졌는가
  - 관심사
  - 내가 어떤 개발자인가
- 경험
  - 학교에서 진행한 프로젝트
  - 개인적으로 진행한 프로젝트

## 디자인(1)

&nbsp;두 번째로 진행한 작업은 `디자인`이다. 보통은 `포토샵`이나 `여러 프로그램`을 사용하지만, 나는 가장 직관적이고 현재 익숙한 프로그램인 `그림판`을 이용하기로 했다. 이틀간 고쳐가면서 다음과 같은 디자인을 만들었다.

![포트폴리오 디자인 초안-1](https://user-images.githubusercontent.com/22635168/90533770-e8d6ac80-e1b3-11ea-9e21-3dcbf586c860.png)

위 디자인은 초안이기 때문에 언제든지 변경될 수 있다. 그리고 디자인을 구현하기 위해서 컴포넌트 단위로 나누고 컴포넌트에 `class`를 붙이는 작업을 했다. 결과물은 다음과 같다.

![포트폴리오 디자인 초안-2](https://user-images.githubusercontent.com/22635168/90534116-51258e00-e1b4-11ea-846e-48d82ddbeb88.png)

## 디자인(2)

&nbsp;`그림판`으로 제작한 디자인 초안은 색상이 없고 대략적인 구조만 잡았기 때문에 색상을 고르기 시작했다. 한 가지 `주색(Primary Color)`을 고르고 주색에 대한 `보조색(Secondary Color)`을 골랐다. 주색과 보조색은 `Hue`는 같으며 `채도`는 다른 색으로 고른다.

- 주색: #0fbcf9
- 보조색: #4bcffa

그리고 주색과 보조색만으로는 너무 밋밋하기 때문에 `두 번째 주색`을 고른다. 두 번째 주색은 첫 번째 주색과 `대비되는 색상`으로 고른다. 그리고 `흰색`과 `검은색`도 고른다.

- 주색2: #ee2560
- 흰색: #f4f4f4
- 검은색: #08182b

`60-30-10 법칙`을 따라서 `60%`와 `30%`를 이용해서 배경 색을 배분하고, 강조하고자 하는 요소나 글에 `10%`를 배분한다.

## 구현

&nbsp;`CRA`를 통해서 프로젝트를 만들고 `Eslint`와 `Prettier`를 설정 후 구현을 시작한다. 반응형 웹으로 만드는 것을 구상했기에 css의 `media query`를 이용해서 각 화면 `width`별 layout을 잡아준다.

- small phones: `@media only screen and (max-width: 374px)`
- phones: `@media only screen and (min-width: 375px) and (max-width: 767px)`
- portrait tablets: `@media only screen and (min-width: 768px) and (max-width: 1023px)`
- landscape tablets: `@media only screen and (min-width: 1024px) and (max-width: 1439px)`
- desktop: `@media only screen and (min-width: 1440px)`

그리고 layout에 들어갈 컴포넌트들을 구현한다.

## 문제점

&nbsp;개인 정보를 보여주는 컴포넌트에서는 입력할 내용이 별로 없었기에 너무 `비어있는 공간`이 `이상한 디자인`으로 발전했다. 그래서 적은 내용에도 잘 맞는 디자인을 다시 시작했다. 위 `내용 구상`과 `디자인`과정을 다시 한번 거치게 됐다. 다음과 같이 `그림판`으로 디자인을 한다.

![포트폴리오 개인 정보 디자인 초안-1](https://user-images.githubusercontent.com/22635168/90536572-30126c80-e1b7-11ea-97a1-a5c733cae65a.png)

그리고 다시 한번 컴포넌트 단위로 나눈다.

![포트폴리오 개인 정보 디자인 초안-2](https://user-images.githubusercontent.com/22635168/90536748-6d76fa00-e1b7-11ea-8508-d47d77d9ed1e.png)

이제 다시 구현을 시작한다.

## 완성

&nbsp;크롬 `개발자 도구`를 통해 여러 `Screen size`에서의 `layout`을 보면서 완벽하다고 생각되면 1차적으로 프로젝트를 완성한다.

## 배포

&nbsp;`gh page`가 아닌 직접 서버를 운영하기 위해서 이미 있는 `GCP`에 `NginX`를 실행시키고 특정 디렉토리의 `index.html`을 배포하도록 한다. 그리고 로컬에서 `GCP`로 `build`결과물을 올리기 위해서 `Shell script`를 이용한다. `sftp`를 통해 자동으로 `GCP`컴퓨터에 `build`결과물을 전송하도록 한다. 그리고 마지막으로 `package.json`에 `배포 script`를 추가한다.

## Evolution

&nbsp;아직 구현하지 못한 기능들이 많다.

- 다국어 지원
- og태그
- lazy loading
- https

이제 지속적으로 관리하면서 위 기능들을 구현하고 적용시켜야 한다.
