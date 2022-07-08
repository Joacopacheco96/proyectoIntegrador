const btnIngresar=document.getElementById('btnLoginUser');
const popUp=document.getElementById('popUpLogin');
const btnExit=document.getElementById('exit');
const btnForBussines=document.getElementById('forBussines');
const btnForMe=document.getElementById('forMe');
const userInput=document.getElementById('userBox');
const btnOk= document.getElementById('ok');
const btnClose=document.getElementById('close');
const txtUser=document.getElementById('txtUser');

function openPopUp() {
    popUp.style.display="flex";
    userInput.style.display='none';}
function closePopUp() {
    popUp.style.display="none";}
function openLoginForm() {
    userInput.style.display='flex';}
function closeLoginForm() {
    userInput.style.display='none';}
function loginSucces() {
    btnIngresar.innerText='bienvenido'+txtUser.value;
    
}

btnIngresar.addEventListener("click",openPopUp);
btnExit.addEventListener("click",closePopUp);
btnForBussines.addEventListener("click",openLoginForm);
btnForMe.addEventListener("click",openLoginForm);
btnClose.addEventListener("click",openPopUp);
btnOk.addEventListener("click",loginSucces);