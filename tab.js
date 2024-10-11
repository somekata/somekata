function openSection(evt, sectionName) {
    // すべてのタブコンテンツを非表示にする
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // すべてのタブリンクから "active" クラスを削除する
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 指定されたセクションを表示し、クリックしたタブをアクティブにする
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}
