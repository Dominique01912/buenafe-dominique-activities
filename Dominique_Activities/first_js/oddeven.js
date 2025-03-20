function Oddeven() {
    let num = document.getElementById('number').value;
    let resultMessage = "";

    if(num ==="") {
        resultMessage = "please enter a number>";
    } else {
        num = parseInt(num);
        resultMessage = (num % 2 === 0) ?"Even":"Odd";
    }
    document.getElementById('result).textcontent = resultMessage;
}