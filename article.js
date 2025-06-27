document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("docx-selector");
  const output = document.getElementById("docx-output");

  fetch("files.json")  // PHPからJSONに変更
    .then(res => res.json())
    .then(files => {
      files.forEach(file => {
        const option = document.createElement("option");
        option.value = file;
        option.textContent = file.replace(".docx", "");
        select.appendChild(option);
      });
    });

  select.addEventListener("change", function () {
    const file = select.value;
    if (!file) {
      output.innerHTML = "選択してください";
      return;
    }

    fetch(`doc/${file}`)
      .then(res => res.arrayBuffer())
      .then(buf => mammoth.convertToHtml({ arrayBuffer: buf }))
      .then(result => {
        output.innerHTML = result.value;
      })
      .catch(err => {
        console.error(err);
        output.innerHTML = "読み込み失敗";
      });
  });
});
