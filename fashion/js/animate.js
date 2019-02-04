/**
 * Created by Administrator on 2016/1/8.
 */
var animate=(function(){
    var getCss=function(ele,attr){
        var val=null;
        if("getComputedStyle"in window){
            val=getComputedStyle(ele,null)[attr];
        }else{
            if(attr=="opacity"){
                var tempVal=ele.currentStyle["filter"];
                var reg=/^alpha\(opacity=(\d+(\.\d+)?)\)$/;
                val=reg.exec(tempVal)[1]?reg.exec(tempVal)[1]/100:1;
            }else{
                val=ele.currentStyle[attr];
            }
        }
        reg=/^-?(\d+(\.\d+)?(px|pm|pt|em)?)$/;
        return val=reg.test(val)?parseFloat(val):val;
    };


    var setCss=function(ele,attr,value){
        var reg=/^(width|height|left|right|top|bottom|((margin|padding)(top|bottom|left|right)))$/;
        if(attr=="float"){
            ele["style"]["cssFloat"]=value;
            ele["style"]["styleFloat"]=value;
            return;
        }
        if(attr=="opacity"){
            ele["style"]["opacity"]=value;
            ele["style"]["filter"]="alpha(opacity="+value*100+")";
            return;
        }
        if(reg.test(attr)){
            ele["style"][attr]=value+"px";
            return;
        }
        ele["style"][attr]=value;
    };
    var linear=function(t,b,c,d){
        return t*c/d+b;
    };


    return function(ele,opations,duration,effect,callback){
        if(typeof effect==="function"){
            callback=effect;
        }

        var times= 0,interval=15,oBegin={},oChagne={};
        for(var key in opations){
            oBegin[key]=getCss(ele,key);
            oChagne[key]=opations[key]-oBegin[key];
        }


        function move(){
            window.clearTimeout(ele.timer);
            times+=interval;
            if(times>=duration){
                for(var key in opations){
                    if(opations.hasOwnProperty(key)){
                        setCss(ele,key,opations[key]);
                    }
                }
                if(typeof callback=="function"){
                    callback.call(ele);
                }
                return;
            }

            for(var key in oChagne){
                if(oChagne.hasOwnProperty(key)){
                    var val=linear(times,oBegin[key],oChagne[key],duration);
                    setCss(ele,key,val);
                }
            }
            ele.timer=window.setTimeout(move,interval);
        }
        move();
    }
})();