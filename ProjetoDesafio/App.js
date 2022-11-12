import { StyleSheet, View, StatusBar } from "react-native";

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto"/>

      <View style={styles.azulClaro} />

      <View style={styles.pcLaranja}>
        <View style={styles.laranja} />
        <View style={styles.retanguloLaranja} />
      </View>

      <View style={styles.meio}>
        <View style={styles.purplee} />
        <View style={styles.bluee} />
      </View>

      <View style={styles.azulClaro} />

      <View style={styles.final} >

        <View style={styles.laranja} />
        <View style={styles.laranja} />
        <View style={styles.laranja} />
        <View style={styles.laranja} />
        <View style={styles.laranja} />
        <View style={styles.laranja} />

      </View>
      <View style={styles.bluee2} />



    </View >

  );
}


const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: "center",

  },
  azulClaro: {
    backgroundColor: "cyan",
    width: "100%",
    height: "2%",
  },

  pcLaranja: {
    marginTop: 5,
    alignItems: "center",
    width: "100%",
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

  },


  laranja: {
    margin: 20,
    width: 90,
    height: 90,
    backgroundColor: "orange",
  },
  retanguloLaranja: {
    width: 150,
    height: 25,
    backgroundColor: "orange",
  },

  meio: {
    
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",


  },
  purplee: {
    width: "50%",
    height: 70,
    backgroundColor: "blueviolet"

  },
  bluee: {

    width: "50%",
    height: 70,
    backgroundColor: "skyblue"

  },

  final: {
    marginTop:45,
    marginBottom:45,
    display: "flex",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "center",


  },


bluee2: {

  width: "100%",
  height: 90,
  backgroundColor: "skyblue"

},


});

