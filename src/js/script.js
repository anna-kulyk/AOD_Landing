document.querySelector(".wrapper").classList.add('loaded');

document.querySelector(".icon-menu").addEventListener('click', () => {
    document.querySelector(".icon-menu").classList.toggle('active');
    document.querySelector(".menu__body").classList.toggle('active');
    document.querySelector("body").classList.toggle('lock');
})

function ibg(){
    let elements = document.querySelectorAll('.ibg');
    elements?.forEach(function(item){
        let image = item.querySelector('img');
        if( image.src.length > 0 ){
            item.style.backgroundImage = `url("${image.src}")`;
        }
    });
}

ibg();