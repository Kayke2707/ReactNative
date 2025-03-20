import { Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useState } from "react";

export default function Index() {
  const [lista, setLista] = useState("");  
  const [listas, setListas] = useState<string[]>([]);
  
  const addLista = () => {
    if (lista.trim() !== "") {
      setListas([...listas, lista]);
      setLista("");
    }
  };

  return (
    <View className="flex-1 bg-gray-600 p-5">

       <Text className="text-white text-2xl mb-4 text-center">Lista de Tarefas</Text>

      <TextInput
         className="bg-white p-3 rounded mb-3 w-full"
         placeholder="Digite uma tarefa..."
         placeholderTextColor="#aaa"
         value={lista}
         onChangeText={setLista}
      />
      <TouchableOpacity className="bg-blue-700 rounded p-3 justify-center items-center " onPress={addLista}>
        <Text className="text-white">Adicionar Tarefa</Text>
      </TouchableOpacity>

      <Text className="text-white mt-4">Total de tarefas: {listas.length}</Text>

      <ScrollView className="mt-3">
      {listas.map((item, index) => (
          <Text key={index} className="text-white text-lg mt-2">
            - {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}