function change() {
  let body = document.getElementById("body");
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = "rgb(" + red + "," + green + "," + blue + ")";
  console.log(color);
  body.style.backgroundColor = color;
  console.log("button clicked");
}
