const API_URL = "https://script.google.com/macros/s/AKfycbzU8AAZ2iZWxCVGRzbvmiCuQw0YWZ3RWmuUFojDcjaYzUQRC1FZmXJrzsZ0m6FrmG3P/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(posts => {
    const list = document.getElementById("carList");

    posts.forEach(post => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <div class="image-box">
          ${post.img ? `<img src="${post.img}">` : "NO IMAGE"}
        </div>
        <h3>${post.name}</h3>
        <p>${post.desc}</p>
      `;

      list.appendChild(div);
    });
  });
