var curImg=1;//当前轮播图片
$(function(){
    var listH=$(".list").offset().top;//获取.list距离顶部距离
    $(window).scroll(function(){
        var scrollH=$(this).scrollTop();//获取滚动条滑动距离
        if(scrollH>=listH){
            $(".list").css({"position":"fixed","top":0,"z-index":10});//滚动条距离大于等于listH则.list固定，反之不固定
        }else{
            $(".list").css({"position":"absolute","top":"93px"});
        }
    });
    //开始轮播
    lunbo();
    //鼠标离开继续轮播
    $(".pic,.lunbodian").mouseout(function(){
        lunbo();
    });
    //点击轮播点LI显示对应图片
    clickLI();
    //悬停轮播点LI显示对应缩略图
    showSuoLueTu();
    //点击左右切换图片
    clickLR();
    //鼠标悬停banner显示左右切换按钮
    showLR();
    //鼠标悬停.aside li显示对应展示卡
    ShowProduct();
    //切换卡左右切换图片
    qiehuanka();
    //悬停切换卡图片显示信息
    showqieinf();
});
//轮播
function lunbo(){
    var imgStart=setInterval(function(){
        if(curImg!=5){
            $(".pic a:nth-child("+curImg+")").css({"display":"none"});//图片轮播
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"white"});//LI轮播
            curImg++;
            $(".pic a:nth-child("+curImg+")").css({"display":"block"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"#666"});
        }else{
            $(".pic a:nth-child("+curImg+")").css({"display":"none"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"white"});
            curImg=1;
            $(".pic a:nth-child("+curImg+")").css({"display":"block"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"#666"});
        }
    },3000);
    //鼠标悬停停止轮播
    $(".pic,.lunbodian").mouseover(function(){
        clearInterval(imgStart);
    });
}
//点击轮播点LI
function clickLI(){
    $(".lunbodian li").click(function(){
        var num=$(this).index()+1;
        $(".lunbodian li:nth-child("+curImg+")").css({"background":"white"});
        $(this).css({"background":"#666"});
        $(".pic a:nth-child("+curImg+")").css({"display":"none"});
        $(".pic a:nth-child("+num+")").css({"display":"block"});
        curImg=num;
    });
}
//悬停轮播点LI显示对应缩略图
function showSuoLueTu(){
    $(".lunbodian li").mouseover(function(){
        var num=$(this).index()+1;
        $(".suoluetu").css({"display":"block"});
        $(".suoluetu img:nth-child("+num+")").css({"display":"block"});
    });
    $(".lunbodian li").mouseout(function(){
        var num=$(this).index()+1;
        $(".suoluetu").css({"display":"none"});
        $(".suoluetu img:nth-child("+num+")").css({"display":"none"});
    });
}
//点击左右切换图片
function clickLR(){
    $(".pic .L").click(function(){
        if(curImg!=1){
            $(".pic a:nth-child("+curImg+")").css({"display":"none"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"white"});
            curImg--;
            $(".pic a:nth-child("+curImg+")").css({"display":"block"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"#666"});
        }else{
            $(".pic a:nth-child("+curImg+")").css({"display":"none"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"white"});
            curImg=5;
            $(".pic a:nth-child("+curImg+")").css({"display":"block"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"#666"});
        }
    });
    $(".pic span:last-child").click(function(){
        if(curImg!=5){
            $(".pic a:nth-child("+curImg+")").css({"display":"none"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"white"});
            curImg++;
            $(".pic a:nth-child("+curImg+")").css({"display":"block"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"#666"});
        }else{
            $(".pic a:nth-child("+curImg+")").css({"display":"none"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"white"});
            curImg=1;
            $(".pic a:nth-child("+curImg+")").css({"display":"block"});
            $(".lunbodian li:nth-child("+curImg+")").css({"background":"#666"});
        }
    });
}
//鼠标悬停banner显示左右切换按钮
function showLR(){
    $(".pic,.lunbodian,.suoluetu").mouseover(function(){
        $(".pic span").css({"transform":"scale(1)","opacity":1});
    });
    $(".pic").mouseout(function(){
        $(".pic span").css({"transform":"scale(5.875)","opacity":0});
        setTimeout(function(){
            $(".pic span").css({"transform":"scale(1)"});
        },200);
    });
}
//鼠标悬停.aside li显示对应展示卡
function ShowProduct(){
    $(".aside ul li").mouseover(function(){
        var num=$(this).index()+1;
        $(".s"+num).css({"display":"block"});
    });
    $(".aside ul li").mouseout(function(){
        var num=$(this).index()+1;
        $(".s"+num).css({"display":"none"});
        $(".s"+num).mouseover(function(){
            $(this).css({"display":"block"});
            var n=$(this).index()-3;
            $(".sanjiao").css({"display":"block"});
            $(".sanjiao li:nth-child("+n+")").css({"opacity":1});
        });
        $(".s"+num).mouseout(function(){
            $(this).css({"display":"none"});
            var n=$(this).index()-3;
            $(".sanjiao").css({"display":"none"});
            $(".sanjiao li").css({"opacity":0});
        });
    });


}
//切换卡左右切换图片
function qiehuanka(){
    var cur=1;
    $("#qieL").click(function(){
        if(cur!=1){
            $("#qieNum li:nth-child("+cur+")").css({"color":"#777","font-size":"14px"});
            cur--;
            $("#qieNum li:nth-child("+cur+")").css({"color":"deeppink","font-size":"20px"});
            $(".qie"+cur).css({"transform":"translateX(0px)"});
        }
    });
    $("#qieR").click(function(){
        if(cur!=3){
            $(".qie"+cur).css({"transform":"translateX(1200px)"});
            $("#qieNum li:nth-child("+cur+")").css({"color":"#777","font-size":"14px"});
            cur++;
            $("#qieNum li:nth-child("+cur+")").css({"color":"deeppink","font-size":"20px"});
        }
    });
}
//悬停切换卡图片显示信息
function showqieinf(){
   $(".qiehuantu a,.qiehuantu>ul").mouseover(function(){
       var num=$(this).index()+1;
       $(".qiehuantu>ul,.qiehuantu>ul>li:nth-child("+num+")").css({"transform":"translateY(0)"});
   });
    $(".qiehuantu a,.qiehuantu>ul").mouseout(function(){
        var num=$(this).index()+1;
        $(".qiehuantu>ul,.qiehuantu>ul>li:nth-child("+num+")").css({"transform":"translateY(60px)"});
    });
}