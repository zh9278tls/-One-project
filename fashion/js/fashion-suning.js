
var  categoryItem=document.getElementsByClassName('category-item'),
     categoryOpen=document.getElementsByClassName('category-open'),
     collocationMain=document.getElementsByClassName('collocation-main'),
     collocationPrev=document.getElementsByClassName('collocation-prev')[0],
     collocationNext=document.getElementsByClassName('collocation-next')[0],
     collocationHead=document.getElementsByClassName('collocation-head'),
     oUl=collocationHead[0].getElementsByTagName('ul')[0],
     oLis=oUl.getElementsByTagName('li'),
     collocationItem=document.getElementsByClassName('collocation-item'),
     floorLink=document.getElementsByClassName('floor-link')[0],
     td=floorLink.getElementsByTagName('td');
     floatBar=document.getElementsByClassName('float-bar')[0],
     outer1=floatBar.getElementsByClassName('outer1')[0],
     outer2=floatBar.getElementsByClassName('outer2')[0];

     
//选项卡  banner-box 侧栏  --------------------------------------------------------

      function initClass(){
         for(let i=0;i<categoryOpen.length;i++){
            categoryOpen[i].style.display='none';
            categoryItem[i].className ='category-item';
         }
      }
     for(let i=0;i<categoryItem.length;i++){
         categoryItem[i].onmouseover=function(){
            initClass(),
            categoryOpen[i].style.display='block';
            categoryItem[i].className ='category-item category-item-on'
            
         }
         categoryItem[i].onmouseleave=function(){
            categoryOpen[i].style.display='none';
            categoryItem[i].className ='category-item'
         }
     }
      //双向绑定
     for(let i=0;i<categoryOpen.length;i++){
      categoryOpen[i].onmouseover=function(){
         initClass(),
         categoryOpen[i].style.display='block';
         categoryItem[i].className ='category-item category-item-on'
      }
      categoryOpen[i].onmouseleave=function(){
         categoryOpen[i].style.display='none';
         categoryItem[i].className ='category-item'
      }
  }

   
// 品牌推荐 选项卡 collocation-main   --------------------------------------
  
     function initClass1(n) {
         for (let i = 0; i < oLis.length; i++) {
            oLis[i].className = '';
            collocationItem[i].style.display='block';
            if(n>i){
               collocationItem[i].style.left='1190px';
            }else{
               collocationItem[i].style.left='-1190px';
            }
         
         }
      }
  
    
  for(let i=0;i<oLis.length;i++){
   
   oLis[i].onmouseover=function(){
      initClass1(i);
      oLis[i].className='on';
      collocationItem[i].style.left='0';
      
   }  
}
//左右按钮
for(let i=0;i<oLis.length+1;i++){
   let n=oLis.length;
   collocationPrev.onclick=function(){
     if(i<=0){
        i=n;  
        collocationItem[i].style.left='1190px';    
     }
     i--;
     initClass1(i)
      oLis[i].className='on';
      collocationItem[i].style.left='0';     
   }

   collocationNext.onclick=function(){   
      i++;
      if(i>=n){
         i=0;
      }    
      initClass1(i)   
      oLis[i].className='on';
      collocationItem[i].style.left='0';
      
  }
}

//-------banner轮播图   -----------------------------------------------------------

   var box=document.getElementsByClassName('banner-box')[0],
       bannerBox=document.getElementsByClassName('banner')[0],
       bannerBoxLi=bannerBox.getElementsByTagName('li');
   var tipBox=document.getElementsByClassName('tip-box')[0];
   var tipBox1=tipBox.getElementsByTagName('ul')[0];
   var tips=tipBox1.getElementsByTagName('li');
   var leftBtn=document.querySelector('.banner-prev');
   var rightBtn=document.querySelector('.banner-next');

   var index = 0, //控制显示张数的索引
    max = bannerBoxLi.length, //最大索引
    timer = null;

   function play(){
         index++;
         if (index == max) {
            //超出右边界
            index = 0;
         }
         if(index==-1){
            index=max-1
         }
         
         for(let i=0;i<bannerBoxLi.length;i++){
            bannerBoxLi[i].style.display='none';
            tips[i].className='';
            
         }
         bannerBoxLi[index].style.display='block';
         tips[index].className='current';

    }

   //自动播放
   function autoPlay() {
      timer = setInterval(function () {
          //console.log(111)
          play()
      }, 2000)
   }
   autoPlay()
//鼠标进入清除定时器
   box.onmouseenter=function(){
      clearInterval(timer)
  }
//鼠标进入 重启定时器
  box.onmouseleave=function(){
      timer=setInterval(play,2000)
  
  }
//左右按钮
   leftBtn.onclick=function(){
      index=index-2 
      play()
  }
  
  rightBtn.onclick=function(){      
      play()
  }

//tips滑入
function tipClick(){
   for(let i=0;i<tips.length;i++){
       tips[i].onmouseenter=function(){
           index=i-1;
           play()
       }
   }
}
tipClick()


//锚点定位


window.onscroll= function(){
   function item(){
      for(let i =0;i<td.length;i++){
         td[i].style.backgroundColor='#111';
      }
   }
   
   var t = document.documentElement.scrollTop||document.body.scrollTop;
   console.log(t)
   if(t>=1960){
      floorLink.className='floor-link fixed';
      item();
      td[0].style.backgroundColor='red'
      // if(t>=1960){
         
      // }
      if(t>=2509){
         item();
         td[1].style.backgroundColor='yellow'
      }
      if(t>=3149){
         item();
         td[2].style.backgroundColor='lightcoral'
      }
      if(t>=3790){
         item();
         td[3].style.backgroundColor='pink'
      }
      if(t>=4432){
         item();
         td[4].style.backgroundColor='orange'
      }
      if(t>=5072){
         item();
         td[5].style.backgroundColor='lightseagreen'
      }
      
      
   }else if(t>=510){
      floorLink.className='floor-link';
      floatBar.style.display="block";
   }else{          
      floorLink.className='floor-link'
      floatBar.style.display="none";
   }
}

//出现floatbar




//返回顶部
outer1.onclick=function(){
   document.documentElement.scrollTop=0;
}