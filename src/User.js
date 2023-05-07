import React, { useState } from 'react';

export default function User() {


    const [nome, setNome] = useState('catanacomics');
    const [imagem, setImgem] = useState("./assets/img/catanacomics.svg");

    function trocarImagem() {
        const fotoAtualizada = prompt("qual o link da imagem desejada?");
        if (fotoAtualizada) {
            setImgem(fotoAtualizada);
        }
    }


function trocarNome() {
    const nomeAtualizado = prompt('Qual é o seu nome?');
    if (nomeAtualizado) {
        setNome(nomeAtualizado);
    }
}


return (
    <div class="usuario">
        <img src={imagem} alt="imagem de perfil" onClick={trocarImagem} />
        <div class="texto">
            <span>
                <strong>{nome}</strong>
                <ion-icon name="pencil" onClick={trocarNome}></ion-icon>
            </span>
        </div>
    </div>
);
}