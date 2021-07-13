var a = 0;

function darkMode() {
  if (a == 0) {
    document.body.style.backgroundColor = "black";
    a = 1;
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    a = 0;
    document.body.style.color = "black";
  }
}