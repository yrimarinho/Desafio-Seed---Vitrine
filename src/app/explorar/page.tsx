import CharactersPage from "@/src/components/charactersPage";

export default function Explorar() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Explorar</h1>
            <p className="text-2xl font-bold">barra de busca e exibição de personagens</p>
            <CharactersPage />
        </main>
    );
}
