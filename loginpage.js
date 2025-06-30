function show(){

    let ab=document.getElementById("email_or_phone").value;
    let cd=document.getElementById("password").value;
    if(ab==''){
        alert("Enter a email ")
    }else if(cd==''){
    alert("Enter Password");
    }else{

    if(ab==localStorage.getItem("username") && cd==localStorage.getItem("pass")){
   {
    window.open("memorial\\index.html");
    }
    }else{
       document.write("CHECK YOUR EMAIL OR PASSWORD");
    }
}
}