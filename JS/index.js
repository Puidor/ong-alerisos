(() => {

    /***********************Menu Hamburguer - Mobile*************************** */
    //Captura o menu mobile via data atributes
    const btnMobile = document.querySelector('.menu-mobile');

    //funcao de que exibe ou oculta o menu
    function ativaMenu(){
        const menuMobile = document.querySelector('.linkMenu');

        //Toggle ativa caso não tenha e desativa caso tenha.
        menuMobile.classList.toggle('ativo');

    }

    //adiciona o evendo no botão de menu instaciado acima
    btnMobile.addEventListener('click',() => {

        //chama a função acima
        ativaMenu();

    })
    

    /***********************Scroll Suave*************************** */

    //captura os itens do menu
    const menuItens = document.querySelectorAll('#navbar a[href^="#"]');

    //cria funcao de click os itens
    menuItens.forEach(item=>{
        item.addEventListener('click', scrollSuave);
    })

    //funcao do scroll suave
    function scrollSuave(event){

        //evita o #id na barra de navegacao do browser
        event.preventDefault();

        //recebe o elemento alvo
        const element = event.target;
        const id = element.getAttribute('href');
        //captura a altura do elemento no site
        const section = document.querySelector(id).offsetTop;

        /*faz um scroll suave até a altura capturada anteriormente,
        top: section - 50 é pra dar uma margem pra não ficar muito em cima, 
        behavior: 'smooth' : decida suave*/
        window.scroll({
            top: section - 50,
            behavior: 'smooth'
        });

    }
})()