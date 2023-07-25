let data = []

let img = ''
let frame = ''
let editId = ''

let editOn = false
function encodeImageFileAsURL(element) {

    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        img = reader.result
        frame = reader.result
        document.getElementById('frame').src = frame

    }

    reader.readAsDataURL(file);

}




function alldata() {

    frame = ''
    let email = document.getElementById('umail').value;

    let data1 = {
        name: document.getElementById('uname').value,
        email: email,
        pass: document.getElementById('upass').value,
        num: document.getElementById('unum').value,
        img: img,
        id: Date.now()

    }


    let alreadyIn = false;

    let stordata = JSON.parse(localStorage.getItem("datastore"));
    if (stordata) {
        data = stordata;
        for (let i = 0; i < data.length; i++) { 
            if (email == data[i].email) {
                alreadyIn = true;
            }

        }
    }


    if (alreadyIn) {
        alert("Already Register")
    }


    else {

        document.getElementById('uname').value = ''
        document.getElementById('umail').value = ''
        document.getElementById('upass').value = ''
        document.getElementById('unum').value = ''
        document.getElementById('frame').src = ''



        data.push(data1)

    }
    console.log(data)
    localStorage.setItem("datastore", JSON.stringify(data))



}
function edit(id) {

    editOn = true

    localStorage.setItem("abc", id)

    window.location.href = "/register.html"



}

function update() {
    editOn = false
    let data = JSON.parse(localStorage.getItem("datastore"))
    let id = localStorage.getItem("abc")

    let newup = false;
    for (let i = 0; i < data.length; i++) {
        if (document.getElementById("umail").value == data[i].email) {
            newup = true;
        }
    }
    if (newup) {
        alert("already register")
    }
    else {

        let objIindex = data.findIndex((obj => obj.id == id));
        console.log(objIindex);

        data[objIindex].name = document.getElementById('uname').value;
        data[objIindex].email = document.getElementById('umail').value;
        data[objIindex].pass = document.getElementById('upass').value;
        data[objIindex].num = document.getElementById('unum').value;
        data[objIindex].img = document.getElementById('frame').src;

    }
    // localStorage.removeItem('abc')
    localStorage.setItem('datastore', JSON.stringify(data))

}

function mytable() {
    tabdata()
}

function tabdata() {
    data = JSON.parse(localStorage.getItem("datastore"))
    n = 0
    for (let i = 0; i < data.length; i++) {
        n++
        let T1 = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let bt1 = document.createElement('button');
        let bt2 = document.createElement('button');
        let im = document.createElement('img')

        T1.setAttribute("id", "her" + n)
        bt1.setAttribute("onclick", "remove(" + data[i].id + "," + n + ")")
        bt2.setAttribute("onclick", "edit(" + data[i].id + ")")
        im.setAttribute("src", data[i].img)
        im.setAttribute("id", "img1")
        im.setAttribute("width", "50px")

        td5.appendChild(im)
        td7.appendChild(bt1)
        td8.appendChild(bt2)
        T1.appendChild(td1)
        T1.appendChild(td2)
        T1.appendChild(td3)
        T1.appendChild(td4)
        T1.appendChild(td5)
        T1.appendChild(td7)
        T1.appendChild(td8)

        if (document.getElementById("tab1")) {

            document.getElementById('tab1').appendChild(T1)
        }


        td1.innerHTML = data[i].name
        td2.innerHTML = data[i].email
        td3.innerHTML = data[i].pass
        td4.innerHTML = data[i].num
        bt1.innerHTML = "remove"
        bt2.innerHTML = "edit"
    }
}

function getdata() {

    // document.getElementById("subm").removeAttribute("onclick");
    // document.getElementById("subm").setAttribute("onclick", "update()")

    let ed1 = JSON.parse(localStorage.getItem('abc'));
    let dat1 = JSON.parse(localStorage.getItem("datastore"));


    for (let i = 0; i < dat1.length; i++) {
        if (ed1 == dat1[i].id) {

            document.getElementById("uname").value = dat1[i].name
            document.getElementById("umail").value = dat1[i].email
            document.getElementById("upass").value = dat1[i].pass
            document.getElementById("unum").value = dat1[i].num
            document.getElementById("frame").src = dat1[i].img
        }
    }
}

function remove(n, m) {
    document.getElementById("her" + m).remove()
    data = data.filter(obj => obj.id !== n)
    console.log(data)

    localStorage.setItem("datastore", JSON.stringify(data))

}

function subdata() {
    window.location.href = "/login.html"

}

function allsubdata() {
    if (editOn) {
        update()
    }
    else {
        alldata()
    }
}
