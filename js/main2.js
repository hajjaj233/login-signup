


var formlabel = document.getElementsByTagName("label")

function validation2(){
    valid = true
    var useremail = document.getElementById("email").value
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (useremail == ""){
        formlabel[0].innerHTML=("you must fill the bar")
        formlabel[0].style.color = "red"
        valid = false
    }else if(!regex.test(useremail)){
        formlabel[0].innerHTML=("invalid email")
        formlabel[0].style.color = "red"
        valid = false

    }
    else{
        valid = (valid) ? true : false;
    }
    var userpassword = document.getElementById("password").value
    if (userpassword == ""){
        formlabel[1].innerHTML=("you must fill the bar")
        formlabel[1].style.color = "red"
        valid = false
    }
    else if(userpassword.length <= 8){
        formlabel[1].innerHTML=("password must be more 8")
        formlabel[1].style.color = "red"
        valid = false
    } 

    return valid;
}

