
function showdata(){
  let user=document.getElementById("usern").value;
    let email_or_phone=document.getElementById("email_or_phone").value;
    let password= document.getElementById("password").value;
    // alert(email_or_phone,password);
    if(user==''){
      alert("Enter user Name")
    }
    else if(email_or_phone==''){
      // document.getElementById("email_or_phone");
      alert("Enter a email");
    }else if(password==''){
      // document.getElementById("password");
      alert("Enter a password");
    }
    else{
      openpopup();
    }
   
   // document.write(email_or_phone+" "+password);
  // document.getElementById("show").innerHTML=(email_or_phone+" <br>"+password);
   localStorage.setItem("username",email_or_phone);
   localStorage.setItem("pass",password);
   
}





