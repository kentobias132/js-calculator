let view = document.getElementById("userInput");


function userClick(number){
    // console.log('I am clicked');
    view.value += number;
}

let Clear = () =>{
    view.value = ""
}

let Deleat = () =>{
    view.value = view.value.slice(0, -1);
}

let Result = () =>{
    try {
        view.value = eval(view.value)
    } catch (error) {
        alert('input an invalid number  '+error)
    }
}