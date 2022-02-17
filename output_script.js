let count = 1; 

for (let p = 0; p < localStorage.length; p++)
{
    let t = document.getElementById("table").getElementsByTagName("tbody")[0]
    let n_row = t.insertRow(t.length)
    let cand_vals = JSON.parse(localStorage.getItem(p))

    cell_1 = n_row.insertCell(0)
    cell_1.innerHTML = "<div class='ed'>" + count + "</div>" 
    cell_2 = n_row.insertCell(1)
    cell_2.innerHTML = "<div class='ed'>" + cand_vals[0] + "</div>" 
    cell_3 = n_row.insertCell(2)
    cell_3.innerHTML = "<section class='ed'>" + cand_vals[1] + "</section>"
    cell_4 = n_row.insertCell(3)
    cell_4.innerHTML = "<section class='ed'>" + cand_vals[2] + "</section>"
    cell_5 = n_row.insertCell(4)
    cell_5.innerHTML = "<div class='ed'>" + cand_vals[3] + "</div>"
    cell_6 = n_row.insertCell(5)
    cell_6.innerHTML = "<section class='ed'>" + cand_vals[4] + "</section>"
    cell_7 = n_row.insertCell(6)
    cell_7.innerHTML = "<section class='ed'>" + cand_vals[5] + "</section>"
    cell_8 = n_row.insertCell(7)
    cell_8.innerHTML = "<section class='ed'>" + cand_vals[6] + "</section>"
    cell_9 = n_row.insertCell(8)
    cell_9.innerHTML = "<section class='ed'>" + cand_vals[7] + "</section>"
    cell_10 = n_row.insertCell(9)
    cell_10.innerHTML = "<div class='ed' id='add_8'>" + cand_vals[8] + "</div>"
    
    count += 1;
}

function edi_o()
{
    document.getElementById("container").setAttribute("style", "filter: blur(2px)")
    document.getElementById("verify_area").setAttribute("style", "display: flex; z-index: 100")
    document.getElementById("verify_ip").value = ''
}

function ch_ip()
{
    if (Number(document.getElementById("verify_ip").value) > localStorage.length)
    {
        document.getElementById("verify_ip").setAttribute("style", "background-color: rgb(255, 0, 0, 0.1); border: 2px solid red")
    }
    else if (Number(document.getElementById("verify_ip").value) < localStorage.length)
    {
        document.getElementById("verify_ip").setAttribute("style", "background-color: white; border: 1px solid #7F00A8;")
    }
    if (Number(document.getElementById("verify_ip").value) <= 0)
    {
        document.getElementById("verify_ip").setAttribute("style", "background-color: rgb(255, 0, 0, 0.1); border: 2px solid red")
    }
    if (document.getElementById("verify_ip").value == '')
    {
        document.getElementById("verify_ip").setAttribute("style", "background-color: white; border: 1px solid #7F00A8;")
    }
}


function check_ip(){
    if (document.getElementById("verify_ip").value == '')
    {
        document.getElementById("verify_ip").setAttribute("style", "background-color: rgb(255, 0, 0, 0.1); border: 2px solid red")
        return false
    }
    if (Number(document.getElementById("verify_ip").value) > localStorage.length)
    {
        document.getElementById("verify_ip").value = ''
        document.getElementById("verify_ip").setAttribute("style", "background-color: white; border: 1px solid #7F00A8;")
        alert("Invalid input ( The number you have typed is not there in the list )")
        return false
    }

    else if (Number(document.getElementById("verify_ip").value) <= localStorage.length)
    {
        document.getElementById("container").setAttribute("style", "filter: blur(0);")
        document.getElementById("verify_area").setAttribute("style", "display: none;")
        let v = Number(document.getElementById("verify_ip").value);
        localStorage.setItem("edit_value", v)
        // export {v};
        console.log(v);
        
        document.getElementById("edit_page_open").setAttribute("href", "index.html")
        
    }
}


function submit_new_d()
{
    let new_d = [];

    new_d.push(document.getElementById("ip_1").value)
    new_d.push(document.getElementById("ip_2").value.split('-').reverse().join('-'))

    let d = new Date()
    let st = document.getElementById("ip_2").value.slice(0, 4)
    let age_v = d.getFullYear() - Number(st)
    new_d.push(age_v)
    new_d.push(document.getElementById("ip_3").value)
    new_d.push(document.getElementById("ip_4").value)
    new_d.push(document.getElementById("ip_5").value)
    new_d.push(document.getElementById("ip_6").value)
    new_d.push(document.getElementById("ip_7").value)
    new_d.push(document.getElementById("ip_8").value)

    localStorage.setItem(va, JSON.stringify(new_d))

    close_edit()
}

function close_e_w_e()
{
    document.getElementById("ip_1").value = ''
    document.getElementById("ip_2").value = ''
    document.getElementById("ip_3").value = ''
    document.getElementById("ip_4").value = ''
    document.getElementById("ip_5").value = ''
    document.getElementById("ip_6").value = ''
    document.getElementById("ip_7").value = ''
    document.getElementById("ip_8").value = ''

    document.getElementById("edit_table_field").setAttribute("style", "display: none")
    document.getElementById("edit_table").setAttribute("style", "display: none") 
}

