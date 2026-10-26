import { Pressable, StyleSheet, Text } from "react-native";

export default function ItemTask({ task, changeStyle }) {
  return (
    <Pressable
      onPress={() => changeStyle(task.id)}
      style={task.done ? styles.itemContainerTrue : styles.itemContainer}
    >
      <Text style={styles.taskText}>
        {task.title} {task.done}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ff0505",
    margin: 5,
  },
  itemContainerTrue: {
    backgroundColor: "#54ff05",
    margin: 5,
  },
  taskText: { color: "#ffffff", fontSize: 16, padding: 5, fontWeight: "bold" },
});
