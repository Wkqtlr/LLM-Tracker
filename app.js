'use strict';

const input = document.querySelector('#input');
const interestsInput = document.querySelector('#interests');
const statusEl = document.querySelector('#status');
const resultEl = document.querySelector('#result');
const buttons = [...document.querySelectorAll('button')];

function setStatus(message, error = false) {
  statusEl.textContent = message;
  statusEl.dataset.error = String(error);
}

function onProgress(loaded, model) {
  setStatus(`${model} 다운로드 중: ${Math.round(loaded * 100)}%`);
}

async function run(action) {
  buttons.forEach((button) => { button.disabled = true; });
  resultEl.textContent = '';
  setStatus('처리 중…');
  try {
    // action은 첫 await 전에 실행되어 버튼 클릭의 사용자 활성화를 유지한다.
    await action();
    setStatus('완료했습니다.');
  } catch (error) {
    setStatus(error.message || String(error), true);
  } finally {
    buttons.forEach((button) => { button.disabled = false; });
    AI.showDiagnosis(document.querySelector('#diagnosis')).catch(() => {});
  }
}

function getText() {
  const text = input.value.trim();
  if (!text) throw new Error('먼저 번역하거나 판단할 글을 입력하세요.');
  return text;
}

// 두 prepare를 await 없이 함께 호출해야 모든 다운로드가 클릭 직후 시작된다.
function prepareAll() {
  return Promise.all([AI.prepare(onProgress), KoTranslate.prepare(onProgress)]);
}

document.querySelector('#prepare').addEventListener('click', () => run(async () => {
  await prepareAll();
  resultEl.textContent = 'AI와 번역 모델이 준비되었습니다.';
}));

document.querySelector('#translate').addEventListener('click', () => run(async () => {
  const text = getText();
  await KoTranslate.prepare(onProgress);
  resultEl.textContent = await KoTranslate.toEnglish(text);
}));

document.querySelector('#analyze').addEventListener('click', () => run(async () => {
  const text = getText();
  const interests = interestsInput.value.split(',').map((item) => item.trim()).filter(Boolean);
  if (!interests.length) throw new Error('관심사를 하나 이상 입력하세요.');
  await prepareAll();
  const englishInterests = await KoTranslate.toEnglish(interests);
  const [prompt, schema] = await Promise.all([
    AI.loadPrompt('prompt.md', { interests: englishInterests }),
    AI.loadSchema('schema.json'),
  ]);
  const englishText = await KoTranslate.toEnglish(text);
  const session = await AI.createSession(prompt);
  try {
    const answer = await AI.ask(session, englishText, schema);
    const translated = await KoTranslate.fieldsToKorean(answer, ['reason']);
    resultEl.textContent = JSON.stringify(translated, null, 2);
  } finally {
    session.destroy();
  }
}));

AI.showDiagnosis(document.querySelector('#diagnosis')).catch((error) => {
  setStatus(`상태를 확인하지 못했습니다: ${error.message}`, true);
});
