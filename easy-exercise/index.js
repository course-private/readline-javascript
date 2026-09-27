/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama: ", (nama) => {
  console.log(`Halo, ${nama}!`);

  rl.close();
});
*/

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama: ", (nama) => {
  rl.question("Masukkan umur: ", (umur) => {
    console.log(`Nama saya ${nama} dan umur saya ${umur} tahun.`);

    rl.close();
  });
});
*/

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan angka pertama: ", (angka1) => {
  rl.question("Masukkan angka kedua: ", (angka2) => {
    angka1 = Number(angka1);
    angka2 = Number(angka2);

    const jumlah = angka1 + angka2;
    const selisih = angka1 - angka2;
    const perkalian = angka1 * angka2;
    const pembagian = angka1 / angka2;

    console.log(`Jumlah: ${jumlah}`);
    console.log(`Selisih: ${selisih}`);
    console.log(`Perkalian: ${perkalian}`);
    console.log(`Pembagian: ${pembagian}`);

    rl.close();
  });
});
*/

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan panjang: ", (panjang) => {
  rl.question("Masukkan lebar: ", (lebar) => {
    panjang = Number(panjang);
    lebar = Number(lebar);

    const luas = panjang * lebar;
    const keliling = 2 * (panjang + lebar);

    console.log(`Luas: ${luas}`);
    console.log(`Keliling: ${keliling}`);

    rl.close();
  });
});
*/

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama produk: ", (namaProduk) => {
  rl.question("Masukkan harga: ", (harga) => {
    rl.question("Masukkan jumlah: ", (jumlah) => {
      rl.question("Masukkan diskon (%): ", (diskon) => {
        harga = Number(harga);
        jumlah = Number(jumlah);
        diskon = Number(diskon);

        const totalSebelumDiskon = harga * jumlah;
        const jumlahDiskon = totalSebelumDiskon * (diskon / 100);
        const totalPembayaran = totalSebelumDiskon - jumlahDiskon;

        console.log(`Produk: ${namaProduk}`);
        console.log(`Harga: Rp${harga}`);
        console.log(`Jumlah: ${jumlah}`);
        console.log(
          `Total sebelum diskon: Rp${totalSebelumDiskon}`
        );
        console.log(`Diskon: Rp${jumlahDiskon}`);
        console.log(`Total pembayaran: Rp${totalPembayaran}`);

        rl.close();
      });
    });
  });
});
*/
