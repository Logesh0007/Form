let des_dd = document.getElementById("dd")
let edu_qua = document.getElementById("c_edu_field")

if (localStorage.getItem("edit_value"))
{
    document.getElementById("h").innerHTML = "UPDATE FORM"

    let l_val = localStorage.getItem("edit_value")
    let u_val = JSON.parse(localStorage.getItem(l_val - 1))

    document.getElementById("name_ip").value = u_val[0]
    let d_u = u_val[1].split('-').reverse().join('-')
    document.getElementById("dob_ip").value = d_u
    document.getElementById("mail_ip").value = u_val[3]
    document.getElementById("contact_ip").value = u_val[4]

    if (document.getElementById("male_ip").value == "Male")
    {
        document.getElementById("male_ip").checked = true
    }
    else if (document.getElementById("female_ip").value == "Female")
    {
        document.getElementById("female_ip").checked = true
    }
    
    document.getElementById("edu_ip").value = u_val[6]
    document.getElementById("desig_ip").value = u_val[7]

    let add = []
    let jj = u_val[8].split(', ')
    for (let y = 0; y < jj.length; y++)
    {
        add.push(jj[y])
    }
    document.getElementById("add_1").value = add[0]
    document.getElementById("add_2").value = add[1]
    document.getElementById("add_3").value = add[2]
    document.getElementById("add_4").value = add[3]
    document.getElementById("add_5").value = add[4]
    
    document.getElementById("submit").value = "Update"

    document.getElementById("submit").addEventListener("click", function()
    {
        let u_det = []

        let c_name = document.getElementById("name_ip")
        let cd = document.getElementById("dob_ip")
        var c = cd.value
        let c_dob = c.split('-').reverse().join('-')
        let a = new Date()
        let c_age = a.getFullYear() - Number(c.slice(0, 4))
        let c_mail = document.getElementById("mail_ip")
        let c_contact = document.getElementById("contact_ip")
        let c_gen_male = document.getElementById("male_ip")
        let c_gen_female = document.getElementById("female_ip")
        let c_edu = document.getElementById("edu_ip")
        let c_desig = document.getElementById("desig_ip")
        let c_add_1 = document.getElementById("add_1")
        let c_add_2 = document.getElementById("add_2")
        let c_add_3 = document.getElementById("add_3")
        let c_add_4 = document.getElementById("add_4")
        let c_add_5 = document.getElementById("add_5")
        let c_add =[]
        c_add.push(c_add_1.value)
        c_add.push(c_add_2.value)
        c_add.push(c_add_3.value)
        c_add.push(c_add_4.value)
        c_add.push(c_add_5.value)
        let c_address = c_add.join(', ') 
    
        u_det.push(c_name.value)
    
        if (a.getFullYear() < Number(c.slice(0, 4)))
        {
            alert("Please select the valid Date of birth");
            return false
        }
    
        u_det.push(c_dob)
        u_det.push(c_age)
        u_det.push(c_mail.value)
        u_det.push(c_contact.value)
        
        if (c_gen_male.checked == true)
        {
            u_det.push("Male")
        }
        else if (c_gen_female.checked == true)
        {
            u_det.push("Female")
        }
    
        u_det.push(c_edu.value)
        u_det.push(c_desig.value)
        u_det.push(c_address)
    
        localStorage.setItem(Number(l_val) - 1, JSON.stringify(u_det))
        
        localStorage.removeItem("edit_value")
        clear_form()
    })

    document.getElementById("cancel").addEventListener("click", function()
    {
        localStorage.removeItem("edit_value")
        clear_form()
    })
}


function name_check()
{
    let n_check = document.getElementById("name_ip").value;
    if ((!n_check.match(/^([A-Za-z.])+$/)) && (!n_check.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)))
    {
        document.getElementById("name_ip").style.backgroundColor = "rgb(255,0,0,0.1)"
        document.getElementById("name_ip").style.outline = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("name_ip").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("name_ip").style.outline = "none";
        return true
    }
}

function mail_check()
{
    let m_check = document.getElementById("mail_ip").value
    if (m_check == '')
    {
        document.getElementById("mail_ip").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("mail_ip").style.outline = "none";
        return true
    }
    if (!m_check.match(/^([a-zA-Z0-9_.])+\@([a-z])+\.([a-z])+$/))
    {
        document.getElementById("mail_ip").style.backgroundColor = "rgb(255,0,0,0.1)"
        document.getElementById("mail_ip").style.outline = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("mail_ip").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("mail_ip").style.outline = "none";
        return true
    }
}

function education_check()
{
    let e_check = document.getElementById("edu_ip").value
    if (e_check == '')
    {
        document.getElementById("edu_ip").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("edu_ip").style.outline = "none";
        return true
    }
    if (!e_check.match(/^([A-Za-z.])+$/))
    {
        document.getElementById("edu_ip").style.backgroundColor = "rgb(255,0,0,0.1)"
        document.getElementById("edu_ip").style.outline = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("edu_ip").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("edu_ip").style.outline = "none";
        return true
    }
}

