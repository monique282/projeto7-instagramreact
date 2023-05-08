import React, { useState } from "react";

export default function Post() {


   
    let [postSalvar, setPostAtualizado] = useState('');
    let [curtida, setCurtir] = useState('branco');

    function salvarPost() {
        
        if (postSalvar === '') {
            setPostAtualizado('pretoSalvar');
        } else {
            setPostAtualizado('');
        }
    }

    function curt() {
        if (curtida === 'branco') {
            setCurtir('vermelho');
        } else {
            setCurtir('branco');
        }
    }

    function curtirPost() {
        if (curtida === 'preto') {
            setCurtir('vermelho');

        }
    }

    const post = [
        { imgUsuario: "./assets/img/meowed.svg", altu: 'meowed', nomeu: 'meowed', imgPost: "./assets/img/gato-telefone.svg", altp: 'gato-telefone', imgCurtida: "./assets/img/respondeai.svg", altc: 'respondeAi' },
        { imgUsuario: "./assets/img/barked.svg", altu: 'barked', nomeu: ' barked', imgPost: "./assets/img/dog.svg", altp: 'dog', imgCurtida: "./assets/img/adorable_animals.svg", altc: 'adorable_animals' },
        { imgUsuario: "./assets/img/meowed.svg", altu: 'meowed', nomeu: 'meowed', imgPost: "./assets/img/gato-telefone.svg", altp: 'gato-telefone', imgCurtida: "./assets/img/respondeai.svg", altc: 'respondeAi' }
    ];

    return (
         post.map(post =>
    (<div class="post" data-test="post">
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
            <img src={post.imgPost} alt={post.altp} onClick={curtirPost} data-test="post-image"/>
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon onClick={curt} class={curtida} name="heart-outline" data-test="like-post"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon onClick={salvarPost} class={postSalvar} name="bookmark-outline" data-test="save-post" ></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={post.imgCurtida} alt={post.altc} />
                <div class="texto">
                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
            </div>
        </div>
    </div>)))

}

