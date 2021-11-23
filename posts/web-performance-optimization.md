---
title: 'Web Performance Optimization (웹 성능 최적화)'
date: '2021-11-23'
---

# 브라우저의 로딩 과정

1. 파싱

- HTML 파일 다운로드 -> DOM 트리 구성
- HTML 또는 리소스에 CSS가 포함 (`<script />`, `<link />`, `<img />`) -> CSSOM 트리 구성

2. 스타일

- DOM, CSSOM 트리를 가지고 스타일을 매칭 -> 렌터 트리 구성

3. 레이아웃

- 렌더 트리 내 노드의 정확한 위치와 크기 계산 -> 렌더 트리에 반영
- % 단위 크기 값을 px 단위로 변환하는 과정

4. 페인트

- 렌더 트리의 각 노드를 화면상의 실제 픽셀로 변환
- 위치와 관계없는 CSS 속성 적용
- 개별 레이어로 관리

5. 합성 & 렌더

- 생성된 레이어를 합성하여 스크린 업데이트

## 리플로우 (레이아웃 -> 페인트 -> 합성)

- DOM에 기하학적 영향(높이, 넓이, 위치)을 주는 CSS 속성값을 변경하면 렌터 트리 재구성
- 전체 픽셀을 다시 계산해야 하므로 부하가 크다.
- `height`, `width`, `left`, `top`, `font-size`, `line-height` 등

## 리페인트 (페인트 -> 합성)

- DOM에 기하학적 영향을 주지 않는 CSS 속성값을 변경하면 레이아웃 과정을 건너뛰고 페인트, 합성을 수행
- 이미 계산된 픽셀값을 이용해 화면을 그리기 때문에 레이아웃에 비해 부하가 적다.
- `background-color`, `color`, `visibility`, `text-decoration` 등

> 크롬 개발자 도구의 `Performance` 탭에서 확인할 수 있음

## 블록 리소스와 주요 렌더링 경로

- HTML 파싱 중 CSS, JavaScript로 인해 파싱이 중단되는 것을 **HTML 파싱이 블록되었다**라고 한다.
- 블록 상태의 원인이 되는 리소스를 **블록 리소스**라고 한다.
- 블록 리소스는 페인트 과정을 지연시키므로, [주요 렌더링 경로(Critical Rendering Path)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=ko)를 최적화하여 페인트를 빠르게 하고 로딩 속도로르 개선할 수 있다.

# 참고 사이트

- [ToastUI FE GUIDE 성능 최적화](https://ui.toast.com/fe-guide/ko_PERFORMANCE)
