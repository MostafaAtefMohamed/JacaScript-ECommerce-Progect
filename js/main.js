function mySearch() {
  var input, filter, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName("mainClass");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h5")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

///Items array
if (!localStorage.getItem("items")) {
  localStorage.setItem("items", "[]");
}

addProduct.onclick = function () {
  var poductName = document.getElementById("Product-name").value,
    priceBefore = document.getElementById("Price-before").value,
    priceAfter = document.getElementById("Price-after").value,
    imgSrc = document.getElementById("imgName").value,
    details = document.getElementById("Details").value;
  if (!poductName && !priceAfter && !imgSrc) {
    alert("you must enter values");
    throw "";
  }
  ///product counter
  if (!localStorage.getItem("Count")) {
    localStorage.setItem("Count", 0);
  }
  localStorage.setItem("Count", Number(localStorage.getItem("Count")) + 1);

  localStorage.setItem(
    "Product" + localStorage.getItem("Count"),
    '["' +
      poductName +
      '"' +
      ',"' +
      priceBefore +
      '"' +
      ',"' +
      priceAfter +
      '"' +
      ',"' +
      "img/" +
      imgSrc.replace("C:\\fakepath\\", "") +
      '"' +
      ',"' +
      details +
      '"]'
  );
  window.location.reload();
};
imgName.onchange = function () {
  var imgSrcc = document.getElementById("imgSrcc");
  imgSrcc.src = "img/" + imgName.value.replace("C:\\fakepath\\", "");
};

const removeItems = (arr, item) => {
  let newArray = [...arr];
  const index = newArray.findIndex((element) => element === item);
  if (index !== 1) {
    newArray.splice(index, 1);
    return newArray;
  }
};

// ////////////////////     --  if is not admin
// var mayRemove = document.getElementsByClassName("mayRemove");
// for (let index = 0; index < mayRemove.length; index++) {
//   document.getElementsByClassName("mayRemove")[index].style.display = "none";
// }

for (let index = 1; index <= Number(localStorage.getItem("Count")); index++) {
  var elem = JSON.parse(localStorage.getItem("Product" + index));

  var poductName = elem[0],
    priceBefore = elem[1],
    priceAfter = elem[2],
    imgSrc = elem[3],
    detais = elem[4];

  var x = "Product" + index;
  var input = document.getElementById("mainContainer"),
    div1 = document.createElement("div"),
    div2 = document.createElement("div"),
    div3 = document.createElement("div"),
    img = document.createElement("img"),
    div4 = document.createElement("div"),
    h5 = document.createElement("h5"),
    div5 = document.createElement("div"),
    h6 = document.createElement("h6"),
    h62 = document.createElement("h6"),
    del = document.createElement("del"),
    div6 = document.createElement("div"),
    a1 = document.createElement("a"),
    a2 = document.createElement("a"),
    a3 = document.createElement("a"),
    i1 = document.createElement("i"),
    i2 = document.createElement("i"),
    i3 = document.createElement("i"),
    h3 = document.createElement("h3"),
    p = document.createElement("p");

  input.append(div1);
  div1.append(div2);
  div2.append(div3);
  div3.append(img);
  div2.append(div4);
  div4.append(h5);
  div4.append(div5);
  div5.append(h6);
  div5.append(h62);
  h62.append(del);
  div2.append(div6);
  div6.append(a1);
  div6.append(a2);
  div6.append(a3);
  a1.innerHTML = "Veiw Detail ";
  a2.innerHTML = "Add To Card ";
  a1.append(i1);
  a2.append(i2);
  a3.append(i3);
  div4.append(h3);
  div6.append(p);

  div1.classList.add("col-lg-3", "col-md-6", "col-sm-12", "pb-1", "mainClass");
  div2.classList.add("card", "product-item", "border-0", "mb-4", "shadow");
  div3.classList.add(
    "card-header",
    "product-img",
    "position-relative",
    "overflow-hidden",
    "bg-transparent",
    "border",
    "p-0"
  );
  img.classList.add("img-fluid", "w-100");
  img.src = imgSrc.replace("C:\\fakepath\\", "img/");
  div4.classList.add(
    "card-body",
    "border-left",
    "border-right",
    "text-center",
    "p-0",
    "pt-4",
    "pb-3"
  );
  h5.classList.add("text-truncate", "mb-3");
  div5.classList.add("d-flex", "justify-content-center");
  h62.classList.add("text-muted", "ml-2");
  div6.classList.add(
    "card-footer",
    "d-flex",
    "justify-content-between",
    "bg-light",
    "border"
  );
  a1.classList.add("btn", "btn-sm", "text-dark", "p-0");
  a2.classList.add("btn", "btn-sm", "text-dark", "p-0", "addToCart");
  a3.classList.add("btn", "btn-sm", "text-dark", "p-0", "mayRemove");
  i1.classList.add("fas", "fa-eye", "text-primary", "mr-1");
  i2.classList.add("fas", "fa-shopping-cart", "text-primary", "mr-1");
  i3.classList.add("fa", "fa-trash");
  h3.style.display = "none";
  p.style.display = "none";

  h5.innerHTML = poductName;
  h6.innerHTML = priceBefore;
  del.innerHTML = priceAfter;
  h3.innerHTML = detais;
  p.innerHTML = x;

  a3.addEventListener("click", function (e) {
    localStorage.removeItem(
      e.target.parentElement.parentElement.children[3].textContent
    );
    localStorage.setItem("Count", Number(localStorage.getItem("Count")) - 1);
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    // window.location.reload();
  });
  a1.addEventListener("click", function (e) {
    // yostos
    //view details  box
    const detailCloseBtn = document.querySelector(".yosclose");
    const detailBox = document.querySelector(".detailBox");
    detailBox.classList.add("active");
    detailCloseBtn.addEventListener("click", function () {
      detailBox.classList.remove("active");
    });
    //
    const yosname = document.querySelector(".yosname");
    yosname.innerHTML =
      `<h2 class="text-center">ProductName :${e.target.parentElement.previousSibling.children[0].textContent}</h2>` +
      `<h4 class="text-center">Price :${e.target.parentElement.previousSibling.children[1].children[0].textContent}</h4>` +
      `<h6 class="text-center">Details :${e.target.parentElement.previousSibling.children[2].textContent}</h6>`;

    // yostos
  });
}

// Monier
if (
  localStorage.getItem("email") !== "admin@yahoo.com" &&
  localStorage.getItem("email") !== localStorage.getItem("signemail")
) {
  alert("Local Storage is Clear");
  alert(localStorage.getItem("email"));
  location.href = "http://127.0.0.1:5500/sign&register.html";
}
logoutBtn.onclick = function () {
  localStorage.removeItem("email");
  localStorage.removeItem("pas");
  localStorage.removeItem("signemail");
  localStorage.removeItem("signpassword");
  location.href = "http://127.0.0.1:5500/sign&register.html";
};
// (localStorage.getItem("email")!==localStorage.getItem("signemail"))
// localStorage.length==0 ||
////////////////////     --  if is not admin
if (
  localStorage.length > 0 &&
  localStorage.getItem("email") == localStorage.getItem("signemail")
) {
  var mayRemove = document.getElementsByClassName("mayRemove");
  for (let index = 0; index < mayRemove.length; index++) {
    document.getElementsByClassName("mayRemove")[index].style.display = "none";
  }
  logoutBtn.onclick = function () {
    localStorage.removeItem("email");
    localStorage.removeItem("pas");
    location.href = "http://127.0.0.1:5500/sign&register.html";
  };
}
if (
  localStorage.getItem("email") !== "admin@yahoo.com" &&
  localStorage.getItem("email") !== localStorage.getItem("signemail")
) {
  document.getElementById("logoutBtn").style.display = "none";
} else {
  document.getElementById("regisBtn").style.display = "none";
  document.getElementById("loginBtn").style.display = "none";
}
