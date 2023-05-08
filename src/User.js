import React, { useState } from 'react';

export default function User() {


    let [nome, setNome] = useState('catanacomics');
    let [imagem, setImagem] = useState("./assets/img/catanacomics.svg");

    function trocarImagem() {
        let fotoAtualizada = prompt("qual o link da imagem desejada?");
        if (fotoAtualizada) {
            setImagem(fotoAtualizada);
        }
    }


function trocarNome() {
    let nomeAtualizado = prompt('Qual é o seu nome?');
    if (nomeAtualizado) {
        setNome(nomeAtualizado);
    }
}


return (
    <div class="usuario">
        <img src={imagem} alt="imagem de perfil" onClick={trocarImagem} data-test="profile-image"/>
        <div class="texto">
            <span>
                <strong> data-test="name" {nome}</strong>
                <ion-icon name="pencil" onClick={trocarNome} data-test="edit-name" ></ion-icon>
            </span>
        </div>
    </div>
);
}