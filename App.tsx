import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  // AsyncStorage,
  Text,
 
} from "react-native";
import { IArticle } from './models/Article';

interface IState {
  article: IArticle;
  articles: Array<IArticle>;
}

// App main  component
const App: React.FC = () => {
  const [price, setPrice] = useState<string>('');
  const [localization, setLocalization] = useState<string>('');
  const [categorie, setCategorie] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  let [articles, setArticles] = useState<Array<IArticle>>([]);

  let id = 0;

  const submit = () => {
    const newArticle: IArticle = { id: id++, price, localization, categorie, image, comment };
    articles = [...articles, newArticle]
    setArticles(articles);
    setPrice('');
    setLocalization('');
    setCategorie('');
    setImage('');
    setComment('');
    console.log(articles);
  }

  const handleDelete = (id: number) => {
    articles = [...articles.filter(a => a.id !== id)]
    setArticles(articles)
    console.log(articles);
  }

  const handleList = ()=> {
    
  }

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

          <TextInput
            placeholder="Price"
            underlineColorAndroid='transparent'
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={(text) => setPrice(text)}
            value={price}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="localization"
            placeholderTextColor="#FFFFF0"
            autoCapitalize="none"
            onChangeText={(text) => {
              setLocalization(text);
            }}
            value={localization}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Categories"
            placeholderTextColor="#FFFFF0"
            autoCapitalize="none"
            onChangeText={(text) => {
              setCategorie(text);
            }}
            value={categorie}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Picture"
            placeholderTextColor="#FFFFF0"
            autoCapitalize="none"
            onChangeText={(text) => {
              setImage(text);
            }}
            value={image}

          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Comments"
            placeholderTextColor="#FFFFF0"
            autoCapitalize="none"
            onChangeText={(text) => {
              setComment(text);
            }}
            value={comment}
          />
          <Button title='Submit' onPress={
            () => { submit() }
          } />

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
            onPress={() => console.log('Edit')}
          />
          {/* <Button
            title="Delete"
            color="#d63600"
            accessibilityLabel="Learn more about this red button"
            onPress={() => {handleDelete()}
          /> */}
        </div>
        <h1>List of Spend</h1>

        {articles.map((article) => {
          return(
          <View>
           
            <Text >{article.price}</Text>
            <Text>{article.localization}</Text>
            <Text>{article.categorie}</Text>
            <Text>{article.image}</Text>
            <Text>{article.comment}</Text>
          </View>)
          
        })}

        <Button title='List of Spend' onPress={(e) => console.log('All')} />
        <p id='lol'>
        </p>
      </div>
    </View>
  );
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

export default App;