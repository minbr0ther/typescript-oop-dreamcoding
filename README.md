# typescript-oop-dreamcoding

## 타입스크립트 + 객체지향 프로그래밍 마스터 과정 [🔗Notion](https://private-sweater-384.notion.site/6deeb1d695004a999c1da7b8e3a3e154)

## **1.1 타입스크립트란?**

- 장점: statically typed
- class, interface, generics, types 등 사용 가능
- js 프로젝트에서 ts를 점진적으로 사용해서 진행해도 됨

## **1.2 타입스크립트가 뜨는 이유**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled.png)

### 1. 타입이 정적으로 정해짐

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%201.png)

- JS 는 동적으로 타입이 변환됨

  - 가독성이 떨어짐
  - 버그가 어디서 터질지 모름

- 즉각적으로 타입 에러 확인 가능
  - 실시간으로 에러 수정 가능
  -

### 2. 강력한 객체지향 프로그래밍 가능

- modularity : 객체 위주로 모듈성 있는 코드 작성 가능
- reusability : 재사용성 높아짐
- extensible : 객체 단위로 확장 가능
- maintainablity : 유지보수성 높음

## **1.3 타입스크립트 공부 하는 방법**

- 자바스크립트 기본 문법을 알아야 함
- 타입을 잘 알아야 함 (언제 어떤 타입을 어떻게 쓸줄 알아야 함)
- OOP 프로그래밍을 하는 법을 알아야함

## **1.4 필요한 준비물들 설치**

**- 설치 및 좋은 익스텐션 소개**: [https://youtu.be/bS9yTI2fC0w](https://youtu.be/bS9yTI2fC0w)

**- 단축키**: [https://youtu.be/EVxCdenPbFs](https://youtu.be/EVxCdenPbFs)

**- 마지막 익스텐션**: [https://youtu.be/m7wsrVQsVjI](https://youtu.be/m7wsrVQsVjI) (영상 제일 뒷부분에 소개해 드렸어요)

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%202.png)

항상 엄격하게 null을 체크할 수 있게 한다

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%203.png)

typeScript 설치하고 tsc(컴파일러) 버전 확인

## **1.5 꼭 북마크 해둬야 하는 사이트 🔖**

**TypeScript**: [https://www.typescriptlang.org](https://www.typescriptlang.org/download)

- 업데이트가 아주 빈번하게 릴리즈 됨 (가끔 핸드북이 못따라감 ㅜ)
- What’s new 를 자주 봐주는게 도움될듯

## **1.6 함께 공식 사이트 읽어 보기 (타입스크립트 포인트 정리)**

- 타입이 있는 자바스크립트로 어떤 프로젝트로 진행할 수 있다
- 자바스크립트에 타입이 더해져서 안전하게 프로그래밍 가능
- 오브젝트에 대해서 정확히 어떤 데이터가 들어있는지 파악 가능
- 빠르게 에러캐치 가능

### JavaScript and More

- 타입스크립트는 오픈소스 언어, 타입의 정의를 더해줌으로써 많이 쓰임
- 오브젝트의 데이터 모양, 방식을 제공함으로써 더 좋은 문서를 제공함
- 타입스크립트에서 타입 작성은 선택적으로 할 수 있다 (작성하지 않아도 된다)
- 타입 추론(type inference)를 통해서 코드를 많이 작성하지 않고 타입을 보장함

### A Result You Can Trust

- 모든 자바스크립트 코드는 유효한 타입스크립트다
- JS는 타입에 문제가 있어도 작동이 가능하다
- TS는 JS로 변환이 되는데 tsc 혹은 babel을 이용한다

### Gradual Adoption

- TS 사용은 binary choice 가 아니다
- 천천히 몇가지 의 파일들만 TS로 전환할 수 있다

## **1.7 심심풀이 땅콩 🥜 한번 사용해 보기**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%204.png)

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%205.png)

여러 버전을 호환할 수 있다 (이전 버전 선택할 수록 코드 용량 늘어남)

## **1.8 타입스크립트 컴파일러 툴 소개**

- node 에선 TS를 다 이해할 수 없음
- 브라우저는 TS를 바로 실행 할 수 없음

`tsc mian.ts` 를 통해서 자동으로 컴파일 된 `main.js` 생성 가능

TS를 한번에 node로 실행할 수 있게 만들어주는 명령어

```jsx
ts-node main.ts
```

TS 저장을 감시하여 바로 JS로 바꿔주는 모드

```jsx
tsc main.ts -w
```

# 기본 타입 마스터 하기

## **2.1 타입이란? (타입의 원칙)**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%206.png)

장점: 안정적인 프로그램 구동

어떤 타입을 변수로 받고 어떤 타입을 반환하는지 ✨

## **2.3 기본 타입 정리 1 (자바스크립트 간단 복습)**

- var을 쓰지 말자 (알아서 구 버전도 호환해줌)

## **2.4 기본타입 정리 2 (number, string, boolean, undefined, null)**

- _javaScript_
- _Primitive: number, string, boolean, bigint, symbol, null, undefined_
- _Object: function, array, ..._

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%207.png)

