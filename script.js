const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".from input"),
generateBtn=wrapper.querySelector(".from button"),
qrImg=wrapper.querySelector(".qr img");
generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value;
    if(!qrValue)return;
    generateBtn.innerText="Generating QR Code...";
    qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
     wrapper.classList.add("active");
     generateBtn.innerText="Generating QR Code";
});

});
