import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import apresetacaoTela1 from "../../../assets/apresentacao.png";
import apresetacaoTela2 from "../../../assets/apresentacao2.png";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from 'react-native-swiper';
import React, { useState } from 'react';

const CustomDot = () => {
    return (
        <View style={{ backgroundColor: '#BFC9DA', width: 15, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
    );
};
const CustomDotActive = () => {
    return (
        <LinearGradient
            colors={['#FF8B38', '#FFA500']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.dot}
        />
    );
};
// let currentIndex = 0;
// const handleIndexChanged = (index) => {
//     console.log(index);
//     currentIndex = index;
//     console.log('a index', currentIndex)
// };

export function Apresentacao() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dot={<CustomDot />}
        activeDot={<CustomDotActive />}
        onIndexChanged={handleIndexChanged}
      >
        <View style={styles.slide}>
          <View style={styles.containerImage}>
            <LinearGradient
              colors={['#FF8B38', '#F3664B']}
              style={styles.backgroundImage}
            >
              <Image
                source={apresetacaoTela1}
              />
            </LinearGradient>
          </View>
          <View style={styles.containerTexto}>
            <Text style={styles.titulo}>Olá, somos o HelpCar!</Text>
            <Text style={styles.subtitulo}>Precisa de ajuda com o seu veículo? O HelpCar pode te ajudar!</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.containerImage}>
            <LinearGradient
              colors={['#FF8B38', '#F3664B']}
              style={styles.backgroundImage}
            >
              <Image
                source={apresetacaoTela2}
              />
            </LinearGradient>
          </View>
          <View style={styles.containerTexto}>
            <Text style={styles.titulo}>Atendimento de confiança e qualidade!</Text>
            <Text style={styles.subtitulo}>Quebrou? Chamou! Atendimento na hora, fácil e de qualidade!</Text>
          </View>
        </View>
      </Swiper>
      <View style={styles.botaoContainer}>
        <TouchableOpacity style={styles.buttonApresentacao}>
          <LinearGradient
            colors={['#FF8B38', '#F3664B']}
            style={styles.backgroundButton}
          >
            <Text style={styles.textButton}>
              {currentIndex == 0 ? 'PRÓXIMO' : 'COMEÇAR'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    containerImage: {
        height: "50%"
    },
    containerTexto: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '30%',
        gap: 24,
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "50%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundButton: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 12
    },
    titulo: {
        color: "#303733",
        fontSize: 22,
        fontFamily: "Poppins_700Bold",
        textAlign: 'center'
    },
    subtitulo: {
        color: "#303733",
        width: '80%',
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        textAlign: 'center'
    },
    wrapper: {
    },
    slide: {
        flex: 1,
        gap: 40,
        backgroundColor: '#ffff',
    },
    dot: {
        width: 15,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
    },
    buttonApresentacao: {
        width: '80%',
        height: 60,
        borderRadius: 12
    },
    botaoContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_800ExtraBold',
        fontSize: 16

    }

});