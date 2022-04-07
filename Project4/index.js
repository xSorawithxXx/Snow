function toCelsius(){
    let fahrenheil = prompt("Fahrenheit:")
    let value = (fahrenheil - 32 ) * 5 /9 
    document.getElementById("answer_section").innerHTML = value.toFixed(2);
}
//function pri(elementId, value){
  //  document.getElementById(elementId).innerHTML = value
//}
 
toCelsius()




//toFixed(จำนวนทศนิยม) คำสั่งไว้กำหนดจำนวนทศนิยม

//Parameter  = ตัวแปรที่เกิดมาพร้อม function มีหน้าที่เอาไว้ใช้งานภายใน function เท่านั้น
//Argument = ข้อมูลที่ส่งให้ function
