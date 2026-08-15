## Perguntas Obrigatorias

1. **Em sua implementação, como você usou o useState e o useEffect? Cite os estados criados e o que cada um guarda.**
    CharactersPage é o componente responsável pela vitrine de personagens:
    - State *character*: guarda um conjunto de personagens (objetos que respeitam a interface Character) após uma requisição
    - State *page*: guarda a página atual
    - Effect: inicialmente faz requisições da página 1 da API (20 primeiros personagens, visto que as requisições são paginadas) e armazena os resultados no state *characters*, mas para cada vez que o state *page* é alterado uma nova requisição é feita com base no dado armazenado em *page* e seus dados são armazenados denovo em *characters*.

    explorar/page é a página da vitrine de personagens:
    - State *character*: guarda um conjunto de personagens (objetos que respeitam a interface Character) após uma requisição
    - State *loading*: armazena um boolean que indica se a requisição ainda está em andamento
    - State *erro*: armazena um boolean que indica se houve um erro durante a requisição
    - State *text*: armazena a string digitada no input de busca
    - State *search*: quando o botão de busca é clicado, a string presente em *text* é passada para *search*. É necessário pois a requisição só deve ser feita ao clicar no  botão de busca, assim o state só é atualizado quando uma nova requisição será feita
    - Effect: inicialmente, como o state *search* inicia vazio, nada acontece, mas quando *search* recebe um novo valor, uma nova requisição é feita com um filtro por nome e seus dados são armazenados em *characters*. Caso a requisição falhe ou ainda esteja carregando os states *erro* ou *loading* serão atualizados

2. **O que aconteceria se o fetch fosse colocado direto no corpo do componente, fora do useEffect?**
    Nesse caso o fetch seria executado toda vez que o componente fosse renderizado. A vantagem de colocar o fetch dentro do useEffect é que ele só será executado quando o state (passado como um parâmetro para o useEffect) for atualizado, evitando requisições desnecessárias. 

3. **O filtro é aplicado apenas aos itens já carregados ou a todos os itens disponíveis na API? Por que essa escolha?**
    O filtro de busca é aplicado em todos os itens disponíveis na API. Como as requisições fetch na API escolhida (*Rick and Morty API*) são paginadas e somente 20 personagens são carregados por vez, é necessário usar um filtro e realizar uma nova requisição. No contrario, caso o filtro fosse aplicado somente nos personagens carregados (que estão presentes no state character) e o personagem buscado não estivesse entre eles, este não seria encontrado.

4. **Quais métodos HTTP foram utilizados e por que o projeto utiliza principalmente o método GET?**
    Somente o GET foi utilizado, pois a aplicação apenas consome a API de personagens e exibe suas informações, sem adicionar novos dados (Post) ou alterar eles (Put ou Delete).

5. **Como o arquivo app/explorar/page.tsx se tornou o endereço /explorar da aplicação?**
    O arquivo se tornou o endereço */explorar* devido ao App Router do Next js. A estrutura da pasta app interpreta a *page.tsx* presente em sua raíz como a home da aplicação e cada nova pasta é interpretada como uma nova rota e assim sucessivamente para cada nova subpasta.

6. **O que o layout.tsx faz e por que ele recebe um children?**
    Ele serve como uma estrutura padrão, composta por componentes próprios e o *{childreen}*, que será usada em todas as páginas da aplicação, no caso dessa, estão presemtes a navBar e o Footer.