const container = document.querySelector(".container");
const url = "https://source.unsplash.com/random/";

for (let i = 0; i < 15; i++) {
  const img = document.createElement("img");
  img.src = `${url} ${imgSize()}`;
  container.appendChild(img);
}


function randomNum() {
  return Math.floor(Math.random() * 11) + 500;
}

function imgSize() {
  return `${randomNum() * randomNum()}`;
}
