import React, {Component} from 'react';
import {
    View,
    Text,
    ToastAndroid,
    Image
} from 'react-native';

//-----------------------------------------------------imports
import styles from './src/Css/style';
import Home from './src/Component/Home';
import ImageButton from './src/Element/ImageButton'
//-----------------------------------------------------imports


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.containerFluid}>
                <View style={styles.header}>
                    <View style={styles.headerLogo}>
                        <Image
                            style={{width: 40, height: 40}}
                            source={{uri: 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300'}}/>
                    </View>
                    <Text style={styles.headerText}>
                        Header
                    </Text>
                </View>
                <View style={styles.body}>

                    {/* todo: içerikler burada çağrılacak Örnekteki gibi */}
                    {/* <Text>Deneme Sayfası</Text>
                        <Button 
                        title={"btnGit"}
                        onPress={btnGit}  /> */}

                    <Home/>

                </View>
                {/* todo: TabBar seçeneleri buradan kontrol ediyor. İstenirse burayı da component şeklinde hazırlayabilirsiniz. */}
                <View style={styles.footer}>
                    <ImageButton
                        styleName={styles.tabTouch}
                        metodName={btnGit}
                        imageStyle={styles.tabImage}
                        imageSource={{uri: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/cloud-icon.png'}} />
                    <ImageButton
                        styleName={styles.tabTouch}
                        metodName={btnGit}
                        imageStyle={styles.tabImage}
                        imageSource={{uri: 'https://connect2id.com/assets/learn/openid-connect/userinfo.png'}} />
                    <ImageButton
                        styleName={styles.tabTouch}
                        metodName={btnGit}
                        imageStyle={styles.tabImage}
                        imageSource={{uri: 'http://www.myiconfinder.com/uploads/iconsets/256-256-15fcb1bfa39508e9c05cc82235a58f0a-message.png'}} />
                    <ImageButton
                        styleName={styles.tabTouch}
                        metodName={btnGit}
                        imageStyle={styles.tabImage}
                        imageSource={{uri: 'http://www.avu.org/avuweb/wp-content/uploads/2016/07/settings.png'}} />

                </View>
            </View>
        );
    }
}

btnGit = () => {
    ToastAndroid.show('Tıkladın', ToastAndroid.SHORT)
};