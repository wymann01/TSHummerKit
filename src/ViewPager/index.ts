import {Hummer,View, Text, List, Navigator, ViewPager, Image} from '@hummer/hummer-front'

class ViewPagerPage extends View {
  constructor() {
    super();
    this.style = {
      width: '100%',
      height: '100%',
      alignItems: 'flex-start',
      backgroundColor:'#789878'
    }
    this.initElement()
  }

  initElement(){
    this.appendText('ViewPager666')

    // 创建 ViewPager
    const viewPager = new ViewPager()
    viewPager.style = {
      width:Hummer.env.availableWidth,
      height:170,
      canLoop:true,
      itemSpacing:20,
      edgeSpacing:40,
      backgroundColor:'#FFFFFF'
    }
    viewPager.onPageChange((current, total) => {
      console.log((current + 1) + "/" + total);
  });
  viewPager.onItemClick((position) => {
      console.log("click position: " + position);
  });

    this.appendChild(viewPager)
    let data = [1,2,3]


    viewPager.onItemView((position, view) => {
      let image:PagerCell = view;
      if (!image) {
        image = new PagerCell();
      }
      image.showIndex(position)
      
      return image;
    });

    viewPager.data = data
  }

  appendText(message:string){
    var text = new Text()

    text.text = message

    this.appendChild(text);
  }
}

class PagerCell extends View {
  private indexView:Text
  constructor(){
    super()
    this.style = {
      backgroundColor:'#000000',
      justifyContent:'space-around'
    }
    this.indexView = new Text()
    this.indexView.style = {
      color:'#c0c095',
      position:'absolute',
      fontSize:50,
      bottom:20,
      right:20
    }
    this.appendChild(this.indexView);
    this.appendText('1111')
    this.appendText('第二行')
    this.appendText('3333')
  }

  showIndex(index: number) {
    this.indexView.text = '坐标：' + index   
  }

  appendText(message:string){
    var text = new Text()
    text.text = message
    text.style = {
      color:'#FFFFFF'
    }
    this.appendChild(text);
  }
}

// 根页面渲染
Hummer.render(new ViewPagerPage());