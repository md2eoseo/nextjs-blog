---
title: 'JavaScript: Closure'
date: '2021-07-17'
---

## (가장 잘 설명한) 정의

> 어떤 함수 A에서 선언한 변수 a를 참조하는 내부 함수 B를 외부로 전달할 경우,
> A의 실행 컨텍스트가 종료된 이후에도 변수 a가 사라지지 않는 현상[^definition]

## 예제

### return

```javascript
var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
};
var outer2 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3
outer = null; // 메모리 관리: outer 식별자의 inner 함수 참조를 끊음
```

### setInterval/setTimeout

```javascript
(function () {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
      inner = null; // 메모리 관리: inner 식별자의 함수 참조를 끊음
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();
```

### eventListener

```javascript
(function () {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';

  var clickHandler = function () {
    console.log(++count, 'times clicked');
    if (count >= 10) {
      button.removeEventListener('click', clickHandler);
      clickHandler = null; // 메모리 관리: clickHandler 식별자의 함수 참조를 끊음
    }
  };
  button.addEventListener('click', clickHandler);
  document.body.appendChild(button);
})();
```

## 활용 사례

1. 콜백 함수 내부에서 외부 데이터 사용

2. 접근 권한 제어(정보 은닉)

3. 부분 적용 함수

4. 커링 함수

[^definition]: 정재남, 『코어 자바스크립트』, 위키북스(2019), p121.
