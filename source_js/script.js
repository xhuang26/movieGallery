

var jumped = 0;


$(window).load(function(){
    $("#dvLoading i").fadeOut(3000);
    $("#dvLoading").fadeOut(5000);
});

$(document).ready(function(){
    
    horizNav();
    navscrollfunc();
    fixedText();
    videoPlay();
    slider();
    modal();
});

var horizNav = function(){
        
        //$(".nav").data('clicked', false);
        start = [0, 1060, 1675, 4800];
        $(".nav").each(function(index){
           $(this).data('scroll_h', start[index]);    
        });

        $(".nav").on("click",function(){
            jumped = 1;
            $(".nav").removeClass('expanded');
            $(this).toggleClass('expanded');
            scroll_h = $(this).data('scroll_h');
            
            //$(window).scrollTop(scroll_h);
            
            $('html, body').animate({
                scrollTop: scroll_h
            }, 1000, function(){
                //setTimeout(function(){
                    jumped = 0;
                    //console.log("can jump");
                //}, 1000);
            });
            
        });
        $("#subTitle #button").on("click", function(){
            $('html, body').animate({
                scrollTop: 1675
            }, 1000, function(){
                //setTimeout(function(){
                    jumped = 0;
                    //console.log("can jump");
                //}, 1000);
            });
        });
        $("#arrow").on("click", function(){
            $('html, body').animate({
                scrollTop: 1060
            }, 1000, function(){
                //setTimeout(function(){
                    jumped = 0;
                    //console.log("can jump");
                //}, 1000);
            });
        });
        $("#footer #top p").on("click", function(){
            $('html, body').animate({
                scrollTop: 0
            }, 1000, function(){
                //setTimeout(function(){
                    jumped = 0;
                    //console.log("can jump");
                //}, 1000);
            });
        });
    
        start1 = [0, 1060, 1675];
        $("#footer #menu ul li").each(function(index){
           $(this).data('scroll_h', start[index]);    
        });
        
        
         $("#footer #menu ul li").on("click", function(){
                $('html, body').animate({
                    scrollTop: $(this).data('scroll_h')
                }, 1000, function(){
                    //setTimeout(function(){
                        jumped = 0;
                        //console.log("can jump");
                    //}, 1000);
                });
            });
}

var navscrollfunc = function(){
    //max = docHeight - winHeight;
    
    $(document).on('scroll', function(){
        value = $(window).scrollTop();
        if(value !=0){
            $("#title").css('font-size', '3em');
            $("#header").css('height', '70px');
        }else{
            $("#title").css('font-size', '3.5em');
            $("#header").css('height', '90px');
        }
        if(jumped == 0){
            //console.log("here");
            height = [1060, 1675, 4800, 5600]
            $(".nav").each(function(index){
                scroll_h = height[index];
                //scroll_h = parseInt($(this).data('scroll_h'));    
                if(scroll_h>value){
                    $(".nav").removeClass('expanded');
                    $(this).toggleClass('expanded');
                    return false;
                }
            });
        }
        
    });
        
        
}

var fixedText = function(){
    $(document).on('scroll', function(){
        //value = $(window).scrollTop();
        if(value > 1664 && value <4200){
            //old_v = $("#topList").css('margin-top');
            //new_v = parseInt(old_v)+value;
            //console.log(new_v);
            new_v1 = value-1100;
            $(".here").css('top', $(window).scrollTop()+30);
            $("#topList").css('top', $(window).scrollTop()+50);
            /*$(".here").animate({
                paddingTop: new_v1
            }, 30);
            $("#topList").animate({
                paddingTop: new_v1
            }, 30);
            console.log(new_v1);*/
        }else if(value >= 4200){
           $(".here").css('top', '4230px');
            $("#topList").css('top', '4250px');
        }else{
            $(".here").css('padding-top', '50px');
            $("#topList").css('padding-top', '60px');
        }
    });     
}

var helper = function(top, bottom, value, self){
    if(top<value && value < bottom){
        //console.log(self);
        self.play();
    }else{
        self.pause();
    }
}

var videoPlay = function(){
    height1=[1770, 2200, 2765, 3252, 3898, 4299, 4900];
    
    $(document).on('scroll', function(){
        value = $(window).scrollTop();
        //console.log(value);
        $("video").each(function(index){
            self = this;
            topline = height1[index]+1;
            bottom = height1[index+1];
            //console.log(index+": "+value+", "+topline + ", " + bottom);
            helper(topline, bottom, value, this);
        });
    });
}

var slider = function(){

  /*$('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });*/
    $("article:nth-of-type(1)").css("left", "0px");
    $("article:nth-of-type(2)").css("left", "1400px");
    $("article:nth-of-type(3)").css("left", "1400px");

    curr = 2;
	$("#slider #button").on("click", function(){
        
        var name = "article:nth-of-type("+curr+")";
        var ind = 0;
        
        $("#slider section article").each(function(index){
            
            if(parseInt($(this).css("left")) == 0){
                ind = index+1;
                if(ind == 1)
                    $("article:nth-of-type(1)").css("z-index", '-1');
            }else{
                ind1 = index +1;
                other = "article:nth-of-type("+ind1+")";
                $(other).css("left", "1400px");
            }
        });
        $(name).animate({
            left: "0px"
        }, 1000, "swing",function(){
            old_name = "article:nth-of-type("+ind+")";
            $(old_name).css("left", '1400px');
            if(ind == 1)
                $(old_name).css("z-index", '3');
        });
        curr = (curr+1)%3;
        if(curr == 0)
            curr = 3;
    });
    
    $("#slider #button1").on("click", function(){
        var name = "article:nth-of-type("+curr+")";
        var ind = 0;
        $("#slider section article").each(function(index){
            if(parseInt($(this).css("left")) == 0){
                ind = index+1;
                if(ind == 1)
                    $("article:nth-of-type(1)").css("z-index", '-1');

            }else{
                ind1 = index+1;
                other = "article:nth-of-type("+ind1+")";
                $(other).css("left", "-1400px");
            }
        });
        $(name).animate({
            left: "0px"
        }, 1000, "swing", function(){
            old_name = "article:nth-of-type("+ind+")";
            $(old_name).css("left", '-1400px');
            if(ind == 1)
                $(old_name).css("z-index", '3');
        });
        curr = (curr+1)%3;
        if(curr == 0)
            curr = 3;
    });
   

}

var modal = function(){
    //var modal = $("#gallery #toplist #modal");
   // console.log(modal);
    //var btn = $("#gallery #toplist #button");
    //console.log(btn.html());
    //var close = $("#gallery #toplist #modal #close");
    $("#topList #button").on("click", function(){
        //console.log("get here");
        //$("#topList ").css("background-color", "red");
        $("#gallery #topList #modal").css("display", "block"); 
    });
    $("#gallery #topList #modal #content #close").on("click", function(){
        $("#gallery #topList #modal").css("display", "none"); 
    });
    
}

