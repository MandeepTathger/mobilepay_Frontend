import { AlertDialog, Button, Center, Modal, Text } from "native-base";
import { useRef, useState } from "react";
import CustomButton from "../Button";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/color";

const ConfirmationModal = ({isOpen, onClose, title, description, confirmButtonText, onSubmit}) => {

  // const [isOpen, setIsOpen] = useState(false);
  // const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);

  return <Center>
          <Modal isOpen={isOpen} onClose={onClose} safeAreaTop={true}>
            <Modal.Content maxWidth="350" {...styles['center']}>
              <Modal.Header  style={{borderBottomWidth: 0}}>{title}</Modal.Header>
              <Modal.Body>
                <Text textAlign={'center'}>{description}</Text>
              </Modal.Body>
              <Modal.Footer style={{borderTopWidth: 0}}>
                <Button.Group space={2}>
                  <CustomButton title="Cancel" variant="ghost" colorScheme="blueGray" onSubmit={onClose}>
                  </CustomButton>
                  <CustomButton color={Colors.red} title={confirmButtonText} onSubmit={onSubmit}>
                  </CustomButton>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
  </Center> 
}

const styles = StyleSheet.create({

})

export default ConfirmationModal;