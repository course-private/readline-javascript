const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Soal 6

// rl.question("Masukkan angka: ", (input) => {
//   const angka = Number(input);

//   if (angka % 2 === 0) {
//     console.log(`Angka ${angka} adalah bilangan genap.`);
//   } else {
//     console.log(`Angka ${angka} adalah bilangan ganjil.`);
//   }

//   if (angka > 0) {
//     console.log(`Angka ${angka} adalah bilangan positif.`);
//   } else if (angka < 0) {
//     console.log(`Angka ${angka} adalah bilangan negatif.`);
//   } else {
//     console.log("Angka tersebut adalah nol.");
//   }

//   rl.close();
// });

// Soal 7

// rl.question("Masukkan angka: ", (input) => {
//   const angka = Number(input);

//   let total = 0;

//   for (let i = 1; i <= angka; i++) {
//     if (i % 2 === 0) {
//       total = total + i;
//       console.log(i);
//     }
//   }
//   console.log(`Total: ${total}`);
//   rl.close();
// });

// Soal 8
let numbers = [];

function inputNumber(index) {
  rl.question(`Masukkan angka ${index}: `, (input) => {
    const angka = Number(input);

    numbers.push(angka);

    if (index < 5) {
      inputNumber(index + 1);
    } else {
      //   console.log(numbers);
      processData();
    }
  });
}

function processData() {
  let total = 0;
  let terbesar = numbers[0];
  let terkecil = numbers[0];

  for (const number of numbers) {
    total += number;
    if (number > terbesar) {
      terbesar = number;
    }
    if (number < terkecil) {
      terkecil = number;
    }
  }

  const rataRata = total / numbers.length;
  console.log("\n=== HASIL ===");
  console.log(`Data: ${numbers}`);
  console.log(`Nilai terbesar: ${terbesar}`);
  console.log(`Nilai terkecil: ${terkecil}`);
  console.log(`Total: ${total}`);
  console.log(`Rata-rata: ${rataRata}`);

  rl.close();
}

inputNumber(1);
