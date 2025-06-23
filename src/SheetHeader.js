import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { closeIcon } from "./images";

const SheetHeader = ({
  title ='Provide Sheet Title',
  showCloseButton = true,
  SheetHeaderStyle,
  onClose,
  closeIconImage = closeIcon,
  titleStyle,
  sheetCustomHeader = null,
}) => {
  if (sheetCustomHeader) {
    return (
      <View style={[styles.modalHeader, SheetHeaderStyle]}>
        <View style={{ flex: 1 }}>{sheetCustomHeader}</View>
        {showCloseButton && (
          <TouchableOpacity onPress={onClose} style={styles.closeIconContainer}>
            <Image source={closeIconImage} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
  return (
    <View style={[styles.modalHeader, SheetHeaderStyle]}>
      <Text style={[styles.modalTitle, titleStyle]}>{title}</Text>
      {showCloseButton && (
        <TouchableOpacity onPress={onClose} style={styles.closeIconContainer}>
          <Image source={closeIconImage} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SheetHeader;

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width:'100%',
    flex:1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  closeIconContainer:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    width: wp(8),
    height: wp(8),
    borderRadius: wp(25),
  },
  icon: {
    width: wp(8),
    height: wp(8),
    marginRight: wp(2.5),
    borderRadius:25,
  },
});
