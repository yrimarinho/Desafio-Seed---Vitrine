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
    <main className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
        
        <section className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-500">
                Cidadela Hub
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
                Conheça os Personagens
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
                Explore os personagens de Rick & Morty e encontre seus
                favoritos através da busca.
            </p>
        </section>

        <section className="mx-auto mt-8 w-full max-w-3xl">
            <div className="
                rounded-2xl
                bg-white
                p-4
                shadow-md
                sm:p-5
            ">
                <div className="
                    flex
                    flex-col
                    items-stretch
                    gap-3
                    sm:flex-row
                    sm:items-center
                ">

                    <input
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Buscar personagem..."
                        className="
                            w-full
                            flex-1
                            rounded-xl
                            border
                            border-gray-300
                            bg-gray-50
                            px-4
                            py-3
                            text-gray-800
                            placeholder-gray-400
                            outline-none
                            transition
                            focus:border-green-500
                            focus:bg-white
                            focus:ring-2
                            focus:ring-green-200
                        "
                    />

                    <div className="flex gap-3">
                        <button
                            onClick={buscar}
                            className="
                                flex-1
                                cursor-pointer
                                rounded-xl
                                bg-green-500
                                px-5
                                py-3
                                font-semibold
                                text-white
                                shadow-sm
                                transition-all
                                duration-200
                                hover:bg-green-600
                                hover:shadow-md
                                sm:flex-none
                            "
                        >
                            Buscar
                        </button>

                        <button
                            onClick={limparBusca}
                            className="
                                flex-1
                                cursor-pointer
                                rounded-xl
                                bg-gray-500
                                px-5
                                py-3
                                font-semibold
                                text-white
                                shadow-sm
                                transition-all
                                duration-200
                                hover:bg-gray-600
                                hover:shadow-md
                                sm:flex-none
                            "
                        >
                            Limpar
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-7xl">

            {search === "" ? (
                <CharactersPage />

            ) : loading ? (

                <div className="flex justify-center py-16">
                    <p className="
                        text-lg
                        font-semibold
                        text-gray-500
                    ">
                        Carregando personagens...
                    </p>
                </div>

            ) : erro ? (

                <div className="flex justify-center py-16">
                    <p className="
                        rounded-xl
                        bg-red-50
                        px-6
                        py-4
                        text-lg
                        font-semibold
                        text-red-500
                    ">
                        Erro ao buscar personagens.
                    </p>
                </div>

            ) : characters.length === 0 ? (

                <div className="flex justify-center py-16">
                    <p className="
                        rounded-xl
                        bg-white
                        px-6
                        py-4
                        text-lg
                        font-semibold
                        text-gray-500
                        shadow-sm
                    ">
                        Nenhum personagem encontrado.
                    </p>
                </div>

            ) : (

                <div>
                    <p className="mb-6 text-center text-lg font-bold text-green-500">
                            Personagens encontrados.
                    </p>

                    <div className="
                        grid
                        grid-cols-1
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    ">
                        {characters.map((c) => (
                            <CharacterCard
                                key={c.id}
                                character={c}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    </main>
);
}
