
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

// 位置スクロール
function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // 画像要素とリンクURL
  const image = document.getElementById('side_logoBt');
  const linkUrl = 'index.html'; // 遷移先のURL

  // 画像が存在する場合のみクリックイベントを追加
  if (image) {
    image.addEventListener('click', function () {
      window.location.href = linkUrl; // リンクURLに遷移
    });

    // 画像がクリック可能であることを示す
    image.style.cursor = 'pointer';
  } else {
    console.error('要素が見つかりません。IDが正しいか確認してください。');
  }
});


// URLの#を消す
window.addEventListener('load', function () {
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname + window.location.search);
  }
});


// スクロールに応じてボタンを表示/非表示にする処理
window.addEventListener('scroll', function () {
  var button = document.getElementById('top_button');
  if (window.scrollY > 600) { 
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});