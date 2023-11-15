import './index.css';
import { log } from '@util/index.js'; // gen initial chunk
import '@demo/loadLocalPackage.js';
// import '@demo/loadAssets.js';
// import { comp as click2print } from '@demo/click2print.js';
// import { lazyload } from '@demo/dynamicComponent.js';

// demo:local package to use

// demo:3th package to use
// import {join} from 'lodash';
// log(join(['Index', 'module', 'loaded!!'], ' '));

// demo:dynamicComponent,懒加载
// lazyload();

// demo:click2print,交互事件
// document.body.appendChild(click2print());

console.log('Index module loaded!!');