```tsx
// number
const num: number = -6;

// string
const str: string = 'hello';

// boolean
const boal: boolean = true;

// undefined : 값이 있는지 없는지 아무것도 결정된게 없음
let name: undefined; // 💩
let age: number | undefined; // ✨

// null : 비었다
let person: null; // 💩
let person2: string | null;
```

## **2.5 기본 타입 정리 3 (unknown, any, void, never, object)**

- any, unknown은 웬만하면 쓰지 않는 것이 좋다
  - 정말 불가피한 경우 타입을 사용할 수 없을 때만 사용
- void 는 생략 가능, 변수에 선언하지는 않음
- never 타입에는 절대 return이 올 수 없다 (throw error, 무한 loop)
- object 타입은 광범위하게 활용 될 수 있어서 쓰지 않는게 좋음

## **2.6 함수에서 타입 이용하기 (JS 💩 → TS ✨)**

```tsx
// JavaScript
function jsAdd(num1, num2) {
  return num1 + num2;
}

// TypeScript ✨
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

```tsx
// JavaScript
function jsFetchNum(id) {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

// TypeScript ✨
function fetchNum(id: string): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}
```

## **2.7 함수 타입 이용 (spread, default, optional)**

```tsx
// JS => TS (optional chaining)
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}
printName('steve', 'jobs');
printName('ellie');
printName('minhyung', undefined);
```

`lastName?: string` 로 해도 되고 (범용성 더 큼 ✨)

`lastName: string | undefined` 라고 해도 되지만 이런 케이스는

- printName('ellie'); 만 하는게 아닌
- printName('ellie', undefined); 써줘야 한다

```tsx
// default parameter
function printMessage(message: string = 'default message') {
  console.log(message);
}
printMessage(); // 'default message'
```

ts도 js와 마찬가지로 default parameter을 사용할 수 있다.

```tsx
// Rest parameter
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4, 5));
```

숫자 타입의 배열을 받을때 `number[]` 타입 표기

파라미터로 `...numbers` 과 같이 여러개를 받을 수 있다

## **2.8 배열과 튜플, 언제 튜플을 사용해야 할까?**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%208.png)

readonly가 있으면 그 배열은 절대 변경할 수 없다

### 튜플

서로 다른 타입을 한께 가질 수 있는 배열

```tsx
// Array (number[] === Array<number>)
const fruits: string[] = ['tomato', 'banana'];
const scores: number[] = [1, 2, 3, 4];
function printArray(fruits: readonly string[]) {}

// Tuple -> interface, type alias, class로 대체 예정
// (권장하지 않음 💩)
let student: [string, number];
student = ['name', 123];
student[0];
student[1];

// 튜플을 가장 잘 사용한 예시는 useState
const [name, age] = student;
```

## **2.9 타입스크립트의 꽃 🌷 Type Alias**

```tsx
/**
 * Type Aliases
 * 우리가 타입을 정의할 수 있음 😮
 */
