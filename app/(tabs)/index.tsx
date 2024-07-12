import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import icon from "../../assets/images/icon.png";
import { StatusBar } from "expo-status-bar";

//hay propiedas que son para algunos moviles como ios o android
//punto negro en la documentacion es de ios y punto verde de android

// LA MEJOR FORMA DE PERSONALIZAR ES USANDO PRESSABLE , YA QUE ELIMINARAN LOS OTROS
export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight //boton personalizable
          onPress={() => alert("presiona aqui")}
          style={{ backgroundColor: "red" }}
        >
          <Text>asadaasd</Text>
        </TouchableHighlight>
        <TouchableOpacity //boton personalizable 2
          onPress={() => alert("presiona aqui")}
          style={{ backgroundColor: "red" }}
        >
          <Text>asada</Text>
        </TouchableOpacity>
        <StatusBar
          style="light" // es para que la barra de arriba este de color blanco o negro
        />
        <Image
          source={icon}
          blurRadius={1} // es para el enfoque y desenfoque de la imagen
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ color: "white" }}>hola </Text>
        <Button title="pulsa aqui" onPress={() => alert("presiona aqui")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
