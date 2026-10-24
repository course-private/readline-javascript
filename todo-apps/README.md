# SOAL 10 — Simple CRUD To Do Apps

Buat program sederhana untuk mengelola daftar tugas (_To Do List_) menggunakan **array of objects**.

## Data Tugas

Setiap tugas memiliki:

- `id`
- `judul`
- `deskripsi`
- `status` (`Belum Selesai` / `Selesai`)

## Menu Program

1. Tambah Tugas
2. Lihat Semua Tugas
3. Update Tugas
4. Hapus Tugas
5. Tandai Tugas Selesai
6. Keluar

## Ketentuan

Gunakan:

- `readline` untuk input
- `function`
- `conditional`
- `looping`
- `array`
- `object`
- `array of objects`

### CREATE — Tambah Tugas

User memasukkan judul dan deskripsi tugas, kemudian data disimpan ke dalam array. Status awal tugas adalah `Belum Selesai`.

### READ — Lihat Semua Tugas

Tampilkan seluruh tugas yang tersimpan, termasuk ID, judul, deskripsi, dan status.

### UPDATE — Ubah Tugas

User memasukkan ID tugas, kemudian dapat mengubah judul dan deskripsi tugas.

### DELETE — Hapus Tugas

User memasukkan ID tugas, kemudian tugas tersebut dihapus dari array.

### MARK AS COMPLETED — Tandai Tugas Selesai

User memasukkan ID tugas, kemudian status tugas diubah menjadi `Selesai`.

### EXIT — Keluar

Program berhenti ketika user memilih menu Keluar.

## Contoh Input dan Output

```text
=== TO DO APPS ===
1. Tambah Tugas
2. Lihat Semua Tugas
3. Update Tugas
4. Hapus Tugas
5. Tandai Tugas Selesai
6. Keluar

Pilih menu: 1

Masukkan judul tugas: Belajar JavaScript
Masukkan deskripsi tugas: Belajar CRUD menggunakan array

Tugas berhasil ditambahkan!
```

Pilih menu untuk melihat semua tugas:

```text
=== TO DO APPS ===
1. Tambah Tugas
2. Lihat Semua Tugas
3. Update Tugas
4. Hapus Tugas
5. Tandai Tugas Selesai
6. Keluar

Pilih menu: 2

=== DAFTAR TUGAS ===

ID: 1
Judul: Belajar JavaScript
Deskripsi: Belajar CRUD menggunakan array
Status: Belum Selesai
```

Tandai tugas sebagai selesai:

```text
Pilih menu: 5

Masukkan ID tugas: 1

Tugas berhasil ditandai sebagai selesai!
```

Hasil setelah status diperbarui:

```text
=== DAFTAR TUGAS ===

ID: 1
Judul: Belajar JavaScript
Deskripsi: Belajar CRUD menggunakan array
Status: Selesai
```

## Catatan

- Gunakan ID unik untuk setiap tugas.
- Jika data tugas kosong, tampilkan pesan yang sesuai.
- Jika ID tidak ditemukan, tampilkan pesan error.
- Validasi input menu agar hanya menerima pilihan yang tersedia.
- Program terus berjalan sampai user memilih Keluar.
- Data cukup disimpan dalam array selama program berjalan; tidak perlu menggunakan database.

## Target Pembelajaran

Setelah menyelesaikan soal ini, kamu diharapkan memahami:

- **CRUD** — Create, Read, Update, Delete.
- **Array of Objects** — menyimpan banyak tugas dengan struktur data yang sama.
- **Function** — memisahkan setiap fitur menjadi fungsi tersendiri.
- **Conditional & Looping** — mengatur menu dan alur program.
- **ID & Status** — mencari tugas berdasarkan ID dan mengubah statusnya.

## Tantangan Tambahan

Setelah versi dasar selesai, tambahkan menu untuk menampilkan hanya tugas yang **Belum Selesai** atau hanya tugas yang **Selesai**. Ini menjadi latihan awal untuk fitur filter pada aplikasi To Do yang lebih realistis.