type Text = string;
const name: Text = 'ellie';

// object type 도 정의 할 수 있음
type Student = {
  name: string;
  age: number;
};
const student: Student = {
  name: 'ellie',
  age: 12,
};
```

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%209.png)

String Literal Types를 사용하면 재할당 할 수 없다

## **2.10 진정한 타입스크립트의 시작! Union 타입**

유니온이란 또는 or로 이해하면 된다

발생할 수 있는 많은 케이스 중에 딱 하나만 담을 수 있을때 사용

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2010.png)

타입을 미리 정해두면 다음과 같이 작성할때 보기로 보여준다

```tsx
/**
 * Union Types: OR
 */
type Direction = 'left' | 'right' | 'up' | 'down';
function move(direction: Direction) {
  console.log(direction);
}
move('down');

type TileSize = 8 | 16 | 32;
const tile: TileSize = 16;

// function: login -> success, fail
type SuccessState = {
  response: {
    body: string;
  };
};
type FailState = {
  reason: string;
};
type LoginState = SuccessState | FailState;

function login(): LoginState {
  return {
    response: {
      body: 'logged in!',
    },
  };
}
```

## **2.11 필수 타입! Discriminated Union 🚀**

```tsx
function printLoginState(state: LoginState) {
  // bad 💩
  if ('response' in state) {
    console.log(`🎉 ${state.response.body}`);
  } else {
    console.log(`🥲 ${state.reason}`);
  }
}
```

로그인 상태에 따라서 각각 보여주는게 다르다, 조건문을 보면 좋지 않은 코드다

```tsx
// function: login -> success, fail
type SuccessState = {
  result: 'success'; // 새로 추가한 부분
  response: {
    body: string;
  };
};
type FailState = {
  result: 'fail'; // 새로 추가한 부분
  reason: string;
};
type LoginState = SuccessState | FailState;

function login(): LoginState {
  return {
    result: 'success',
    response: {
      body: 'logged in!',
    },
  };
}

function printLoginState(state: LoginState) {
  // good ✨
  if (state.result === 'success') {
    console.log(`🎉 ${state.response.body}`);
  } else {
    console.log(`🥲 ${state.reason}`);
  }
}
```

## **2.12 Intersection 타입 ✨**

```tsx
/**
 * Itersection Types: &
 */
type Student = {
  name: string;
  score: number;
};

type tWorker = {
  employeeId: number;
  work: () => void;
};

function internWork(person: Student & tWorker) {
  console.log(person.name, person.employeeId, person.work());
}

internWork({
  name: 'ellie',
  score: 1,
  employeeId: 123,
  work: () => {},
}); // ellie 123 undefined
```

**Discriminated 과는 다르게 &로 타입을 묶을 수 있다**

## **2.13 Enum은 무엇이고 좋은건가?**

여러 가지 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 함

변하지 않는 것이 보장되는 타입

💩 enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당 가능

⇒ 대체로 Union 타입 사용하는게 좋음 ✨

```tsx
type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
```

```tsx
/**
 * Enum (가능한 쓰지 않는 것이 좋다 💩)
 */
// JavaScript
const MAX_NUM = 6;
const DAYS_ENUM = Object.freeze({
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
});

// TypeScript
// 앞 글자만 대문자로 적는다 🚨
enum Days {
  Monday = 1, //default: 0
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
  /* 이렇게 문자열도 가능 (대신 다 입력해야 함)
  Monday = mon
  Tuesday = tue,
  Wednesday = wed,
  Thursday = thu,
  Friday = fri,
  Saturday = sat,
  Sunday = sun,
  */
}
console.log(Days.Monday);
```

## **2.14 타입 추론은 무엇이고, 써도 되나?**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2011.png)

inference : 타입 추론

타입을 계속 명시하기 보다는 알아서 자동으로 타입이 결정되는 경우

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2012.png)

타입을 명시해주지 않으면 다음과 같이 any로 씌여진다

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2013.png)

파라미터의 타입을 보고 리턴 타입을 유추한다

```tsx
/**
 * Type Inference (추론이 자동으로 되지만 좋은 방법은 아님 💩)
 */
