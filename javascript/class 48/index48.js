// <input/>- text,number,email,password,color,radio,checkbox,search,time,date,dateTime,week,month,url,tel,file
// {/* <select></select> */}
// <textarea/>


const  form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");


form.addEventListener('submit',formHandler);
function formHandler(e){
    e.preventDefault();
    const userInfo={
        name:name.value,
        email:email.value,
        password:password.value,
    }
    console.log(userInfo)
}