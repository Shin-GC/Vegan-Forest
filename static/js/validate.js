document.getElementById("nickname").addEventListener("keyup", nameCheck);
document.getElementById("password").addEventListener("keyup", pwdCheck);

let idCheck = false
let passwordCheck = false

// let mailCheck = false

function nameCheck() {
  let val = document.getElementById("nickname").value;
  if (!val || !val.length) {
    return;
  }
  let error = document.getElementById("nick-error")
  let regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  if (regex.test(val)) {
    document.getElementById("nickname").classList.remove("valid");
    document.getElementById("nickname").classList.add("invalid");
    error.setAttribute("data-error", "특수문자를 사용할 수 없습니다.")
    idCheck = false
  } else if (val.length < 5) {
    document.getElementById("nickname").classList.remove("valid");
    document.getElementById("nickname").classList.add("invalid");
    error.setAttribute("data-error", "닉네임은 5글자 이상이여야 합니다.")
    idCheck = false
  } else {
    document.getElementById("nickname").classList.remove("invalid");
    document.getElementById("nickname").classList.add("valid");
    idCheck = true
  }
  
}

function pwdCheck() {
  let error = document.getElementById("pwd-error")
  let val = document.getElementById("password").value;
  if (val.length < 7) {
    document.getElementById("password").classList.remove("valid");
    document.getElementById("password").classList.add("invalid");
    error.setAttribute("data-error", "비밀번호는 8자 이상이여야 합니다.")
    passwordCheck = false
  } else {
    document.getElementById("password").classList.remove("invalid");
    document.getElementById("password").classList.add("valid");
    passwordCheck = true
  }
}

function pwdConfirmCheck() {
  let val = document.getElementById("password").value;
  let error = document.getElementById("pwd-confirm-error")
  
  let pwd = document.getElementById("password").value;
  let pwd2 = document.getElementById("password2").value;
  if (pwd === pwd2) {
    document.getElementById("password2").classList.remove("invalid");
    document.getElementById("password2").classList.add("valid");
    passwordCheck = true
  } else {
    document.getElementById("password2").classList.remove("valid");
    document.getElementById("password2").classList.add("invalid");
    error.setAttribute("data-error", "비밀번호가 일치하지 않습니다!")
    passwordCheck = false
  }
}

function submitCheck() {
  if (idCheck === true && passwordCheck === true) {
    document.getElementById("submit-confirm").classList.remove("disabled")
  } else {
    document.getElementById("submit-confirm").classList.add("disabled")
  }
}