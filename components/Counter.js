import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { increment, fetchPosts } from "../actions";
import { connect } from "react-redux";
import {} from "react-native";

const Counter = ({ count, posts, increment, fetchPosts }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>This is the Counter {count}</Text>
        <TouchableOpacity onPress={increment}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchPosts}>
          <Text>fetchPosts</Text>
        </TouchableOpacity>
        {console.log(posts)}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count, posts: state.posts.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
