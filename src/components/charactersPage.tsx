'use client';
import {useEffect, useState} from "react";
import Character from "../types/character";
import CharacterCard from "./character-card";
import Pagination from "./pagination";

function prev(page: number) {
    return Math.max(page - 1, 1);
}

function next(page: number, total: number) {
    return Math.min(page + 1, total);
}

export default function CharactersPage() {
    
    // variavel que armazena um conjunto de personagens, que é um array de objetos do tipo Character
    const [characters, setCharacters] = useState<Character []>([]);
    const [page, setPage] = useState(1); // variavel que armazena a pagina atual, que é um numero inteiro

    useEffect(() => {
        async function fetchCharacters() {
            const resposta = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`); // faz a requisição de todos os personagens
            const dados = await resposta.json(); // converte a resposta em JSON
            setCharacters(dados.results);
            console.log(dados.results); // exibe os personagens no console 
        }

        fetchCharacters();
    }, [page]);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {characters.map((atual) => (
                    <CharacterCard key={atual.id} character={atual} />
                ))}
            </div>
            <div>
                <Pagination
                    paginaAtual={page}
                    totalPaginas={42} // total de páginas da API
                    onAnterior={() => setPage(prev(page))} // decrementa a página atual, mas não permite que seja menor que 1
                    onProxima={() => setPage(next(page, 42))} // incrementa a página atual, mas não permite que seja maior que 42
                />
            </div>
        </div>
    );
}