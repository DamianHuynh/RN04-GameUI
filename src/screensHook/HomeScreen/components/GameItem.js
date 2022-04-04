import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {sWidth} from '../../../utils';
import {Text} from '../../../components';
import {stackName} from '../../../configs/navigationConstants';
import {navigate} from '../../../navigation/NavigationWithoutProp';

export default class GameItem extends Component {
  onPress = () => {
    navigate(stackName.detailStack, {id: this.props.id});
  };

  render() {
    const {
      game: {title, subTitle, icon, preview, backgroundColor},
    } = this.props;

    const backgroundImage = preview ? preview[0] : undefined;

    return (
      <View style={styles.container}>
        <Image source={{uri: backgroundImage}} style={styles.imageBackground} />
        <TouchableOpacity
          onPress={this.onPress}
          style={[styles.bannerContainer, {backgroundColor}]}>
          <Image source={{uri: icon}} style={styles.imageIcon} />
          <View style={styles.titleContainer}>
            <Text title bold>
              {title}
            </Text>
            <Text subText>{subTitle}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {zIndex: 1},
  imageBackground: {width: sWidth, height: 200},
  bannerContainer: {
    position: 'absolute',
    bottom: -40,
    left: 0,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    width: sWidth - 40,
  },
  imageIcon: {width: 50, height: 50, borderRadius: 8},
  titleContainer: {width: '80%'},
});
