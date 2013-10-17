var balltop=0 , bouncetime=1000,p=0;
$(document).ready(function(){
    $(".main section").hide();
    $("nav a").click(function(){
        $(".main section").hide();
        $(".main section:eq(" + $(this).index() + ")").fadeIn();
    });
    $("nav a:eq(0)").click();
    $(window).resize(function(){
        if($(window).width()>=480){
            $("nav").hover(function(){
                $(".arrow").fadeOut();
            },
            function(){
                $(".arrow").delay(300).fadeIn();
            }
            );
        }
        else{
            $('nav').hover(function(){});
        }
    
    })
        

    var bouncetime = 1000;
    var ballheight = 20;
    var ballsize = 80;
    balltop =480;
    var n=15;
    
 
    ballbounce();
    function ballbounce() {
        blink();

        $('#creatures').animate({'bottom':balltop}, bouncetime, 'easeOutQuad', function() {
            if(p<12)
            {$('figure').delay(900).animate({'height':70+p*1.1},90);
             }
            $('#creatures').animate({'bottom':ballheight}, bouncetime, 'easeInQuad', function() {                           
               if(p<12)
               {$('figure').animate({'height':90},100);}
                     if(document.height>document.width)
                        var e= Math.sqrt(1-Math.pow(document.width/document.height,2));//calculating e
                     else
                        var e= Math.sqrt(1-Math.pow(document.height/document.width,2));//calculating e
                     var b= document.height/(n-2), b2=Math.pow(b,2);
                     var x2= Math.pow($('.cursor').position().left,2), y2=Math.pow($('.cursor').position().top,2);                      
                     for( i=1;i<=n;i++){
                          var a1= Math.pow(i,2)*b2/(1-Math.pow(e,2));
                          var a2= Math.pow(i+1,2)*b2/(1-Math.pow(e,2));
                                if (x2/a1+y2/(Math.pow(i,2)*b2)-1 >0 && x2/a2+y2/(Math.pow(i+1,2)*b2)-1 <=0) {
                                    if(i<=12) {
                                        p=i;
                                        // bouncetime=1000;
                                        $('figure').removeClass('nervous');
                                        balltop=480/Math.sqrt(i);
                                        $('.mouth').animate({'height':45-3*i})
                                        break;
                                    }
                                    if(i>=13) {
                                        p=i;
                                        balltop=30;
                                        // bouncetime=1;
                                        // $('figure').removeClass('nervous');
                                        $('.mouth').animate({'height':9+2*i})
                                        $('figure').addClass('nervous');
                                        break;
                                    }
                                    
                                }
                                
                                    if(x2/a1+y2/(Math.pow(1,2)*b2)-1 <0)
                                    {   $('figure').removeClass('nervous'); 
                                        balltop=480;
                                    }
                                    if(x2/a2+y2/(Math.pow(n,2)*b2)-1 >0)
                                    {   p=n;
                                        balltop= 30;
                                         // $('.mouth').animate({'height':39})
                                        $('figure').addClass('nervous');
                                    }
                        }        
                ballbounce();
                });
         });
    }
    function blink() {
        $('.eye').animate({'height':0},100,function(){
            $('.eye').animate({'height':15},100);            
        });
    }
    setInterval(blink,5000);


$(document).mousemove(function(h){
    $(".cursor").css('top',h.pageY);
    $(".cursor").css('left',h.pageX);
    
});
$("#myButton span").hide();
$(".myButton").click(function(){
    $("#myButton span").fadeIn();
    return true;
});
});
