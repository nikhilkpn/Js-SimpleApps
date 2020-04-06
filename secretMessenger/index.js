const { hash } = window.location;

const message = window.atob(hash.replace('#', ''));


if (message){
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event=>{
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

    const input  = document.querySelector('#message-input').value
    const encrypted = window.btoa(input)
    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`
    linkInput.select();
    
    
})