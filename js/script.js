let login = 'admin@admin.com'
let pass = 'admin' 

let inputLogin = document.getElementsByClassName('login')[0]
let inputPass = document.getElementsByClassName('pass')[0]
let ok = document.getElementsByClassName('input_submit')[0]
 ok.addEventListener('click', openWebPage)

 function openWebPage()
 {
  let enteredLogin = inputLogin.value;
  let enteredPass = inputPass.value;

  if(login === enteredLogin && enteredPass === pass)
    {
      window.location.href = 'index.html'; 
    }
 }
