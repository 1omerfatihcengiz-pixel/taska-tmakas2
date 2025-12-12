📌 TAŞ – KAĞIT – MAKAS Oyunu

Bu proje, JavaScript ile geliştirilmiş basit ama eğlenceli bir Taş–Kağıt–Makas savaş oyunudur.
Oyuncu ve bilgisayar karşılıklı hamle yapar, her hamlede biri 20 can kaybeder.
İlk önce canı sıfırlanan taraf oyunu kaybeder.

🖼️ Ekran Görüntüsü (Screen Preview)

(GitHub’a koyarken buraya bir görsel ekleyebilirsin.)

🚀 Özellikler

✔️ Oyuncu → TAŞ, KAĞIT, MAKAS seçebilir
✔️ Bilgisayar 0–2 arası rastgele seçim yapar
✔️ Animasyonlu HP barı (can barı)
✔️ Oyun sonucu ekranda görünür
✔️ Oyuncu veya PC’nin canı sıfırlanınca oyun durur
✔️ “Sayfayı Yenile” butonuyla oyun resetlenir
✔️ Modern ve sade kullanıcı arayüzü

📂 Proje Dosyaları
📁 proje-klasörü
│
├── index.html
├── app3.js         → Oyun mekaniklerini yönetir
├── app2.js         → Random ve yardımcı fonksiyonlar
├── app4.css        → Tasarım ve stil dosyası
└── çizim orman.jpg → Arka plan görseli

🕹️ Oyun Nasıl Çalışır?
1️⃣ Oyuncu bir seçim yapar

TAŞ

KAĞIT

MAKAS

2️⃣ Bilgisayar rasgele seçim üretir

app2.sifrdanikiyekadarrandom() fonksiyonu:

Math.floor(Math.random() * 3);

3️⃣ Kazanan belirlenir

kazananbulucu(p1, pc) fonksiyonu
→ Taş Makas’ı yener
→ Makas Kağıt’ı yener
→ Kağıt Taş’ı yener
→ Aynıysa “berabere”

4️⃣ Can barları güncellenir

Kazanan taraf hiçbir şey kaybetmez, kaybeden -20 can kaybeder.

5️⃣ Kazanan ekrana bildirilir

Can sıfırlanınca:

“Sen kazandın!”

“PC kazandı!”

🛠️ Kullanılan Teknolojiler

HTML5

CSS3

JavaScript (ES Modules)

DOM Manipülasyonu

Temel Animasyon (transition ile)

🔧 Projeyi Çalıştırmak
🔹 1. Dosyaları bilgisayarına indir
🔹 2. Bir canlı sunucu ile aç

(Javascript module kullanıldığı için file:/// ile açmak hata verebilir.)

VSCode → Live Server önerilir.

🔹 3. Tarayıcıda aç
http://localhost:5500/

👨‍💻 Yazar

ömer fatih cengiz







![image alt](https://github.com/1omerfatihcengiz-pixel/taska-tmakas2/blob/1e1054b88a9da9e893105c5484c9779dc1ceb1f4/b4698ec5-72df-4eda-beaa-3cc3c09bb489.jpg)





