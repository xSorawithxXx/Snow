     /*
    var = ตัวแปล:variber  ทำงานนอก{}ได้
    let = ตัวแปลจะทำงานใน{}เท่านั้น
    consile.log = คำสั่งแสดงข้อมูลใน log
    alert = ตัวสั่งแสดงข้อความแบบ แจ้งเตือน \
    typeof = ตัวเช็คข้อมููลว่าประเภทอะไร
    prompt()=สามารถรับข้อมูลจากผู้ใช้ได้จากช่องแจ้งเตือน
    Boolean = ข้อมูลประเภทตรรกะ จริง,เท็จ
     */

    /*var x =2
    let y =15
    alert (y);
    */
    


let number = prompt("กรอกเลขที่ต้องการซื้อ")
let random_number = Math.floor(Math.random()*10)


 

/*Math.floor(Math.random()*10); คือโค้ดการสุ่มเลข จาก 0-10 *10 10 คือการกำหนด 0-9 10ตัว floor คือการปัดเลขลง
 document.getElementById("result").innerHTML คือ โค้ดที่ทำให้ โค้ดจาก js ไปแสดงที่หน้าจอได้
*/   
     document.getElementById("result02").innerHTML = random_number
     document.getElementById("result").innerHTML = number
     
     if(number == random_number){
       document.getElementById("haru").innerHTML = "บ้าหน่าาาาคุณถูกรางวันเลขท้าย ด... ได..ได้ไงกัลลล"
     }
     else{
       document.getElementById("haru").innerHTML = "คุณไม่ถูกรางวันสงสารรร"
     }


     