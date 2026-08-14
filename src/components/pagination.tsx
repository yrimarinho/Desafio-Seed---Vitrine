import PaginationProps from "../types/pagination";

export default function Pagination({paginaAtual, totalPaginas, onAnterior, onProxima,}: PaginationProps) {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-4 bg-white shadow-md rounded-xl px-6 py-4">

        <button
          onClick={onAnterior}
          disabled={paginaAtual === 1}
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
          Anterior
        </button>

        <span className="font-semibold text-gray-700 min-w-30 text-center">
          Página {paginaAtual} de {totalPaginas}
        </span>

        <button
          onClick={onProxima}
          disabled={paginaAtual === totalPaginas}
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
          Próxima
        </button>

      </div>
    </div>
  );
}