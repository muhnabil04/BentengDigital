const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const lgMenu = document.getElementById("lg-menu");
const navbar = document.getElementById("navbar");

// Buka menu mobile
openMenu.addEventListener("click", () => {
    menu.classList.remove("w-0", "overflow-hidden");
    menu.classList.add("w-full");
});

// Tutup menu mobile
closeMenu.addEventListener("click", () => {
    menu.classList.remove("w-full");
    menu.classList.add("w-0", "overflow-hidden");
});


window.addEventListener("scroll", () => {
if (window.scrollY > 15) {
    // Ketika discroll → tampilkan navbar kecil & rounded
    navbar.classList.add(
    "top-1",
    "left-1/2",
    "-translate-x-1/2",
    "max-w-5xl",
    "w-[90%]",
    "md:w-[85%]",
    "rounded-full",
    "shadow-lg",
    "bg-white/80",
    "py-3"
    );
    navbar.classList.remove("w-full", "left-0", "translate-x-0", "rounded-none", "py-6");
    lgMenu.classList.remove("text-gray-100");
    lgMenu.classList.add("text-gray-700");
} else {
    // Saat di posisi paling atas → lebar penuh, tanpa rounded
    navbar.classList.remove(
        "top-1",
        "left-1/2",
        "-translate-x-1/2",
        "max-w-5xl",
        "w-[90%]",
        "md:w-[85%]",
        "rounded-full",
        "shadow-lg",
        "bg-white/80"
    );
    navbar.classList.add("w-full", "left-0", "translate-x-0", "rounded-none","py-6", "text-gray-90");
    
    lgMenu.classList.remove("text-gray-700");
    lgMenu.classList.add("text-gray-100");
}
});

document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    let count = 0;
    const target = 1000; // nilai akhir
    const speed = 10; // semakin kecil semakin cepat

    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(target / 100);
        counter.textContent = count.toLocaleString();
        setTimeout(updateCount, speed);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };

    updateCount();
  });

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.addEventListener("toggle", () => {
        if (item.open) {
          document.querySelectorAll(".accordion-item").forEach((other) => {
            if (other !== item) other.removeAttribute("open");
          });
        }
      });
    });

// Breach section
  const form = document.getElementById("breachForm");
  const result = document.getElementById("result");
  const loading = document.getElementById("loading");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = document.getElementById("userInput").value.trim();

    if (value === "") return;

    result.classList.remove("hidden");
    loading.classList.remove("hidden");
    output.classList.add("hidden");
    output.innerHTML = "";

    // Simulasi cek data breach
    setTimeout(() => {
      loading.classList.add("hidden");
      output.classList.remove("hidden");

      // Random hasil simulasi
      const breached = Math.random() < 0.4; // 40% kemungkinan data bocor

      if (breached) {
        output.innerHTML = `
          <div class="bg-red-50 border border-red-300 text-red-700 rounded-xl p-6">
            <h3 class="text-2xl font-bold mb-2">⚠️ Data Anda Ditemukan!</h3>
            <p class="mb-3">Alamat <span class="font-semibold">${value}</span> pernah terlibat dalam kebocoran data publik.</p>
            <p class="text-sm text-gray-600">Segera ubah kata sandi Anda dan aktifkan verifikasi dua langkah (2FA) untuk keamanan tambahan.</p>
          </div>
        `;
      } else {
        output.innerHTML = `
          <div class="bg-green-50 border border-green-300 text-green-700 rounded-xl p-6">
            <h3 class="text-2xl font-bold mb-2">✅ Aman!</h3>
            <p>Tidak ditemukan indikasi kebocoran untuk <span class="font-semibold">${value}</span>.</p>
            <p class="text-sm text-gray-600 mt-2">Tetap waspada dan hindari mengklik tautan mencurigakan.</p>
          </div>
        `;
      }
    }, 1500);
  });