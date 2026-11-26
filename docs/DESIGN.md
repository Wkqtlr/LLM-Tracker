---
version: alpha
name: ONE EYE (원아이)
description: 카메라 할인 정보 수집 웹사이트의 독립적인 디자인 시스템
colors:
  primary: '#2563EB'
  primary-hover: '#1D4ED8'
  on-primary: '#FFFFFF'
  background: '#F5F6F8'
  surface: '#FFFFFF'
  text: '#191F28'
  secondary-text: '#64748B'
  border: '#E2E8F0'
  discount: '#DC2626'
  success: '#15803D'
  error: '#B91C1C'
typography:
  headline-lg:
    fontFamily: 'Pretendard, system-ui, sans-serif'
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.3
  headline-md:
    fontFamily: 'Pretendard, system-ui, sans-serif'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
  title:
    fontFamily: 'Pretendard, system-ui, sans-serif'
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.5
  price:
    fontFamily: 'Pretendard, system-ui, sans-serif'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    fontFeature: '"tnum"'
  body:
    fontFamily: 'Pretendard, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: 'Pretendard, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
  caption:
    fontFamily: 'Pretendard, system-ui, sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 6px
  md: 8px
  lg: 12px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
motion:
  feedback:
    duration: 150ms
    timingFunction: ease-out
---
# ONE EYE — DESIGN.md

## Overview

- 카메라 및 액세서리 할인 소식을 한눈에 비교하는 정보 중심 웹사이트.
- 미니멀하고 정돈된 분위기, 신뢰성, 빠른 정보 탐색을 우선한다.
- 라이트 모드를 기본으로 한다. 기존 PRD의 기능 범위는 변경하지 않는다.
- 토스, Material Design 2, Apple의 원칙을 참고하되 브랜드 자산, 화면 구성, 고유 컴포넌트를 복제하지 않는다.
- YAML 수치는 원아이를 위해 새로 정한 제안값이며 원본 사이트의 CSS 실측값이 아니다.

## Colors

- `primary`: 원문 링크, 주요 버튼, 현재 선택 상태에 한정한다.
- `background` / `surface`: 페이지 배경과 정보 영역을 구분한다.
- `text`: 상품명, 가격, 핵심 제목. `secondary-text`: 출처, 날짜, 보조 설명.
- `border`: 카드와 영역 구분선. 입력 경계 등 조작에 필수적인 윤곽은 필요에 따라 더 진하게 표시한다.
- `discount`: 실제 할인 정보가 확인된 경우에만 사용한다. 가격 자체는 기본 텍스트 색상을 사용한다.
- `success` / `error`: 실제 성공 및 오류 상태에만 사용한다.
- 일반 텍스트 대비 4.5:1 이상, 큰 텍스트 및 필수 UI 경계 대비 3:1 이상을 목표로 검증한다. 색만으로 상태를 구별하지 않는다.

## Typography

- 한글 웹 환경에 적합한 Pretendard를 기본으로 하고, 미설치 시 시스템 산세리프를 사용한다.
- 페이지 제목 32px/700, 구역 제목 24px/700, 상품명 18px/600, 가격 24px/700.
- 본문 16px/400, 조작 라벨 14px/500, 출처와 날짜 13px/400.
- 가격은 천 단위 구분 기호와 원화 단위를 일관되게 사용한다. 숫자 폭은 가능하면 고정한다.
- 모바일 페이지 제목은 24px로 줄일 수 있다. 확대 시 텍스트가 잘리지 않도록 높이를 고정하지 않는다.

## Layout

- 4px을 최소 단위로, 8px 배수를 주요 간격으로 사용한다.
- 관련 정보 간격 4~8px, 카드 내부 여백 16~24px, 목록 간격 16px, 주요 영역 간격 32~48px.
- 콘텐츠 영역 최대 너비 1120px, 중앙 정렬. 페이지 제목과 목록의 좌측 기준선을 일치시킨다.
- 상단 서비스명 및 제목, 정렬 영역(기획서에서 확정된 경우), 할인 정보 목록 순으로 배치한다.
- 각 항목은 상품/게시글 제목, 가격, 출처·게시 날짜, 원문 링크의 일관된 위계를 유지한다. 가격이나 제목의 길이에 따라 자연스럽게 확장한다.
- 데스크톱(1024px 이상): 좌우 여백 최소 32px, 정보 목록 2열, 간격 24px.
- 태블릿(768~1023px): 좌우 여백 24px, 정보 목록 2열, 간격 16px.
- 모바일(767px 이하): 좌우 여백 16px, 정보 목록 1열, 간격 16px.
- 좁은 화면에서 가로 스크롤이 생기지 않도록 조작 요소를 줄바꿈한다. 정렬된 항목은 DOM 순서와 읽기 순서를 동일하게 유지한다.
- 게시 날짜 기준 및 가격 정렬 지원 여부는 PRD 확정 내용을 따른다.

