---
title: 'Python: Mutable, Immutable'
date: '2021-07-09'
---

# Mutable

id 값이 바뀌지 않으면서 값 변경이 가능한 객체

- list
- set
- dict

```python
a = [1, 2, 3]
b = a
b[0] = 4
print(b)  # [4, 2, 3]
print(a)  # [4, 2, 3]
```

# Immutable

id 값이 바뀌지 않으면서 값 변경이 불가능한 객체

- bool
- int
- float
- tuple
- str
- frozenset

# copy

원본 데이터의 값만 복사하기 위한 방법으로 2가지가 있다.

## Shallow copy

- 슬라이싱을 사용한 방법

```python
a = [1, 2, 3]
b = a[:]
```

- copy 모듈 사용 방법

```python
a = [1, 2, 3]
b = copy.copy(a)
```

이렇게 하면 새로운 id 값을 가지도록 만들어주는데,
리스트 안의 리스트는 id가 변경되지 않는다.
예를 들어, 2차원 리스트가 있다.

```
[[1, 2], [3, 4]]
```

이 경우, 아래의 Deep copy를 사용하면 된다.

## Deep copy

- copy 모듈 사용 방법

```python
a = [1, 2, 3]
b = copy.deepcopy(a)
```
