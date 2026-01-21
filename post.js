const API_URL = "https://script.google.com/macros/s/AKfycbzU8AAZ2iZWxCVGRzbvmiCuQw0YWZ3RWmuUFojDcjaYzUQRC1FZmXJrzsZ0m6FrmG3P/exec";

document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const descInput = document.getElementById("desc");
  const imgInput  = document.getElementById("img");

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
  .then(() => {
    alert("投稿完了");
    e.target.reset();
  })
  .catch(err => {
    console.error(err);
    alert("投稿失敗");
  });
});
