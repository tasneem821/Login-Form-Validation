
let submit = document.getElementById('check');
submit.addEventListener('click',(e)=>{
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let answer = document.getElementById('answer');
    let NameRegex =/^[a-zA-Z][a-zA-Z0-9]{4,14}$/; ;
let PassRegex = /^(?=.*[A-Z])(?=.*\d).{8,20}$/;
answer.innerHTML="";
    if(!NameRegex.test(name)){
        answer.classList.add("fail")

answer.innerHTML += `<p> the name is not validated</p>`
    }

    if(!PassRegex.test(password)){
        answer.classList.add("fail")

answer.innerHTML += `<p> password is not validated</p>`
    }

    else{
        answer.classList.add("success")
        answer.innerHTML += `<p>Form submitted successfully</p>`
    }


    
e.preventDefault();
}
)