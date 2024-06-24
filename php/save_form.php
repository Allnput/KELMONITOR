<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
   $nama = isset($_POST['nama']) ? $_POST['nama'] : '';
   $kontak = isset($_POST['kontak']) ? $_POST['kontak'] : '';
   $barang = isset($_POST['barang']) ? $_POST['barang'] : '';
   $service = isset($_POST['service']) ? $_POST['service'] : '';
   $jumlah = isset($_POST['jumlah']) ? $_POST['jumlah'] : '';
   $alamat = isset($_POST['alamat']) ? $_POST['alamat'] : '';

   $orderData = "Nama Lengkap       : $nama\n"
              . "Kontak             : $kontak\n"
              . "Berat Barang       : $barang kg\n"
              . "Jenis Layanan      : $service\n"
              . "Harga              : Rp $jumlah\n"
              . "Alamat Penjemputan :\n$alamat\n\n";

   $file = 'orders.txt';

   // Menyimpan data ke file dengan mode FILE_APPEND dan mengunci file
   if (file_put_contents($file, $orderData, FILE_APPEND | LOCK_EX) !== false) {
       echo "Data formulir berhasil disimpan.";
   } else {
       echo "Terjadi kesalahan dalam penyimpanan data formulir.";
       // Tambahkan penanganan error untuk mendapatkan informasi lebih lanjut
       $error = error_get_last();
       if ($error) {
           echo "Error: " . $error['message'];
       }
   }
} else {
   header('Location: pemesanan.html');
   exit;
}
?>