let text = 'hello';
function print(message = 'hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2);
```

## **2.15 건방진 녀석 Type Assertion!**

내가 정말 정말 장담 할때 만 사용하는 타입 변환 방법(캐스팅)

```tsx
/**
 * Type Assertions 💩
 */
function jsStrFunc(): any {
  return 'hello';
}
const result = jsStrFunc();
// 나는 result라는 변수는 분명히 스트링 타입인 걸 알고 있어 (캐스팅)
console.log((result as string).length); // 첫번째 방법
console.log((<string>result).length); // 두번째 방법

const wrong: any = 5;
console.log((wrong as Array<number>).push(1)); // 😱

function findNumbers(): number[] | undefined {
  return undefined;
}
const numbers = findNumbers();
numbers!.push(2);
// !는 절대적으로 값이 있다고 확신할때 사용 😱 => 무조건 null이 아니야! => 실시간으로 어플리케이션 죽음
```

# 기본 타입, 연습할 시간

## **3.2 계산기 함수 만들기 ❓ 2022년 1월 6일**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2014.png)

```tsx
/**
 * Let's make a calculator 🧮
 */

type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

const calculate = (command: Command, a: number, b: number): number => {
  switch (command) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
};

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
```

## **3.5 좌표 게임 💡**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2015.png)

여기서 진행을 못했음 ㅜ

```tsx
/**
 * Let's make a game 🕹
 */
type Type = 'up' | 'down' | 'left' | 'right';

// object 타입을 써줘서 오류가 났었음 😱
const position = { x: 0, y: 0 };

const move = (direction: Type) => {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw Error(`unknown direction: ${direction}`);
  }
};

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
```

## **3.7 로딩 상태 표시 💡**

```tsx
{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (loadState: ResourceLoadState) => {
    switch (loadState.state) {
      case 'loading':
        console.log(`👀 ${loadState.state}...`);
        break;
      case 'success':
        console.log(`😀 ${loadState.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${loadState.reason}`);
        break;
      default:
        throw Error(`unknown state: ${loadState}`);
    }
  };

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
```

# 객체지향 프로그래밍

## **4.2 객체지향 개념 정리**

### Imperative Programming

### Procedural Programming

단점:

1. 함수가 여러곳에 얽혀 있어서 전체적으로 동작하는 느낌을 파악해야함
2. 사이드 이펙트가 일어나기 쉬움
3. 한눈에 어플리케이션 이해하기도 힘듬

### OOP Programming

1. Productivity: 생산성을 높여줌
2. higher-quality: 퀄리티를 높여줌
3. Faster: 속도를 더 빠르게 함

### Object → class

fields → properties

function → methods

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2016.png)

오브젝트는 클래스의 인스턴스다

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2017.png)

## **4.3 중요한 객체지향 원칙 🚀**

### 중요한 4가지 원칙

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2018.png)

1. Encapsulation 캡슐화

   1. 서로 관련있는 데이터와 함수를 오브젝트에 잘 넣어두고
   2. 외부에서 보일 필요가 없는 데이터를 잘 숨겨 놓음으로써
   3. 캡슐화를 할 수 있다
   4. 좋은 예시 (고양이의 상태를 외부에서 정할 수 없다)
      1. 간접적으로는 놀아주거나 밥을 줘서 상태를 변화시킬 수 있다

   ![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2019.png)

2. Abstraction 추상성
   1. 내부의 복잡한 기능을 다 이해하지 않고 외부에서 간단한 인터페이스를 통해서 사용할 수 있다
   2. 예를들어 우리는 커피머신을 어떻게 작동하는지(구현되었는지) 모르는 상태에서 외부 인터페이스를 통해 조작할 수 있다
3. Inheritance 상속성

   ![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2020.png)

   IS - A 관계

   - 에스프레소 머신은 커피머신이다

   ![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2021.png)

4. Polymorphism 다형성
   1. many + form ⇒ 다양한 형태라는 뜻
   2. 공통된 함수를 접근할 수 있다

## **4.5 절차지향적으로 커피기계 만들기 💡 2022년 1월 8일**

```tsx
const BEANS_GRAMM_PER_SHOT: number = 7;
```

보통 primitive 타입에서 숫자를 바로 할당하는 경우에는 타입 추론을 사용해서 `number`라고 적지 않아도 괜찮다

⇒ 조금 더 명시적으로 코딩 하기위해서 적어줘도 상관없다!

```tsx
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7; // 커피에 필요한 커피 양
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      // 예외처리
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT; // 예외처리 통과하면 커피빈 사용

    return {
      // CoffeeCup 타입으로 리턴
      shots, // shots:shots 이므로 생략
      hasMilk: false, // 우유를 사용하지 않았으니 false
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT; // 커피콩 충전 => 21g

  const coffee = makeCoffee(2); // 14g 사용
  console.log(coffee);
}
```

## **4.7 객체지향적으로 커피기계 만들기 💡 (static 사용)**

```tsx
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 외부에서도 클래스를 만들지 않고 사용 가능 (static)
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 외부에서도 클래스를 만들지 않고 사용 가능 (static)
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker); // CoffeeMaker { coffeeBeans: 32 }
  const maker2 = new CoffeeMaker(32);
  console.log(maker2); // CoffeeMaker { coffeeBeans: 32 }

  // 클래스를 만들지 않고 사용 가능 (static)
  const maker3 = CoffeeMaker.makeMachine(3);
}
```

## **4.8 Encapsulation 캡슐화 시켜보기 💡 2022년 1월 9일**

```jsx
{
	// public
  // private
  // protected : 외부에서 접근 못하지만 상속받은 클래스에서 접근가능
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // private 외부에서 변경 못함
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 외부에서도 클래스를 만들지 않고 사용 가능
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 외부에서 내부의 private를 간접적으로 조작할 수 있다
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than zero');
      }
      this.coffeeBeans += beans;
    }

		// some codes ...
  }

  const maker = CoffeeMaker.makeMachine(32); // constructor를 private로 만들어서 new 사용 불가능
  maker.fillCoffeeBeans(32);
}
```

## **4.10 유용한 Getter와 Setter (게터, 세터)**

```jsx
{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('age should be greater than zero');
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // Steve Jobs
  user.age = 6; // set으로 User안의 private 변수 조작 가능
  console.log(user.age);
}
```

## **4.11 Abstraction 추상화 몸소 느껴보기**

추상화는 인터페이스를 굉장히 간단하고 심플하게 만듬으로써 사용하는 사람이 간편하게 많은 생각을 하지 않고도 심플하게 사용할 수 있도록 도와줍니다.

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2022.png)

추상화를 통해 사용할 수 있는 메소드를 제한한다

⇒ 정말 필요한 함수만 노출해서 심플하고 직관적으로 사용 가능

### Interface

- 나랑 행동, 의사소통 하려면 내가 가진 규약을 통해서 내가 가진 행동을 할 수 있어 라고 명시해 놓는 constructor 계약서 같은 기능
- 인터페이스를 구현(implement)하는 클래스에서는 인터페이스에 적혀있는 모든 함수를 구현해줘야 한다
- 보통 I 라는 접두사(prefix)를 붙이는 경우도 있긴한데 엘리는 추천하지 않는다

```jsx
{
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // CoffeeMachine은 CoffeeMaker를 (반드시) 구현한다
  class CoffeeMachine implements CoffeeMaker {
    // some code ...

    // some code ...

    // 반드시 구현 🚨
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();

      return this.extract(shots);
    }
  }

  const maker = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);
}
```

## **4.12 Interface 인터페이스, 모든것의 시작**

```jsx

