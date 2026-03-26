gsap.registerPlugin(SplitText)


const slides = document.querySelectorAll(".slide")
const conteudoDireita = document.querySelectorAll(".conteudo img:nth-child(1)")
const conteudoEsquerda = document.querySelectorAll(".imgCirculo")




let contador = 0
let clicar = true



conteudoDireita.forEach((alimentoDireita)=>{
    alimentoDireita.onclick = () => {



        if(clicar) {
        clicar = false
        const slideAtivo = document.querySelector(".slide.ativo")
        slideAtivo.classList.remove("ativo")
        if(contador==3){contador=0}
        else{
            contador = contador + 1
        }
        slides[contador].classList.add("ativo")
        animarTitulo();
    
        setTimeout(() =>{
            clicar= true
        }, 2000);
    }
    };})


function animarTitulo() {
    const split = SplitText.create(".slide.ativo .textos h2",{
    type:"chars",
    mask: "chars"
})
gsap.from(split.chars, {
    y: "100%",
    duration: 1,
    stagger: .09,
    delay: 0.5
})
}