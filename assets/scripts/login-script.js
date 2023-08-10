/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/* Comment : membuat variabel untuk setiap element view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
/* Comment : Membuat variabel untuk menyimpan informasi email dan WA */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'super';

 /* Comment : Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    /* Comment : Mendapatkan input email dan password pengguna dari form. */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    /* Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
     /* Comment : memastikan bahwa email dan password sesuai */
     if (email == expectedEmail && password == expectedPassword){
      /* Comment : jika sesuai maka program akan perpindah ke halaman home */
       goToHome();
     } else{
       /* Comment : Jika tidak sesuai maka akan mendapatkan informasi bahwa input salah */
       showPopUp();
     }
});
