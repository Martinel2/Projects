const ToS = document.getElementById('TOSubmit');
const do_box = document.getElementById('To_DBox');
const clock_box = document.getElementById('To_CBox');
const pref_box = document.getElementById('To_PBox');
const con_BT  = document.getElementById('lets');
const reg_clock = /^([0-9]|[01][0-9]|2[0-3]):([0-5][0-9])$/; //시간형식
const del = [1];
const priority = [];
const time = [{do_text : "do", start: 1, end: 1}];
const min = ["00","01","02","03","04","05","06","07","08","09"]
del.splice(0,1);
time.splice(0,1);
let total = 0;
let size = 0;
document.getElementById('loading').style.visibility = "hidden";
///확인버튼 클릭시
ToS.addEventListener('click', function (){

    const do_text = document.getElementById('To_DBox').value;//할 일 입력
    const start = document.getElementById('To_CBox').value;//시간 입력
    const end = document.getElementById('To_PBox').value;//선호시간
    if (!document.getElementById('To_DBox').value === false) {
        if (start.match(reg_clock) != null && end.match(reg_clock) != null)//형식에 맞다면
        {
            //리스트에 순서대로 적기
            add(do_text,start,end);
            save(do_text,start,end);
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

    const start = document.getElementById('slp-CBox').value;//시간 입력
    const end = document.getElementById('slp-PBox').value;
    const do_text = "숙면";
    if(start.match(reg_clock) != null && end.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        add(do_text,start,end);
        save(do_text,start,end);
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

    const start = document.getElementById('brf-CBox').value;//시간 입력
    const end = document.getElementById('brf-PBox').value;
    const do_text = "아침식사";
    if(start.match(reg_clock) != null && end.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        add(do_text,start,end);
        save(do_text,start,end);
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

    const start = document.getElementById('lun-CBox').value;//시간 입력
    const end = document.getElementById('lun-PBox').value;
    const do_text = "점심식사";
    if(start.match(reg_clock) != null && end.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        add(do_text,start,end);
        save(do_text,start,end);
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

    const start = document.getElementById('din-CBox').value;//시간 입력
    const end = document.getElementById('din-PBox').value;
    const do_text = "저녁식사";
    if(start.match(reg_clock) != null && end.match(reg_clock) != null)//형식에 맞다면
    {
        //리스트에 순서대로 적기
        add(do_text,start,end);
        save(do_text,start,end);
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
var prior = document.createElement('select');
prior.style.position = 'relative';
prior.style.display = 'inline-block';
prior.style.right = '400px';
function add(do_text,start,end){
    const text = do_text + "\t시작 시간 :  " + start + "\t종료 시간 : " + end + "     ";
    const lis = document.createElement("li");
    lis.style.marginLeft = '35px';
    const BT = document.createElement("button");
    BT.style.position = 'absolute';
    BT.style.display = 'inline-block';
    BT.style.marginLeft = '10px';
    lis.setAttribute('id',text);
    const textNode = document.createTextNode(text);
    lis.appendChild(textNode);
    const BT_text = document.createTextNode('-');
    BT.appendChild(BT_text);
    priority.push(size+1);
    del.push(size);
    const num = size;
    const pri_op = new Option();
    pri_op.value = (size+1).toString();
    pri_op.text = (size+1).toString();
    pri_op.selected = true;
    prior.add(pri_op);
    size++;
    lis.appendChild(BT);
    lis.appendChild(prior);
    document.getElementById('list').appendChild(lis);
    ////////특정 일정만 제거 or 변경
    BT.addEventListener('click' , function () {
        const ul = document.getElementById('list');
        const items = ul.getElementsByTagName('li');
        if(items.length > 0)
        {
            items[del.indexOf(num)].remove();
            del.splice(del.indexOf(num),1);
            time.splice(del.indexOf(num),1);
            size--;
        }
        else
            alert("error");
    });
    ///////////////
}
///

///모두제거
const Del = document.getElementById('del_bt');
Del.addEventListener('click', function () {
    del_all();
    time.splice(0,time.length-1);
    total = 0;
});
function del_all() {
    const ul = document.getElementById('list');
    const item = ul.getElementsByTagName('li');
    let len = item.length;
    while(len > 0) {
        item[len-1].remove();
        len = item.length;
        del.splice(len-1,1);
    }
    size = 0;
}
///

//정렬버튼
const sp = document.getElementById('sort_sp');
sp.addEventListener('click',Sort_by_T);
function Sort_by_T(){
    time.sort(function (a,b) {
        const sort = "start";
        const e = "end";
        if(a[sort] === b[sort]){
        return a[e]-b[e];
    }
    else{
        return a[sort]-b[sort];
    }
    });
    del_all();
    for(var i =0; i<time.length; i++) {
    const do_text = time[i].do_text;
    let start = (parseInt(time[i].start / 60)).toString() + ':';
    if ((time[i].start % 60) < 10)
        start += min[(time[i].start % 60)];
    else
        start += (time[i].start % 60).toString();
    let end = (parseInt(time[i].end / 60)).toString() + ':';
    if ((time[i].end % 60) < 10)
        end += min[(time[i].end % 60)];
    else
        end += (time[i].end % 60).toString();
    add(do_text, start, end);
    }
}
//

///배열에 값 저장 =계산용
function save(do_text,start,end) {
    var t = start.split(':');
    var p = end.split(':');
    time.push({do_text : do_text, start: parseInt(t[0]) * 60 + parseInt(t[1]), end: parseInt(p[0])*60 + parseInt(p[1])});
    total += (parseInt(p[0])*60 + parseInt(p[1])) - (parseInt(t[0]) * 60 + parseInt(t[1]));
}
///

///버튼 마우스 올릴시 색감 변경
con_BT.addEventListener('mouseover', function () {
    con_BT.style.backgroundColor = "#709886";
})
con_BT.addEventListener('mouseleave', function () {
    con_BT.style.backgroundColor = "#c0f7df";
})
///

//로딩창-페이드인
con_BT.addEventListener('click', function () {
    const tot = document.getElementsByClassName('S');
    const all_in = document.getElementsByTagName('input')
    for(var i = 0; i<tot.length; i++) {tot[i].style.opacity = '0.05';}
    for(var j = 0; j<all_in.length; j++) {all_in[j].disabled = true;}
    document.getElementById('loading').style.visibility = "visible";
    if(total > 1440)//모든 일정의 합이 하루를 초과
    {

    }
    else { // 초과하지 않음
        Sort_by_T();
        for(var i = 0; i<tot.length; i++) {tot[i].style.opacity = '1';}
        for(var j = 0; j<all_in.length; j++) {all_in[j].disabled = false;}
        document.getElementById('loading').style.visibility = "hidden";
    }
})
//


/*
function closeLoadingWithMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').remove();
}
*/
