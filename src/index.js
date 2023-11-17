import './index.css';
// import { log } from '@util/index.js'; // gen initial chunk
// import '@demo/loadLocalPackage.js';
// import '@demo/loadAssets.js';
// import { comp as click2print } from '@demo/click2print.js';
// import { lazyload } from '@demo/dynamicComponent.js';
// import { presentTransform, pluginTransform } from '@demo/babeljs.js';
// import { comp } from './demo/cssmodule.js';
import { comp } from './demo/cssmodule.js';

// demo:local package to use

// demo:3th package to use
// import {join} from 'lodash';
// log(join(['Index', 'module', 'loaded!!'], ' '));

// demo:dynamicComponent,懒加载
// lazyload();

// demo:click2print,交互事件
// document.body.appendChild(click2print());

// demo: babeljs transform
// presentTransform();
// pluginTransform();
// document.body.appendChild(comp());

// demo: cssmodule
comp();

console.log('Index module loaded!!');
