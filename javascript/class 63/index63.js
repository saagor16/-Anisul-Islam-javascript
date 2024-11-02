// how to handle error in JavaScript (part-2) throw keyword
// Error Handling - try, catch,finally
// the throe statement -> create custom error

document.querySelector('#check').addEventListener('click',function(){
    var num = document.querySelector("#numTextfield").value;

    console.log(num)
    try{
        if(num<5)
        {
            throw "input is to low"
        }
        else if(num>10)
        {
            throw "input is to high"
        }
    }catch(err){
        console.log(err)
    }

})







