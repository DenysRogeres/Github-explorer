import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

const repository = {
    nome: 'Repositório Denys',
    description: 'Repositório com vários códigos',
    link: 'https://github.com/unform/unform'

}
export function RepositoryList () {
    return (
        <section className="repository-list">
        <h1>Lista de repositórios</h1>
         <ul>
            <RepositoryItem repository={repository}/>
         </ul>
        </section>

    );
}