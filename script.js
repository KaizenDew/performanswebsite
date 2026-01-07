    function kaydir(yon) {
        const icerik = document.getElementById('menuKaydirici');
        const kartGenisligi = icerik.querySelector('.menu-karti').offsetWidth + 25; 
        icerik.scrollLeft += (yon * kartGenisligi);
    }

    let s1, s2, dogruCevap;

    function yeniSoru() {
        s1 = Math.floor(Math.random() * 10) + 1;
        s2 = Math.floor(Math.random() * 10) + 1;
        dogruCevap = s1 + s2;
        document.getElementById('soru-metni').innerText = s1 + " + " + s2 + " =";
        document.getElementById('cevap-kutusu').value = '';
    }

    window.onload = yeniSoru;

    document.getElementById('iletisimFormu').onsubmit = function(e) {
        e.preventDefault();
        let girilen = document.getElementById('cevap-kutusu').value;
        let durum = document.getElementById('mesaj-durumu');

        if(parseInt(girilen) === dogruCevap) {
            durum.innerText = "Mesajınız başarıyla iletildi!";
            durum.style.color = "#4caf50";
            this.reset();
            yeniSoru();
        } else {
            durum.innerText = "Doğrulama hatalı!";
            durum.style.color = "#f44336";
        }
    };