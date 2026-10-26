import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";
import ItemTask from "./components/ItemTask";
export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleInputText(text) {
    setTask(text);
  }

  function handleAddButton() {
    const title = task.trim();
    if (!title) return;

    const id = "id" + Math.random().toString(16).slice(2);

    setTaskList((currentTasks) => [
      ...currentTasks,
      { title, done: false, id },
    ]);
    setTask("");
  }

  function changeStyleDone(id) {
    setTaskList((currentTasks) =>
      currentTasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          value={task}
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Zadaj ulohu ..."
        />
        <Button onPress={handleAddButton} title="ADD" />
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <ItemTask task={item} changeStyle={changeStyleDone} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adadad",
    paddingTop: 60,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ff0505",
    borderRadius: 8,
    width: "80%",
    height: 45,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
