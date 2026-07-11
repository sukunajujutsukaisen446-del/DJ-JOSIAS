// ==============================
// DJ JOSIAS - SCRIPT.JS
// ==============================

// Menu transparente ao rolar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#000";

    }else{

        header.style.background = "rgba(0,0,0,.85)";

    }

});

// Animação ao aparecer na tela

const elementos = document.querySelectorAll("section");

const aparecer = () =>{

    elementos.forEach((item)=>{

        const topo = item.getBoundingClientRect().top;

        if(topo < window.innerHeight - 120){

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

elementos.forEach((item)=>{

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", aparecer);

aparecer();

// Botão voltar ao topo

const botao = document.createElement("button");

botao.innerHTML = "↑";

botao.style.position = "fixed";
botao.style.right = "25px";
botao.style.bottom = "25px";
botao.style.width = "55px";
botao.style.height = "55px";
botao.style.border = "none";
botao.style.borderRadius = "50%";
botao.style.background = "#00e5ff";
botao.style.color = "#000";
botao.style.fontSize = "24px";
botao.style.cursor = "pointer";
botao.style.display = "none";
botao.style.zIndex = "9999";
botao.style.boxShadow = "0 0 20px #00e5ff";

document.body.appendChild(botao);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        botao.style.display = "block";

    }else{

        botao.style.display = "none";

    }

});

botao.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
