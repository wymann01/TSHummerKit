import {Hummer,View, Text, List, Navigator} from '@hummer/hummer-front'
import { style } from './style';
class RootView extends View {
  constructor() {
    super();
    this.style = {
      width: '100%',
      height: '100%',
      alignItems: 'flex-start',
      // justifyContent: 'center'
    }
    this.initElement()
  }

  initElement(){
    this.appendText('ViewPager 问题复现')
  }

  appendText(message:string){
    var text = new Text()
    text.style = style.item
    text.text = message

    let pageInfo = {
      id:'222',
      url:'http://192.168.31.108:8000/ViewPager.js',
      closeSelf: false,
      animated: true,
    params: {
        aaa: 111,
        bbb: 222,
    }
    } 
    text.addEventListener('tap', ()=> Navigator.openPage(pageInfo, undefined))

    this.appendChild(text);
  }
}

// 根页面渲染
Hummer.render(new RootView());