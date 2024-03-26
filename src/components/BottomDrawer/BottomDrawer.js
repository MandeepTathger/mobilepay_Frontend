import { Actionsheet } from "native-base";

const BottomDrawer = ({isOpen, onClose, children}) => {

  return <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content borderTopRadius="20" px={4}>
            {children}
          </Actionsheet.Content>
        </Actionsheet>
}

export default BottomDrawer;