//풀페이지 
$(function(){
    $('#fullpage').fullpage({
        fingersonly: true,
        anchors:['firstPage','secondPage','thirdPage','fourthPage'],
        menu:'.rightNav',
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.count').counterUp({delay: 10,time: 550});
                }
            if(index == 3){
                $('.count2').counterUp({delay: 10,time: 550});
            }
        }
    });
});
