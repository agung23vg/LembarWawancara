document.getElementById('otcForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let message = "Formulir Rekomendasi Obat OTC:%0A%0A";

  // Data identitas
  const namaApotek = document.getElementById("namaApotek").value.trim();
  const namaTVF = document.getElementById("namaTVF").value.trim();
  const tanggalObservasi = document.getElementById("tanggalObservasi").value;
  const waktuObservasi = document.getElementById("waktuObservasi").value;

  message += `Nama Apotek: ${namaApotek}%0A`;
  message += `Nama TVF: ${namaTVF}%0A`;
  message += `Tanggal Observasi: ${tanggalObservasi}%0A`;
  message += `Waktu Observasi: ${waktuObservasi}%0A%0A`;

  let valid = true;

  document.querySelectorAll('.question').forEach((question, index) => {
    const qNum = index + 1;
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

    const questionText = question.querySelector('label').innerText.trim();

    message += `${qNum}. ${questionText}%0A`;
    message += `Jawaban: ${selected.value}%0A`;
    message += `Alasan: ${reasonText}%0A%0A`;
  });

  if (!valid) return;

  const phoneNumber = "6283874202571"; // nomor tujuan WA
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});
