---
title: 'Memory Structure'
date: '2021-11-24'
---

# 메모리 영역

### Code

- 실행할 프로그램의 코드가 저장되는 영역
- CPU가 코드 영역에 저장된 명령어를 하나씩 처리

### Data

- 프로그램의 전역, 정적 변수가 저장되는 영역
- 프로그램이 시작되면서 할당되고, 종료되면 소멸

### Stack

- 함수의 호출과 관계되는 지역 변수, 매개 변수가 저장되는 영역
- 함수를 호출하면 할당되고, 호출이 완료되면 소멸
- stack frame: 스택 영역에 저장되는 함수 호출 정보
- LIFO
- 메모리의 높은 주소에서 낮은 주소 방향으로 할당

#### 장점

- 액세스가 빠르다.
- 변수를 직접 할당, 해제할 필요 없다.
- CPU가 효율적으로 관리하고 메모리가 단편화되지 않는다.

#### 단점

- 지역 변수만 사용 가능하다.
- OS마다 다른 크기 제한이 있다.
- 변수의 크기를 조정할 수 없다.

### Heap

- 사용자가 직접 관리할 수 있는 영역
- 사용자가 메모리 공간을 동적으로 할당, 해제
- 메모리의 낮은 주소에서 높은 주소 방향으로 할당

#### 장점

- 전역으로 액세스 할 수 있다.
- 메모리 크기 제한이 없다.

#### 단점

- 액세스가 느리다.
- 메모리를 관리해야 한다.
- 효율적으로 관리하지 못하면, 시간이 지났을 때 메모리가 조각화되어 해제될 수 있다.
