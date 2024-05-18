import { styles } from "./styleContainer.js";

// *matchMedia를 통해 반응형 웹 페이지를 제공. for문을 통해 키값들을 순회하며 매개변수로 들어온 값들에 스타일을 지정

function setMedia(parent,childArr){
  const mql = window.matchMedia("(max-width: 600px)");
  const mql2 = window.matchMedia("(min-width: 601px) and (max-width: 900px)");

  mql.onchange = (e)=>{
    if(e.matches){
      let keys = Object.keys(styles.mediaQueries.mx600.root);
      let cKeys = Object.keys(styles.mediaQueries.mx600.children);
      for(let ele of keys){
        parent.style[ele] = styles.mediaQueries.mx600.root[ele];
      }
      for(let cEle of cKeys){
        for(let i = 0; i < childArr.length; i++){
          childArr[i].style[cEle] = styles.mediaQueries.mx600.children[cEle];
        }
      }
    }
  }



  mql2.onchange = (e)=>{
    if(e.matches){
      let keys = Object.keys(styles.mediaQueries.mn601mx900.root);
      let cKeys = Object.keys(styles.mediaQueries.mn601mx900.children);
      for(let ele of keys){
        parent.style[ele] = styles.mediaQueries.mn601mx900.root[ele];
      }

      for(let cEle of cKeys){
        for(let i = 0; i < childArr.length; i++){
          childArr[i].style[cEle] = styles.mediaQueries.mn601mx900.children[cEle];
        }
      }
    }
  }
}

export default setMedia;