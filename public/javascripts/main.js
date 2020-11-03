function checkFloat1() {
    var x = document.getElementById("firstNumber");
    if (isNaN(x.value)) {
        document.getElementById("contentError").innerHTML = "Vừa nhập sai định dạng ở ô số 1 !!";
    } else
        if (!isNaN(x.value)) {
            document.getElementById("contentError").innerHTML = "";
        }

}
function checkFloat2() {
    var x = document.getElementById("secondNumber");
    if (isNaN(x.value)) {
        document.getElementById("contentError").innerHTML = "Vừa nhập sai định dạng ở ô số 2 !!";
    } else
        if (!isNaN(x.value)) {
            document.getElementById("contentError").innerHTML = "";
        }
}


function getcube() {
    var number = document.getElementById("number").value;
    alert(number * number * number);
}
