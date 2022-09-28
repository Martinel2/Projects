var ToS = document.getElementById('TOSubmit');
var a = 0;
ToS.addEventListener('click', function (){
    if(a==13)
    {
        alert("더 이상 추가할 수 없습니다!");
        return;
    }
    var text = document.getElementById('To_Box').value;
    var to__list = document.getElementById("list");
    to__list.innerHTML += '<li>'+text+'</li>';
    var clear_text = document.getElementById('To_Box').;
    a++;

});

