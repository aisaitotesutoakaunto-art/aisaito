const API_URL = "https://script.google.com/macros/s/AKfycbyOWZu-n2UF-rIwOPKUPkKkytoB1x7iQcL-MgwGkrTCAMd47RxY3TO40RaqCGh3huG7/exec";

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
