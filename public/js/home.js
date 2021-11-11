const h3 = document.getElementsByTagName('H3')
const ul = document.getElementsByTagName('H2')[0].nextElementSibling.children
const addIdRedirecction = (a,b)=>{
    a.addEventListener('click',()=>{
        window.location.href='#'+b
    })
}
for (let i = 0; i < ul.length; i++) {
    addIdRedirecction(ul[i],i);
    h3[i].id=i
}
