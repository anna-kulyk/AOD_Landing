document.querySelector(".wrapper").classList.add('loaded');

document.querySelector(".icon-menu").addEventListener('click', () => {
    document.querySelector(".icon-menu").classList.toggle('active');
    document.querySelector(".menu__body").classList.toggle('active');
    document.querySelector("body").classList.toggle('lock');
})

function ibg(){
    let ibgs = document.getElementsByClassName('ibg');
    if(ibgs){
        for (let item of ibgs) {
            let imgSrc = item.children[0].attributes[0].value;
            item.style = `background-image: url("${imgSrc}");`;
        }
    }
}

ibg();