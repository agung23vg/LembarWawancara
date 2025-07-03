document.getElementById("otcForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Ambil data umum dari lembar wawancara
  const namaApotek = document.querySelector('input[name="namaApotek"]').value.trim();
  const namaTVF = document.querySelector('input[name="namaTVF"]').value.trim();
  const tanggalObservasi = document.querySelector('input[name="tanggalObservasi"]').value;
  const waktuObservasi = document.querySelector('input[name="waktuObservasi"]').value;

  // Ambil semua pertanyaan
  const questionDivs = document.querySelectorAll(".question");
  let hasil = `*Formulir Rekomendasi Obat OTC*\n\n`;
  hasil += `*Nama Apotek:* ${namaApotek}\n`;
  hasil += `*Nama TVF:* ${namaTVF}\n`;
  hasil += `*Tanggal Observasi:* ${tanggalObservasi}\n`;
  hasil += `*Waktu Observasi:* ${waktuObservasi}\n\n`;

  questionDivs.forEach((questionDiv, index) => {
    const pertanyaan = questionDiv.querySelector("label").innerText.trim();
    const jawabanInput = questionDiv.querySelector('input[type="radio"]:checked');
    const jawaban = jawabanInput ? jawabanInput.value : "(Belum diisi)";
    const alasan = questionDiv.querySelector("textarea").value.trim() || "(Tidak ada alasan)";

    hasil += `*${index + 1}. ${pertanyaan}*\n`;
    hasil += `Jawaban: ${jawaban}\n`;
    hasil += `Alasan: ${alasan}\n\n`;
  });

  // Encode hasil agar bisa dikirim ke WhatsApp
  const encodedMessage = encodeURIComponent(hasil);

  // Nomor WhatsApp tujuan (ganti sesuai kebutuhan)
  const nomorWA = "6283874202571"; // contoh: 628... tanpa +
  const waLink = `https://wa.me/${nomorWA}?text=${encodedMessage}`;

  window.open(waLink, "_blank");
});
