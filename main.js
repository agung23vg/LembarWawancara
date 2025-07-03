// Tampilkan kolom alasan saat radio diklik
document.querySelectorAll('.options input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const questionDiv = radio.closest('.question');
    const reasonBox = questionDiv.querySelector('.reason');
    reasonBox.style.display = 'block';
  });
});

// Submit ke WhatsApp
document.getElementById('otcForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Data Lembar Wawancara
  const namaApotek = document.getElementById('namaApotek').value || '-';
  const namaTVF = document.getElementById('namaTVF').value || '-';
  const tanggalObservasi = document.getElementById('tanggalObservasi').value || '-';
  const waktuObservasi = document.getElementById('waktuObservasi').value || '-';

  let message = "Formulir Rekomendasi Obat OTC:%0A%0A";
  message += `Nama Apotek: ${namaApotek}%0A`;
  message += `Nama TVF: ${namaTVF}%0A`;
  message += `Tanggal Observasi: ${tanggalObservasi}%0A`;
  message += `Waktu Observasi: ${waktuObservasi}%0A%0A`;

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

    if (reasonText === "") {
      alert(`Mohon isi alasan untuk pertanyaan ${qNum}.`);
      valid = false;
      return;
    }

    message += `${qNum}. ${qText}%0A`;
    message += `Jawaban: ${selected.value}%0A`;
    message += `Alasan: ${reasonText}%0A%0A`;
  });

  if (!valid) return;

  // Nomor WA tujuan
  const phoneNumber = "6283874202571";

  // Deteksi perangkat
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const whatsappURL = isMobile
    ? `https://wa.me/${phoneNumber}?text=${message}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  window.open(whatsappURL, "_blank");
});
