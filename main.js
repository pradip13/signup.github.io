const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const date = document.getElementById('date');
const zip = document.getElementById('zip');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const validateValue = validate();

    if (validateValue) {
        console.log('success'); 

    } else {
        return;
    }

})
const sendData = (usernameVal, sRate, count) => {
    if (sRate === count) {
        alert('registration successfull');
        swal("welcome! " + usernameVal, "Registration successfull", "success");
        // location.href = `demo.html?username = ${usernameVal}`
    }

}

const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            sendData(usernameVal, sRate, count);

        } else {
            return false;
        }
    }
}
// define the validate function

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const dateVal = date.value.trim();
    const zipVal = zip.value.trim();

    let finalUserName, finalEmail, finalPhone, finalPassword, finalDate, finalZip;

    // more email validate
    const isEmail = (emailVal) => {
        var atSymbol = emailVal.indexOf("@");
        if (atSymbol < 1) return false;
        var dot = emailVal.lastIndexOf('.');
        if (dot <= atSymbol + 3) return false;
        if (dot === emailVal.length - 1) return false;
        return true;


    }
    // validate username
    if (usernameVal === "") {
        setErrormsg(username, 'username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrormsg(username, 'username min 3 char');
    } else {
        finalUserName = username.value
        setSuccessMsg(username);
    }

    if (emailVal === "") {
        setErrormsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrormsg(emailVal, 'not a valid email');
    } else {
        finalEmail = email.value
        setSuccessMsg(email);
    }
    // password validate
    if (passwordVal === "") {
        setErrormsg(password, 'password cannot be blank');
    } else if (passwordVal.length <= 5) {
        setErrormsg(password, 'password must be 6 char');
    } else {
        finalPassword = password.value
        setSuccessMsg(password);
    }
    // validate date of birth
    if (dateVal === "") {
        setErrormsg(date, 'date cannot be blank');
    } else if (dateVal.length === date) {
        setErrormsg(date, 'please choose date');
    } else {
        finalDate = date.value;
        setSuccessMsg(date);
    }
    // validate zip code
    if (zipVal === "") {
        setErrormsg(zip, 'code cannot be blank');
    } else if (zipVal.length === zip) {
        setErrormsg(zip, 'please enter zip code');
    } else {
        finalZip = zip.value;
        setSuccessMsg(zip);
    }
    // validate phone
    if (phoneVal === "") {
        setErrormsg(phone, 'phone cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrormsg(phone, 'not a valid mobile no');
    } else {
        finalPhone = phone.value;
        setSuccessMsg(phone);
    }

    return isValidate(finalUserName, finalEmail, finalPhone, finalPassword, finalDate, finalZip)
}
function setErrormsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;

}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidate(usernameVal,
    emailVal,
    phoneVal,
    passwordVal,
    dateVal,
    zipVal
) {
    if (usernameVal != null && emailVal != null && passwordVal != null && dateVal != null && zipVal != null && phoneVal != null) {
         formSubmit(usernameVal,
            emailVal,
            phoneVal,
            passwordVal,
            dateVal,
            zipVal)

            return true;
    } else {
        return false
    }


}

function formSubmit(usernameVal,
    emailVal,
    phoneVal,
    passwordVal,
    dateVal,
    zipVal) {
    var name = usernameVal;
    var email = emailVal;
    var phone =phoneVal;
    var password = passwordVal;
    var dob = dateVal;
    var zip = zipVal;

    var formData = {
        name: name,
        email: email,
        phone: phone,
        password: password,
        dob: dob,
        zip: zip,
    }

    console.log(formData)

    $.ajax({
        type: "post",
        url: 'insert.php',
        data: formData,
        success: function (data) {
            console.log(data);
            // $('#data_show_place').html(data);
            successMsg(usernameVal);
        }
    });
}

