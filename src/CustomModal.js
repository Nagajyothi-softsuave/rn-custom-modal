import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { closeIcon } from "./images";
import {
  Modal,View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import SheetHeader from './SheetHeader';

const CustomModal = ({
  title = 'Provide Sheet Title',
  containerStyle = {},
  showCloseButton = true,
  backdropStyle = {},
  isModalVisible = false,
  onCloseModal = () => {},
  animationType = 'slide',
  closeIconImage = closeIcon ?? {},
  SheetHeaderStyle = {},
  titleStyle = {},
  sheetCustomHeader = null,
  renderModalContent = () => null,
}) => {
  return (
    <View style={styles.container}>
      <Modal
        visible={isModalVisible}
        transparent
        animationType={animationType}
        statusBarTranslucent
      >
        <TouchableWithoutFeedback onPress={onCloseModal}>
          <View style={[styles.overlay, backdropStyle]}>
            <TouchableWithoutFeedback>
              <View style={[styles.sheet, containerStyle]}>
                <SheetHeader
                  title={title}
                  onClose={onCloseModal}
                  showCloseButton={showCloseButton}
                  closeIconImage={closeIconImage}
                  SheetHeaderStyle={SheetHeaderStyle}
                  titleStyle={titleStyle}
                  sheetCustomHeader={sheetCustomHeader}
                />
                <View>{renderModalContent()}</View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default CustomModal;

export const styles = {
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    padding: hp(10),
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(138, 129, 129, 0.3)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: Platform.OS === "ios" ? 34 : 16,
    minHeight: hp(20),
  },
  sheetText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 15,
    fontFamily: "Times New Roman",
  },
};
