const maakbutton = document.getElementById("button")


maakbutton.onclick = function(){
const input1 = document.getElementById("boodschapinput1").value
const input2 = document.getElementById("boodschapinput2").value
const input3 = document.getElementById("boodschapinput3").value
const input4 = document.getElementById("boodschapinput4").value
const input5 = document.getElementById("boodschapinput5").value
const input6 = document.getElementById("boodschapinput6").value
const input7 = document.getElementById("boodschapinput7").value
const input8 = document.getElementById("boodschapinput8").value
const input9 = document.getElementById("boodschapinput9").value
const input10 = document.getElementById("boodschapinput10").value

const para1 = document.getElementById("p1")
const para2 = document.getElementById("p2")
const para3 = document.getElementById("p3")
const para4 = document.getElementById("p4")
const para5 = document.getElementById("p5")
const para6 = document.getElementById("p6")
const para7 = document.getElementById("p7")
const para8 = document.getElementById("p8")
const para9 = document.getElementById("p9")
const para10 = document.getElementById("p10")

para1.textContent = "1. " + input1
para2.textContent = "2. " + input2
para3.textContent = "3. " + input3
para4.textContent = "4. " + input4
para5.textContent = "5. " + input5
para6.textContent = "6. " + input6
para7.textContent = "7. " + input7
para8.textContent = "8. " + input8
para9.textContent = "9. " + input9
para10.textContent = "10. " + input10
}