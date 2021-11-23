---
title: 'Cross Browsing (크로스 브라우징)'
date: '2021-11-23'
---

# 크로스 브라우징

- 웹 페이지 제작 시에 모든 브라우저, 기기에서 의도한 대로 보이도록 만드는 과정
- 모든 브라우저, 기기에 웹 페이지의 호환성을 구축해가는 과정
- 브라우저마다 렌더링 엔진이 다르기 때문에 필요
  - 작동하지 않는 HTML, CSS, JavaScript 존재하고
  - 브라우저마다 버그가 존재하고
  - 브라우저 자체 CSS에 따라 다르게 보이기 때문

# 알아두어야 할 점

- 똑같이 보이도록 만드는 것보다, 어떤 브라우저로 웹 사이트를 방문하더라도 똑같은 경험을 전달하는게 중요
  - IE 하위버전에서 HTML5를 사용하려고 라이브러리를 사용하면 성능 저하가 나타날 수 있다.
- 브라우저에 대한 검사 기준을 파악하고 웹 표준, 웹 접근성에 대한 이해도와 지식을 지녀야한다.
- 전 세계 브라우저 점유율과 국내 브라우저 점유율의 순위는 다르다는걸 고려해야한다.

# 크로스 브라우징 방법

1. 브라우저마다 차이가 있는 기본 스타일 값 초기화
2. Hack: IE 특정 버전에서 인식되도록 스타일에 특수문자를 넣는 방법

```css
div {
    color:red; /* IE7이하 대응 */
    *color:blue /* IE6 대응 */
    _color:green
}
```

3. IE용 주석 이용

```html
<!-- [if IE 7]>
    <link href="ie7.css" type="text/css" rel="stylesheet"/>
<![endif]-->
<!-- [if IE 8]>
    <p> 이 문구는 IE8이 포함되지 않은 하위 브라우저, 즉 IE7,6에서 보여지게 됩니다.</p>
<![endif]-->
```

4. 메타 태그 사용

```html
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
</head>
```

IE가 문서를 읽고 렌더링할 때 가장 최신 모드로 렌더링하게 된다.

# 렌더링 엔진

| 렌더링 엔진          | 사용 브라우저 |
| -------------------- | ------------- |
| Trident (트라이던트) | IE            |
| Gecko (게코)         | FireFox       |
| Webkit (웹킷)        | Safari        |
| Blink (블링크)       | Chrome, Opera |

# 관련 사이트

- [Can I Use](https://caniuse.com/) - 각 브라우저 지원 내용을 파악할 수 있다.
- [W3C Markup Validation Service](https://validator.w3.org/) - 웹 사이트의 HTML이 웹 표준에 맞게 개발되었는지 확인할 수 있다.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - 웹 사이트의 CSS가 웹 표준에 맞게 개발되었는지 확인할 수 있다.
