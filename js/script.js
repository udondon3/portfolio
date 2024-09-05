// ハンバーガーメニューボタンとナビゲーションを取得
const btnGnavi = document.querySelector('.btn-gnavi');
const nav = document.querySelector('nav.gnavi');
const closeBtn = document.querySelector('.gnavi .close-btn'); // ✕ボタンを取得

// ハンバーガーメニューのクリックイベント
btnGnavi.addEventListener('click', () => {
  btnGnavi.classList.toggle('open');
  nav.classList.toggle('open');
});

// ✕ボタンのクリックイベントでメニューを閉じる
closeBtn.addEventListener('click', () => {
  btnGnavi.classList.remove('open');
  nav.classList.remove('open');
});
