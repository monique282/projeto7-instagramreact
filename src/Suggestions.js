
export default function Suggestions() {

    let elementosSuggestion = '';

    function suggestion() {
        const sugg = [{ imagemu: "./assets/img/bad.vibes.memes.svg", altu: "bad.vibes.memes.svg", nomeu: 'bad.vibes.memes' },
        { imagemu: "./assets/img/chibirdart.svg", altu: "chibirdart", nomeu: 'chibirdart' },
        { imagemu: "./assets/img/razoesparaacreditar.svg", altu: "razoesparaacreditar", nomeu: 'razoesparaacreditar' },
        { imagemu: "./assets/img/adorable_animals.svg", altu: "adorable_animals", nomeu: 'adorable_animals' },
        { imagemu: "./assets/img/smallcutecats.svg", altu: "smallcutecats", nomeu: 'smallcutecats' }
        ]

        elementosSuggestion = sugg.map(sugg =>
        (
            <div class="sugestao">
                <div class="usuario">
                    <img src={sugg.imagemu} alt={sugg.altu} />
                    <div class="texto">
                        <div class="nome">{sugg.nomeu}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>))

    }
    suggestion();


    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {elementosSuggestion}
        </div>
    );

}