


export default function Stories() {

let elementosStory ='';
    function story() {
        const story = [{ img: "./assets/img/9gag.svg", nome: '9gag' },
        { img: "./assets/img/meowed.svg", nome: 'usmeoweduario' },
        { img: "./assets/img/barked.svg", nome: 'barked' },
        { img: "./assets/img/nathanwpylestrangeplanet.svg", nome: 'nathanwpylestrangeplanet' },
        { img: "./assets/img/wawawicomics.svg", nome: 'wawawicomics' },
        { img: "./assets/img/respondeai.svg", nome: 'respondeai' },
        { img: "./assets/img/filomoderna.svg", nome: 'filomoderna' },
        { img: "./assets/img/memeriagourmet.svg", nome: 'memeriagourmet' }];

        elementosStory = story.map(story =>
        (<div class="story">
            <div class="imagem">
                <img src={story.img} alt="9gag" />
            </div>
            <div class="usuario">
                {story.nome}
            </div>
        </div>))
        
    }
    story();
    return (
        <>
            <div class="stories">
                {elementosStory}
                <div class="setinha">
             <ion-icon name="chevron-forward-circle"></ion-icon>
         </div>
            </div>
             
         </>)
            
}
