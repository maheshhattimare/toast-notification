const successBtn = document.getElementById('successBtn');
const errorBtn = document.getElementById('errorBtn');
const invalidBtn = document.getElementById('invalidBtn');
const toastBox=document.getElementById('toastBox');

let successMsg='<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg='<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

successBtn.addEventListener('click' , ()=>{showToast(successMsg)});
errorBtn.addEventListener('click' , ()=>{showToast(errorMsg)});
invalidBtn.addEventListener('click' , ()=>{showToast(invalidMsg)});

function showToast(msg){
    let toast= document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    else if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}