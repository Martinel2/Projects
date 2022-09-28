var ToS = document.getElementById('TOSubmit');
var do_box = document.getElementById('To_DBox');
var clock_box = document.getElementById('To_CBox');
///버튼 클릭시
ToS.addEventListener('click', function (){

    var do_text = document.getElementById('To_DBox').value;//할 일 입력
    var clock_text = document.getElementById('To_CBox').value;//시간 입력
    var reg_clock = /^([01][0-9]|2[0-3]):([0-5][0-9])$/; //시간형식
    if(clock_text.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        var to__list = document.getElementById("list");
        to__list.innerHTML += '<li>' + do_text + "   " + clock_text + '</li>';
        //출력했으니 비워주기
        document.getElementById('To_DBox').value = "";
        document.getElementById('To_CBox').value = "";
        document.getElementById('To_DBox').focus();
    }
    else//형식에 맞지 않으면
        alert("시간형식이 올바르지 않습니다!");

});
///
///엔터키로 편하게 적기
do_box.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('To_CBox').focus();
});
clock_box.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('TOSubmit').click();
});
///

