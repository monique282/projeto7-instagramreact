export default function Posts() {

    let elementosPost = '';

    function salvarPost(resposta) {
        alert('passou aqui');
        console.log(resposta);
        const salvarIcone = document.querySelector('.salvarIcone');
        if (salvarIcone.classList.contains('blue')) {
            salvarIcone.classList.remove('blue');
        } else {
            salvarIcone.classList.add('blue');
        }
    }

    function posts() {

        const post = [
            { imgUsuario: "./assets/img/meowed.svg", altu: 'meowed', nomeu: 'meowed', imgPost: "./assets/img/gato-telefone.svg", altp: 'gato-telefone', imgCurtida: "./assets/img/respondeai.svg", altc: 'respondeAi' },
            { imgUsuario: "./assets/img/barked.svg", altu: 'barked', nomeu: ' barked', imgPost: "./assets/img/dog.svg", altp: 'dog', imgCurtida: "./assets/img/adorable_animals.svg", altc: 'adorable_animals' }
        ];

        elementosPost = post.map(post =>
        (<div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={post.imgUsuario} alt={post.altu} />
                    {post.nomeu}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={post.imgPost} alt={post.altp} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon class="salvarIcone" name="bookmark-outline" onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={post.imgCurtida} alt={post.altc} />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>))

    }
    posts();


    return (
        <div class="posts">
            {elementosPost}
        </div>
    );

}
