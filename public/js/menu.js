const menu = document.getElementsByClassName('menu')[0];
const menuLink = (a)=>{
    window.location.href=`${a}`
}

menu.addEventListener('click',(e)=>{
    if(e.target.tagName=='LI'){
        switch(e.target.innerText){

            case 'Estudios':
                menuLink('/estudios')
                break;
            case 'Peliculas':
                menuLink('/peliculas')
                break;
            case 'Series':
                menuLink('/series')
                break;
            case 'Rutina':
                menuLink('/rutina')
                break;
            default:
                menuLink('/')
                break;
        }
        console.log(rutas)
}})
