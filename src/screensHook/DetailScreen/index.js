import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Platform,
  FlatList,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {BackgroundView, Text} from '../../components';
import {COLORS} from '../../themes';
import {mapLocalHostToIP, sWidth} from '../../utils';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setGameDetail} from '../../redux/actions/gameAction';
import {requestDetailGame} from '../../redux/thunk/gameActionThunk';

//localhost => 10.0.2.2

const DetailScreenHook = ({navigation, route}) => {
  // const [game, setGame] = useState({});
  const game = useSelector(state => state.gameReducer.game);
  const dispatch = useDispatch();
  const {title, subTitle, icon, preview, age, description} = game;
  const imageBackground = preview ? preview[0] : undefined;

  const renderRating = () => {
    const {rating} = game;
    const listStart = [];
    for (let index = 0; index < Math.floor(rating); index++) {
      listStart.push(
        <IonicIcon
          key={index}
          name="ios-star-sharp"
          size={16}
          color={COLORS.lightPurple}
        />,
      );
    }
    if (5 - rating > 0.5) {
      listStart.push(
        <IonicIcon
          key={6}
          name="ios-star-half-sharp"
          size={16}
          color={COLORS.lightPurple}
        />,
      );
    } else {
      listStart.push(
        <IonicIcon
          key={6}
          name="ios-star-sharp"
          size={16}
          color={COLORS.gray}
        />,
      );
    }
    listStart.push(<Text>{rating}</Text>);
    return listStart;
  };

  useEffect(() => {
    dispatch(requestDetailGame(route.params.id));
  }, []);

  return (
    <BackgroundView edges={['bottom']}>
      <Image
        source={{uri: imageBackground}}
        style={{width: sWidth, height: 350}}
      />
      <BackgroundView style={{position: 'absolute'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <AntIcon name="close" color={COLORS.white} size={30} />
        </TouchableOpacity>
      </BackgroundView>
      <View style={styles.infoContent}>
        <View style={{flex: 2}}>
          <Image source={{uri: icon}} style={styles.iconGame} />
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {renderRating()}
        </View>
        <View>
          <Text>{age}</Text>
        </View>
        <View>
          <Text>Game of the day</Text>
        </View>
      </View>
      <FlatList
        style={{flexGrow: 0, marginVertical: 20}}
        horizontal
        decelerationRate={'fast'}
        snapToInterval={350}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}
        data={preview}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={{height: 200, width: 350, borderRadius: 8}}
          />
        )}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
      />
      <View style={{paddingHorizontal: 20}}>
        <Text subText>{description}</Text>
      </View>
    </BackgroundView>
  );
};

export default DetailScreenHook;

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
  infoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  iconGame: {width: 80, height: 80, borderRadius: 8},
});
