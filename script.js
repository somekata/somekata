document.getElementById('learn-more').addEventListener('click', function() {
  alert('サイトは近日公開予定です。お楽しみに！');
});
// ページビューカウンターを保存するためにlocalStorageを使用
if (localStorage.getItem('page_view_count')) {
  // 既存のカウントを取得して増加させる
  var count = parseInt(localStorage.getItem('page_view_count'));
  count++;
} else {
  // 初回訪問の場合
  var count = 1;
}

// 更新されたカウントをlocalStorageに保存
localStorage.setItem('page_view_count', count);

// カウントをHTMLに表示
document.getElementById('counter').textContent = count;
