//power(2,3)=2*2*2=8
//base=2
//exponent=3
function power(exponent, base) {
  if (exponent === 0) {
    return 1;
  } else return base * power(base, exponent - 1);
}
