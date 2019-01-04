import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    ToastAndroid,
    Image,
    TouchableOpacity
} from 'react-native';

//-----------------------------------------------------imports
import styles from './src/Css/style';
import Home from './src/Component/Home';
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
                        source={{uri:'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300'}} />
                    </View>
                    <Text style={styles.headerText}>
                        Header
                    </Text>
                </View>
                <View style={ styles.body}>

                    {/* todo: içerikler burada çağrılacak Örnekteki gibi */}
                    {/* <Text>Deneme Sayfası</Text>
                        <Button 
                        title={"btnGit"}
                        onPress={btnGit}  /> */}
                        
                        <Home />

                </View>
                {/* todo: TabBar seçeneleri buradan kontrol ediyor. İstenirse burayı da component şeklinde hazırlayabilirsiniz. */}
                <View style={styles.footer}>
                    <TouchableOpacity onPress={btnGit} style={styles.tabTouch}>
                        <Image 
                        style={styles.tabImage}
                        source={{uri:'https://img.icons8.com/metro/1600/download.png'}} />
                    </TouchableOpacity>
                     
                     <TouchableOpacity onPress={btnGit} style={styles.tabTouch}>
                         <Image 
                        style={styles.tabImage}
                        source={{uri:'http://simpleicon.com/wp-content/uploads/rocket.png'}} />
                    </TouchableOpacity>
                     <TouchableOpacity onPress={btnGit} style={styles.tabTouch}>
                         <Image 
                        style={styles.tabImage}
                        source={{uri:'https://creativecommons.org/wp-content/uploads/2016/06/search.png'}} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={btnGit} style={styles.tabTouch}>
                         <Image 
                        style={styles.tabImage}
                        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/1024px-Instagram_simple_icon.svg.png'}} />
                     </TouchableOpacity>
                </View>
            </View>
        );
    }
}

btnGit = () => {
    ToastAndroid.show('Tıkladın',ToastAndroid.SHORT)
}