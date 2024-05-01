function validateForm(event){
    var form = document.getElementById("myForm")
    var firstName = document.getElementById("validationDefault01").value;
    var lastName = document.getElementById("validationDefault02").value;
    var email = document.getElementById("validationDefault03").value;
    var city = document.getElementById("validationDefault04").value;
    var dateOfBirth = document.getElementById("validationDefault05").value;
    var phoneNumber = document.getElementById("validationDefault06").value;

    var errorFirstName = document.getElementById("error-first");
    var errorLastName = document.getElementById("error-last");
    var errorEmail = document.getElementById("error-email");
    var errorPhone = document.getElementById("error-phone");

    errorFirstName.innerHTML = "";
    errorLastName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPhone.innerHTML = "";
    
    if(form.checkValidity()){
        form.classList.add('was-validated');
        alert("Registration Succesfull");

    } else{
        event.preventDefault(); //supaya ga ke submit
        event.stopPropagation;
        form.classList.add('was-validated');
    }
    
    if(firstName.length < 3){
        errorFirstName.innerHTML = "Name must be at least 3 characters";
        event.preventDefault(); //supaya ga ke submit
    }

    if(lastName.length < 3){
        errorLastName.innerHTML = "Name must be at least 3 characters";
        event.preventDefault(); //supaya ga ke submit
    }

    if(!email.includes("@")){
        errorEmail.innerHTML = "Email must contain '@' symbol";
        event.preventDefault();
    }

    if(phoneNumber.length > 14){
        errorPhone.innerHTML = "Phone number maksimum 14 number";
        event.preventDefault(); //supaya ga ke submit
    }

    if(!phoneNumber.startsWith("08")){
        errorPhone.innerHTML = "Phone number must be start with '08'";
        event.preventDefault(); //supaya ga ke submit
    }

    return true;
}