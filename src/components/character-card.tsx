import Character from "../types/character";

// função recebe um objeto do tipo Character que respeita a interface Character
export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={character.image} alt={character.name} className="w-full h-auto rounded-md" />
      <h2 className="text-xl font-bold mt-2">{character.name}</h2>
      <p className="text-gray-600">Status: {character.status}</p>
      <p className="text-gray-600">Species: {character.species}</p>
    </div>
  );
};