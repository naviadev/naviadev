import { styles } from "./styleContainer.js";

// * 부모 객체를 받아 해당 부모객체의 스타일을 container에서 지정한 스타일로 변경해주는 함수 . 
// * for문을 통해 키값을 순회하며 스타일 부여.

function setRootStyle(parent){
  let keyArr = Object.keys(styles.root);

    for(let ele of keyArr){
    parent.style[ele] = styles.root[ele];
    
  }
}

export default setRootStyle;