function close_edit()
{
    document.getElementById("edit_table_field").setAttribute("style", "display: none")
    document.getElementById("edit_table").setAttribute("style", "display: none") 
    
    alert("Updated successfully !")
    window.location.reload()
}

function check_edit()
{
    let d_c = new Date()
    let st_c = document.getElementById("ip_2").value.slice(0, 4)

    if (document.getElementById("ip_1").style.borderBottom == "2px solid red")
    {
        alert("Please fill out the form with valid input.")
        return false
    }
    else if (document.getElementById("ip_2").style.borderBottom == "2px solid red" || d_c.getFullYear() < Number(st_c))
    {
        alert("Please select the valid Date of birth.")
        return false
    }
    else if (document.getElementById("ip_3").style.borderBottom == "2px solid red")
    {
        alert("Please fill out the form with valid input.")
        return false
    }
    else if (document.getElementById("ip_4").style.borderBottom == "2px solid red")
    {
        alert("Please fill out the form with valid input.")
        return false
    }
    else if (document.getElementById("ip_5").style.borderBottom == "2px solid red")
    {
        alert("Please fill out the form with valid input.")
        return false
    }
    else if (document.getElementById("ip_6").style.borderBottom == "2px solid red")
    {
        alert("Please fill out the form with valid input.")
        return false
    }
    else if (document.getElementById("ip_7").style.borderBottom == "2px solid red")
    {
        alert("Please fill out the form with valid input.")
        return false
    }
    else if (document.getElementById("ip_8").value == '')
    {
        alert("Please fill out the form with valid input.")
        return false
    }
    else
    {
        submit_new_d()
    }
}

function close_verify()
{
    document.getElementById("verify_ip").value = ''
    document.getElementById("verify_ip").setAttribute("style", "background-color: white; border: 1px solid #7F00A8;")
    document.getElementById("container").setAttribute("style", "filter: blur(0)")
    document.getElementById("verify_area").setAttribute("style", "display: none;")
}

function name_check()
{
    let n_check = document.getElementById("ip_1").value;
    if ((!n_check.match(/^([A-Za-z.])+$/)) && (!n_check.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)))
    {
        document.getElementById("ip_1").style.borderBottom = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("ip_1").style.borderBottom = "1px solid rgb(217, 77, 224)";
        return true
    }
}

function mail_check()
{
    let m_check = document.getElementById("ip_3").value
    if (m_check == '')
    {
        document.getElementById("ip_3").style.borderBottom = "2px solid red";
        return false
    }
    if (!m_check.match(/^([a-zA-Z0-9_.])+\@([a-z])+\.([a-z])+$/))
    {
        document.getElementById("ip_3").style.borderBottom = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("ip_3").style.borderBottom = "1px solid rgb(217, 77, 224)";
        return true
    }
}

function contact_check()
{
    let co_check = document.getElementById("ip_4").value
    if (co_check == '')
    {
        document.getElementById("ip_4").style.borderBottom = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("ip_4").style.borderBottom = "1px solid rgb(217, 77, 224)";
        return true
    }
}

function gender_check()
{
    let g_check = document.getElementById("ip_5").value
    let gen = ["Male", "Female", "male", "female"]

    if (g_check == '')
    {
        document.getElementById("ip_5").style.borderBottom = "2px solid red";
        return false
    }
    if (gen.includes(g_check))
    {
        document.getElementById("ip_5").style.borderBottom = "1px solid rgb(217, 77, 224)";
        return true
    }
    else
    {
        document.getElementById("ip_5").style.borderBottom = "2px solid red";
        return false
    }
}

function education_check()
{
    let e_check = document.getElementById("ip_6").value
    if (e_check == '')
    {
        document.getElementById("ip_6").style.borderBottom = "2px solid red";
        return false
    }
    if (!e_check.match(/^([A-Za-z.])+$/))
    {
        document.getElementById("ip_6").style.borderBottom = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("ip_6").style.borderBottom = "1px solid rgb(217, 77, 224)";
        return true
    }
}

function designation_check()
{
    let d_check = document.getElementById("ip_7").value
    let des = ["Student", "student", "Professional", "professional"]

    if (d_check == '')
    {
        document.getElementById("ip_7").style.borderBottom = "2px solid red";
        return false
    }
    if (des.includes(d_check))
    {
        document.getElementById("ip_7").style.borderBottom = "1px solid rgb(217, 77, 224)";
        return true
    }
    else
    {
        document.getElementById("ip_7").style.borderBottom = "2px solid red";
        return false
    }
}

function address_check()
{
    let a_check = document.getElementById("ip_8").value
    if (a_check == '')
    {
        document.getElementById("ip_8").style.borderBottom = "2px solid red";
        return false
    }
    else
    {
        document.getElementById("ip_8").style.borderBottom = "1px solid rgb(217, 77, 224)";
        return true
    }
}

function hov(a)
{
    a.setAttribute("style", "transition: all 0.2s ease-out");
}