{
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // private 외부에서 변경 못함
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // some codes ...
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32); // constructor를 private로 만들어서 new 사용 불가능
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

	amateur.makeCoffee();
	/*
		grinding beans for 2
		heating up...
		Pulling 2 shots ... ☕️
		{ shots: 2, hasMilk: false }
	*/

	pro.makeCoffee();
	/*
		grinding beans for 2
		heating up...
		Pulling 2 shots ... ☕️
		{ shots: 2, hasMilk: false }
		cleaning the machine... ✨
	*/
}
```

사용자들은 클래스의 다른 복잡한 기능을 알 필요도 없고

이 인터페이스만 어떻게 사용하면 되는지 알면된다

## **4.13 Inheritance 상속으로 다양한 커피 기계 만들기💡 2022년 1월 10일**

```jsx
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker { // ...
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // 자식클래스에서 다시 생성자 생성
    constructor(beans: number, public readonly serialNumber: string) {
        // 부모생성자에는 coffeeBeans:number 를 전달해야함
        super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    makeCoffee(shots: number): CoffeeCup {
			// 부모의 가열 및 등등 메소드
      const coffee = super.makeCoffee(shots);
      // 자식 만의 새로운 메소드
			this.steamMilk();

      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'SSSS');
  const coffee = latteMachine.makeCoffee(1);

	// 부모에서는 접근 못하는 serialNumber에 접근 가능
  console.log(latteMachine.serialNumber);
}
```

## **4.15 Polymorphism 다형성 가좌아!**

### 다형성의 장점:

- 내부적으로 구현된 다양한 클래스들이 한가지의 인터페이스를 구현하거나
  동일한 부모클래스를 상속했을 때, 동일한 함수를 어떤 클래스인지
  구분하지 않고 공통된 API를 호출할 수 있다는 것이 큰 장점이다
- 하나의 인터페이스나 부모의 클래스를 상속한 자식, 클래스들이 인터페이스와
  부모클래스에 있는 함수들을 다른 방식으로 다양하게 구성함으로써 조금 더
  다양성을 만들어 볼 수 있는 것을 말합니다

```jsx
{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean; // optional 있을 수도 있고 없을 수도 있다
    hasSugar?: boolean; // 작성하지 않으면 없는거다 !
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker { //...
    }
  }

  class CaffeLatteMachine extends CoffeeMachine { //...
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true, // 새롭게 추가된 부분
      };
    }
  }

  // CoffeeMaker 인터페이스의 배열로 타입 지정
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  //
  machines.forEach((machine) => {
    console.log('--------------------------');
    machine.makeCoffee(1);
  });
}

