document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('docx-selector');
  const output = document.getElementById('docx-output');

  fetch('files.json')
    .then(res => res.json())
    .then(files => {
      files.forEach(file => {
        const option = document.createElement('option');
        option.value = file;
        option.textContent = file.replace('.docx', '');
        select.appendChild(option);
      });
    })
    .catch(() => {
      const opt = document.createElement('option');
      opt.textContent = '記事の読み込みに失敗しました';
      opt.disabled = true;
      select.appendChild(opt);
    });

  select.addEventListener('change', function () {
    const file = select.value;
    if (!file) { output.innerHTML = '<span style="color:var(--ink-soft)">記事を選択してください</span>'; return; }

    output.innerHTML = '<span style="color:var(--ink-soft)">読み込み中…</span>';

    fetch(`doc/${file}`)
      .then(res => res.arrayBuffer())
      .then(buf => mammoth.convertToHtml({ arrayBuffer: buf }))
      .then(result => { output.innerHTML = result.value; })
      .catch(err => {
        console.error(err);
        output.innerHTML = '<span style="color:var(--coral)">読み込みに失敗しました</span>';
      });
  });
});
