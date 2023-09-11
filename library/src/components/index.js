import './index.html';
import './library.scss';

// self - check
// import { librarySelfCheckPart1 } from './librarySelfCheck/librarySelfCheck-part1/librarySelfCheckPart1';
// import { librarySelfCheckPart2 } from './librarySelfCheck/librarySelfCheck-part2/librarySelfCheckPart2';
import { librarySelfCheckPart3 } from './librarySelfCheck/librarySelfCheck-part3/librarySelfCheckPart3';

import { burgerMenu } from './base/burger-menu/burgerMenu';
import { carouselHandler } from './base/carousel/_carousel';

burgerMenu();
carouselHandler();