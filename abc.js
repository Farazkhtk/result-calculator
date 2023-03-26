




function calculate()
{
    let sub1= parseInt(document.getElementById("English").value,10)
    let sub2= parseInt(document.getElementById("Urdu").value,10)
    let sub3= parseInt(document.getElementById("Mathematics").value,10)
    let sub4= parseInt(document.getElementById("Science").value,10)
    let sub5= parseInt(document.getElementById("Social Studies").value,10)
    let sub6= parseInt(document.getElementById("Islamiyat").value,10)
    let result=sub1+sub2+sub3+sub4+sub5+sub6
    let percentage=((result/600)*100).toFixed(2)



    let om=document.getElementById("obtained marks").innerText="Obtained Marks: " +result
    let per= document.getElementById("percentage").innerText= "Percentage: " +percentage+ " %"



}