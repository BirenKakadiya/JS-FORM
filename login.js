function newdata() {

    let x = JSON.parse(localStorage.getItem("datastore"))

    let name = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value

    let validemail = false
    let validpass = false

    for (let i = 0; i < x.length; i++) {
        if (document.getElementById('mail').value == x[i].email) {
            validemail = true
            if (document.getElementById('pass').value == x[i].pass) {
                validpass = true
            }
        }
    }

    if (validemail && validpass) {
        window.location.href = "/table.html"
    }
    else {
        if (validemail) {
            alert('Not Valid Your Password')
        }
        else {
            alert('Not Valid Your Email')
        }
    }

}


