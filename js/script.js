function hitungBMI() {
  // Dapatkan nilai dari input
  const beratBadan = parseFloat(document.getElementById("berat-badan").value);
  const tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value);

  // Konversi tinggi badan ke meter
  const tinggiMeter = tinggiBadan / 100;

  // Hitung BMI
  const bmi = beratBadan / (tinggiMeter * tinggiMeter);

  // Variale yang menampung Hasil berdasarkan jenis BMI (Message)
  const m_kurang = "Berat Badan Kurang";
  const m_normal = "Berat Badan Normal";
  const m_lebih = "Berat Badan Lebih";
  const m_gemuk = "Berat Badan Gemuk";

  // Variale yang menampung Hasil berdasarkan jenis BMI (Message1)
  const m1_kurang = "Anda Termasuk dalam kategori kurang berat badan";
  const m1_normal = "Anda Memiliki Berat Badan Normal";
  const m1_lebih = "Anda Memiliki Berat Badan berlebih";
  const m1_gemuk = "Anda termasuk dalam kategori obesitas";

  // Variale yang menampung Hasil Informasi berdasarkan jenis BMI (info)
  const i_kurang =
    "Anda berada dalam kategori kurang berat badan. Kondisi ini bisa meningkatkan risiko masalah kesehatan tertentu, seperti kekurangan nutrisi dan melemahnya sistem imun. Disarankan untuk mengonsumsi lebih banyak kalori dari makanan bernutrisi tinggi dan mempertahankan pola makan yang teratur. Berkonsultasilah dengan ahli gizi untuk mendapatkan saran yang tepat agar mencapai berat badan ideal.";
  const i_normal =
    "Anda berada dalam kategori berat badan normal. Ini adalah tanda bahwa Anda memiliki keseimbangan antara kalori yang dikonsumsi dan aktivitas fisik. Untuk menjaga kesehatan, tetaplah mengatur pola makan yang seimbang dan lakukan olahraga secara teratur. Menjaga berat badan dalam rentang ini membantu mengurangi risiko masalah kesehatan.";
  const i_lebih =
    "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  const i_gemuk =
    "Anda berada dalam kategori gemuk atau obesitas, yang menandakan bahwa Anda memiliki berat badan berlebih yang signifikan. Untuk menurunkan risiko masalah kesehatan, disarankan untuk menurunkan berat badan dengan mengatur asupan kalori dan meningkatkan aktivitas fisik secara teratur. Berkonsultasilah dengan tenaga kesehatan atau ahli gizi untuk membuat rencana penurunan berat badan yang sesuai dan aman bagi tubuh Anda.";

  // Tambahkan logika untuk menentukan kategori BMI berdasarkan Berat Badan
  if (bmi > 30) {
    console.log((message = m_gemuk), (message1 = m1_gemuk), (info = i_gemuk));
  } else if (bmi > 25) {
    console.log((message = m_lebih), (message1 = m1_lebih), (info = i_lebih));
  } else if (bmi > 18.5) {
    console.log(
      (message = m_normal),
      ((message1 = m1_normal), (info = i_normal))
    );
  } else {
    console.log(
      (message = m_kurang),
      (message1 = m1_kurang),
      (info = i_kurang)
    );
  }

  // Tampilkan hasil
  let hasilText = bmi.toFixed(2) + "<br>";
  document.getElementById("ResultBMI").innerHTML = hasilText;
  document.getElementById("message").innerHTML = message;
  document.getElementById("message1").innerHTML = message1;
  document.getElementById("info").innerHTML = info;
}
