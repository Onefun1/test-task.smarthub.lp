(function(){'use strict';function headerBurgerInit(){var burgerItem=document.querySelector('.burger');var menu=document.querySelector('.header__nav');var menuCloseItem=document.querySelector('.nav__close');burgerItem.addEventListener('click',function(){menu.classList.add('nav--active'),burgerItem.classList.add('burder--hide');}),menuCloseItem.addEventListener('click',function(){menu.classList.remove('nav--active'),burgerItem.classList.remove('burder--hide');});}function smoothScroll(){var menu=document.querySelector('.header__nav');var burgerItem=document.querySelector('.burger');var linkNav=document.querySelectorAll('[href^="#"]'),V=0.5;for(var i=0;i<linkNav.length;i++)linkNav[i].addEventListener('click',function(e){function step(time){start===null&&(start=time);var progress=time-start,r=t<0?Math.max(w-progress/V,w+t):Math.min(w+progress/V,w+t);window.scrollTo(0,r),r!=w+t?requestAnimationFrame(step):location.hash=hash;}e.preventDefault(),menu.classList.remove('nav--active'),burgerItem.classList.remove('burder--hide');var w=window.pageYOffset,hash=this.href.replace(/[^#]*(.*)/,'$1');var t=document.querySelector(hash).getBoundingClientRect().top;var start=null;requestAnimationFrame(step);},!1);}function main(){headerBurgerInit(),smoothScroll();}document.addEventListener('DOMContentLoaded',main);}());