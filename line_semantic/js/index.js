
var buttonLang = $('.btn-language');
var listLang = $('.language-list');

// language button click event
buttonLang.on('click keyup', function(e){
    if(e.keyCode === 9){
        listLang.parent().addClass('language-act');
        console.log('tab');
    }
    else{
        // tab 아니고 click 됐을 떄
        listLang.parent().toggleClass('language-act');
        console.log('click');
    }
});

listLang.on('focusout', '.language-item:last-child', function(){
    listLang.parent().removeClass('language-act');
    console.log('focus out');
});

// event capturing & bubbling
document.addEventListener("click", function(e) {
    if (!e.path.includes(document.querySelector(".language"))) {
        listLang.parent().removeClass('language-act');
    }
})