import { useState } from 'react';
import CustomModal from 'rn-custom-modal';
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
