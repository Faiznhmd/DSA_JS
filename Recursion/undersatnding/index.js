function Faizan() {
  return Raj();
}

function Raj() {
  return Shree();
}
function Shree() {
  return Mahato();
}
function Mahato() {
  return Raj();
}
function Das() {
  //base case
  return true;
}

console.log(Faizan());
