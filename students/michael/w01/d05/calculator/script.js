function nv(val) {
  document.getElementById("display").value += val;
}

function cv(val) {
  document.getElementById("display").value = val;
}

function ev() {
  cv(eval(document.getElementById("display").value))
}