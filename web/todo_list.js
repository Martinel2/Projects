const ToS = document.getElementById('TOSubmit');
const do_box = document.getElementById('To_DBox');
const clock_box = document.getElementById('To_CBox');
const pref_box = document.getElementById('To_PBox');
const reg_clock = /^([0-9]|[01][0-9]|2[0-3]):([0-5][0-9])$/; //시간형식
const del = [];
let size = 0;
///확인버튼 클릭시
ToS.addEventListener('click', function (){

    const do_text = document.getElementById('To_DBox').value;//할 일 입력
    const clock_text = document.getElementById('To_CBox').value;//시간 입력
    const pref_clo = document.getElementById('To_PBox').value;//선호시간
    const text = do_text + "\t수행 시간 :  " + clock_text + "\t선호 시간 : " + pref_clo + "     ";
    if (!document.getElementById('To_DBox').value === false) {
        if (clock_text.match(reg_clock) != null && pref_clo.match(reg_clock) != null)//형식에 맞다면
        {
            //리스트에 순서대로 적기
            add(text);
            //출력했으니 비워주기
            document.getElementById('To_DBox').value = "";
            document.getElementById('To_CBox').value = "";
            document.getElementById('To_PBox').value = "";
            document.getElementById('To_DBox').focus();
        } else//형식에 맞지 않으면
            alert("시간형식이 올바르지 않습니다!");
    } else {
        alert("할 일이 적혀있지않습니다!");
        document.getElementById('To_DBox').focus();
    }


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
const slp = document.getElementById('slp-Submit');
const slp_clock = document.getElementById('slp-CBox');
const pref_slp_box = document.getElementById('slp-PBox');
///버튼 클릭시
slp.addEventListener('click', function (){

    const slp_clo_text = document.getElementById('slp-CBox').value;//시간 입력
    const pref_slp = document.getElementById('slp-PBox').value;
    const text = "숙면" + "\t수행 시간 :  " + slp_clo_text + "\t선호 시간 : " + pref_slp + "     ";
    if(slp_clo_text.match(reg_clock) != null && pref_slp.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        add(text);
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
const brf = document.getElementById('brf-Submit');
const brf_clock = document.getElementById('brf-CBox');
const pref_brf_box = document.getElementById('brf-PBox');
///버튼 클릭시
brf.addEventListener('click', function (){

    const brf_text = document.getElementById('brf-CBox').value;//시간 입력
    const pref_brf = document.getElementById('brf-PBox').value;
    const text = "아침식사" + "\t수행 시간 :  " + brf_text + "\t선호 시간 : " + pref_brf + "     ";
    if(brf_text.match(reg_clock) != null && pref_brf.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        add(text);
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
const lun = document.getElementById('lun-Submit');
const lun_clock = document.getElementById('lun-CBox');
const pref_lun_box = document.getElementById('lun-PBox');
///버튼 클릭시
lun.addEventListener('click', function (){

    const lun_text = document.getElementById('lun-CBox').value;//시간 입력
    const pref_lun = document.getElementById('lun-PBox').value;
    const text = "점심식사" + "\t수행 시간 :  " + lun_text + "\t선호 시간 : " + pref_lun + "     ";
    if(lun_text.match(reg_clock) != null && pref_lun.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        add(text);
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
const din = document.getElementById('din-Submit');
const din_clock = document.getElementById('din-CBox');
const pref_din_box = document.getElementById('din-PBox')
///버튼 클릭시
din.addEventListener('click', function (){

    const din_text = document.getElementById('din-CBox').value;//시간 입력
    const pref_din = document.getElementById('din-PBox').value;
    const text ="저녁식사" + "\t수행 시간 :  " + din_text + "\t선호 시간 : " + pref_din + "     ";
    if(din_text.match(reg_clock) != null && pref_din.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        add(text);
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


////////////함수////////////////
///추가
function add(text){
    const li = document.createElement("li");
    li.setAttribute('id',text);
    const textNode = document.createTextNode(text);
    li.appendChild(textNode);
    const BT = document.createElement("button");
    const BT_text = document.createTextNode('-');
    BT.appendChild(BT_text);
    ///특정 일정만 제거 or 변경
    del.push(size.valueOf());
    const del_num = size.valueOf();
    size++;
    document.getElementById('list').appendChild(li).appendChild(BT);
    BT.addEventListener('click' , function () {
        const ul = document.getElementById('list');
        const items = ul.getElementsByTagName('li');
        if(items.length > 0)
        {
            items[del.indexOf(del_num)].remove();
            del.splice(del.indexOf(del_num),1);
            ul.removeChild(BT);
        }
        else
            alert("error");
    });
    ///
}
///

///제거
const Del = document.getElementById('del_bt');
Del.addEventListener('click', function () {
    const to__list = document.getElementById('list');
    to__list.remove();
})
///

