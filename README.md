## Perguntas Obrigatorias

1. Em sua implementação, como você usou o useState e o useEffect? Cite os estados criados e o que cada um guarda.

2. O que aconteceria se o fetch fosse colocado direto no corpo do componente, fora do useEffect?

3. O filtro é aplicado apenas aos itens já carregados ou a todos os itens disponíveis na API? Por que essa escolha?

4. Como o arquivo app/explorar/page.tsx se tornou o endereço /explorar da aplicação?

5. Como o arquivo app/explorar/page.tsx se tornou o endereço /explorar da aplicação?
O arquivo se tornou o endereço /explorar devido ao App Router do Next js. A estrutura da pasta app interpreta a page.tsx presente em sua raíz como a home e cada nova pasta (e subpasta) como uma nova rota.

6. O que o layout.tsx faz e por que ele recebe um children?
Ele serve como uma estrutura padrão que será aplicada nas demais páginas (children), assim os componentes que serão presentes em todas as páginas podem ser chamados apenas no layout.tsx