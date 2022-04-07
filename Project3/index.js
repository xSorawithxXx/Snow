let qrt = prompt("ใส่จำนวนสิ้นค้า")
let sum =  0

for(var i = 1 ; i<=qrt ; i++){

    let item = prompt("ราคาสินต้าชิ้นที่"+i)  
    sum = sum+parseInt(item)
    document.getElementById("price-list").innerHTML += "รายการสิ้นค้าชิ้นที่"+i + ":" + item +"บาท"+"<br>"
}   

document.getElementById("sum").innerHTML = "ราคารวม"+" "+sum+"บาท"

//parseInt คำสั่งเอาไว้ใช้ในการแปลงค่าเป้นจำนวนเต็ม
//parseFloat คำสั่งเอาไว้ใช้ในการแปลงค่าเป้นทศนิยม