/*
...
--------------------------
grinding beans for 1
heating up... 🔥
Pulling 1 shots ... ☕️
--------------------------
grinding beans for 1
heating up... 🔥
Pulling 1 shots ... ☕️
Steaming some milk... 🥛
--------------------------
grinding beans for 1
heating up... 🔥
Pulling 1 shots ... ☕️
*/
```

## **4.16 상속의 문제점 👨‍👩‍👧‍👦**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2023.png)

우유와 설탕을 상속 받는 우유-설탕 기계를 만들고 싶어요 !

⇒ 불가능함 (클래스는 오직 하나의 클래스만 상속할 수 있다 🚨)

### 1. 부모의 기능을 수정하면 부모를 상속하는 모든 자식 클래스에 영향을 미칠 수 있는 치명적인 단점이 있다

### 2. 새로운 기능을 도입하려고 할 때 어떤 상속 구조를 가져와야 할지 복잡해진다

## **4.17 모든것을 뒤엎는 Composition? 🍭**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2024.png)

상속 대신에 COMPOSITION을 더 선호하여 사용하라✨

필요한 기능을 가져와서 외부에서 주입 받음으로서 컴포지션을 사용해서 필요한 기능을 재활용 할 수 있다

컴포지션은 코드의 재사용을 굉장히 높여주는 아이다

```jsx
// 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭');

      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();

      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    //...
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    //...
  }

	// 궁극적인 목표 milk와 sugar을 사용
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  // CoffeeMaker 인터페이스의 배열로 타입 지정
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  //
  machines.forEach((machine) => {
    console.log('--------------------------');
    machine.makeCoffee(1);
  });
