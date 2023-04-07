const toPicBtn = document.querySelector("#to-picture");
const loading = document.querySelector("#to-picture .loading");

async function getScreenShot(e) {
  $(".downloading").removeClass("hide");
  e.preventDefault();

  document.querySelector(".picture")?.remove();
  let c = document.querySelector("#board"); // or document.getElementById('canvas');
  loading.classList.remove("hide");

  import("html2canvas").then(async (data) => {
    const html2canvas = data.default;
    const canvas = await html2canvas(c);
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.setAttribute("download", "emoji-art.png");
    link.setAttribute(
      "href",
      canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
    link.click();
    loading.classList.add("hide");
    $(".downloading").addClass("hide");
  });
}
toPicBtn.addEventListener("click", getScreenShot);
