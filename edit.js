import { v } from "./output_script.js";

console.log(v);

document.getElementById("sc").toggleAttribute("src")
document.getElementById("sc").setAttribute("src", "edit.js")
document.getElementById('h').innerHTML = "UPDATING FORM"

if (document.getElementById('h').innerHTML == "UPDATING FORM")
{
    let a = prompt("Enter the serial number")
    va = a - 1;
    let val = JSON.parse(localStorage.getItem(va))

    document.getElementById("name_ip").value = val[0]
    document.getElementById("dob_ip").value = val[1].split('-').reverse().join('-')
    document.getElementById("mail_ip").value = val[3]
    document.getElementById("contact_ip").value = val[4]
    if (val[5] == "Male")
    {
        document.getElementById("male_ip").checked = true 
    }
    else if (val[5] == "Female")
    {
        document.getElementById("female_ip").checked = true 
    }
    document.getElementById("edu_ip").value = val[6]
    document.getElementById("desig_ip").value = val[7]
    let ad = val[8].split(', ')
    document.getElementById("add_1").value = ad[0]
    document.getElementById("add_2").value = ad[1]
    document.getElementById("add_3").value = ad[2]
    document.getElementById("add_4").value = ad[3]
    document.getElementById("add_5").value = ad[4]
}