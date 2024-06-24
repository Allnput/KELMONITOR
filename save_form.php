<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mendapatkan nilai dari form, memastikan variabel ada dan menghindari notice
    $nama = isset($_POST['nama']) ? $_POST['nama'] : '';
    $kontak = isset($_POST['kontak']) ? $_POST['kontak'] : '';
    $barang = isset($_POST['barang']) ? $_POST['barang'] : '';
    $service = isset($_POST['service']) ? $_POST['service'] : '';
    $jumlah = isset($_POST['jumlah']) ? $_POST['jumlah'] : '';
    $alamat = isset($_POST['alamat']) ? $_POST['alamat'] : '';

    // Menggabungkan data ke dalam satu string
    $orderData = "Nama Lengkap       : $nama\n"
               . "Kontak             : $kontak\n"
               . "Berat Barang       : $barang kg\n"
               . "Jenis Layanan      : $service\n"
               . "Harga              : Rp $jumlah\n"
               . "Alamat Penjemputan :\n$alamat\n\n";

    // Path file untuk menyimpan data
    // $file = 'orders.txt';
$fp = fopen("orders.txt","a+");
fputs($fp, $nama|$kontak|$barang|$service|$jumlah|$alamat);
fclose($fp);

    // Menyimpan data ke file dengan mode FILE_APPEND dan mengunci file
    if (file_put_contents($file, $orderData, FILE_APPEND | LOCK_EX) !== false) {
        echo "Data formulir berhasil disimpan.";
    } else {
        echo "Terjadi kesalahan dalam penyimpanan data formulir.";
    }
} else {
    // Jika bukan metode POST, redirect kembali ke halaman pemesanan.html
    header('Location: ../pemesanan.html');
    exit;
}
?>
