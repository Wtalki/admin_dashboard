// LIGHT MODE DARK MODE

function dark() {
  let darkBtn = document.querySelector(".toggle-btn");
  darkBtn.addEventListener("click", function () {
    let theme = document.querySelector(":root");
    let inputCheck = document.querySelector("#button").checked;
    if (inputCheck) {
      theme.style.setProperty("--bg1color", "#d8d8da");
    } else {
      theme.style.setProperty("--bg1color", "black");
    }
  });
}
dark();

function openNav() {
  //   document.querySelector("section").style.marginLeft = "200px";

  let showNav = document.getElementById("side-bar");
  if (!showNav.classList.contains("show")) {
    showNav.classList.add("show");
  }
}
function closeNav() {
  document.getElementById("side-bar").classList.remove("show");
  //   document.querySelector("section").style.marginLeft = "0px";
}

function show(elem) {
  let tabLink = document.getElementsByClassName("tabLink");
  console.log(tabLink);
  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].classList.remove("active");
  }
  elem.classList.add("active");
}

//user details
