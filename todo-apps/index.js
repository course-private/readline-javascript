const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\n=== TO DO APPS ===");
  console.log("1. Tambah Tugas");
  console.log("2. Lihat Semua Tugas");
  console.log("3. Update Tugas");
  console.log("4. Hapus Tugas");
  console.log("5. Tandai Tugas Selesai");
  console.log("6. Keluar");

  rl.question("\nPilih menu: ", (choice) => {
    switch (choice) {
      case "1":
        createTask();
        break;

      case "2":
        readTasks();
        break;

      case "3":
        updateTask();
        break;

      case "4":
        deleteTask();
        break;

      case "5":
        completeTask();
        break;

      case "6":
        console.log("\nProgram selesai.");
        rl.close();
        break;

      default:
        console.log("\nMenu tidak tersedia.\n");
        showMenu();
    }
  });
}

function createTask() {
  // CEK APAKAH TODOS KOSONG
  if (todos.length === 0) {
    console.log("\nBelum ada tugas. Silakan tambahkan tugas pertama!");
  }
  rl.question("\nMasukkan judul tugas: ", (title) => {
    if (title.trim() === "") {
      console.log("\nJudul tugas tidak boleh kosong.");
      return showMenu();
    }
    rl.question("Masukkan deskripsi tugas: ", (description) => {
      if (description.trim() === "") {
        console.log("\nDeskripsi tugas tidak boleh kosong.");
        return showMenu();
      }
      // MENENTUKAN ID
      let id;
      if (todos.length === 0) {
        id = 1;
      } else {
        let maxId = todos[0].id;
        for (let i = 1; i < todos.length; i++) {
          if (todos[i].id > maxId) {
            maxId = todos[i].id;
          }
        }
        id = maxId + 1;
      }
      // MEMBUAT OBJECT TODO
      const todo = {
        id: id,
        judul: title.trim(),
        deskripsi: description.trim(),
        status: "Belum Selesai",
      };
      // MENYIMPAN TODO KE ARRAY
      todos.push(todo);
      console.log("\nTugas berhasil ditambahkan!");
      showMenu();
    });
  });
}

function readTasks() {
  console.log("\n=== DAFTAR TUGAS ===");

  if (todos.length === 0) {
    console.log("Belum ada tugas.");
    return showMenu();
  }

  todos.forEach((todo) => {
    console.log("------------------------------");
    console.log(`ID         : ${todo.id}`);
    console.log(`Judul      : ${todo.judul}`);
    console.log(`Deskripsi  : ${todo.deskripsi}`);
    console.log(`Status     : ${todo.status}`);
  });

  console.log("------------------------------");

  showMenu();
}

function updateTask() {
  if (todos.length === 0) {
    console.log("\nBelum ada tugas untuk diubah.");
    return showMenu();
  }

  rl.question("\nMasukkan ID tugas yang ingin diubah: ", (inputId) => {
    const id = Number(inputId);
    const todo = todos.find((item) => item.id === id);

    if (!Number.isInteger(id) || !todo) {
      console.log("\nTugas tidak ditemukan.");
      return showMenu();
    }

    rl.question("Masukkan judul baru: ", (title) => {
      if (title.trim() === "") {
        console.log("\nJudul tidak boleh kosong.");
        return showMenu();
      }

      rl.question("Masukkan deskripsi baru: ", (description) => {
        if (description.trim() === "") {
          console.log("\nDeskripsi tidak boleh kosong.");
          return showMenu();
        }

        todo.judul = title.trim();
        todo.deskripsi = description.trim();
        console.log("\nTugas berhasil diperbarui!");

        showMenu();
      });
    });
  });
}

function deleteTask() {
  if (todos.length === 0) {
    console.log("\nBelum ada tugas untuk dihapus.");
    return showMenu();
  }

  rl.question("\nMasukkan ID tugas yang ingin dihapus: ", (inputId) => {
    const id = Number(inputId);

    const index = todos.findIndex((todo) => todo.id === id);

    if (!Number.isInteger(id) || index === -1) {
      console.log("\nTugas tidak ditemukan.");
      return showMenu();
    }

    todos.splice(index, 1);
    console.log("\nTugas berhasil dihapus!");

    showMenu();
  });
}

function completeTask() {
  if (todos.length === 0) {
    console.log("\nBelum ada tugas untuk diselesaikan.");
    return showMenu();
  }

  rl.question("\nMasukkan ID tugas yang selesai: ", (inputId) => {
    const id = Number(inputId);

    const todo = todos.find((item) => item.id === id);

    if (!Number.isInteger(id) || !todo) {
      console.log("\nTugas tidak ditemukan.");
      return showMenu();
    }

    if (todo.status === "Selesai") {
      console.log("\nTugas ini sudah selesai sebelumnya.");
      return showMenu();
    }

    todo.status = "Selesai";
    console.log("\nTugas berhasil ditandai sebagai selesai!");

    showMenu();
  });
}

// START PROGRAM
showMenu();
