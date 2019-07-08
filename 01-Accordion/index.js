// jshint esversion:6

// firat button
document.querySelector('.btn-1-plus').addEventListener('click', function () {
  if (document.querySelector('.btn-1-plus').style.display = ('block')) {
    document.querySelector('.btn-1-plus').style.display = ('none');
    document.querySelector('.btn-1-minus').style.display = ('block');
    document.querySelector('.text-1').classList.toggle('active');
  } else {
    document.querySelector('.text-1').classList.toggle('active');
    document.querySelector('.btn-1-plus').style.display = ('block');
    document.querySelector('.btn-1-minus').style.display = ('none');
  }
});

document.querySelector('.btn-1-minus').addEventListener('click', function () {
  if (document.querySelector('.btn-1-minus').style.display = ('block')) {
    document.querySelector('.btn-1-minus').style.display = ('none');
    document.querySelector('.btn-1-plus').style.display = ('block');
    document.querySelector('.text-1').classList.toggle('active');
  } else {
    document.querySelector('.text-1').classList.toggle('active');
    document.querySelector('.btn-1-minus').style.display = ('block');
    document.querySelector('.btn-1-plus').style.display = ('none');
  }
});



// second button
document.querySelector('.btn-2-plus').addEventListener('click', function () {
  if (document.querySelector('.btn-2-plus').style.display = ('block')) {
    document.querySelector('.btn-2-plus').style.display = ('none');
    document.querySelector('.btn-2-minus').style.display = ('block');
    document.querySelector('.text-2').classList.toggle('active');
  } else {
    document.querySelector('.text-2').classList.toggle('active');
    document.querySelector('.btn-2-plus').style.display = ('block');
    document.querySelector('.btn-2-minus').style.display = ('none');
  }
});

document.querySelector('.btn-2-minus').addEventListener('click', function () {
  if (document.querySelector('.btn-2-minus').style.display = ('block')) {
    document.querySelector('.btn-2-minus').style.display = ('none');
    document.querySelector('.btn-2-plus').style.display = ('block');
    document.querySelector('.text-2').classList.toggle('active');
  } else {
    document.querySelector('.text-2').classList.toggle('active');
    document.querySelector('.btn-2-minus').style.display = ('block');
    document.querySelector('.btn-2-plus').style.display = ('none');
  }
});



// third button
document.querySelector('.btn-3-plus').addEventListener('click', function () {
  if (document.querySelector('.btn-3-plus').style.display = ('block')) {
    document.querySelector('.btn-3-plus').style.display = ('none');
    document.querySelector('.btn-3-minus').style.display = ('block');
    document.querySelector('.text-3').classList.toggle('active');
  } else {
    document.querySelector('.text-3').classList.toggle('active');
    document.querySelector('.btn-3-plus').style.display = ('block');
    document.querySelector('.btn-3-minus').style.display = ('none');
  }
});

document.querySelector('.btn-3-minus').addEventListener('click', function () {
  if (document.querySelector('.btn-3-minus').style.display = ('block')) {
    document.querySelector('.btn-3-minus').style.display = ('none');
    document.querySelector('.btn-3-plus').style.display = ('block');
    document.querySelector('.text-3').classList.toggle('active');
  } else {
    document.querySelector('.text-3').classList.toggle('active');
    document.querySelector('.btn-3-minus').style.display = ('block');
    document.querySelector('.btn-3-plus').style.display = ('none');
  }
});