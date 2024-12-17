import {AppText} from 'components/common';
import {EFontFamily} from 'enums';
import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, getSize} from 'themes';

interface ISuccessModalProps {
  show?: boolean;
  onClose?: () => void;
  title?: string;
}

interface IUseSuccessModal {
  title: string;
  onClose?: () => void;
}

export const SuccessModal = (props: ISuccessModalProps) => {
  const {show, onClose, title} = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          style={styles.overlay}
        />
        <View style={styles.contentContainer}>
          {/* <Image
            style={styles.imageBackground}
            resizeMode="cover"
            source={IMAGES.succesImage}
          /> */}
          <AppText fontType={EFontFamily.MOCHIY_POP_ONE} style={styles.title}>
            {title}
          </AppText>
          {/* <TouchableOpacity
            hitSlop={20}
            onPress={onClose}
            style={styles.closeContainer}>
            <Icons.CloseIcon strokeWidth={5} color={colors.neutralColor7} />
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

export const useSuccessModal = (props: IUseSuccessModal) => {
  const {title, onClose} = props;
  const [show, setShow] = React.useState(false);

  const open = () => setShow(true);
  const close = () => {
    setShow(false);
    onClose?.();
  };

  return {
    SuccessModal: <SuccessModal show={show} onClose={close} title={title} />,
    open,
    close,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: getSize(328),
    height: getSize(305),
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: getSize(16),
    alignItems: 'center',
  },
  imageBackground: {
    width: getSize(328),
    height: getSize(305),
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: -11,
  },
  title: {
    fontSize: getSize(26),
    lineHeight: getSize(26) * 1.6,
    color: colors.primary2,
    textAlign: 'center',
    marginTop: getSize(34),
    maxWidth: getSize(234),
  },
  closeContainer: {
    position: 'absolute',
    top: getSize(6),
    right: getSize(6),
  },
  imageItem: {
    width: getSize(89),
    height: getSize(89),
    position: 'absolute',
    top: 0,
    left: 0,
    borderWidth: getSize(2),
    borderColor: colors.neutralColor1,
    borderRadius: getSize(12),
  },
});
