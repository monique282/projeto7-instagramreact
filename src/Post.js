import React, { useState } from "react";

export default function Post(props) {

    

    let [iconeSalvar, setIconeSalvar]= useState('bookmark-outline')
    let [curtida, setCurtir] = useState('preto');
    let [coracao, setcoracao] = useState('heart-outline');
    let [NCurtidas, setNCurtidas]= useState(props.post.numeroCurtidas);
    



    function salvarPost() {
        
        if (iconeSalvar === 'bookmark-outline') {
            setIconeSalvar('bookmark');
        } else {
            setIconeSalvar('bookmark-outline');
        }
    }

    function curt() {
        if (curtida === 'preto') {
            setcoracao("heart");
            setCurtir('vermelho');
            setNCurtidas(NCurtidas+1);
            
        } else {
            setCurtir('preto');
            setcoracao('heart-outline');
            setNCurtidas(NCurtidas-1);
        }
    }

    function curtirPost() {
        if (curtida === 'preto') {
            setCurtir('vermelho');
            setcoracao("heart");
            setNCurtidas(NCurtidas+1);
        }
    }



    

    return (
    (<div class="post" data-test="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.post.imgUsuario} alt={props.post.altu} />
                {props.post.nomeu}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        <div class="conteudo">
            <img src={props.post.imgPost} alt={props.post.altp} onDoubleClick={curtirPost} data-test="post-image"/>
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                   <spam onClick={curt} class={curtida} data-test="like-post" > <ion-icon name={coracao} ></ion-icon></spam> 
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon onClick={salvarPost} name={iconeSalvar} data-test="save-post" ></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.post.imgCurtida} alt={props.post.altc} />
                <div class="texto">
                    Curtido por <strong>adorable_animals</strong> e <strong>outras <span data-test="likes-number">{NCurtidas.toLocaleString('pt-br')}</span> pessoas</strong>
                </div>
            </div>
        </div>
    </div>))

}

