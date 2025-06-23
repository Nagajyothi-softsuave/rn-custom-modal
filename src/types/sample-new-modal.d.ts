declare module 'sample-new-modal' {
  import { FC, ReactNode } from 'react';
  import { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';

  export interface ModalProps {
    title?: string;
    containerStyle?: StyleProp<ViewStyle>;
    showCloseButton?: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    isModalVisible: boolean;
    onCloseModal: () => void;
    animationType?: 'none' | 'slide' | 'fade';
    closeIconImage?: ImageSourcePropType;
    SheetHeaderStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<ViewStyle>;
    sheetCustomHeader?: ReactNode;
    renderModalContent?: () => ReactNode;
  }

  const CustomModal: FC<ModalProps>;
  export default CustomModal;
}