## Elevation & Depth

- 카드에는 1px 구분선을 우선 사용하고 기본 그림자는 생략한다.
- 필요한 상호작용 상태에만 약한 그림자 또는 색상 변화를 사용한다.
- 과도한 입체 효과, 유리 효과, 장식용 그라데이션을 사용하지 않는다.

## Shapes

- 버튼과 선택 컨트롤: 8px 모서리.
- 정보 카드: 12px 모서리.
- 작은 상태 표시 요소: 6px 모서리.
- 같은 역할의 요소에 다른 모서리 값을 혼용하지 않는다.

## Motion & Micro-interaction

- 호버 및 선택 피드백은 150ms 이내의 짧은 전환을 사용한다.
- 목록 탐색을 지연시키는 등장 애니메이션을 금지한다.
- prefers-reduced-motion 설정을 존중한다.

## Voice & Content Strategy

- 짧고 명확한 한국어를 사용한다. 링크 문구는 '원문 보기'처럼 이동 목적을 드러낸다.
- 가격, 할인 폭, 출처, 날짜는 확인된 데이터만 표시한다.
- 누락된 정보의 표시 정책은 PRD 확정 사항을 따르며, AI가 임의로 가격이나 할인율을 생성하지 않는다.
- 과장된 할인 문구나 실제로 확인되지 않은 긴급성을 사용하지 않는다.

## Components

### 할인 정보 카드
- 배경 surface, 테두리 border 1px, 모서리 lg, 내부 여백 lg(모바일 md).
- 제목 title, 가격 price, 출처와 날짜 caption, 원문 링크 label.
- 실제로 제공되는 정보만 표시한다. 가격이 없는 경우의 정책은 PRD 확정 전까지 보류한다.

### 원문 링크
- primary 색상, label 글꼴, 호버 시 밑줄.
- 키보드 포커스가 명확해야 하며 모바일 터치 영역은 최소 44×44 CSS px을 목표로 한다.

### 정렬 컨트롤 (PRD에서 확정된 경우)
- 높이 최소 44px, 모서리 md, 좌우 여백 md.
- 선택 상태는 색상과 텍스트 또는 명확한 선택 표시로 구분한다.

### 정보 상태
- 결과 없음, 수집 중, 오류 등 실제 상태를 서로 구분해 표시한다.
- 데이터가 없는 상태에 가상의 상품 데이터를 삽입하지 않는다.

## Do's and Don'ts

- DO: 구현 전에 이 파일과 PRD를 함께 읽고, 동일한 토큰을 재사용한다.
- DO: 상품명, 가격, 출처, 날짜, 원문 링크의 위계를 유지한다.
- DO: 화면 폭 360px, 768px, 1440px 및 텍스트 확대 환경을 확인한다.
- DO: 대비, 키보드 접근성, 포커스 표시를 실제 화면에서 검증한다.
- DON'T: 토스, Material Design, Apple의 화면이나 로고를 그대로 복제하지 않는다.
- DON'T: 정의되지 않은 색상이나 간격을 장식 목적으로 추가하지 않는다.
- DON'T: 팝업 등으로 사용자의 정보 탐색을 방해하지 않는다.
- DON'T: 로그인, 댓글, 공유, 쇼핑몰 가격 직접 추적 등 PRD 제외 기능을 추가하지 않는다.
- DON'T: 미확정 요구사항을 디자인 문서만으로 확정하지 않는다.

### 참고 자료 및 적용 범위

- [DESIGN.md 소개](https://pasqualepillitteri.it/en/news/1251/google-stitch-design-md-open-source-spec-2026)
- [Google Labs 공식 DESIGN.md 명세](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md): YAML 토큰 및 섹션 구조.
- [앱인토스 UI/UX 가이드](https://developers-apps-in-toss.toss.im/design/consumer-ux-guide): 예측 가능한 행동, 탐색 방해 최소화.
- [Material Design 2](https://m2.material.io/design/guidelines-overview), [레이아웃 보존본](https://www.getbook.com/en/book/material-design-2/layout/understanding-layout): 간격 체계, 반응형 배치, 정보 그룹화. 원본 페이지는 JavaScript 제한으로 보존본을 참고했다.
- [Apple Design](https://developer.apple.com/kr/design/), [HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography), [HIG Color](https://developer.apple.com/design/human-interface-guidelines/color): 가독성, 의미 있는 색상, 접근성.

이 문서는 디자인 초안이며 공식 DESIGN.md 린터 및 실제 브라우저 렌더링 검증은 수행하지 않았다.
