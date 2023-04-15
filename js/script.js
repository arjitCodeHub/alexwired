let validate=()=>{
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let message=document.getElementById('message').value
    let password=document.getElementById('password').value
    // name
    if(name==""){
        document.getElementById('uname').innerHTML="**Please fill Your name";
        document.getElementById('uname').style.color="red"
    }
    else{
        document.getElementById('uname').innerHTML="";
    }
    // email
    if(email==""){
        document.getElementById('id').innerHTML="**Please fill your valid email";
        document.getElementById('id').style.color="red"
    }
    else{
        document.getElementById('id').innerHTML="";
    }
    // textarea
    if(message==""){
        document.getElementById('msg').innerHTML="**Please leave any comment";
        document.getElementById('msg').style.color="red"
    }
    else{
        document.getElementById('msg').innerHTML="";
    }
    // password
    if(password==""){
        document.getElementById('pass').innerHTML="**Plase enter your password";
        document.getElementById('psss').style.color="green"
    }
    else{
        document.getElementById('pass').innerHTML="";
    }
}
