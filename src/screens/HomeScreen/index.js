import {View, StyleSheet, FlatList} from 'react-native';
import React, {Component} from 'react';
import {BackgroundView, Text, Header} from '../../components';
import axios from 'axios';
import GameItem from './components/GameItem';
import {stackName} from '../../configs/navigationConstants';

export default class HomeScreen extends Component {
  state = {
    loading: true,
    listGame: [],
  };

  LeftComponent = (
    <View>
      <Text header style={styles.headerText}>
        Hello <Text bold>CyberSoft,</Text>
      </Text>
      <Text>Best games for today</Text>
    </View>
  );

  onPressGameItem = id => {
    this.props.navigation.navigate(stackName.detailStack, {id});
  };

  componentDidMount() {
    axios({method: 'GET', url: 'http://localhost:3000/games'})
      .then(res => this.setState({listGame: res.data, loading: false}))
      .catch(err => console.log(err));
  }

  render() {
    const {listGame, loading} = this.state;
    return (
      <BackgroundView>
        <Header
          LeftComponent={this.LeftComponent}
          RightComponent={<View style={styles.avatar} />}
        />
        <FlatList
          data={listGame}
          renderItem={({item}) => (
            <GameItem
              game={item}
              onPress={() => this.onPressGameItem(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 60}} />}
          contentContainerStyle={{paddingBottom: 60}}
          showsVerticalScrollIndicator={false}
        />
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#bbb',
  },
});
