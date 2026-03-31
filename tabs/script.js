const tombol1 = document.getElementById("btn-1");
const tombol2 = document.getElementById("btn-2");
const tombol3 = document.getElementById("btn-3");
const tombol4 = document.getElementById("btn-4");

const konten1 = document.getElementById("tab-content-1");
const konten2 = document.getElementById("tab-content-2");
const konten3 = document.getElementById("tab-content-3");
const konten4 = document.getElementById("tab-content-4");

function matikanSemuaTab() {
  tombol1.classList.remove("active");
  tombol2.classList.remove("active");
  tombol3.classList.remove("active");
  tombol4.classList.remove("active");

  konten1.classList.remove("active");
  konten2.classList.remove("active");
  konten3.classList.remove("active");
  konten4.classList.remove("active");
}

tombol1.onclick = function() {
  matikanSemuaTab();
  tombol1.classList.add("active");
  konten1.classList.add("active");
};

tombol2.onclick = function() {
  matikanSemuaTab();
  tombol2.classList.add("active");
  konten2.classList.add("active");
};

tombol3.onclick = function() {
  matikanSemuaTab();
  tombol3.classList.add("active");
  konten3.classList.add("active");
};

tombol4.onclick = function() {
  matikanSemuaTab();
  tombol4.classList.add("active");
  konten4.classList.add("active");
};
