// tombol menu di hp
var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    var buka = menu.classList.toggle("buka");
    menuBtn.setAttribute("aria-expanded", buka);
  });
}

// accordion (halaman efek samping)
var judulAcc = document.querySelectorAll(".acc-judul");

judulAcc.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    var isi = tombol.nextElementSibling;
    var tampil = isi.classList.toggle("tampil");
    tombol.setAttribute("aria-expanded", tampil);
    tombol.querySelector(".tanda").textContent = tampil ? "-" : "+";
  });
});

// tab cara mengolah
var tabBtn = document.querySelectorAll(".tab-btn");
var tabIsi = document.querySelectorAll(".tab-isi");

tabBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    tabBtn.forEach(function (b) { b.classList.remove("aktif"); });
    tabIsi.forEach(function (t) { t.classList.remove("tampil"); });

    btn.classList.add("aktif");
    document.getElementById(btn.dataset.target).classList.add("tampil");
  });
});

// tahun di footer
var tahun = document.getElementById("tahun");
if (tahun) {
  tahun.textContent = new Date().getFullYear();
}