```

## **4.18 이번 챕터의 하이라이트 ✨(강력한 Interface!) 2022년 1월 11일**

클래스들 사이에 서로 상호 작용을 하는 경우에

클래스 자신을 노출하는 것이 아니라 계약서를 통해서 의사소통을 해야한다

⇒ 즉 interface를 사용해야 한다 ✨

- 💩 before: 클래스 간에 꽁꽁 커플링 되어 있었음
- ✨ after: 인터페이스를 통해 디커플링을 하였다
  - 코드를 극대화 해서 재사용 가능

```jsx
// Milk
const cheapMilkMaker = new CheapMilkSteamer();
const fancyMilkMaker = new FancyMilkSteamer();
const coldMilkMaker = new ColdMilkSteamer();

// Sugar
const candySugar = new CandySugarMixer();
const sugar = new SugarMixer();

// 위의 기계들을 사용하여 조금더 원하는 기능들을 조립해서
// 내가 어떤 커피 기계를 만들 건지를 결정할 수 있다
const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
const sweetMachine = new SweetCoffeeMaker(12, sugar);

const latteMachine = new CaffeLatteMachine(12, 'SS', cheapMilkMaker);
const coldLatteMachine = new CaffeLatteMachine(12, 'SS', coldMilkMaker);
const sweetLatteMachine = new SweetCaffeLatteMachine(
  12,
  cheapMilkMaker,
  candySugar
);
```

컴포지션을 통해서 상속을 사용하지 않고

커피머신 클래스에 필요한 다양한 형태의 우유와 설탕을 주입해서

우리가 원하는 다양한 형태의 오브젝트를 만들 수 있다

```jsx
class CoffeeMachine implements CoffeeMaker {
	// 전달받은 milkFrother, SugarProvider로 커피를 만든다
	constructor(
	  coffeeBeans: number,
	  private milk: milkFrother,
	  private sugar: SugarProvider
	) {
	  this.coffeeBeans = coffeeBeans;
	}

	// ...

	makeCoffee(shots: number): CoffeeCup {
    this.grindBeans(shots);
    this.preHeat();

    // 새로 추가된 부분
    const coffee = this.extract(shots);
    const sugarAdded = this.sugar.addSugar(coffee);

    return this.milk.makeMilk(sugarAdded);
  }
}

//새로 추가된 부분
interface milkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup;
}

interface SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup;
}

// 우유를 사용하지 않는 거품기 -> 아무것도 하지 않음
class NoMilk implements milkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup {
    return cup;
  }
}

// 설탕을 사용하지 않는 슈가 믹서
class NoSugar implements SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup {
    return cup;
  }
}

