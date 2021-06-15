import { RepositoryItem } from './RepositoryItem';

const repository = {
    nome: 'Repositório Denys',
    description: 'Repositório com vários códigos',
    link: 'http://Google.com'

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