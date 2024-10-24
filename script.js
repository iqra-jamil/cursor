let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
main.addEventListener("mousemove", function (dets) {
  cursor.style.top = dets.y + "px";
  cursor.style.left = dets.x + "px";
});
