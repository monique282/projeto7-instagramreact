
import Post from "./Post";

export default function Posts() {
    const post = [
        { imgUsuario: "./assets/img/meowed.svg", altu: 'meowed', nomeu: 'meowed', imgPost: "./assets/img/gato-telefone.svg", altp: 'gato-telefone', imgCurtida: "./assets/img/respondeai.svg", altc: 'respondeAi', numeroCurtidas: 1982 },
        { imgUsuario: "./assets/img/barked.svg", altu: 'barked', nomeu: ' barked', imgPost: "./assets/img/dog.svg", altp: 'dog', imgCurtida: "./assets/img/adorable_animals.svg", altc: 'adorable_animals',numeroCurtidas: 1863 },
        { imgUsuario: "./assets/img/meowed.svg", altu: 'meowed', nomeu: 'meowed', imgPost: "./assets/img/gato-telefone.svg", altp: 'gato-telefone', imgCurtida: "./assets/img/respondeai.svg", altc: 'respondeAi', numeroCurtidas: 8951 }
    ];

    return (
        <div class="posts">
            {post.map((post)=> {
return(<Post post = {post} />);
            })}

        </div>
    );

}
