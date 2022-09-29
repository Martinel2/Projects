var ToS = document.getElementById('TOSubmit');
var do_box = document.getElementById('To_DBox');
var clock_box = document.getElementById('To_CBox');
var pref_box = document.getElementById('To_PBox');
var reg_clock = /^([0-9]|[01][0-9]|2[0-3]):([0-9]|[0-5][0-9])$/; //시간형식
///버튼 클릭시
ToS.addEventListener('click', function (){

    var do_text = document.getElementById('To_DBox').value;//할 일 입력
    var clock_text = document.getElementById('To_CBox').value;//시간 입력
    var pref_clo = document.getElementById('To_PBox').value;//선호시간
    if(clock_text.match(reg_clock) != null && pref_clo.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        var to__list = document.getElementById("list");
        to__list.innerHTML += '<li>' + "할 일 : " + do_text + "        수행 시간 :  " + clock_text + "        선호 시간 : " + pref_clo + '</li>';
        //출력했으니 비워주기
        document.getElementById('To_DBox').value = "";
        document.getElementById('To_CBox').value = "";
        document.getElementById('To_PBox').value = "";
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
        document.getElementById('To_PBox').focus();
});
pref_box.addEventListener('keyup', function () {
    if(event.keyCode === 13)
        document.getElementById('TOSubmit').click();
})
///
///수면시간
var slp = document.getElementById('slp-Submit');
var slp_clock = document.getElementById('slp-CBox');
var pref_slp_box = document.getElementById('slp-PBox');
///버튼 클릭시
slp.addEventListener('click', function (){

    var slp_clo_text = document.getElementById('slp-CBox').value;//시간 입력
    var pref_slp = document.getElementById('slp-PBox').value;
    if(slp_clo_text.match(reg_clock) != null && pref_slp.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        var to__list = document.getElementById("list");
        to__list.innerHTML += '<li>' + "할 일 : " + "숙면" + "        수행 시간 :  " + slp_clo_text + "        선호 시간 : " + pref_slp + '</li>';
        //출력했으니 비워주기
        document.getElementById('slp-CBox').value = "";
        document.getElementById('slp-PBox').value = "";
    }
    else//형식에 맞지 않으면
        alert("시간형식이 올바르지 않습니다!");

});
///
///엔터키로 편하게 적기
slp_clock.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('slp-PBox').focus();
});
pref_slp_box.addEventListener('keyup', function () {
    if(event.keyCode === 13)
        document.getElementById('slp-Submit').click();

})
///

///아침시간
var brf = document.getElementById('brf-Submit');
var brf_clock = document.getElementById('brf-CBox');
var pref_brf_box = document.getElementById('brf-PBox');
///버튼 클릭시
brf.addEventListener('click', function (){

    var brf_text = document.getElementById('brf-CBox').value;//시간 입력
    var pref_brf = document.getElementById('brf-PBox').value;

    if(brf_text.match(reg_clock) != null && pref_brf.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        var to__list = document.getElementById("list");
        to__list.innerHTML += '<li>' + "할 일 : " + "아침식사" + "        수행 시간 :  " + brf_text + "        선호 시간 : " + pref_brf + '</li>';
        //출력했으니 비워주기
        document.getElementById('brf-CBox').value = "";
        document.getElementById('brf-PBox').value = "";
        document.getElementById('lun-CBox').focus();
    }
    else//형식에 맞지 않으면
        alert("시간형식이 올바르지 않습니다!");

});
///
///엔터키로 편하게 적기
brf_clock.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('brf-PBox').focus();
});
pref_brf_box.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('brf-Submit').click();
});
///

///점심시간
var lun = document.getElementById('lun-Submit');
var lun_clock = document.getElementById('lun-CBox');
var pref_lun_box = document.getElementById('lun-PBox');
///버튼 클릭시
lun.addEventListener('click', function (){

    var lun_text = document.getElementById('lun-CBox').value;//시간 입력
    var pref_lun = document.getElementById('lun-PBox').value;

    if(lun_text.match(reg_clock) != null && pref_lun.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        var to__list = document.getElementById("list");
        to__list.innerHTML += '<li>' + "할 일 : " + "점심식사" + "        수행 시간 :  " + lun_text + "        선호 시간 : " + pref_lun + '</li>';
        //출력했으니 비워주기
        document.getElementById('lun-CBox').value = "";
        document.getElementById('lun-PBox').value = "";
        document.getElementById('din-CBox').focus();
    }
    else//형식에 맞지 않으면
        alert("시간형식이 올바르지 않습니다!");

});
///
///엔터키로 편하게 적기
lun_clock.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('lun-PBox').focus();
});
pref_lun_box.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('lun-Submit').click();
});
///

///저녁시간
var din = document.getElementById('din-Submit');
var din_clock = document.getElementById('din-CBox');
var pref_din_box = document.getElementById('din-PBox')
///버튼 클릭시
din.addEventListener('click', function (){

    var din_text = document.getElementById('din-CBox').value;//시간 입력
    var pref_din = document.getElementById('din-PBox').value;

    if(din_text.match(reg_clock) != null && pref_din.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        var to__list = document.getElementById("list");
        to__list.innerHTML += '<li>' + "할 일 : " + "저녁식사" + "        수행 시간 :  " + din_text + "        선호 시간 : " + pref_din + '</li>';
        //출력했으니 비워주기
        document.getElementById('din-CBox').value = "";
        document.getElementById('din-PBox').value = "";
    }
    else//형식에 맞지 않으면
        alert("시간형식이 올바르지 않습니다!");

});
///
///엔터키로 편하게 적기
din_clock.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('din-PBox').focus();
});
pref_din_box.addEventListener("keyup", function () {
    if(event.keyCode === 13)
        document.getElementById('din-Submit').click();
});
///