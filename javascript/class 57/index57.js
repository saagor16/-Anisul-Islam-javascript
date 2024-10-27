// Js Bom
// Popup boxes - alert, confirm , prompt


alert('error here');

confirm("are you sure?")

function deleteSomething(){
    let value = confirm("Do You Want to delete?");
    if(value){
        console.log('deleted')
    } else {
        console.log('not deleted');
    }
}
deleteSomething();

function welcomeMessage(){

    var h1 = document.createElement('h1');
    let text;


    var name = prompt("enter your name");
    if(name == null || name== " "){
        text = 'no name found'
    }else{
        text=name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1)
}
welcomeMessage();





