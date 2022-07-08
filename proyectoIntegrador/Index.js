const btnSend=document.getElementById('send');
const inputMessage=document.getElementById('txtMessage');
const inputName=document.getElementById('name');
const inputEmail=document.getElementById('email');
const countNumbers=document.getElementById('count');

function emailOk() {
    if (inputEmail.value.includes('@'&&'.')) {
        inputEmail.style.color="green";
    } else {
        alert('El formato de mail ingresado no coincide, verifique');
        inputEmail.value=" ";
    }}
function nameOk() {
    if (inputName.value.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')) {
        alert('El formato de mail ingresado no coincide, verifique');
        inputName.value=" ";

    } else {
        inputName.style.color="green";     
    }
}
// function count() {
// inputMessage.onkeyup=index++;
// countNumbers.value=index+'/255';   
// }
    inputEmail.addEventListener("blur",emailOk);
    inputName.addEventListener("blur",nameOk);
    inputMessage.addEventListener("keypress",count);


    //INCOMPLETO FALTAN CONDICIONALES