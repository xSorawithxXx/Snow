let score = prompt("กรุณาใส่คะแนนของคุณ")

if(score >= 80){
    document.getElementById("haru").innerHTML = "คุณได้เกรด A"
}else if((score<80)&&(score>=70)){
    document.getElementById("haru").innerHTML = "คุณได้เกรด B"
}else if((score<70)&&(score>=60)){
    document.getElementById("haru").innerHTML = "คุณได้เกรด C"
}else if((score<60)&&(score>=50)){
    document.getElementById("haru").innerHTML = "คุณได้เกรด D"
}else
document.getElementById("haru").innerHTML = "คุณได้เกรด F"