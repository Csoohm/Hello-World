// let name = prompt("hello");
// console.log(typeof name);
// document.write(name);
// window.alert("Hello world");
// var rg = 8
// window.alert(name);
let Lotto_number = prompt ("กรอกเลขที่ต้องการซื้อ");
// console.log(Lotto_number);
// console.log (Math.floor(Math.random() *100));
let randomnumber =Math.floor(Math.random() *10)
//document.getElementsByClassName("f").innerHTML = randomnumber;
 document.getElementById("random").innerHTML = randomnumber;
 document.getElementById("Lotto_number").innerHTML = Lotto_number;
if (Lotto_number == randomnumber){
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัล"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล"
}
// button.addEventListener("click", function () {
//   alert("rrrrrr");
// });
