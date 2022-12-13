const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
if((localStorage.getItem("email")!=="admin@yahoo.com")&&(localStorage.getItem("email")!==localStorage.getItem("signemail"))){
    document.getElementById("regisBtn").style.display="none"
}else{
    document.getElementById("logoutBtn").style.display="none"
}
