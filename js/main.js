"use strict";
{
  // function update() {
  //   // document.querySelector("h1").textContent = "Changed!";
  //   // document.querySelector("#target").textContent = "Changed!";
  //   document.getElementById("target").textContent = "Changed!";
  //   // 最初のタグのみ書き換え
  //   // document.querySelector("p").textContent = "QuerySelector";
  //   // document.querySelectorAll("p")[1].textContent = "2番めのみ書き換える";
  //   // document.querySelectorAll("p").forEach((p, index) => {
  //   // p.textContent = `${index}番目のPです`;
  //   // });
  // }
  // document.querySelector("button").addEventListener("click", () => {
  //   const targetNode = document.getElementById("target");
  //   // targetNode.textContent = "Updated";
  //   // targetNode.title = "This is title";
  //   // targetNode.style.color = "red";
  //   // targetNode.style.backgroundColor = "skyblue";
  //   // targetNode.className = "my-color my-border";
  //   // targetNode.classList.add("my-color");
  //   // if (targetNode.classList.contains("my-color") === true) {
  //   //   targetNode.classList.remove("my-color");
  //   // } else {
  //   //   targetNode.classList.add("my-color");
  //   // }
  //   // 上のif文と同義
  //   // targetNode.classList.toggle("my-color");
  //   targetNode.textContent = targetNode.dataset.translation;
  // });
  //! #10 要素を追加してみよう
  // document.querySelector("button").addEventListener("click", () => {
  //   const item2 = document.createElement("li");
  //   item2.textContent = "item2";
  //   const ulNode = document.querySelector("ul");
  //   ulNode.appendChild(item2);
  // });
}

{
  //! #11 要素の複製、挿入をしてみよう cloneNode(true or false), insertBefore(a, b)
  // document.querySelector("button").addEventListener("click", () => {
  //   const item0 = document.querySelectorAll("li")[0];
  //   const copy = item0.cloneNode(true);
  //   const ul = document.querySelector("ul");
  //   const item2 = document.querySelectorAll("li")[2];
  //   ul.insertBefore(copy, item2);
  // });
}

// {
//   //! #12 要素の削除をしてみよう
//   document.querySelector("button").addEventListener("click", () => {
//     const item1 = document.querySelectorAll("li")[1];

//     item1.remove();
//   });
// }

{
  //! #13 input要素を操作してみよう
  // document.querySelector("button").addEventListener("click", () => {
  //   const li = document.createElement("li");
  //   const text = document.querySelector("input");
  //   li.textContent = text.value;
  //   document.querySelector("ul").appendChild(li);
  //   text.value = "";
  //   text.focus();
  // });
}

{
  // //! #14 セレクトボックスを操作してみよう
  // document.querySelector("button").addEventListener("click", () => {
  //   const li = document.createElement("li");
  //   const color = document.querySelector("select");
  //   li.textContent = `${color.value} - ${color.selectedIndex}`;
  //   document.querySelector("ul").appendChild(li);
  // });
}

{
  //! #15 ラジオボタンを操作しよう
  // document.querySelector("button").addEventListener("click", () => {
  //   //* 入力された情報をcolors定数に代入
  //   const colors = document.querySelectorAll("input");
  //   //* からの変数selectedColorを用意する
  //   let selectedColor;
  //   colors.forEach((color) => {
  //     if (color.checked === true) {
  //       selectedColor = color.value;
  //     }
  //   });
  //   const li = document.createElement("li");
  //   li.textContent = selectedColor;
  //   document.querySelector("ul").appendChild(li);
  // });
}

{
  //! #16 チェックボックスを操作しよう
  // document.querySelector("button").addEventListener("click", () => {
  //   const colors = document.querySelectorAll("input");
  //   const selectedColors = [];
  //   colors.forEach((color) => {
  //     if (color.checked === true) {
  //       selectedColors.push(color.value);
  //     }
  //   });
  //   const li = document.createElement("li");
  //   li.textContent = selectedColors.join(",");
  //   document.querySelector("ul").appendChild(li);
  // });
}

{
  //! #17 いろいろなイベントを見てみよう
  // document.querySelector("button").addEventListener("dblclick", () => {
  //   console.log("Double clicked!");
  // });
  // document.addEventListener("keydown", (e) => {
  //   console.log(e.key);
  // });
}

{
  // const text = document.querySelector("textarea");
  // text.addEventListener("focus", () => {
  //   console.log("Focus");
  // });
  // text.addEventListener("blur", () => {
  //   console.log("Blur");
  // });
  // text.addEventListener("input", () => {
  //   // console.log("input");
  //   console.log(text.value.length);
  // });
  // text.addEventListener("change", () => {
  //   console.log("changed");
  // });
}
{
  // document.querySelector("form").addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   const text = document.querySelector("input");
  //   const h1 = document.createElement("h1");
  //   h1.textContent = text.value;
  //   document.querySelector("body").appendChild(h1);
  // });
}

{
  document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.nodeName === "LI") {
      e.target.classList.toggle("done");
    }
  });
}
