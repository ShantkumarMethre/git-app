import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, Button, Dimensions } from 'react-native';
import TabView from './component/TabView';
import { CardSection } from './common/index.a';
import axios from 'axios';
import { Icon, Avatar, Card, Divider } from 'react-native-elements';

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      orientation: '',
      dataSource: ''
    }
  }

  getOrientation = () => {
    if (this.refs.rootView) {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({ orientation: 'portrait' });
      }
      else {
        this.setState({ orientation: 'landscape' });
      }
    }
  }

  componentDidMount() {


    axios.get('https://api.github.com/users/supreetsingh247')
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  componentWillUnmount() {
    this.getOrientation();
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, flexDirection: (this.state.orientation == "landscape") ? "row" : "column" }}>
        <View>
          <Card style={styles.cardContainer}>
            <View style={styles.container}>
              <Avatar
                xlarge
                style={styles.boxContainer}
                imageProps={{ resizeMode: 'cover' }}
                rounded
                source={{
                  uri:
                    'https://avatars1.githubusercontent.com/u/7427552?v=4',
                }}
              />
              <View style={styles.boxContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.textBox}>
                    {this.state.dataSource.data.name}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textBox}>
                    {this.state.dataSource.data.login}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textBox}>
                    {this.state.dataSource.data.location}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textBox}>
                    {this.state.dataSource.data.email}
                  </Text>
                </View>
              </View>
            </View>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{ borderRadius: 0, padding: 10, marginRight: 10, marginBottom: 10 }}
              title='Edit' />
          </Card>
        </View>
        <TabView navigate={navigate} />
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row'
  },
  boxContainer: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    padding: 20,
  },
  tabContainer: {
    padding: 10
  },
  textBox: {
    fontWeight: 'bold'
  }
}
