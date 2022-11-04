import * as flsFunctions from "./modules/functions.js";
import * as headerFunc from './modules/header.js';
import * as filterFunc from './modules/filter.js';
import * as asideFunc from './modules/aside.js';
import * as tabFunc from './modules/tab.js';
import * as carouselFunc from './modules/carousel.js';
import * as chartFunc from './modules/myChart.js';
import * as galleryFunc from './modules/gallery.js';

flsFunctions.isWebp();
headerFunc.header();
filterFunc.filter();
asideFunc.aside();
tabFunc.tab();
carouselFunc.carousel();
chartFunc.chartLib();
galleryFunc.gallery();
/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/