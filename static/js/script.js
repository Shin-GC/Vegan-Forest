//jachigu
const mapDosim = document.querySelector('.district#dosim');
const mapDongnam = document.querySelector('.district#dongnam');
const mapSeonam = document.querySelector('.district#seonam');
const mapSeobook = document.querySelector('.district#seobook');
const mapDongbook = document.querySelector('.district#dongbook');
//detailgu
const detaildosim = document.querySelector('.a');
const detaildongnam = document.querySelector('.b');
const detailseonam = document.querySelector('.c');
const detailseobook = document.querySelector('.d');
const detaildongbook = document.querySelector('.e');

function toggleDosim() {
  detaildosim.style.display = detaildosim.style.display === 'none' ? 'block' : 'none';
  detaildongnam.style.display = 'none';
  detailseonam.style.display = 'none';
  detailseobook.style.display = 'none';
  detaildongbook.style.display = 'none';
}

function toggleDongnam() {
  detaildongnam.style.display = detaildongnam.style.display === 'none' ? 'block' : 'none';
  detaildosim.style.display = 'none';
  detailseonam.style.display = 'none';
  detailseobook.style.display = 'none';
  detaildongbook.style.display = 'none';
}

function toggleSeonam() {
  detailseonam.style.display = detailseonam.style.display === 'none' ? 'block' : 'none';
  detaildosim.style.display = 'none';
  detaildongnam.style.display = 'none';
  detailseobook.style.display = 'none';
  detaildongbook.style.display = 'none';
}

function toggleSeobook() {
  detailseobook.style.display = detailseobook.style.display === 'none' ? 'block' : 'none';
  detaildosim.style.display = 'none';
  detaildongnam.style.display = 'none';
  detailseonam.style.display = 'none';
  detaildongbook.style.display = 'none';
}

function toggleDongbook() {
  detaildongbook.style.display = detaildongbook.style.display === 'none' ? 'block' : 'none';
  detaildosim.style.display = 'none';
  detaildongnam.style.display = 'none';
  detailseonam.style.display = 'none';
  detailseobook.style.display = 'none';
}

function toggleDosim() {
  detaildosim.style.display = detaildosim.style.display === 'none' ? 'block' : 'none';
  detaildongnam.style.display = 'none';
  detailseonam.style.display = 'none';
  detailseobook.style.display = 'none';
  detaildongbook.style.display = 'none';
}

function toggleDongnam() {
  detaildongnam.style.display = detaildongnam.style.display === 'none' ? 'block' : 'none';
  detaildosim.style.display = 'none';
  detailseonam.style.display = 'none';
  detailseobook.style.display = 'none';
  detaildongbook.style.display = 'none';
}

function toggleSeonam() {
  detailseonam.style.display = detailseonam.style.display === 'none' ? 'block' : 'none';
  detaildosim.style.display = 'none';
  detaildongnam.style.display = 'none';
  detailseobook.style.display = 'none';
  detaildongbook.style.display = 'none';
}

function toggleSeobook() {
  detailseobook.style.display = detailseobook.style.display === 'none' ? 'block' : 'none';
  detaildosim.style.display = 'none';
  detaildongnam.style.display = 'none';
  detailseonam.style.display = 'none';
  detaildongbook.style.display = 'none';
}

function toggleDongbook() {
  detaildongbook.style.display = detaildongbook.style.display === 'none' ? 'block' : 'none';
  detaildosim.style.display = 'none';
  detaildongnam.style.display = 'none';
  detailseonam.style.display = 'none';
  detailseobook.style.display = 'none';
}

// button 클릭시 클래스 추가
$('.district').click(function () {
  if ($(this).hasClass('active')) {
    $('.district').removeClass('active');
  } else {
    $('.district').removeClass('active');
    $(this).addClass('active');
  }
});

$('.detailgu').click(function () {
  if ($(this).hasClass('active')) {
    $('.detailgu').removeClass('active');
  } else {
    $('.detailgu').removeClass('active');
    $(this).addClass('active');
  }
});

//click event
mapDosim.addEventListener('click', toggleDosim);
mapDongnam.addEventListener('click', toggleDongnam);
mapSeonam.addEventListener('click', toggleSeonam);
mapSeobook.addEventListener('click', toggleSeobook);
mapDongbook.addEventListener('click', toggleDongbook);
