const mainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].addEventListener("click", () => {
  mainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click", () => {
  mainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", () => {
  mainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", () => {
  mainImg.src = smallImg[3].src;
});
