

(function(){

    var sBox=document.getElementById("little-pic");
    // var oLis1=sBox.getElementsByTagName("li");
    var aList1=sBox.getElementsByTagName("li");
    var oDivs=sBox.getElementsByTagName("a");


    var offset=function(curEle) {
        var l = curEle.offsetLeft, t = curEle.offsetTop;
        var p = curEle.offsetParent;
        while (p) {
            if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent;
        }
        return {l: l, t: t};
    };

    function sPicBind(){
        var str="";
        for(var i=0;i<litPic.length-1;i++){
            str+="<li trueImg="+litPic[i]+"><a>"+dataAry[i]+"</a></li>";
        }
        str+="<li trueImg="+litPic[litPic.length-1]+" class='last'><a>"+dataAry[litPic.length-1]+"</a></li>";
        sBox.innerHTML=str;
    }
    // sPicBind();

    function delaySImg(){
        for(var i=0;i<oLis1.length;i++){
            ~function(i){
                var trueImg=oLis1[i].getAttribute("trueImg");
                var tempImg=new Image;
                tempImg.src=trueImg;
                tempImg.onload=function(){
                    aList1[i].appendChild(tempImg);
                    tempImg=null;
                }
            }(i)
        }
    }
    // delaySImg();



/*

    function move(){

        for(var i=0;i<aList1.length;i++){
            aList1[i].Q=i;
            aList1[i].onmouseenter=function(e){
                var e=e||window.event;
                var a=aList1[this.Q],b=oDivs[this.Q];
                var l=offset(a).l,t=offset(a).t;
                if(e.clientX>=l&& e.clientX<=(20+l)){
                    animate(b,{left:-114,top:0},10);
                    animate(b,{left:0,top:0},100);
                }else if(e.clientX>=(l+100)&& e.clientX<=(l+114)){
                    animate(b,{left:114,top:0},10);
                    animate(b,{left:0,top:0},100);
                }else if(e.clientY>=t&& e.clientY<=(20+t)){
                    animate(b,{left:0,top:-114},10);
                    animate(b,{left:0,top:0},100);
                }else if(e.clientY>=(t+100)&& e.clientY<=(t+114)){
                    animate(b,{left:0,top:114},10);
                    animate(b,{left:0,top:0},100);
                }
            }
            aList1[i].onmouseleave=function(e) {
                var e = e || window.event;
                var a = aList1[this.Q], b = oDivs[this.Q];
                var l=offset(a).l,t=offset(a).t;
                if (e.clientX >= (l + 114)) {
                    animate(b, {left: 144, top: 0}, 100);
                }else if(e.clientX<l){
                    animate(b,{left:-114,top:0},100);
                }else if(e.clientY<t){
                    animate(b,{left:0,top:-114},100);
                }else if(e.clientY>(t+114)){
                    animate(b,{left:0,top:114},100);
                }
            }
        }
    }
    move();
*/

    function move(){
        for(var i=0;i<aList1.length;i++){
            var ele=aList1[i];
            ele.Q=i;
            ele.onmouseenter=function(){
                var e=e||window.event;
                var b=oDivs[this.Q]
                var w= 228,h=358;
                var x= (e.pageX-offset(this).l-w/2);
                var y= (e.pageY-offset(this).t-h/2);
                if(x>y-65&&x>-y-65){//右
                    animate(b, {left: 228, top: 0}, 10);
                    animate(b,{left:0,top:0},150);
                }else if(x>y&&x<=-y){//上
                    animate(b,{left:0,top:-358},10);
                    animate(b,{left:0,top:0},150);
                } else if(x<=y&&x<-y+65){//左
                    console.log(11)
                    animate(b,{left:-228,top:0},10)
                    animate(b,{left:0,top:0},150);
                }else{//下
                    animate(b,{left:0,top:358},10);
                    animate(b,{left:0,top:0},150);
                }
            }
            ele.onmouseleave=function(){
                var e=e||window.event;
                var b=oDivs[this.Q]
                var w= 228,h=358;
                var x= (e.pageX-offset(this).l-w/2);
                var y= (e.pageY-offset(this).t-h/2);
                if(x>y-70&&x>-y-70){ //右
                    animate(b,{left:228,top:0},150);
                }else if(x>y&&x<=-y){
                    animate(b,{left:0,top:-358},150);
                } else if(x<=y+70&&x<-y+70){
                    animate(b,{left:-228,top:0},150);
                }else{
                    animate(b,{left:0,top:358},150);
                }
            }
        }
    }
    move();



})()













