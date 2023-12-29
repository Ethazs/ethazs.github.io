

document.addEventListener("DOMContentLoaded", function () {

    const imageGallery = document.getElementById("resimGaleri");
    const keywords = [
        "islam", "mosque", "quran", "muslim", "mevlana",
        "mecca", "medina", "ramadan", "moslem", "free palestine",
        "minaret", "gaza", "ummah", "muhammad", "palestine",
        "al aqsa masjid", "allah", "salah", "islamic", "mescidi aksa",
        "forest","calligraphy","quran ayat","flowers"
    ];

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomImageUrl(keyword, width = 400, height = 400) {
        const excludeCategories = "people";
        return `https://source.unsplash.com/random/` + width + "x" + height + "/?" + keyword + `&exclude_categories=${excludeCategories}`;
    }

    function appendRandomImage() {
        const img = document.createElement("img");
        const width = getRandomNumber(400, 500);
        const height = getRandomNumber(400, 500);
        const randomIndex = Math.floor(Math.random() * keywords.length);
        const randomKeyword = keywords.splice(randomIndex, 1)[0];
        img.src = getRandomImageUrl(randomKeyword, 500, 500);
        img.addEventListener("click", function() {
            enlargeImage(img.src, img.alt);
        });
        imageGallery.appendChild(img);
    }

    function enlargeImage(src, alt) {
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.innerHTML = `<img src="${src}" alt="${alt}">`;
        overlay.addEventListener("click", function() {
            overlay.remove();
        });
        document.body.appendChild(overlay);
    }

    for (let i = 0; i < 20; i++) { // 4 sütun x 5 satır = 20 resim
        appendRandomImage();
    }
});

