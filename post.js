const API_URL = "https://script.google.com/macros/s/AKfycbzU8AAZ2iZWxCVGRzbvmiCuQw0YWZ3RWmuUFojDcjaYzUQRC1FZmXJrzsZ0m6FrmG3P/exec";

document.getElementById("postForm").addEventListener("submit", e => {
  e.preventDefault();

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      desc: desc.value,
      img: img.value
    })
  })
  .then(() => {
    alert("投稿完了");
    e.target.reset();
  });
});
