const API_URL = "https://script.google.com/macros/s/AKfycbyOWZu-n2UF-rIwOPKUPkKkytoB1x7iQcL-MgwGkrTCAMd47RxY3TO40RaqCGh3huG7/exec";

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
