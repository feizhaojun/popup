function popup(opt){
    /*
        opt = {
            title : "这是标题",
            content : "这是内容！",
            layer-close : true,
            confirm:{
                text:"确认",
                callback:function(){}
            }
            cancel:{
                text:"取消",
                callback:function(){}
            }
        }
    */
    var remove = function(){
        $("#layer-cover").remove();
        $("#layer-popup").remove();
    }
    remove();
    $("body").append("<div id='layer-cover'></div><div id='layer-popup'><h2>" + opt.title + "</h2><div class='content'>" + opt.content +"</div></div>");

    // 如果有关闭按钮
    if(opt.confirm){
        $("#layer-popup").append("<a href='javascript:;' class='btn confirm'>" + (opt.confirm.text || '确认') + "</a>");
        $("#layer-popup").on('click','.confirm',function(){
            opt.confirm.callcack ? opt.confirm.callcack() : opt.confirm();
            remove();
        });
    }
    if(opt.concel){
        $(".confirm").after("<a href='javascript:;' class='btn concel'>" + (opt.concel.text || '取消') + "</a>");
        $("#layer-popup").on('click','.concel',function(){
            opt.concel.callcack ? opt.concel.callcack() : opt.concel();
            remove();
        });
    }

    // 居中
    $("#layer-cover").css({"height":$(document).height()});
    $("#layer-popup").css({"margin-left":-$("#layer-popup").width()/2 + "px","margin-top":-$("#layer-popup").height()/2 + "px"});

    if(opt.layer_close === true){
        $("#layer-cover").on('click',function(){
            remove();
        });
    }

    $(window).on('resize',function(){
        $('#layer-cover').css({height:$(window).height()});
    });
}