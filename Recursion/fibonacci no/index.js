//f(n-1)+f(n-2) for n>1

function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(5));
