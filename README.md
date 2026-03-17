# boj-js-log

백준 알고리즘 문제 풀이 기록 (JavaScript)

---

## 폴더 구조

```
boj-js-log/
├── README.md
├── _template.md
└── problems/
    ├── sliding-window/
    ├── map-set/
    ├── two-pointer/
    ├── dp/
    ├── bfs-dfs/
    ├── greedy/
    └── sort/
```

---

## 풀이 기록

| 번호 | 제목 | 유형 | 결과 |
|------|------|------|------|
| - | - | - | - |

---

## 유형별 핵심 메모

### Sliding Window
> 창문을 오른쪽으로 밀면서 왼쪽을 잘라내는 방식. 이중 for문 → O(n)으로 줄일 때 사용.

### Map / Set
> `array.includes()` 는 O(n), `Map.has()` / `Set.has()` 는 O(1). 반복문 안 탐색은 무조건 Map/Set.

### Two Pointer
> 정렬된 배열에서 양 끝 포인터를 좁혀가며 탐색. O(n).

### DP
> 같은 계산 반복 시 Map으로 캐싱 (메모이제이션). 재귀 → 선형 시간으로 단축.

### BFS / DFS
> BFS: 최단 거리, 레벨 탐색 → Queue 사용.
> DFS: 경우의 수, 깊이 탐색 → Stack 또는 재귀 사용.

### Greedy
> 매 순간 최선의 선택. 증명이 핵심 — 왜 탐욕적 선택이 최적인지 먼저 확인.

### Sort
> JS 기본 sort()는 문자열 기준 → 숫자 정렬 시 `(a, b) => a - b` 필수.

---

## 참고

- [solved.ac](https://solved.ac) — 티어 및 문제 분류
- [백준](https://www.acmicpc.net) — 문제 풀이
