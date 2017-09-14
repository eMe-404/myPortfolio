
/**********************     logo 动画    **********************/
$("#logo").click(function () {
    var cssValue = $(this).css('animation-play-state');
    if(cssValue === "paused"){
        $("#logo").css("animation-play-state","running");
    }
    else{
        $("#logo").css("animation-play-state","paused");
    }


});

/**********************   点击logo时弹出的提示框   **********************/
$('#logo').popover(
{
    trigger:'hover', //触发方式

    title:"Welcome to my page",//设置 弹出框 的标题
    html: true, // 为true的话，data-content里就能放html代码了
    content:"written by eMe-404 <br>" +
    "(ps:click logo to run or stop animation)",//这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
    placement:'bottom'
});
/*********************** 添加选中状态   ********************************/
$("#navTeb li").click(function() {

    $(this).siblings('li').removeClass('active');  // 删除其他兄弟元素的样式

    $(this).addClass('active');                            // 添加当前元素的样式

});
/**************     myCanvas script      *********************/
drawLine("myCanvas","black");
drawLine("myCanvas2","black");
drawLine("myCanvas3","#2b87d7");
function drawLine(a,color) {
    var myCanvas = $("#"+a);    //stored myCanvas for avoiding the Duplicate Jquery Selector Warning
    var c=document.getElementById(a);
    var ctx=c.getContext("2d");
    var w = myCanvas.width();
    var h = myCanvas.height();

    ctx.beginPath();
    var gradient=ctx.createLinearGradient(10,h/2,w/2-100,h/2);
    gradient.addColorStop("0","#1b6d85");
    gradient.addColorStop("0.5","red");
    gradient.addColorStop("1.0",color);
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.strokeStyle = gradient;
    ctx.moveTo(10,h/2);
    ctx.lineTo(w/2,h/2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.font = "bolder 40px Arial Black";
    ctx.fillStyle = color;
    ctx.fillText("</>",w/2+5,h/2+14);
    ctx.closePath();

    ctx.beginPath();
    var gradient2=ctx.createLinearGradient(w/2+175,h/2,w+65,h/2);
    gradient2.addColorStop("1.0","#1b6d85");
    gradient2.addColorStop("0.5","red");
    gradient2.addColorStop("0",color);
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.strokeStyle = gradient2;
    ctx.moveTo(w/2+75,h/2);
    ctx.lineTo(w+65,h/2);
    ctx.stroke();
    ctx.closePath();
    
}

$(function() {$('body').on('click', 'a.scrollable', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
    event.preventDefault();
});
});


