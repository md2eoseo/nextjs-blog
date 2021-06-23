---
title: 'Static Typing vs. Dynamic Typing'
date: '2021-06-23'
---

# Static Typing: 정적 타입

컴파일 시 변수의 타입을 결정

- 컴파일 시 자료형에 맞지 않는 값이 들어갔을 때 컴파일 에러 발생
- 타입 에러로 인한 문제점을 초기에 발견할 수 있어 타입의 안정성이 높음
- 컴파일 시 타입을 미리 지정하기 때문에 실행 속도 빠름
- 매번 프로그래머가 직접 변수의 타입을 지정해야함

C 언어의 경우,

```c
int add(int a, int b){
  return a + b;
}
```

# Dynamic Typing: 동적 타입

런타임 시 변수의 타입을 결정

- 문법적 유연성이 높고, 빠르게 코드를 작성할 수 있음
- 실행 중에 타입 에러가 발생할 수 있음
- 코드가 복잡해지면 [TypeScript](https://www.typescriptlang.org/)나 [Flow](https://flow.org/)로 불편함을 해소할 수 있음

Python의 경우,

```python
def add(a, b):
  return a + b
```
