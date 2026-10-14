# (주)성지테크 홈페이지

www.sungjitech.co.kr — Next.js(정적 내보내기)로 만든 회사 홈페이지입니다. GitHub Pages로 배포합니다.

## 실행

Node.js 20.9 이상이 필요합니다.

```bash
npm install
npm run dev      # 개발 서버 http://localhost:3000
npm run build    # 정적 사이트를 out/ 에 생성
npm run preview  # 빌드 결과 미리보기 http://localhost:4173
```

## 내용 고치기

글과 수치는 모두 `lib/` 안의 파일에 모여 있습니다. 페이지 코드를 건드리지 않고 이 파일만 고치면 됩니다.

| 바꿀 내용 | 파일 |
| --- | --- |
| 주소·전화·팩스·이메일·대표자 | `lib/site.ts` |
| 인사말, 사훈·경영방침·품질목표, 조직도 | `lib/content/company.ts` |
| 연혁 | `lib/content/history.ts` |
| 제품(이름·설명·재질) | `lib/content/products.ts` |
| 공정, 제조설비, 검사설비 | `lib/content/production.ts` |
| 인증서, 수상, 품질 활동 | `lib/content/quality.ts` |
| 언론보도, 회사 둘러보기 사진 | `lib/content/media.ts` |
| 상단 메뉴 | `lib/navigation.ts` |

## 사진

`assets/source/`에는 회사소개서 슬라이드 캡처 원본이 있고, `scripts/build-images.mjs`가 여기서 사진 부분만 잘라 `public/images/`에 WebP로 저장합니다.

```bash
npm run images              # 전체 다시 생성
npm run images -- certs     # 이름이 certs로 시작하는 것만
```

- 새 사진(예: 새 인증서)은 `public/images/` 아래에 넣고 `lib/content/` 파일에서 경로를 바꾼 뒤 `npm run images -- brand`를 한 번 실행하세요. 이미지 크기 목록(`lib/image-sizes.json`)이 갱신됩니다.
- 원본 사진 파일이 생기면 슬라이드 캡처 대신 그것을 쓰는 편이 화질이 훨씬 좋습니다.

## 배포

`master`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해 GitHub Pages에 올립니다.

처음 한 번은 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 바꿔야 합니다. 사용자 지정 도메인(`www.sungjitech.co.kr`)은 같은 화면의 Custom domain 설정을 그대로 씁니다.

예전 사이트 주소(`/services/overview/` 등)로 들어오면 새 페이지로 자동 이동합니다(`lib/redirects.ts`).
