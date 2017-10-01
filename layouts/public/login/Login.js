import React from 'react';


import {TabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import LoginStyles from './Style'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {Button} from '@shoutem/ui'


class Login extends React.Component {
    render() {

        return (
            <View>
                <Text>
                    Login area
                </Text>

                <Button
                    title='Login'
                    onPress={this.props.onLoginPress}
                />

                {/*<TouchableOpacity*/}
                {/*style={LoginStyles.touchable}*/}
                {/*onPress={this.props.onLoginPress}>*/}

                {/*<Text style={LoginStyles.button}>*/}
                {/*Login*/}
                {/*</Text>*/}
                {/*</TouchableOpacity>*/}


            </View>
        );

    }
}

export default Login;