// Can Chi
const can = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
const chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

// Tử Vi chính tinh mẫu (cơ bản)
const chinhTinh = {
    "Tử Vi": "Mệnh", "Thiên Phủ": "Phụ Mẫu", "Thái Dương": "Phúc Đức",
    "Vũ Khúc": "Tài Bạch", "Thiên Đồng": "Tật Ách", "Liêm Trinh": "Phu Thê"
};

// 12 cung
const cungArr = ["Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch", "Quan Lộc", "Nô Bộc",
                 "Thiên Di", "Tật Ách", "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"];

// Hàm sinh lá số
function generateTuVi() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;
    const hour = parseInt(document.getElementById('hour').value);

    if (!day || !month || !year || year < 1900) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const canchi = `${can[year % 10]} ${chi[year % 12]}`;
    const isTamTai = ["Hợi", "Mão", "Mùi"].includes(chi[year % 12]);

    // Hiển thị lá số
    document.getElementById('laso').style.display = "block";
    const grid = document.getElementById('tuvi-grid');
    grid.innerHTML = "";

    cungArr.forEach((cung, i) => {
        const div = document.createElement('div');
        div.className = `cung ${cung === "Mệnh" ? "menh" : ""}`;
        div.innerHTML = `<h3>${cung}</h3><div class="tinh">${Object.keys(chinhTinh).find(k => chinhTinh[k] === cung) || "Hóa Khoa"}</div>`;
        grid.appendChild(div);
    });

    document.getElementById('tuviketqua').innerHTML = `
        <p><strong>Tuổi:</strong> ${canchi} - ${gender === "nam" ? "Dương Nam" : "Âm Nữ"}</p>
        <p><strong>Tam Tai 2025:</strong> ${isTamTai ? "PHẠM" : "KHÔNG PHẠM"}</p>
        <p><strong>Mệnh:</strong> ${chinhTinh["Tử Vi"]} - Quý nhân phù trợ, sự nghiệp thăng tiến!</p>
    `;
}
