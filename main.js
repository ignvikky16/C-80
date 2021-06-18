name_of_the_student_array=[]
function submit(){
    var display_studentarray=[]
    for (var j=1; j <=4; j++)
    {
        var nameofthestudent=document.getElementById("name_of_the_student_"+j).value
        console.log(nameofthestudent)
        name_of_the_student_array.push(nameofthestudent)

    }
    console.log(name_of_the_student_array)
    for(var k=0;k<4; k++)
    {
         display_studentarray.push("<h4>name-"+name_of_the_student_array[k]+"</h4>")
         console.log(display_studentarray)
    }
console.log(display_studentarray)
document.getElementById("display_name_with_commas").innerHTML=display_studentarray
var remove_commas=display_studentarray.join("")
console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML=remove_commas
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    name_of_the_student_array.sort()
    console.log(name_of_the_student_array)
    var display_studentarraysort=[]
    for(var k=0;k<4; k++)
    {
         display_studentarraysort.push("<h4>name-"+name_of_the_student_array[k]+"</h4>")
         console.log(display_studentarraysort)
    }
console.log(display_studentarraysort)
document.getElementById("display_name_with_commas").innerHTML=display_studentarraysort
var remove_commas=display_studentarraysort.join("")
console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML=remove_commas

}

