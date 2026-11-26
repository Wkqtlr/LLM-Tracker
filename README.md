# 쇼핑 할인 정보 트래커

## HTML에서 실행

프로젝트 폴더에서 `python -m http.server 8000`을 실행한 뒤 Chrome으로
`http://localhost:8000`에 접속합니다. 내장 Prompt API와 Translator API를 지원하는
환경이 필요하며, 첫 사용 시 버튼을 누르면 모델 다운로드를 시작합니다.

- **AI·번역 모델 준비**: 언어 모델과 한↔영 번역 모델을 준비합니다.
- **영어로 번역**: 입력한 한국어 글을 영어로 번역합니다.
- **AI로 할인 판단**: 관심사와 글을 영어로 번역해 판단한 뒤, 이유를 한국어로 표시합니다.

번역 파일의 실제 이름은 `translator-ko.js`입니다. 다른 HTML에서도 아래 순서로
불러오면 전역 객체 `KoTranslate`와 `AI`를 사용할 수 있습니다.

```html
<script src="translator-ko.js" defer></script>
<script src="ai.js" defer></script>
<script src="app.js" defer></script>
```

`app.js`는 이 프로젝트 HTML의 입력·버튼을 연결하는 예제입니다. 다른 화면에서는
해당 화면용 스크립트에서 `KoTranslate`와 `AI`를 호출하세요.
`prompt.md`와 `schema.json`은 HTML과 같은 폴더에 둡니다.
