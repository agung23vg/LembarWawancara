document.getElementById("otcForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Ambil data identitas
  const namaApotek = document.getElementById("namaApotek").value.trim();
  const namaTVF = document.getElementById("namaTVF").value.trim();
  const tanggalObservasi = document.getElementById("tanggalObservasi").value;
  const waktuObservasi = document.getElementById("waktuObservasi").value;

  let message = "*Lembar Wawancara Rekomendasi Obat OTC*\n\n";
  message += `*Nama Apotek:* ${namaApotek}\n`;
  message += `*Nama TVF:* ${namaTVF}\n`;
  message += `*Tanggal Observasi:* ${tanggalObservasi}\n`;
  message += `*Waktu Observasi:* ${waktuObservasi}\n\n`;

  // Loop semua pertanyaan
  for (let i = 1; i <= 20; i++) {
    const radios = document.querySelector(`input[name="recommend${i}"]:checked`);
    const reason = document.querySelector(`textarea[name="reasonText${i}"]`).value.trim();

    const answer = radios ? radios.value : "Tidak dijawab";
    message += `*Pertanyaan ${i}:* ${answer}\n`;
    message += `_Alasan:_ ${reason}\n\n`;
  }

  // Encode untuk URL WhatsApp
  const encodedMessage = encodeURIComponent(message);

  // Ganti dengan nomor tujuan
  const phoneNumber = "6283874202571";

  // Buka WhatsApp
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
});
