const image_User = document.querySelector('#photoUser');
var upload = "";

image_User.addEventListener("change",function(){
    const reader = new FileReader();

    reader.addEventListener('load', ()=>{
        upload = reader.result;
        document.querySelector('#foto').style.backgroundImage = `url(${upload})`
    })
    reader.readAsDataURL(this.files[0])
})

