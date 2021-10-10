function sol(n,r,c) {
  if (n <= 0) return n;
  else {
    return sol(n - 1 * n - 1, n, n);
  }
}

console.log(sol(1));