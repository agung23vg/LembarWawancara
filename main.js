// Menampilkan kolom alasan ketika radio diklik
document.querySelectorAll('.options input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const questionDiv = radio.closest('.question');
    const reasonBox = questionDiv.querySelector('.reason');
    reasonBox.style.display = 'block';
  });
});

// Saat form dikirim
document.getElementById('otcForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Ambil data umum
  const namaApotek = document.getElementById('namaApotek').value.trim();
  const namaTVF = document.getElementById('namaTVF').value.trim();
  const tanggalObservasi = document.getElementById('tanggalObservasi').value.trim();
  const waktuObservasi = document.getElementById('waktuObservasi').value.trim();

  // Validasi data umum
  if (!namaApotek || !namaTVF || !tanggalObservasi || !waktuObservasi) {
    alert("Mohon lengkapi data lembar wawancara.");
    return;
  }

  let message = `Formulir Rekomendasi Obat OTC\n`;
  message += `------------------------------\n`;
  message += `Nama Apotek: ${namaApotek}\n`;
  message += `Nama TVF: ${namaTVF}\n`;
  message += `Tanggal Observasi: ${tanggalObservasi}\n`;
  message += `Waktu Observasi: ${waktuObservasi}\n`;
  message += `------------------------------\n\n`;

  let valid = true;

  document.querySelectorAll('.question').forEach((question, index) => {
    const qNum = index + 1;
    const qText = question.querySelector('label').innerText.trim();
    const selected = question.querySelector('input[type="radio"]:checked');
    const reasonText = question.querySelector('textarea').value.trim();

    if (!selected) {
      alert(`Pertanyaan ${qNum} belum dijawab.`);
      valid = false;
      return;
    }

    if (!reasonText) {
      alert(`Mohon isi alasan untuk pertanyaan ${qNum}.`);
      valid = false;
      return;
    }

    message += `P${qNum}. ${qText}\n`;
    message += `Jawaban: ${selected.value}\n`;
    message += `Alasan: ${reasonText}\n\n`;
  });

  if (!valid) return;

  // Encode pesan
  const encodedMessage = encodeURIComponent(message);

  // Ganti nomor di sini (tanpa tanda +)
  const phoneNumber = "6283874202571";

  // Buat URL WA
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Buka WA
  window.open(whatsappURL, "_blank");
});
