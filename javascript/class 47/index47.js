// <input/>- text,number,email,password,color,radio,checkbox,search,time,date,dateTime,week,month,url,tel,file
// {/* <select></select> */}
// <textarea/>


console.clear()
const input = document.querySelector('input');
input.addEventListener('change',changeHandler)
function changeHandler(e){
    // console.log(e);
    // console.log(e.type);
    console.log(e.target)
}
// 10 mint