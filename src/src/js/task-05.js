const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', (Event) => {
    if (inputName.value !== ""){
    return outputName.textContent = Event.currentTarget.value;
        
}
    else{ 
    return "Anonimus"
    }
});