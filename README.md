# Projeto Hospital Mekura

O projeto é relativamente simples, foi criado principalmente para o exercício dos aprendizados utilizando React. Os tópicos e pacotes trabalhados foram:

## React-Bootstrap

No projeto foi utilizado o pacote **React-Bootstrap** para estilizacação dos componentes. É interessante destacar o uso de:
- **Carousel** na página inicial;
- **Cards** na página inicial:
  - Os cards foram "componentizados". Nesse sentido, parâmetros são passados do arquivo Home.js para um componente Cartao.js, lá é criado um cartão de acordo com as propriedades.
- **Navbar e Footer** ambos responsivos baseados na ideia de "mobile first";
- Além disso, as classes CSS do Bootstrap também foram utilizadas para alterar elementos visuais da página **(texto, botões, formulários, etc)**.

## React-Icons

O projeto fez uso do pacote **React-Icons** para a utilização de ícones em diversas seções da página.

## React-Router

O pacote **React-Router** foi utilizado para fazer o roteamento entre as páginas e direcionar a aplicação para o modelo SPA - Single Page Applications. É destacável a organização dos arquivos nas pastas, a fim de que tudo mantenha-se num padrão compreensível. Com o pacote React-Router, foi possível a criação de:
- Aplicação *SPA - Single Page Application*;
- "Reutilização" do componente **Especialidades.js** de acordo com o endereço. O componente em questão é um só e é passado o parâmetro contendo o nome da especialidade, dentro de Especialidades.js há um switch que altera a renderização de acordo com o acessado (**Renderização Condicional**).

## React-Hook-Forms

O pacote **React-Hook-Forms** foi utilizado na página "agendar-exame" para validação dos dados antes do envio, também será utilizado na "acompanhar-exame". Foi utilizado principalmente em conjunto com React-Bootstrap e suas estilizações de formulário.

## Ainda não implementado:

Ainda não foram implementados, mas há o desejo de utilizar o pacote React-Axios, para interação com o backend da aplicação. A linguagem escolhida para o backend foi o **PHP** em conjunto com o banco **MySQL**. A principal motivação para isso foi buscar entender como funciona a integração do React com linguagens diferentes de JavaScript.

##

*Todas as imagens foram encontradas no Google, as informações no projeto são fictícias.*
