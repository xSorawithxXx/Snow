let score = prompt("กรุณาใส่คะแนนของคุณ")
let text 
if(score >= 80){
    text = "คุณได้เกรด A"
}else if((score<80)&&(score>=70)){
    text = "คุณได้เกรด B"
}else if((score<70)&&(score>=60)){
    text = "คุณได้เกรด C"
}else if((score<60)&&(score>=50)){
    text = "คุณได้เกรด D"
}else
text = "คุณได้เกรด F"

document.getElementById("haru").innerHTML = text