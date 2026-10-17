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
// let numbers = [];

// function inputNumber(index) {
//   rl.question(`Masukkan angka ${index}: `, (input) => {
//     const angka = Number(input);

//     numbers.push(angka);

//     if (index < 5) {
//       inputNumber(index + 1);
//     } else {
//       //   console.log(numbers);
//       processData();
//     }
//   });
// }

// function processData() {
//   let total = 0;
//   let terbesar = numbers[0];
//   let terkecil = numbers[0];

//   for (const number of numbers) {
//     total += number;
//     if (number > terbesar) {
//       terbesar = number;
//     }
//     if (number < terkecil) {
//       terkecil = number;
//     }
//   }

//   const rataRata = total / numbers.length;
//   console.log("\n=== HASIL ===");
//   console.log(`Data: ${numbers}`);
//   console.log(`Nilai terbesar: ${terbesar}`);
//   console.log(`Nilai terkecil: ${terkecil}`);
//   console.log(`Total: ${total}`);
//   console.log(`Rata-rata: ${rataRata}`);

//   rl.close();
// }

// inputNumber(1);

// Soal 9

// rl.question("Masukkan nama: ", (nama) => {
//   rl.question("Masukkan umur: ", (umur) => {
//     rl.question("Masukkan nilai: ", (nilai) => {
//       let siswa = {
//         nama: nama,
//         umur: Number(umur),
//         nilai: Number(nilai),
//       };

//       if (siswa.nilai >= 75) {
//         siswa.status = "Lulus";
//       } else {
//         siswa.status = "Tidak Lulus";
//       }

//       console.log("=== DATA SISWA ===");
//       console.log(`Nama: ${siswa.nama}`);
//       console.log(`Umur: ${siswa.umur}`);
//       console.log(`Nilai: ${siswa.nilai}`);
//       console.log(`Status: ${siswa.status}`);

//       rl.close();
//     });
//   });
// });

// Soal 10

let products = [];

// CREATE
function createProduct() {
  rl.question("Masukkan nama produk: ", (nama) => {
    rl.question("Masukkan harga: ", (harga) => {
      const product = {
        id: products.length + 1,
        nama: nama,
        harga: Number(harga),
      };

      products.push(product);

      console.log("\nProduk berhasil ditambahkan!\n");

      showMenu();
    });
  });
}

// READ
function readProducts() {
  console.log("\n=== DAFTAR PRODUK ===");

  if (products.length === 0) {
    console.log("Belum ada produk.");
  } else {
    products.forEach((product) => {
      console.log(
        `ID: ${product.id} | Nama: ${product.nama} | Harga: Rp${product.harga}`,
      );
    });
  }

  console.log();

  showMenu();
}

// DELETE
function deleteProduct() {
  rl.question("Masukkan ID produk: ", (id) => {
    const index = products.findIndex((product) => product.id === Number(id));

    if (index === -1) {
      console.log("\nProduk tidak ditemukan!\n");
      return showMenu();
    }

    products.splice(index, 1);
    console.log("\nProduk berhasil dihapus!\n");
    showMenu();
  });
}

// UPDATE
function updateProduct() {
  rl.question("Masukkan ID produk: ", (id) => {
    const product = products.find((product) => product.id === Number(id));

    if (!product) {
      console.log("\nProduk tidak ditemukan!\n");
      return showMenu();
    }

    rl.question("Masukkan nama baru: ", (nama) => {
      rl.question("Masukkan harga baru: ", (harga) => {
        product.nama = nama;
        product.harga = Number(harga);

        console.log("\nProduk berhasil diupdate!\n");

        showMenu();
      });
    });
  });
}

// MENU
function showMenu() {
  console.log("=== PRODUCT MANAGEMENT ===");
  console.log("1. Tambah Produk");
  console.log("2. Lihat Semua Produk");
  console.log("3. Update Produk");
  console.log("4. Hapus Produk");
  console.log("5. Keluar");

  rl.question("\nPilih menu: ", (choice) => {
    switch (choice) {
      case "1":
        createProduct();
        break;

      case "2":
        readProducts();
        break;

      case "3":
        updateProduct();
        break;

      case "4":
        deleteProduct();
        break;

      case "5":
        console.log("\nProgram selesai.");
        rl.close();
        break;

      default:
        console.log("\nMenu tidak tersedia.\n");
        showMenu();
    }
  });
}

// START PROGRAM
showMenu();
