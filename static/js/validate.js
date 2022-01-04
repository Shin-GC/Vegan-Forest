document.getElementById("nickname").addEventListener("keyup", nameCheck);
document.getElementById("password").addEventListener("keyup", pwdCheck);

function nameCheck() {
  let val = document.getElementById("nickname").value;
  if (!val || !val.length) {
    return;
  }
  
  let regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  if (regex.test(val)) {
    document.getElementById("nickname").classList.remove("valid");
    document.getElementById("nickname").classList.add("invalid");
  } else {
    document.getElementById("nickname").classList.remove("invalid");
    document.getElementById("nickname").classList.add("valid");
  }
  
}

function pwdCheck() {
  let pwd = document.getElementById("password").value;
  let pwd2 = document.getElementById("password2").value;
  if (pwd === pwd2) {
    document.getElementById("password2").classList.remove("invalid");
    document.getElementById("password2").classList.add("valid");
  }
  else{
    document.getElementById("password2").classList.remove("valid");
    document.getElementById("password2").classList.add("invalid");
  }
  
}