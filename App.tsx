// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import { useState } from 'react';
import CustomModal from 'sample-new-modal';
import { Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };
  
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        padding: hp(10),
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: 'blue',
          padding: 10,
          marginTop: hp(6),
        }}
        onPress={() => setIsModalVisible(true)}
      >
        <Text
          style={{
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Open Custom Modal
        </Text>
      </TouchableOpacity>

      <CustomModal isModalVisible={isModalVisible} onCloseModal={closeModal}
      />
    </View>
  );
};

export default App;
