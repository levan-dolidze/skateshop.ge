function passvalue()
{
    var firstname=document.getElementById("nameid").value;
    localStorage.setItem("textvalue",firstname);
    return false;
    
}


document.getElementById("result").innerHTML=localStorage.getItem("textvalue");