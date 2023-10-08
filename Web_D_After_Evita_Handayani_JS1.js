// Contoh penggunaan if, else, dan nested if
var umur = 18;
var izin = true;

if (umur >= 18) {
    console.log("Anda cukup umur.");
    if (izin) {
        console.log("Anda memiliki izin untuk mengemudi.");
    } else {
        console.log("Anda tidak memiliki izin untuk mengemudi.");
    }
} else {
    console.log("Anda belum cukup umur.");
}

// Contoh penggunaan switch case
var bulan = "April";

switch (bulan) {
    case "April":
        console.log("Bulan ini adalah bulan kelahiran saya.");
        break;
    case "Mei":
        console.log("Bulan ini adalah bulan kelahiran adik saya.");
        break;
    default:
        console.log("Bulan ini bukan bulan kelahiran saya ataupun adik saya.");
}

// Contoh penggunaan for statement
for (var e = 2; e <= 6; e++) {
    console.log("Perulangan ke-" + e);
}

// Contoh penggunaan while
var angka = 11;

while (angka <= 2) {
    console.log("Angka: " + angka);
    angka++;
}

// Contoh penggunaan do while
var angka2 = 11;

do {
    console.log("Angka2: " + angka2);
    angka2++;
} while (angka2 <= 2);

// Contoh penggunaan function
function kali(a, b) {
    return a * b;
}

var hasilKali = kali(11, 4);
console.log("Hasil perkalian: " + hasilKali);
