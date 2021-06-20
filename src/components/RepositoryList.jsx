import { RepositoryItem } from './RepositoryItem';
import { useEffect, useState } from 'react';

import '../styles/repositories.scss';

const repository = {
    name: 'Denys',
    description: 'Forms in React',
    link: 'https://api.github.com/orgs/rocketseat/repos'
}

export function RepositoryList () {
    const [repositories, setRespositories] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(response => response.json())
        .then(data => setRespositories(data))
    }, []);

    return (
        <section className="repository-list">
        <h1>Lista de repositórios</h1>
         <ul>
            <RepositoryItem repository={repository}/>
         </ul>
        </section>

    );
}