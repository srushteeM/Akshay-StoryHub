import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native';

class WriteStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{  marginBottom:20}}> WriteStory </Text>
        <View style={styles.container}>
          <TextInput
          placeholder="Enter the name of your story"
          style={styles.input}
          />
           <TextInput
          placeholder="Author"
          style={styles.input}
          />
           <TextInput
          placeholder="Enter your story"
          multiline={true}
          style={styles.input1}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
   // justifyContent:"center",
    alignItems: "center",
  

  },
  input:{
    marginBottom:20,
    borderWidth:2,
    width:400
  },
  input1:{
    marginBottom:20,
    borderWidth:2,
    width:400,
    height:400
  },
  button:{
    justifyContent:"center",
    alignItems: "center",
    borderWidth:2,
    width:200,
    height:40
  }
})
export default WriteStory;
