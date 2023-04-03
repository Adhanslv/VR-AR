var bar = document.querySelector("#bar");
function onProgressUpdate(event) {
  var percentage = (event.progress.loaded / event.progress.total) * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100) {
    bar.classList.add("hide");
    setTimeout(function () {
      bar.style.width = 0;
    }, 1000);
  }
}
function onButtonClick(targetPanorama) {
  bar.classList.remove("hide");
  viewer.setPanorama(targetPanorama);
}
panorama.addEventListener("progress", onProgressUpdate);
panorama2.addEventListener("progress", onProgressUpdate);
panorama3.addEventListener("progress", onProgressUpdate);
