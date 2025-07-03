document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('otcForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Data observasi
    const namaApotek = document.getElementById('namaApotek').value.trim();
    const namaTVF = document.getElementById('namaTVF').value.trim();
    const tanggalObservasi = document.getElementById('tanggalObservasi').value;
    const waktuObservasi = document.getElementById('waktuObservasi').value;

    // Ambil semua div.question
    const questions = document.querySelectorAll('.question');

    let pesan = `*Lembar Wawancara*\n\n`;
    pesan += `Nama Apotek: ${namaApotek}\n`;
    pesan += `Nama TVF: ${namaTVF}\n`;
    pesan += `Tanggal Observasi: ${tanggalObservasi}\n`;
    pesan += `Waktu Observasi: ${waktuObservasi}\n\n`;

    questions.forEach((q, index) => {
      const pertanyaan = q.querySelector('label').innerText.trim();
      const jawaban = q.querySelector('input[type="radio"]:checked');
      const alasan = q.querySelector('textarea').value.trim();

      const teksJawaban = jawaban ? jawaban.value : 'Tidak diisi';

      pesan += `*${pertanyaan}*\n`;
      pesan += `Jawaban: ${teksJawaban}\n`;
      pesan += `Alasan: ${alasan || '-'}\n\n`;
    });

    // Ganti nomor WhatsApp tujuan di sini (tanpa tanda +)
    const noWa = "6283874202571"; 

    // Encode pesan
    const encodedMessage = encodeURIComponent(pesan);

    // Buat link WhatsApp
    const waLink = `https://web.whatsapp.com/send?phone=${noWa}&text=${encodedMessage}`;


    // Buka tab baru
    window.open(waLink, '_blank');
  });
});
