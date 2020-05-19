# Conteúdo da Aula

### MVC
>Significa Model View Controler.
É uma estrutura de codificação onde cada uma das 3 pastas vai guardar um tipo de informação.

- Model 
    >meus dados (Consulta no banco, validação e etc)

- View
    >parte visual e interativa do usuário

- Controler
    >regra de negócio (Ex: como deve ser a senha e onde ser encontrada)

### POO

- ENCAPSULAMENTO
    >São regras que devem ser seguidas. EX: antes de mudar algo no metodo "X", faça isso e execute isso.

    - public
        >Publico
    - private
        >So fala com seus pares (só Atributos da mesma classe, menos no JS)
    - protected
        >Sem acesso
    exemplo de getters e setters para alteração e chamada de um atributo com
    o emcapsulamento
    
        ```js
        get displayCalc() {
            return this._displayCalc;
        }
        set displayCalc(valor) {
            this._displayCalc = valor;
        }
        
        get dataAtual(){
            return this._dataAtual;
        }
        set dataAtual(valor){
            this._dataAtual = valor;
        }
        ```

### Query selector
>É uma forma de se utilizar dos objetos do DOM. query selector é uma alternativa de uso do antigo "document.getElementById()" que recuperava um elemento do DOM pelo ID. O query selector utiliza os seletores do CSS. (# pra ID, . para classes)

```js
    function initialize () {
     let displayCalcEl = document.querySelector("#display");
     let dateEl = document.querySelector("#data");
     let timeEl = document.querySelector("#hora");
    }        
```
>selecionei 3 elementos do DOM pelo ID deles. Seria o mesmo fazer

```js
    document.getElementById("display");
    document.getElementById("data");
    document.getElementById("hora");
```