'use client';
import CharacterCard from "@/src/components/character-card";
import CharactersPage from "@/src/components/charactersPage";
import Character from "@/src/types/character";
import { useState, useEffect } from "react";

export default function Explorar() {
    const [text, setText] = useState<string>(""); // armazena a string digitada no input
    const [search, setSearch] = useState<string>(""); // armazena a string digitada no input quando o botão de busca é clicado

    const [characters, setCharacters] = useState<Character[]>([]); // armazena os personagens retornados pela API
    const [loading, setLoading] = useState(false); // indica se a requisição está em andamento
    const [erro, setErro] = useState(false); // indica se houve algum erro na requisição

    // atualiza a variável search com o valor digitado no input quando o botão de busca é clicado
    function buscar() {
        setSearch(text);
    }

    function limparBusca() {
        setSearch(""); // limpa a variável search
        setText(""); // limpa a variável text
        setCharacters([]); // limpa a variável characters
        setErro(false);
    }

    useEffect(() => {
        if (search === "") {  
            return; // se a variável search estiver vazia, não faz nada
        }

        // se search não estiver vazia, faz a requisição para a API e atualiza a variável characters com os personagens retornados
        async function searchCharacters() {

            setLoading(true);
            setErro(false);

            try {
                // faz a requisição de personagens com o nome digitado no input
                const resposta = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);

                if (!resposta.ok) {
                    throw new Error("Erro ao buscar personagens");
                }
                const dados = await resposta.json();
                setCharacters(dados.results);
            }
            catch (error) {
                setErro(true);
            }
            finally {
                setLoading(false);
            }
        }

        searchCharacters();

    }, [search]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Conheça os Personagens</h1>
            <div className="flex items-center gap-4 mt-4">
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Buscar personagem"
                    className="
                        w-72
                        px-4 py-2
                        rounded-lg
                        border border-gray-300
                        bg-white
                        text-gray-800
                        placeholder-gray-400
                        shadow-sm
                        outline-none
                        focus:border-green-500
                        focus:ring-2
                        focus:ring-green-200
                        transition
                    "
                />

                <button onClick={buscar} 
                    className="
                        px-4 py-2
                        rounded-lg
                        bg-green-500
                        text-white
                        font-medium
                        hover:bg-green-600
                        disabled:bg-gray-300
                        disabled:text-gray-500
                        disabled:cursor-not-allowed
                        transition
                    "
                >
                    Buscar
                </button>

                <button onClick={limparBusca} 
                    className="
                        px-4 py-2
                        rounded-lg
                        bg-gray-500
                        text-white
                        font-medium
                        hover:bg-gray-600
                        disabled:bg-gray-300
                        disabled:text-gray-500
                        disabled:cursor-not-allowed
                        transition
                    "
                >
                    Limpar Busca
                </button>
            </div>
            
            {search === "" ? (
                <CharactersPage />
            ) : loading ? (
                <p className="mt-8 text-lg font-semibold text-gray-500">
                    Carregando personagens...
                </p>
            ) : erro ? (
                <p className="mt-8 text-lg font-semibold text-red-500">
                    Erro ao buscar personagens
                </p>
            ) : characters.length === 0 ? (
                <p className="mt-8 text-lg font-semibold text-gray-500">
                    Nenhum personagem encontrado
                </p>
            ) : (
                
                <div>
                    <p className="mt-8 text-lg font-semibold text-green-500 text-center">
                        Personagens encontrados
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {characters.map((c) => (
                            <CharacterCard key={c.id} character={c} />
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
