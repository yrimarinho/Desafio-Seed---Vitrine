import Character from "../types/character";

// função recebe um objeto do tipo Character que respeita a interface Character
export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col">
      <img src={character.image} alt={character.name} className="w-full h-auto rounded-md" />
      <h2 className="text-green-500 font-bold mt-2">{character.name}</h2>
      <p className="text-gray-600"> <strong>Status:</strong> {character.status}</p>
      <p className="text-gray-600"> <strong>Species:</strong> {character.species}</p>
      <p className="text-gray-600"> <strong>Gender:</strong> {character.gender}</p>
      <p className="text-gray-600 line-clamp-2"> <strong>Location:</strong> {character.location.name}</p>
    </div>
  );
};