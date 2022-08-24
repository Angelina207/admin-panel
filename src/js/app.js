import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger-menu.js";
import * as product from "./modules/products.js";
import * as parallax from './modules/parallax.js';
import * as contact from './modules/contact.js';
import * as scrollFnc from './modules/scroll.js';

flsFunctions.isWebp();
burger.burgerMenu();
product.products();
parallax.parallaxEffect();
contact.contactForm();
scrollFnc.scrollToPage();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/