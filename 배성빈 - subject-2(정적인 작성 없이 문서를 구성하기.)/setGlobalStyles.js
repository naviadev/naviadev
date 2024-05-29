import { styles } from "./styleContainer.js";

// * head에 style태그를 제공해주며 cotainer에 저장된 전체 선택자에 해당하는 값을 부여
function setGlobalStyle(){
  let style = document.createElement('style');
  style.innerHTML = styles.globalStyle;
  document.head.appendChild(style);
}
export default setGlobalStyle;