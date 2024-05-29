import { styles } from "./styleContainer.js";

// * 자식 객체들을 순회하며 스타일을 부여한다.
function setChildStyle(childArr){
  let keyArr = Object.keys(styles.children)
  for(let i = 0; i < childArr.length; i++){
    for(let ele of keyArr){
      childArr[i].style[ele] = styles.children[ele];
    }
  }
}

export default setChildStyle;