function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function compute() {
  const even = parseInt(document.getElementById("evenInput").value);
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (even < 4 || even % 2 !== 0) {
    output.innerHTML = "Please enter an even number ≥ 4.";
    return;
  }

  for (let p = 2; p <= even / 2; p++) {
    const q = even - p;
    if (isPrime(p) && isPrime(q)) {
      output.innerHTML = `✔️ ${even} = ${p} + ${q}`;
      return;
    }
  }

  output.innerHTML = "No decomposition found.";
}
