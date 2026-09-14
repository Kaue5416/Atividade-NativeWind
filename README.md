# Projeto React Native com NativeWind

Este projeto foi desenvolvido utilizando React Native, Expo, TypeScript e NativeWind.

O objetivo do projeto é praticar a criação de componentes, utilização de Flexbox, estilização com NativeWind e interação com o usuário.

## Tecnologias utilizadas

* React Native
* Expo
* TypeScript
* NativeWind

## Como executar o projeto

Primeiro, abra o terminal dentro da pasta do projeto.

### 1. Instalar as dependências

Execute:

```bash
npm install
```

Esse comando instala as dependências necessárias para o projeto funcionar.

### 2. Iniciar o projeto

Depois de instalar as dependências, execute:

```bash
npx expo start
```

Depois disso, o Expo iniciará o projeto.

### 3. Executar no Android

Com o emulador Android aberto, execute:

```bash
npm run android
```

O aplicativo será aberto no emulador.

---

# Componentes desenvolvidos

## 1. Ícone com texto

Neste componente foi utilizado o Flexbox para colocar um ícone ao lado de um texto.

Também foi utilizado o `items-center` para deixar os elementos alinhados verticalmente.

### Print

![Ícone com texto](./prints/questao1.png)

---

## 2. Linha de ações

Neste componente foi utilizado o `flex-row` para colocar os elementos na mesma linha.

O `justify-between` foi utilizado para deixar o ícone de um lado e o texto "Ver mais" do outro.

### Print

![Linha de ações](./prints/questao2.png)

---

## 3. Lista de chips

Neste componente são mostrados vários interesses em formato de chips.

Foi utilizado `flex-wrap` para permitir que os chips ocupem mais de uma linha.

Também é possível clicar nos chips e selecionar mais de um interesse.

### Print

![Lista de chips](./prints/questao3.png)

---

## 4. Grade de publicações

As publicações são mostradas em uma grade com três colunas.

As imagens podem ser clicadas. Quando uma imagem é selecionada, ela aparece em tamanho maior.

### Print da grade

![Grade de publicações](./prints/questao4.png)

### Print da publicação ampliada

![Publicação ampliada](./prints/publicacao.png)

---

## 5. Botão de seguir

O botão utiliza `useState` para controlar seu estado.

Quando o usuário não está seguindo, aparece "Seguir".

Depois de clicar, o botão muda para "Seguindo".

### Print

![Botão de seguir](./prints/questao5.png)

---

# Desafio final

Foi criada uma tela de perfil utilizando os componentes desenvolvidos anteriormente.

A tela possui:

* Foto de perfil
* Nome do usuário
* Nome de usuário
* Número de publicações
* Número de seguidores
* Número de pessoas seguindo
* Lista de interesses
* Grade de publicações
* Botão de seguir

### Print da tela

![Perfil](./prints/perfil.png)

---

# Conceitos utilizados

Durante o desenvolvimento foram utilizados:

* Componentes
* Props
* `useState`
* `Pressable`
* `Image`
* `ScrollView`
* `Modal`
* Flexbox
* `flex-row`
* `flex-wrap`
* `justify-between`
* `items-center`
* `gap`
* NativeWind
* Estilização condicional

---

# Autor

Kauê Marinho

Projeto desenvolvido para fins acadêmicos.
