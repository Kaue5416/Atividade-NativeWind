import "./global.css";

import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Modal,
} from "react-native";


// =====================================================
// QUESTÃO 1 - Ícone com Texto
// =====================================================

function IconeComTexto() {
  return (
    <View className="flex-row items-center gap-2">
      
      {/* Ícone 24x24 */}
      <View className="w-6 h-6 bg-blue-500 rounded-md" />

      <Text className="text-base">
        Texto ao lado do ícone
      </Text>

    </View>
  );
}


// =====================================================
// QUESTÃO 2 - Linha de Ações
// =====================================================

function LinhaDeAcoes() {
  return (
    <View className="flex-row justify-between items-center">

      {/* Ícone */}
      <Pressable
        onPress={() => alert("Ação realizada: Ícone")}
        className="p-1"
      >
        <View className="w-6 h-6 bg-purple-500 rounded-md" />
      </Pressable>

      {/* Botão Ver mais */}
      <Pressable
        onPress={() => alert("Ação realizada: Ver mais")}
        className="p-2"
      >
        <Text className="text-blue-500 font-bold">
          Ver mais
        </Text>
      </Pressable>

    </View>
  );
}


// =====================================================
// QUESTÃO 3 - Lista de Chips
// =====================================================

function ListaDeChips({
  itens,
}: {
  itens: string[];
}) {
  // Guarda os interesses selecionados
  const [selecionados, setSelecionados] = useState<string[]>([]);

  // Função para selecionar ou desmarcar um chip
  function selecionarChip(item: string) {
    if (selecionados.includes(item)) {
      // Se já estiver selecionado, remove
      setSelecionados(
        selecionados.filter((interesse) => interesse !== item)
      );
    } else {
      // Se não estiver selecionado, adiciona
      setSelecionados([...selecionados, item]);
    }
  }

  return (
    <View>
      {/* Chips */}
      <View className="flex-row flex-wrap gap-2">

        {itens.map((item, index) => {
          const selecionado = selecionados.includes(item);

          return (
            <Pressable
              key={index}
              onPress={() => selecionarChip(item)}
              className={
                selecionado
                  ? "px-3 py-2 bg-blue-500 border border-blue-500 rounded-full"
                  : "px-3 py-2 border border-gray-400 rounded-full"
              }
            >
              <Text
                className={
                  selecionado
                    ? "text-white font-bold"
                    : "text-black"
                }
              >
                {item}
              </Text>
            </Pressable>
          );
        })}

      </View>

      {/* Mostra os interesses escolhidos */}
      {selecionados.length > 0 && (
        <Text className="mt-3 text-gray-600">
          Interesses selecionados: {selecionados.join(", ")}
        </Text>
      )}
    </View>
  );
}

// =====================================================
// QUESTÃO 4 - Grade de Publicações
// =====================================================

function GradeDePublicacoes() {
  const imagens = [
    require("./assets/photo1.jpg"),
    require("./assets/photo2.jpg"),
    require("./assets/photo3.jpg"),
    require("./assets/photo4.jpg"),
    require("./assets/photo5.jpg"),
    require("./assets/photo6.jpg"),
    require("./assets/photo7.jpg"),
    require("./assets/photo8.jpg"),
    require("./assets/photo9.jpg"),
    require("./assets/photo10.jpg"),
    require("./assets/photo11.jpg"),
    require("./assets/photo12.jpg"),
  ];

  const [selecionada, setSelecionada] = useState<number | null>(null);

  return (
    <View>

      {/* GRADE DE FOTOS */}
      <View className="flex-row flex-wrap gap-2">

        {imagens.map((imagem, index) => (
          <Pressable
            key={index}
            onPress={() => setSelecionada(index)}
            className="w-[31%] aspect-square"
          >
            <Image
              source={imagem}
              className="w-full h-full rounded-md"
            />
          </Pressable>
        ))}

      </View>

      {/* FOTO AMPLIADA */}
      <Modal
        visible={selecionada !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelecionada(null)}
      >
        <View className="flex-1 bg-black/90 items-center justify-center">

          {/* BOTÃO FECHAR */}
          <Pressable
            onPress={() => setSelecionada(null)}
            className="absolute top-12 right-5 w-10 h-10 bg-white rounded-full items-center justify-center"
          >
            <Text className="text-black text-xl font-bold">
              X
            </Text>
          </Pressable>

          {/* FOTO GRANDE */}
          {selecionada !== null && (
            <Image
              source={imagens[selecionada]}
              style={{
                width: "90%",
                height: "70%",
              }}
              resizeMode="contain"
            />
          )}

        </View>
      </Modal>

    </View>
  );
}

