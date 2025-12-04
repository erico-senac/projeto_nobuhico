const h1_pg_main = document.querySelector('#div_main_page h1');
const logo = document.querySelector('#logo_page')
const nav_top = document.querySelector('#header_page');

h1_pg_main.textContent = "Vamos para casa?"

logo.addEventListener('click', () => {
    window.scrollTo(0,0);
});

const tela = () => {
    if(window.scrollY > nav_top.offsetHeight){
        nav_top.classList.add('header_shadown');
        document.querySelector('#header_page hr').classList.add('esconde');
    }
    else{
        nav_top.classList.remove('header_shadown');
        document.querySelector('#header_page hr').classList.remove('esconde');
    }
}

const mostra_glasshoper = () => {
    logo.classList.add('esconde');
    if(window.scrollY > 700){
        logo.classList.remove('esconde');
    }
}

window.addEventListener('scroll', () => {
    tela(); 
    mostra_glasshoper();
})
window.addEventListener('keydown',(key) => {
    console.log(key.key);
})
