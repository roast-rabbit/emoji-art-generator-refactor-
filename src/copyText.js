import { currentText } from "./text";

const copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyText);

async function copyText(e) {
  console.log(currentText);
  e.preventDefault();
  const { clipboard } = navigator;

  await clipboard.writeText(currentText);
  $(".copyed").css("opacity", 1);
  setTimeout(function () {
    $(".copyed").css("opacity", 0);
  }, 1000);
}
