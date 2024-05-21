function gerade() {
  let summe = 0;

  for (let i = 0; i < 900000000; i++) {
    if (i % 2 === 0) {
      summe += i;
    }
  }

  return summe;
}

function ungerade() {
  let summe = 0;

  for (let i = 0; i < 900000000; i++) {
    if (i % 2 !== 0) {
      summe += i;
    }
  }

  return summe;
}

console.log(gerade());
console.log(ungerade());