// 우유나 설탕 사용을 하고 싶지 않을때는 noXXX를 사용한다 ✨
const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
```

### 정리

- 상속이 무조건 나쁘고 컴포지션이 무조건 좋은 것은 아님
- 너무 수직적인 관계가 만들어지고 상속의 관계가 너무 깊다면 컴포지션을 대안으로 생각해보는게 좋다 ✨
- 컴포지션을 사용하여 필요한 기능들을 조립해서 확장 가능하고 재사용성 높고 유지보수가 쉬운 코드를 만들기 위해서 고민하고 개선한다 ✨

## **4.19 Abstract 클래스 사용 예시**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2025.png)

```jsx
const coffee = super.makeCoffee(shots);
```

위의 코드처럼 중요한 코드를 자식 클래스에서 구현하지 않는 심각한 실수를 할 수 있다 (이러한 경우를 방지하기 위해서 Abstract 클래스가 필요하다)

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2026.png)

abstract 클래스는 만들어지는 것을 목적으로 하지 않는다 (삭제)

```jsx
// Abstract
  abstract class CoffeeMachine implements CoffeeMaker {
    // ...

    // 자식에서 쓸 수 있게 protected
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();

      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // 자식클래스에서 다시 생성자 생성
    constructor(beans: number, public readonly serialNumber: string) {
      // 부모생성자에는 coffeeBeans:number 를 전달해야함
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

		// abstract 사용
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }
```

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2027.png)

추상 클래스를 사용한 클래스만 사용가능하다

### 정리

- 인터페이스에서 함수의 규격을 정의한 것처럼 a`bstract`는 함수 이름, 인자, 무엇을 리턴 하는지 정의해서 사용
- 공통적으로 쓰이면서 내부에서만 필요한 것 ⇒ `private`
- 외부에서 호출 할 수 있는 것 ⇒ `public`

# **객체지향 프로그래밍 연습시간**

## **5.3 객치지향 솔루션 함께 구현하기 💡 2022년 1월 12일**

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2028.png)

배열을 사용하지 않고 Stack을 구현하기 위해서 ‘연결리스트’ 가 필요하다

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2029.png)

데이터의 변화가 있을때마다 head가 움직인다

```tsx
interface Stack {
  readonly size: number; // 값을 변경할 수 없고 내부적으로 결정됨
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // readonly: 불변성 유지
  readonly value: string;

  // 다음의 스텍노드를 가르키거나 첫 노드의 경우 다음이 없다
  // next: StackNode | undefined;
  readonly next?: StackNode; // optional - ts 3.7v+ 문법
};
```

### undefined ≠ null, null == undefined

⇒ _null이 undefined를 포함한다_

```tsx
// 보통 인터페이스를 구현할때 ~Impl을 붙인다
class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode; //head는 StackNode를 optional로 가르킨다

  get size() {
    return this._size;
  }

  push(value: string): void {
    // 새로 만든 노드는 기존의 head가 가르키고 있는 노드를 가르킴
    const node: StackNode = { value, next: this.head };

    // head는 새로 만든 노드를 가르킴
    this.head = node;

    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      // null이 undefined를 포함한다
      throw new Error('Stack is empty!');
    }
    // 제거 하고자 하는 노드
    const node = this.head;

    // 현재 노드는 사라지기 때문에 현재의 다음 노드 가르키기
    this.head = node.next;

    this._size--;

    return node.value;
  }
}

const stack = new StackImpl();
stack.push('minbr0ther 1');
stack.push('bob 2');
stack.push('vivaldi 3');

while (stack.size !== 0) {
  console.log(stack.pop());
}
```

# 드디어 제네릭

## **6.1 제네릭 소개**

- 제네릭은 재사용성이 굉장히 높다
- 앞서 구현한 Stack은 ‘문자열’만 넣고 뺄 수 있다는 큰 결함이 있다
- 특징 : Flexible, Type, Reusable

## **6.2. 함수를 제네릭 하게 :)**

- 제네릭 뜻? 통상적인, 일반적인 다 포용하는 느낌

![Untitled](%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20+%20%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%86%E1%85%B5%E1%86%BC%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%80%E1%85%AA%E1%84%8C%209980f6de176446f09fd690e42ae4b329/Untitled%2030.png)

우리가 코딩을 하는 시점에 바로 타입이 정해진다

제네릭을 사용하면

⇒ 사용하는 사람이 어떤 타입인지 결정할 수 있다

⇒ 유연하지만 타입을 보장받을 수 있다

## **6.3 클래스를 제네릭 하게 :) 2022년 1월 15일**

```tsx
// 이거 아님 저거를 뜻함
interface Either<L, R> {
  // 제네릭의 타입은 쓰는사람이 결정한다
  left: () => number;
  right: () => number;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); //4
either.right(); //5

// 물론 오브젝트 타입도 받을 수 있다.
const best = new SimpleEither({ name: 'ellie' }, 'hello');
```

## **6.4 제네릭 조건**
