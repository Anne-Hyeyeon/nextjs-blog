# next.js로 블로그 만들기

# next.js 세팅하기

1. 프로젝트 설치할 폴더로 이동
2. 터미널에 npx create-next-app@latest 입력
3. 설정

```
What is your project named?  my-app
Would you like to use TypeScript?  No / Yes
Would you like to use ESLint?  No / Yes
Would you like to use Tailwind CSS?  No / Yes
Would you like to use `src/` directory?  No / Yes
Would you like to use App Router? (recommended)  No / Yes
Would you like to customize the default import alias (@/*)?  No / Yes
```

4. npm run dev로 서버 가동!

- 오류

```
ReferenceError: Request is not defined
```

- nvm(node.js 버전 관리 프로그램)을 이용해서, 최신 버전의 node.js 를 설치한다.

```
nvm ls // 이용할 수 있는 node 버전 조회
nvm use <version> // 특정 버전의 node 사용
nvm current // 현재 사용중인 버전
```

# next.js의 key concepts

## next.js의 라우팅

- next.js의 라우팅은 폴더로 결정한다.
- app 안에 새로운 폴더를 만들고, 그 안에 `page.tsx`를 만들면 폴더명의 주소를 가진 페이지 생성 완료.
- 페이지로의 이동은 <Link href="">를 이용한다.

## next. js의 layout

- layout : A layout is UI that is shared in multiple pages.
- 멋진 네비게이션 바를 만드는 데도 이용할 수 있다!

# 프로젝트 시작

- root에 components 폴더 만들기

# trouble shooting

## css loader 오류

```
./app/globals.css.webpack[javascript/auto]!=!./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[12].oneOf[12].use[2]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[12].oneOf[12].use[3]!./app/globals.css
SyntaxError: Unexpected token, expected "," (14:1)
```

- 원인 : tailwind.config.ts, tsconfig.json 파일에 구문 오류가 있었음.
- 해결 : 구문 오류 수정, json5 라이브러리 설치 (json 파일 인식)
