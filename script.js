let  btn=document.querySelector('a');
btn.addEventListener('click',function(event){

    let x=event.clientX;
    let y=event.clientY;

    let tag=document.createElement('span');
    tag.style.left=x+'px';
    tag.style.top=y+'px';
    this.appendChild(tag);



})