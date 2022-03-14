import axios from 'axios';
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {BackgroundView, Text} from '../../components';
import {COLORS} from '../../themes';
import {sWidth} from '../../utils';
import IonicIcon from 'react-native-vector-icons/Ionicons';

export default class DetailScreen extends Component {
  state = {
    game: {},
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: `http://localhost:3000/games/${this.props.route.params.id}`,
    })
      .then(res => this.setState({game: res.data}))
      .catch(err => console.log(err));
  }
  render() {
    const {
      game: {title, subTitle, icon, preview, backgroundColor},
    } = this.state;
    const imageBackground = preview ? preview[0] : undefined;
    return (
      <BackgroundView edges={['bottom']}>
        <Image
          source={{uri: imageBackground}}
          style={{width: sWidth, height: 300}}
        />
        <BackgroundView style={{position: 'absolute'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backButton}>
            <AntIcon name="close" color={COLORS.white} size={30} />
          </TouchableOpacity>
        </BackgroundView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 2}}>
            <Image
              source={{uri: icon}}
              style={{width: 80, height: 80, borderRadius: 8}}
            />
          </View>

          <View style={{flex: 5}}>
            <Text title bold>
              {title}
            </Text>
            <Text subText>{subTitle}</Text>
          </View>
          <View style={{flex: 1}}>
            <IonicIcon name="cloud-download" size={30} color={COLORS.white} />
          </View>
        </View>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: COLORS.opacityBlack,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
