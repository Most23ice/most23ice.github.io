var a = document.querySelector("h1")
d = new Date
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds ();
setInterval(()=>{
    d = new Date
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds ();    
    a.textContent= `${h}:${m}:${s}`
    })


var dropZone = document.getElementById('dropZone');
var img;

dropZone.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

let dropNewImageCounter = 0;
dropZone.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files;

    for (var i=0, file; file=files[i]; i++) {
        if (file.type.match(/image.*/)) {
            var reader = new FileReader();

            reader.onload = function(e2) {
                dropZone.style.position = 'absolute';

                dropZone.style.backgroundImage = `url(${e2.target.result})`;
                img = e2.target.result;

                dropNewImageCounter++;
                
                localStorage.setItem('img',img);
            }

            reader.readAsDataURL(file);

        }
    }
});

let name = document.getElementById('name');
let password = document.getElementById('password');
let login = document.getElementById('login');

let loginDone = false;

if(localStorage.getItem('img',img)){

}

login.onclick = ()=>{
    if(localStorage.getItem('loginDone')=="true"){
        if(name.value != localStorage.getItem('name') && password.value != localStorage.getItem('password')) {
            alert('nome o password sbagliati');
        }else{
            alert('login riuscito');
            document.querySelector('login').remove();
        }



    }else{
        if(name.value == '' || password.value == ''){
            alert('COMPILARE TUTTI I CAMPI');
        }
        else{
            localStorage.setItem('name',name.value);
            localStorage.setItem('password',password.value);
            localStorage.setItem('img',img);

            localStorage.setItem('loginDone',true)
        } 
    }


}
let title=document.querySelector("title")
setInterval(() => {
    title.textContent=`${h}:${m}:${s}`
}, 0);
let credits = document.querySelector('#credits');
let creditsP = document.querySelector('creditsP');
let closeCre = document.querySelector('#closeCre');

credits.onclick = function() {
    creditsP.style.display = 'flex';
}
closeCre.onclick = function() {
    creditsP.style.display = 'none';
}
//ciao//