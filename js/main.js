// Variabel Gambar
var container = document.querySelector("#container");
var panorama = new PANOLENS.ImagePanorama("images/gambar1.jpeg");
var panorama2 = new PANOLENS.ImagePanorama("images/gambar2.jpg");
var panorama3 = new PANOLENS.ImagePanorama("images/gambar3.jpeg");
let imageContainer = document.querySelector(".image-container");

// Mengatur posisi infospot
var infospotPositions = [
  new THREE.Vector3(-2136.06, 16.3, 890.14),
  new THREE.Vector3(-3136.06, 296.3, -4290.14),
  new THREE.Vector3(-2136.06, 16.3, 890.14),
];

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

// Mengambil kordinat infospot
panorama.link(panorama2, infospotPositions[0]);
panorama2.link(panorama3, infospotPositions[1]);
panorama3.link(panorama, infospotPositions[2]);

// Mengeksekusi
viewer.add(panorama, panorama2, panorama3);
