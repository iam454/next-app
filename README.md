# Next.js 👋

넥스트 13을 공부해보자(처음 써봄).

[생활코딩 Next.js 13 강의로 공부중](https://www.youtube.com/watch?v=9KOaR6QMb9A&list=PLuHgQVnccGMCwxXsQuEoG-JJ7RlwtNdwJ&index=2)

2023년 12월 14일 ~ 진행 중

<br />

## 🏁 시작하기

현재 폴더에 최신 버전의 next 프로젝트 세팅하는 법은 다음과 같다.

```zsh
npx create-next-app@latest .
npm run dev
```

<br />

<h1>Today I Learned</h1>
<details>
  <summary>DAY 1 - 23.12.14</summary>
  <div>

### 내용

수강한 강의 : 0강, 1강

```
1️⃣ 넥스트는..

Next.js는 리액트를 기반으로 하는 풀스택 웹 어플리케이션 프레임워크다.
-> 풀스택 : 프론트(리액트와 같음) + 백(express와 유사)
-> 웹 어플리케이션 : 웹 앱을 만드는 도구
-> 프레임워크 : 큰 뼈대는 넥스트가 다 해놨으니까 쫌만 하면 된다~!


2️⃣ CSR vs SSR

리액트는 CSR
스크립트 파일을 다운받아야만(브라우저가 스크립트를 실행해야만) 화면이 보임.
즉, js가 실행되지 않는 환경에서는 화면이 표시되지 않기 때문에 검색엔진과 같은 robot들이 컨텐츠를 이용할 수 없다!!

넥스트는 SSR을 지원한다!
서버에서 js가 실행됨.
즉, 브라우저에서 이미 완성된 html을 보기 때문에 검색엔진 친화적임!
+ 사용자도 더 빨리 화면을 볼 수 있음!
```

### 회고

```
1️⃣ node -v

next 플젝 세팅하는데 node 버전이 낮다고 터미널한테 혼났다.
귀찮아서 버전 업데이트하는거 맨날 미뤘는데.. 반성 중
16버전 쓰고 있었는데 LTS가 20이네 ㅋㅋ
+ 공식문서 보니까 18 이후로 써야하네..


2️⃣ SEO

왜 SSR이 SEO에 더 좋다 이런지 이제야 알았다.
```

### 추후 액션

```
1️⃣ next 13 전에는 어찌 했을까(page router)

13 이후로 많이 달라졌다 하는게 이거 때문이군
나중에 시간나면 알아봐야지


2️⃣ server component

아직 모르는데 슬쩍 이름만 들어본 개념이다.


3️⃣ create-next-app@latest

일단은 처음 써보니까 강의 나온대로 따라쳤는데 항상 latest로 해야하는건가?
뭔가 @ 뒤로 버전 쓰고 싶게 생김.
근데 공식문서 보니깐 가이드가 latest로 쓰고 있넹
```

  </div>
</details>