// =====================================================
// QUESTÃO 5 - Botão de Seguir
// =====================================================

function BotaoSeguir() {

  // Estado do botão
  const [seguindo, setSeguindo] = useState(false);

  return (
    <Pressable
      // O estilo muda dependendo do estado
      className={
        seguindo
          ? "w-full p-3 border border-blue-500 rounded-lg"
          : "w-full p-3 bg-blue-500 rounded-lg"
      }

      // Quando clicar, troca o estado
      onPress={() => setSeguindo(!seguindo)}
    >

      <Text
        className={
          seguindo
            ? "text-blue-500 text-center font-bold"
            : "text-white text-center font-bold"
        }
      >
        {seguindo ? "Seguindo" : "Seguir"}
      </Text>

    </Pressable>
  );
}


// =====================================================
// APP PRINCIPAL
// =====================================================

export default function App() {

  // Dados dos interesses
  const interesses = [
    "Filmes",
    "Séries",
    "Livros",
    "Música",
    "Esportes",
    "Viagens",
    "Fotografia",
    "Games",
    "Tecnologia",
  ];

  return (
    <ScrollView className="flex-1 bg-white">

      {/* =================================================
          QUESTÃO 1
      ================================================= */}

      <View className="p-5">

        <Text className="text-xl font-bold mb-3">
          1. Ícone com Texto
        </Text>

        <IconeComTexto />

      </View>


      {/* =================================================
          QUESTÃO 2
      ================================================= */}

      <View className="p-5">

        <Text className="text-xl font-bold mb-3">
          2. Linha de Ações
        </Text>

        <LinhaDeAcoes />

      </View>


      {/* =================================================
          QUESTÃO 3
      ================================================= */}

      <View className="p-5">

        <Text className="text-xl font-bold mb-3">
          3. Lista de Chips
        </Text>

        <ListaDeChips
          itens={interesses}
        />

      </View>


      {/* =================================================
          QUESTÃO 4
      ================================================= */}

      <View className="p-5">

        <Text className="text-xl font-bold mb-3">
          4. Grade de Publicações
        </Text>

        <GradeDePublicacoes />

      </View>


      {/* =================================================
          QUESTÃO 5
      ================================================= */}

      <View className="p-5">

        <Text className="text-xl font-bold mb-3">
          5. Botão de Seguir
        </Text>

        <BotaoSeguir />

      </View>


      {/* =================================================
          DESAFIO FINAL - PERFIL
      ================================================= */}

      <View className="mt-5">

        <Text className="text-2xl font-bold px-5 mb-5">
          Desafio Final - Perfil
        </Text>


        {/* ================= HEADER ================= */}

        <View className="flex-row items-center px-5 gap-4">

          {/* Avatar */}

          <Image
            source={require("./assets/avatar.png")}
            className="w-20 h-20 rounded-full"
          />

          {/* Nome */}

          <View>

            <Text className="text-xl font-bold">
              Kauê Marinho
            </Text>

            <Text className="text-gray-500">
              @kaue5416
            </Text>

          </View>

        </View>


        {/* ================= ESTATÍSTICAS ================= */}

        <View className="flex-row justify-between p-5 mt-5 border-y border-gray-200">

          <View className="items-center flex-1">

            <Text className="text-xl font-bold">
              12
            </Text>

            <Text>
              Posts
            </Text>

          </View>


          <View className="items-center flex-1">

            <Text className="text-xl font-bold">
              25
            </Text>

            <Text>
              Seguidores
            </Text>

          </View>


          <View className="items-center flex-1">

            <Text className="text-xl font-bold">
              80
            </Text>

            <Text>
              Seguindo
            </Text>

          </View>

        </View>


        {/* ================= INTERESSES ================= */}

        <View className="p-5">

          <Text className="text-xl font-bold mb-3">
            Interesses
          </Text>

          {/* Reutilizando o componente da questão 3 */}

          <ListaDeChips
            itens={interesses}
          />

        </View>


        {/* ================= PUBLICAÇÕES ================= */}

        <View className="p-5">

          <Text className="text-xl font-bold mb-3">
            Publicações
          </Text>

          {/* Reutilizando o componente da questão 4 */}

          <GradeDePublicacoes />

        </View>


        {/* ================= RODAPÉ ================= */}

        <View className="p-5">

          {/* Reutilizando o botão da questão 5 */}

          <BotaoSeguir />

        </View>

      </View>

    </ScrollView>
  );
}
