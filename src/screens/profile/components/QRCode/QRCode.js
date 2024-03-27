import { Image, View } from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons';

const QRCodeScreen = () => {
  return <View >
          <Image 
            style={{width: 300, height: 300}} 
            source={{uri: "https://img.freepik.com/premium-vector/qr-code-sample-smartphone-scanning-qr-code-icon-flat-design-stock-vector-illustration_550395-108.jpg" }} 
            alt="test" 
          />
        </View>
}

export default QRCodeScreen;