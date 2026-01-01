function tampilkanWaktu() {
    setInterval(function () {
        let waktu = new Date();
        let jam = waktu.getHours();
        let menit = waktu.getMinutes();
        let detik = waktu.getSeconds();

        if (menit < 10) menit = "0" + menit;
        if (detik < 10) detik = "0" + detik;

        document.getElementById("jam").innerHTML =
            "Waktu Sekarang: " + jam + ":" + menit + ":" + detik;
    }, 1000);
}
