import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  // AsyncStorage,
  TouchableOpacity,
} from "react-native";



interface IState {
  
  price: number;
  localization: string;
  categories: string;
  image: JSX.Element;
  comments: string;
}

// App main  component
export default class App extends React.Component<IState> {
  state:any ;
  constructor(props: any) {
    super(props);
    
    this.state = {
    
      price: 0,
      localization: "",
      categories: "",
      image: <div></div>,
      comments: "",
    };
    
  }
 

 
// Date
  componentDidMount() {
    let that = this;
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }

  submit = (e:any) =>{
    console.log(this.state );
    console.warn (this.state.date) ;
  

   
   }
  displayCommand = (e:any) =>{
   
  //  let initialArr = [this.state];
  //  let buttonsListArr = [];
  //   for (let i = 0; i < initialArr.length; i++) 
  //   {
  //    buttonsListArr.push(
  //      <TouchableOpacity  onPress={this.submit.bind(this)}>{initialArr[i][1]}</TouchableOpacity>
  //    );
  //   }
  // //   let result = this.state;
  // //  console.log(result);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <div
          style={{
            backgroundColor: "#0085D6",
            textAlign: "center",
            justifyContent: "center",
          }}
          className="container"
        >
          <h1> Spend App</h1>
          <p style={{ marginTop: "5%" }}>Welcome to App for list your spend.</p>
          <div style={{ marginTop: "10%" }}>
            {/* <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="JJ/MM/YYYY"
              placeholderTextColor="#FFFFF0"
              autoCapitalize="none"
              onChangeText={(Date)=>{this.setState({date: new Date.toLocaleDateString('en-CA')})

                
              }}
              
            /> */}
           <TextInput  
          placeholder="Price"  
          underlineColorAndroid='transparent'  
          style={styles.input}  
keyboardType={'numeric'}
onChangeText={(number)=>{this.setState({price: number})}}
/>  
            
            {/* <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Price"
              placeholderTextColor="#FFFFF0"
              autoCapitalize="none"
              onChangeText={(text)=>{this.setState({price: text})

                
            }}
            /> */}
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="localization"
              placeholderTextColor="#FFFFF0"
              autoCapitalize="none"
              onChangeText={(text)=>{this.setState({localization: text})

                
            }}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Categories"
              placeholderTextColor="#FFFFF0"
              autoCapitalize="none"
              onChangeText={(text)=>{this.setState({categories: text})

                
              }}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Picture"
              placeholderTextColor="#FFFFF0"
              autoCapitalize="none"
              onChangeText={(image)=>{this.setState({picture: image})

                
            }}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Comments"
              placeholderTextColor="#FFFFF0"
              autoCapitalize="none"
              onChangeText={(text)=>{this.setState({comments: text})

                
            }}
            />
          
            <Button title='Submit'  onPress = {
            (e)=> {this.submit(e)}
              }/>
          </div>

          <div
            style={{
              textAlign: "center",
              width: "100px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Button
              title="Edit"
              color="#D6CD00"
              accessibilityLabel="Learn more about this yellow button"
              onPress={() => this.setState({ title: "Todo bem" })}
            />
            <Button
              title="Delete"
              color="#d63600"
              accessibilityLabel="Learn more about this red button"
              onPress={() => this.setState({ title: "Todo bem" })}
            />
          </div>
         <h1>List of Spend</h1>
         
        
          <Button  title = 'List of Spend' onPress= {(e)=> {this.displayCommand(e)}}/>
         
            
          <p id='lol'>

          </p>
        </div>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#FFF",
    borderWidth: 4,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});

