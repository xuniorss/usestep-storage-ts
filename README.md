# usestep-storage-ts

Este é um hook personalizado feito com TypeScript para aplicações ReactJS e NextJS que permite salvar o passo ou (step) atual de um formulário mesmo quando o navegador é fechado ou recarregado.

## Instalação

Você pode instalar este pacote com o seguinte comando:

```bash
npm install usestep-storage-ts
```

ou

```bash
yarn add usestep-storage-ts
```

## Uso

Você pode usar este hook da seguinte maneira:

```javascript
import useStep from 'usestep-storage-ts'

export default function MyComponent() {
   const [step, setStep] = useStep('key', 0)

   return (
      // restante do projeto
   )

}
```

O primeiro argumento é a chave (string) que será usada para salvar o passo ou (step) no localStorage do navegador. O segundo argumento é o valor padrão caso não haja nenhum valor salvo anteriormente.

## Contribuição

Se você deseja contribuir para este pacote, por favor, abra uma issue ou envie uma pull request. Todas as contribuições são bem-vindas!

Certifique-se de atualizar os testes conforme apropriado.

## Licença

Este pacote está sob a licença MIT. Veja o arquivo [MIT](https://choosealicense.com/licenses/mit/) para mais informações.
