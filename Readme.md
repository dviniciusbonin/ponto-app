# Ponto APP


<center><img src="https://raw.githubusercontent.com/dviniciusbonin/ponto-app/5de76e29066098c920b170b7aa50811b75625a37/assets/logo.svg" height="42"></center>

<br>
Aplicativo para controle de entrada e saída do horário trabalho, podendo registrar:
Entrada, saída para intervalo, retorno e saída.



## Funcionalidades

- Cadastro de usuário
- Login / Logout
- Registro de Ponto
- Histórico de dias trabalhados


## Layout

https://www.figma.com/file/bhqRaHogY31tTUbduMrlh8/Ponto-App?node-id=11%3A57


## Backlog
    a. Sem correções reportadas na AA1, desde então apenas foram implementadas melhorias como: refatoração de nome de alguns componentes e adição de 
    estilo para campos de senha que estavam visiveis como texto.

    b. Para o aplicativo foi implementado uma REST API em node.js como backend e foi usado a estratégia de armazenamento do token no AsyncStorage
        Os recursos que estão sendo utilizados são:

        points - GET E POST 
        users - POST

Exemplo de model - points
```javascript
    {
	"id": "9d5f1851-f154-4284-bf51-c0293e52c35f",
	"type": "ENTRY",
	"created_at": "2022-06-01T22:28:49.953Z",
	"updated_at": "2022-06-01T22:28:49.953Z",
	"user_id": "0fadbdb6-2575-4969-9a28-f3065e692d22",
	"user": {
		"id": "0fadbdb6-2575-4969-9a28-f3065e692d22",
		"fullname": "Douglas Vinicius Caldas Bonin",
		"email": "douglasvinicius@alunos.utfpr.edu.br",
		"admin": false,
		"created_at": "2022-06-01T22:28:28.950Z",
		"updated_at": "2022-06-01T22:28:28.950Z",
		"deleted_at": "2022-06-01T22:28:28.950Z",
		"company_id": "b8386e43-bb22-4b2b-abf0-a2fc53f4b3ee"
	}
}
```
    c. Foi utilizado alerts para feedback do retorno das requisições. Em LoginForm, HomePage e RegistrationPage.


## REST API

https://ponto-app-api-production.up.railway.app

## Recurso inédito
- O conteúdo da disciplina está muito bom nesse formato de live code.
- Acredito que teria sido interessante ter explorado o uso de animações e acesso a biometria.

## Cronograma


| Descrição   | Prazo       |
| :---------- | :--------- | 
| Terminar layout | 12/05 
| Integração com backend | 08/06
| Concluir projeto | 15/06 


## Instalação

Antes de executar o projeto crie um arquivo .env e adicione a variavel BASE_URL_API=
com o endereço da api

```env
 BASE_URL_API=https://example.com
```

<img src="https://github.com/dviniciusbonin/ponto-app/blob/main/assets/picture1.png?raw=true" height="660">

<img src="https://github.com/dviniciusbonin/ponto-app/blob/main/assets/picture2.png?raw=true" height="660">
    
