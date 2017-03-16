// JavaScript Document
$(document).ready(function(e) {
    navFun();
	newFun();
	trendsFun();
	$("#JS_result").kxbdMarquee({direction:"left",loop:0,scrollDelay:35});
});

//导航二级选项
function navFun(){
	$(".nav>ul>li").hover(function(e) {
		$(this).prevAll("li").children("ul").stop(false, true);
		$(this).nextAll("li").children("ul").stop(false, true);
		$(this).children("ul").stop(false, true);
        $(this).children("ul").slideDown(300);
    },function(){
		$(this).prevAll("li").children("ul").stop(false, true);
		$(this).nextAll("li").children("ul").stop(false, true);
		$(this).children("ul").stop(false, true);
		$(this).children("ul").slideUp(300);
		
	});
}



//新闻滚动
function newFun(){
	//判断个数
	var num = $(".JS_tab_nr>.JS_tab_block").length;
	$(".JS_tab_nr").css({"width" : num*600+"px"});
	
	var  geshu = $(".JS_tab_title ul li").length;
	var  n = 0 ;
	$(".JS_tab_title ul li").eq(0).addClass("active");
	var myset = setInterval(function(){
		n++;
		if(n>=geshu){
				n =0;
			}
			goNew();
		},1000);
	$(".JS_tab_title ul li").hover(function(e) {
    	n = $(this).index();
		goNew(); 
    },function(){
		
	});
	
	$(".JS_tab_nr").hover(function(e) {
        clearInterval(myset);
    },function(){
			myset = setInterval(function(){
					n++;
					if(n>=geshu){
						n=0;
					}
					goBanner();
				},3000);
	});
	function goNew(){
		var  slt = $(".JS_tab_title ul li");
		slt.eq(n).addClass("active");
		slt.eq(n).prevAll("li").removeClass("active");
		slt.eq(n).nextAll("li").removeClass("active");
		
		   
		var nr = $(".JS_tab_nr");
		nr.animate().stop(false, true);
		nr.animate({"marginLeft" : -n*600+"px"},200);
		
	}
}


function newFun(){
	if($(".new").length<=0){ 
			return null; //终止函数运行
		}
		
		
	//计算图片个数
	 var  geshu = $(".ri_new ul li").length;
	 var  n = 0 ;
	 $("#JS_newwz li").eq(0).addClass("change");
	
	//计时器
	var  myset = setInterval(function(){
		n++;
		if(n>=geshu){
			n=0;
		}
		gonew();
	},5000);
	
	$("#JS_newwz li").hover(function(e) {
        n = $(this).index();
		 gonew()
    },function(){
		});	
	//计时器停止			
	$("#JS_tab li").hover(function(){
		 	clearInterval(myset);
		},function(){
			 myset = setInterval(function(){
					n++;
					if(n>=geshu){
						n=0;
					}
					gonew();
				},5000);
		});
		
		function gonew(){
			var  slt = $("#JS_newwz li");
			slt.eq(n).addClass("change");
			slt.eq(n).prevAll("li").removeClass("change");
			slt.eq(n).nextAll("li").removeClass("change");
			   
			var li = $("#JS_img li");
			li.hide();
			li.eq(n).show();	
	
		}
}



function trendsFun(){
	$(".trends h3 p").hover(function(e) {
		$(this).prevAll("p").removeClass("action");
		$(this).nextAll("p").removeClass("action");
        $(this).addClass("action");
		
		var n = ($(this).index())-1;
		var m = $(this).parents(".trends").children(".tnew");
		m.hide();
		m.eq(n).show();
    },function(){});

}





























