function calculate() {
  let G = document.getElementById("G").value;
  let m2 = document.getElementById("m2").value;
  let m1 = document.getElementById("m1").value;
  let r = document.getElementById("r").value;
  let F = ((m1 * m2) / Math.pow(r, 2)) * G;
  F = F || 0;
  document.getElementById("F").value = `${F}kg²/m²`;
}
