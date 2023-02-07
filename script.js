function carregaDicionario(){
    var Receitas = [
        {
            receita: "Manjar Turco - As Crônicas de Nárnia", 
            imagem:"https://www.grandturkishbazaar.com/pt/wp-content/uploads/2017/12/rose-flavoured-turkish-delight-2.jpg",
            ingredientes:"1 xícara Água 5 colheres (sopa) Amido de Milho 2 xícaras Açúcar 1/2 xícara Suco de Laranja natural 2 colheres (sopa) Xarope de Romã Açúcar de confeiteiro suficiente para empanar", 
            preparo:"Em um panela, colocar para aquecer 1/2 xícara de água. Quando a água estiver quente, adicionar o açúcar e o suco de laranja. Mexer até o açúcar derreter. Enquanto o açúcar derrete, misturar o restante da água com o amigo de milho. Quando o açúcar estiver todo derretido, juntar o amido de milho com a calda e deixar engrossar até ficar com textura de gel (cerca de 15 minutos), mexendo sempre para que não grude no fundo da panela. Desligar o fogo e adicionar o xarope de romã. Forrar uma forma pequena com papel filme e despejar a mistura. Esperar esfriar por no mínimo 3 horas em temperatura ambiente. Polvilhar em uma tábua açúcar de confeiteiro e colocar o manjar turco. Cortar em cubos e empanar o manjar na açúcar de confeiteiro",
        },
        
        {
            receita: "Biscoito gatinho - Steven Universe", 
            imagem:"https://i.etsystatic.com/6918711/r/il/3da73d/1023612699/il_1588xN.1023612699_4gzh.jpg",
            ingredientes:"2 xícaras de farinha de trigob 1/2 xícaras de chocolate em pó 2 colheres (sopa) de chocolate em pó 1 e 1/2 xícaras  de açúcar de confeiteiro 1/4 de colher (chá) de sal 2 gemas 1 colher (chá) de baunilha 226 gramas de manteiga", 
            preparo:"Peneire junto a farinha, o chocolate em pó, o sal e reserve Bata a manteiga com o açúcar até ficar leve e claro. Adicione as gemas, a baunilha e incorpore. Reduza a velocidade da batida e adicione a mistura de farinha. Bata até formar uma massa resistente. Divida em duas bolas, envolva em plástico filme, e leve a geladeira por 20 minutos. Abra a massa de biscoito e corte usando o cortador de biscoitos. Fure dois círculos para os olhos em metade dos biscoitos (um você corta, outro não, para fazer o sanduíche de biscoito). Asse por 15 minutos a 175°C . Depois, deixe esfriar por 30 minutos. Após ter deixado esfriar, pegue um biscoito sem os olhos, e coloque em cima o sorvete. Depois, feche com um biscoito com olhos e cubra com plástico filme e coloque no freezer.",
        },

        {
            receita: "Torta de Peixe com Abóbora - O Serviço de Entregas da Kiki", 
            imagem:"https://i.pinimg.com/originals/a2/57/da/a257da0ac5dc6bcdbb70b476bd733fe7.jpg",
            ingredientes:"750g de abóbora cabotiá cozida e morna, ¼ xícara de caldo de legumes, 3 talos de cebolinha picadas, Sal, Pimenta do reino, Óleo, 4 filés de pescada branca, 1 cebola cortada em fatias, 50g de manteiga, 50g de farinha, 500 ml de leite, Massa para torta, 1 gema de ovo, Azeitonas pretas cortadas ao meio para decorar", 
            preparo:"Em um recipiente, amassar as abóboras até formar uma purê. Adicionar o caldo e a cebolinha, e misturar bem. Temperar com sal e pimenta do reino. Reservar. Em uma frigideira, colocar um fio de óleo e fritar os filés de peixe. Reservar. Na mesma frigideira, refogar a cebola até ficar levemente douradas e reservar. Em uma panela, derreter a manteiga e juntar a farinha de trigo. Mexer até começar a espumar. Juntar o leite morno e mexer com o auxílio de um fouet até engrossar. Temperar com sal, pimenta do reino e noz moscada. Adicionar as cebolas refogadas e misturar bem. Reservar. Em uma travessa, espalhar o purê de abóbora, colocar os filés de peixe em cima e finalizar com o molho bechamel com cebola. Abrir um pedaço da massa, cortar do tamanho do refratário e colocar em cima do molho bechamel, e dar uma leve apertada nas laterais. Abrir mais um pedaço de massa, cortar fatias de 5mm e um formato de um peixe. Colocar o peixe na torta e pincelar com a gema de ovo. Levar ao forno a 200°C por 20 min.",
        },

        {
            receita: "Bao - Bao (curta metragem)", 
            imagem:"https://2.bp.blogspot.com/-wdVkEuFiqB4/WvCI3awHlbI/AAAAAAAAmxk/evP_my25PvsMHFOBQziQi7AC61ouhzQBACLcBGAs/s320/Bao%2BFunko%2BPop%2BSpecial%2BEdition.jpg",
            ingredientes:"4 xícaras de farinha de trigo, 3/4 col chá de fermento biológico seco, 500ml de água, 450g de carne de porco moída, 450g de acelga picada, 1 cenoura picada, 3 cebolinhas picadas, 1 ovo, 2 col chá de gengibre ralado, 1 col chá de azeite de oliva, 1/2 col de Caldo de galinha em pó, 1 col chá de molho de ostras, 1 col chá de óleo de gergelim, 2 col de vinho de uso culinário, sal e pimenta á gosto ", 
            preparo:"Misture a farinha com o fermento em uma tigela, adicione água até formar uma massa uniforme que não grude nas mãos. Deixe a massa descansar por 2 horas. Em uma frigideira refougue a carne moída. Coloque em uma tigela, bata os ovos e acrente-os juntamente com os demais ingredientes e misture. Abra a massa como uma corda longa usando a 'técnica do moinho de vento'. Corte em pedaços de 1cm de largura e abra cada um formando discos. Coloque uma colher de recheio em cada disco e depois junte as bordar torcendo a parte superior. Cozinhe os baos no vapor (com repolhos por baixos dos baos para não queimá-los) por 15 minutos.",
        },

        {
            receita: "Trenette al pesto - Lucca", 
            imagem:"https://theeverydaymouse.com/wp-content/uploads/2022/01/luca-trenette-al-pesto-1-720x720.jpg",
            ingredientes:"500g de Trenette (ou macarrão de sua preferência), 100gramas de vagem, 1 batata grande em cubos, 50g de mangericão, 2 dentes de alho, 1 pitada de sal, 5 col sopa de queijo parmesão, 30g de nozes, 100ml de azeite extra-virgem",  
            preparo:"Coloque num bowl o alho, o manjericão, o sal e parte do azeite e amasse, adicione as nozes e o parmesão e o restante do azeite misturando até formar uma pasta. Numa panela coloque água e espere ferver. Adicione sal, a batata, a vagem e o macarrão. Cozinhe o macarrão até ficar ao dente. Reserve um pouco da água do cozimento e escorra o restante. Adicione a água do cozimento ao molho pesto e misture o molho ao macarrão. Sirva em seguida.",
        },

        {
            receita: "Bolinho da lua - A caminho da lua", 
            imagem:"https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-mid-autumn-festival-mid-autumn-mid-autumn-moon-cake-moon-cake-png-image_344255.jpg",
            ingredientes:"90g de farinha de trigo, 65ml de mel, 25 ml de óleo, 1 colher de chá de kansui(KANSUI - Assar 10g de bicarbonado de sódio no forno pré aquecido a 150 graus por 5 minutos. Deixar esfriar e diluir em 30g de água), 200g de feijão azuki, 90ml de óleo, 120g de açúcar, 240g de pasta de feijão azuki, Gema curada (opcional), 1 gema batida com um pouco de clara para pincelar na massa, Farinha para untar.", 
            preparo:"Cozinhe o feijão até ficar macio e bata no liquidificador até virar uma pasta homogênea. Leve ao fogo e acrescente o açúcar e 1/3 do óleo, quando absorver bem o óleo acrescente mais 1/3 dele, respita o processo e coloque o restante do óleo até a massa soltar da panela. Reserve e deixe esfriar. Misture o kansui, o mel e o óleo. Acrescente a farinha e deixe descansar num plástico filme por 2 horas. Separe porções da massa de feijão (adicionando a gema curada caso tenha). Separe porções da massa as abrindo em disco e recheando com a massa de feijão. Coloque numa assadeira untada e leve ao forno a 180°C por 20 minutos. Deixe esfriar e coloque na geladeira por 24hrs.",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

        {
            receita: "", 
            imagem:"./img/",
            ingredientes:"", 
            preparo:"",
        },

    ] //chaves duplas pois é um conjunto de obj, se fosse um obj não 
    


    var content = document.getElementById("content")


    for(var item in Receitas){
        content.innerHTML +=
        '<div class="card">' + 
        '<img src="' + Receitas[item].imagem + '"/>' +
        '<details>' + 
        '<summary>' + Receitas[item].receita + '</summary>' +
        '<dl>' + 
        '<dt> Ingredientes </dt>' +
        '<dd>' +   Receitas[item].ingredientes + '</dd>' +
        '<dt> Preparo </dt>' +
        '<dd>' + Receitas[item].preparo + '</dd>' +
        '</dl>' + 
        '</details>' + 
        '</div>'
    }
}

carregaDicionario()
