# GitHub Pages 포트폴리오 설계

## 목표

강주형의 신입 백엔드 개발자 지원용 단일 페이지 포트폴리오를 GitHub Pages로 공개한다. 이력서의 QR 코드와 채용 담당자가 빠르게 확인할 수 있는 주소는 `https://kangjuhyeong.github.io`로 한다.

## 범위

- 소개, 연락처, 핵심 기술, Campuslink와 Reserva 프로젝트를 한 페이지에 제공한다.
- 각 프로젝트에 공개 GitHub 저장소로 이동하는 링크를 둔다.
- 현재 생성한 PDF 이력서를 다운로드할 수 있게 둔다.
- 모바일과 데스크톱에서 읽기 쉬운 정적 페이지로 만든다.
- 별도 프레임워크나 서버 없이 HTML과 CSS만 사용한다.

## 정보 및 문구 원칙

- 소개 문구는 “데이터 정합성과 보안을 고려해 서비스 전 과정을 구현한 백엔드 개발자”를 사용한다.
- Campuslink에는 전화 OTP, HttpOnly JWT Cookie, Redis Refresh Token, 원장·멱등성 처리, Toss Payments·SOLAPI, Docker Compose·AWS Lightsail만 기재한다.
- Reserva에는 이벤트 정보와 예약 재고 분리, DB 락·트랜잭션을 통한 초과 예약 방지만 기재한다.
- 확인하지 못했거나 설명할 수 없는 보안 스캔, 성능 수치, 운영 성과는 기재하지 않는다.

## 화면 구조

1. 상단 소개: 이름, 신입 백엔드 개발자, 짧은 소개, 이메일, GitHub, PDF 이력서 버튼.
2. 핵심 기술: Backend, Data, Deploy, Workflow 네 개 묶음.
3. Campuslink: 서비스 목적, 기술 태그, 핵심 구현 두 개, 저장소 링크.
4. Reserva: 서비스 목적, 기술 태그, 동시 예약 정합성 구현, 저장소 링크.
5. 하단: GitHub 프로필 링크와 포트폴리오 안내 문구.

## 파일 및 배포 구조

- `index.html`: 의미 있는 HTML 구조와 포트폴리오 본문.
- `assets/styles.css`: 색상, 반응형 레이아웃, 접근 가능한 focus 스타일.
- `assets/resume.pdf`: 이력서 다운로드 파일.
- `.github/workflows/pages.yml`: `main` 푸시 때 정적 파일을 GitHub Pages에 배포.

GitHub 저장소는 공개 저장소 `KangJuHyeong/kangjuhyeong.github.io`로 생성한다. GitHub Pages는 Actions 배포 원본을 사용하며, 실제 공개 URL은 `https://kangjuhyeong.github.io`다.

## 검증

- HTML의 모든 내부 경로와 외부 링크가 실제 대상과 일치하는지 확인한다.
- 브라우저에서 데스크톱과 모바일 너비로 화면을 확인한다.
- GitHub Actions의 Pages 배포가 성공한 뒤 공개 URL을 열어 확인한다.
