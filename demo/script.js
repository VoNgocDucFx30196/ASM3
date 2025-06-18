function Check(){
    const form = document.getElementById('form');
    const result = document.getElementById('result');
    const emailInput = document.getElementById('email').value.trim();
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(emailInput)){
        form.className = "hide";
        result.className = "";
    }
    else{
        alert("Please enter a valid email address.");
    }
}
