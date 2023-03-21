var fotos = ["euanimeprojeto.png", "Bebezinhoanime.jpg", "bebezinhaanime.jpg", "luffpaidemim.avif", "YazanaAnimeãe.webp"]
var Nomes = ["Eu", "irmãos mais novo - Pedro Melo", "Irmã mais nova - Ana Melo", "Pai - Luff Costa Melo", "Mãe - Mariana Melo"]
var A = 1

function Próximo() {

    //animesemcabeloazul, familiameloaoriginal

    document.getElementById("animesemcabeloazul").src = fotos[A]
    document.getElementById("familiameloaoriginal").innerHTML = Nomes[A]
    A++

    if(A == 5){A=0}


    //A++ Significa mais 1 // 

}