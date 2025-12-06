const logo = document.querySelector('#logo_page')
const nav_top = document.querySelector('#header_page');

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

window.addEventListener('keydown',(key) => {
    console.log(key.key);
})

const sessoes = document.querySelectorAll('main section')
const marcaMenuAtivo = () => {
    const pontoCheck = window.scrollY + (window.innerHeight / 2);
    sessoes.forEach(sessao => {
        const sessaoTop = sessao.offsetTop;
        const sessaoHeigth = sessao.offsetHeight;
        const sessaoID = sessao.getAttribute('id');
        const checkInicio =  pontoCheck >= sessaoTop;
        const checkFim = pontoCheck <= sessaoTop + sessaoHeigth;
        const sessaoAtiva = document.querySelector(`nav ul li a[href*=${sessaoID}]`);
        if(checkInicio && checkFim){
            sessaoAtiva.classList.add('ativa');
        } else {
            sessaoAtiva.classList.remove('ativa');
        }
    });
}

window.addEventListener('scroll', () => {
    tela(); 
    mostra_glasshoper();
    marcaMenuAtivo();
})