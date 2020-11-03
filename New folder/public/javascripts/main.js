function checkFloat1() {
    var x = document.getElementById("1stnum");
    if (isNaN(x.value)) {
        document.getElementById("contentError").innerHTML = "Vừa nhập sai định dạng ở ô số 1 !!";
    } else
        if (!isNaN(x.value)) {
            document.getElementById("contentError").innerHTML = "";
        }

}
function checkFloat2() {
    var x = document.getElementById("2ndnum");
    if (isNaN(x.value)) {
        document.getElementById("contentError").innerHTML = "Vừa nhập sai định dạng ở ô số 2 !!";
    } else
        if (!isNaN(x.value)) {
            document.getElementById("contentError").innerHTML = "";
        }
}

function checkcalc() {
    var checkinradio = 0 ;
    if (document.getElementById('add').checked) {
        checkinradio = 1;

    } else
        if (document.getElementById('subtract').checked) {
            checkinradio = 1;

        } else
            if (document.getElementById('multiply').checked) {
                checkinradio = 1;

            } else
                if (document.getElementById('divide').checked) {
                    checkinradio = 1;
                }
    if (checkinradio == 1) {
    document.calc.submit();
    }else{
        document.getElementById("contentError").innerHTML = "Chưa chọn phép tính !!";
        return false;

        }
}

// function getcube() {
//     var number = document.getElementById("number").value;
//     alert(number * number * number);
// }
