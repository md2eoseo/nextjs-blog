---
title: 'JavaScript: var, let, const'
date: '2021-07-26'
---

# var

- 함수 스코프에 종속된다.
- for 루프(블록 스코프) 내에서 선언한 var 변수는 for 루프 밖에서도 사용할 수 있다.
- 정의되기 전에 접근할 수 있지만, 값에는 접근할 수 없다.
  - 정의되기 전 값은 `undefined`

# let

- 블록 스코프에 종속된다.
- 변수가 선언된 블록과 그 하위 블록 내에서만 사용할 수 있다.
- 정의하기 전에 접근할 수 없다.
  - 변수가 선언될 때까지 `TDZ (temporal dead zone)`에 위치하게 되는데, 이 때 접근하면 오류가 발생한다.

# const

- 블록 스코프에 종속된다.
- 변수가 선언된 블록과 그 하위 블록 내에서만 사용할 수 있다.
- let 키워드로 선언한 변수와의 차이점은 재할당을 통한 값 변경과 다시 선언되는 것이 불가능하다는 점이다.
- const가 객체일 때, 변수 전체를 재할당하는 것이 아니라 속성 중 하나만 재할당하는 것은 문제 없다.

  - 객체의 내용을 변경할 수 없게 const 객체를 고정할 수 있다.
    <br>

  ```javascript
  const person = {
    name: 'Seongtae',
    age: 23,
  };

  person.age = 24;

  console.log(person.age); // 24

  Object.freeze(person);

  person.age = 999; // 오류 발생하지 않음

  console.log(person.age); // 24
  ```

- 정의하기 전에 접근할 수 없다.

# var, let, const에 대한 개발자들의 의견

- [Mathias Bynens](https://mathiasbynens.be/notes/es6-const)
- [Kyle Simpson](https://frontendmasters.com/courses/es6-right-parts/let-vs-var/)
