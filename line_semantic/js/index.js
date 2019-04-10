
var buttonLang = $('.btn-language');
var listLang = $('.language-list');
var menuItem = $('.menu-item');

// language button click event
buttonLang.on('click keyup', function(e){
    if(e.keyCode === 9){
        listLang.parent().addClass('language-act');
    }
    else{
        // tab 아니고 click 됐을 떄
        listLang.parent().toggleClass('language-act');
    }
});

// event capturing & bubbling
// div.language 외의 영역 click시 닫기
document.addEventListener("click", function(e) {
    console.log(e);
    if (!e.path.includes(document.querySelector(".language"))) {
        listLang.parent().removeClass('language-act');
    }
});

// div.language 외의 영역에 tab key 눌리면 닫기
document.addEventListener("keyup", function(e){
    if(e.keyCode === 9){
        if (!e.path.includes(document.querySelector(".language"))) {
            listLang.parent().removeClass('language-act');
        }
    }
});

menuItem.on('mouseenter', function(){
    menuItem.removeClass('menu-act');
    $(this).addClass('menu-act');
});

menuItem.on('mouseleave', function(){
    $(this).removeClass('menu-act');
});
