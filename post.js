// ★ あなたのGAS /exec URL
const API_URL = "https://script.google.com/macros/s/AKfycbz-i0zHmNHVGpUzr8AI4ME3EqxKpBLeA3pg-OAiO6x0-8iBg-Yx0gdBunBhTclyYbQU/exec";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("postForm");
  const nameInput = document.getElementById("name");
  const descInput = document.getElementById("desc");
  const imgInput  = document.getElementById("img");

  // 念のため存在チェック
  if (!form || !nameInput || !descInput || !imgInput) {
    alert("フォーム要素が見つかりません");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nameInput.value,
        desc: descInput.value,
        img: imgInput.value
      })
    })
      .then(res => res.text())
      .then(text => {
        console.log("GAS response:", text);

        if (text !== "OK") {
          throw new Error(text);
        }

        alert("投稿完了");
        form.reset();
      })
      .catch(err => {
        console.error(err);
        alert("投稿失敗3：" + err.message);
      });
  });
});
