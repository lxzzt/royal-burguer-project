gsap.registerPlugin(SplitText)


const slides = document.querySelectorAll(".slide")
const conteudoDireita = document.querySelectorAll(".conteudo img:nth-child(1)")
const conteudoEsquerda = document.querySelectorAll(".imgCirculo")




let contador = 0



conteudoDireita.forEach(alimentoDireita=>{
    alimentoDireita.onclick = () => {
        const slideAtivo = document.querySelector(".slide.ativo")
        slideAtivo.classList.remove("ativo")
        slides[contador].classList.add("ativo")
        if(contador==3){contador=0}
        else{
            contador += 1
        }
    }
})

const splitText = SplitText.create(".textos h2",{
    type:"chars",
    mask:"chars"
})
gsap.to(splitText.chars,{
    y:-10 ,
    stagger: .1
})
console.log(conteudoEsquerda)