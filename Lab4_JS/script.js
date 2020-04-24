const sur = document.getElementById("sur");
const name = document.getElementById("name");
const secName = document.getElementById("secName");
const phone = document.getElementById("phone");
const role_stud = document.getElementById("role_stud");
const role_prep = document.getElementById("role_prep");
const pass = document.getElementById("pass");

function changerole(ind){
    if (ind){
        role_prep.checked = false;
    }
    else{
        role_stud.checked = false;
    }
}

function checkFIOKey(event){
    if (('А' <= event.key && event.key <= 'я') || ('A' <= event.key && event.key <= 'z') || 
    event.keyCode == 8 || event.keyCode == 16 || event.keyCode == 9){
        return;
    }
    else{
        alert('Введен некорректный символ!');
        return false;
    }
}

function checkTelKey(event){
    if ((event.key >= '0' && event.key <= '9') || 
    event.keyCode == 8 || event.keyCode == 16 || event.keyCode == 9){
        return true;
    }
    else{
        alert('Введен некорректный символ!');
        return false;
    }
}

function resetLines(){
    sur.value = null;
    name.value = null;
    secName.value = null;
    phone.value = null;
    role_stud.checked = true;
    role_prep.checked = false;
    pass.value = null;
}

function send(){
    if ((sur.value == "") || (name.value == "") || (secName.value == "") || (pass.value == "")){
        alert("Не все необходимые поля заполнены!");
        return;
    }
    let tel;
    if(phone.value == "") tel = "без телефона";
    else tel = phone.value;
    let role;
    if (role_prep.checked == true) role = "преподаватель";
    else role = "студент";
    const db = firebase.database().ref().child(sur.value);
    db.set({
        surname: sur.value,
        name: name.value,
        second_name: secName.value,
        phone: tel,
        role: role,
        password: pass.value
      });
    alert("Данные сохранены!");
    resetLines();
}