function designation_check()
{
    let d_check = document.getElementById("desig_ip").value
    if (d_check == '')
    {
        document.getElementById("desig_ip").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("desig_ip").style.outline = "none";
        return true
    }
    if (!d_check.match(/^([A-Za-z])+$/))
    {
        document.getElementById("desig_ip").style.backgroundColor = "rgb(255,0,0,0.1)"
        document.getElementById("desig_ip").style.outline = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("desig_ip").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("desig_ip").style.outline = "none";
        return true
    }
}

function state_check()
{
    let s_check = document.getElementById("add_4").value;
    if (s_check == '')
    {
        document.getElementById("add_4").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("add_4").style.outline = "none";
        return true
    }
    if (!s_check.match(/^([A-Za-z ])+$/))
    {
        document.getElementById("add_4").style.backgroundColor = "rgb(255,0,0,0.1)"
        document.getElementById("add_4").style.outline = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("add_4").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("add_4").style.outline = "none";
        return true
    }   
}

function country_check()
{
    let c_check = document.getElementById("add_5").value;
    if (c_check == '')
    {
        document.getElementById("add_5").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("add_5").style.outline = "none";
        return true
    }
    if (!c_check.match(/^([A-Za-z])+$/))
    {
        document.getElementById("add_5").style.backgroundColor = "rgb(255,0,0,0.1)"
        document.getElementById("add_5").style.outline = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("add_5").style.backgroundColor = "rgba(230, 189, 232, 0.25)"
        document.getElementById("add_5").style.outline = "none";
        return true
    }
}

if (!localStorage.getItem("edit_value"))
{
    document.getElementById("submit").addEventListener("click", function()
    {
        let details = [];
    
        let c_key = 0;
        if (localStorage.length == 0)
        {
            c_key = 0;
        }
        else
        {
            c_key = localStorage.length;
        }
    
    
        let c_name = document.getElementById("name_ip")
        let cd = document.getElementById("dob_ip")
        var c = cd.value
        let c_dob = c.split('-').reverse().join('-')
        let a = new Date()
        let c_age = a.getFullYear() - Number(c.slice(0, 4))
        let c_mail = document.getElementById("mail_ip")
        let c_contact = document.getElementById("contact_ip")
        let c_gen_male = document.getElementById("male_ip")
        let c_gen_female = document.getElementById("female_ip")
        let c_edu = document.getElementById("edu_ip")
        let c_desig = document.getElementById("desig_ip")
        let c_add_1 = document.getElementById("add_1")
        let c_add_2 = document.getElementById("add_2")
        let c_add_3 = document.getElementById("add_3")
        let c_add_4 = document.getElementById("add_4")
        let c_add_5 = document.getElementById("add_5")
        let c_add =[]
        c_add.push(c_add_1.value)
        c_add.push(c_add_2.value)
        c_add.push(c_add_3.value)
        c_add.push(c_add_4.value)
        c_add.push(c_add_5.value)
        let c_address = c_add.join(', ') 
    
        details.push(c_name.value)
    
        if (a.getFullYear() < Number(c.slice(0, 4)))
        {
            alert("Please select the valid Date of birth");
            return false
        }
    
        details.push(c_dob)
        details.push(c_age)
        details.push(c_mail.value)
        details.push(c_contact.value)
        
        if (c_gen_male.checked == true)
        {
            details.push("Male")
        }
        else if (c_gen_female.checked == true)
        {
            details.push("Female")
        }
        else{
            alert("Please select the Gender");
            return false
        }
    
        details.push(c_edu.value)
        details.push(c_desig.value)
        details.push(c_address)
    
        localStorage.setItem(c_key, JSON.stringify(details))
    
        clear_form()          
    })
}

function clear_form()
{
    document.getElementById("h").innerHTML = "REGISTRATION FORM"
    document.getElementById("submit").value = "Submit"
    document.documentElement.scrollTop = 0;
    document.getElementById("name_ip").value = ''
    document.getElementById("dob_ip").value = ''
    document.getElementById("mail_ip").value = ''
    document.getElementById("contact_ip").value = ''
    document.getElementById("male_ip").checked = false 
    document.getElementById("female_ip").checked = false 
    document.getElementById("edu_ip").value = ''
    document.getElementById("desig_ip").value = ''
    document.getElementById("add_1").value = ''
    document.getElementById("add_2").value = ''
    document.getElementById("add_3").value = ''
    document.getElementById("add_4").value = ''
    document.getElementById("add_5").value = ''
    document.getElementById("check_box").checked = false 
}  

function hov(a)
{
    a.setAttribute("style", "transition: all 0.2s ease-out");
}

function dd_open()
{
    document.getElementById("desi_dd").classList.toggle("desig_dd");
}

document.getElementById("student").onclick = function()
{
    document.getElementById("desig_ip").value = document.getElementById("student").innerText
    dd_open()
}

document.getElementById("professional").onclick = function()
{
    document.getElementById("desig_ip").value = document.getElementById("professional").innerText
    dd_open()
}

