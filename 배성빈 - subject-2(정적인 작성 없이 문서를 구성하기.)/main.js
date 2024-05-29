import { NodeManager } from "./nodeManager.js";
import setGlobalStyle from './setGlobalStyles.js';
import setRootStyle from "./setRootStyle.js";
import setChildStyle from './setChildrenStyles.js';
import setMedia from "./setMedia.js";


let manager = new NodeManager();
setGlobalStyle();
setRootStyle(manager.parent);
setChildStyle(manager.childArr);
setMedia(manager.parent, manager.childArr);

// * 메인이 되는 스크립트. 모듈를 가져와 호출한다.



