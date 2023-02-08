usestep-storage-ts
Este é um hook personalizado feito com TypeScript para aplicações ReactJS e NextJS que permite salvar o passo atual de um formulário mesmo quando o navegador é fechado ou recarregado.

Instalação
Você pode instalar este pacote com o seguinte comando:

npm install usestep-storage-ts

ou

yarn add usestep-storage-ts

Uso
Você pode usar este hook da seguinte maneira:

import useStep from 'usestep-storage-ts'

const [step, setStep] = useStep('key', 0)

O primeiro argumento é a chave que será usada para salvar o passo no localStorage do navegador. O segundo argumento é o valor padrão caso não haja nenhum valor salvo anteriormente.

Contribuição
Se você deseja contribuir para este pacote, por favor, abra uma issue ou envie uma pull request. Todas as contribuições são bem-vindas!

Licença
Este pacote está sob a licença MIT. Veja o arquivo LICENSE para mais informações.
