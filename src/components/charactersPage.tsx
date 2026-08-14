'use client';
import {useEffect, useState} from "react";
import Character from "../types/character";
import CharacterCard from "./character-card";

export default function CharactersPage() {
    
    // variavel que armazena um conjunto de personagens, que é um array de objetos do tipo Character
    const [characters, setCharacters] = useState<Character []>([]);

    useEffect(() => {
        async function fetchCharacters() {
            const resposta = await fetch(`https://rickandmortyapi.com/api/character`); // faz a requisição de todos os personagens
            const dados = await resposta.json(); // converte a resposta em JSON
            setCharacters(dados.results); 
        }

        fetchCharacters();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {characters.map((atual) => (
                <CharacterCard key={atual.id} character={atual} />
            ))}
        </div>
    );
}