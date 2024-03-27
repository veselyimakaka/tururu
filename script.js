var heading = document.querySelector('h1')
var main_scr = document.querySelector('.products')
var news_scr = document.querySelector('.news')
var main_link = document.querySelector('.main-link')
var news_link = document.querySelector('.news-link')

function toMain() {
  heading.innerHTML = 'Гениальный магазин'
  main_scr.style.display = 'flex'
  news_scr.style.display = 'none'
}

function toNews() {
  heading.innerHTML = 'Новости'
  main_scr.style.display = 'none'
  news_scr.style.display = 'flex'
}


main_link.addEventListener('click', toMain)
news_link.addEventListener('click', toNews)
