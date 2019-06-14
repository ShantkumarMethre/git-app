import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, Button, Dimensions } from 'react-native';
import TabView from './component/TabView';
import { CardSection, Card, } from './common/index.a';
import axios from 'axios';
import { Icon } from 'react-native-elements';

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

    console.log("data is:" + this.state)
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, flexDirection: (this.state.orientation == "landscape") ? "row" : "column" }}>

        <Card>
          <View style={{
            height: (this.state.orientation == "landscape") ? (Dimensions.get('window').height) : (Dimensions.get('window').height / 3),
            width:
              (this.state.orientation == "landscape") ? (Dimensions.get('window').width / 2) : (Dimensions.get('window').height)
          }}>
            <CardSection>
              <View>
                <Image
                  style={{ width: 100, height: 100, }}
                  source={{ uri: "https://avatars1.githubusercontent.com/u/7427552?v=4" }}
                />
              </View>
              <View style={style.headerContainer}>
                <Text>
                  {this.state.dataSource.data.name}
                </Text>
                <Text>
                  {this.state.dataSource.data.login}
                </Text>
                <Text>
                  {this.state.dataSource.data.bio}
                </Text>
              </View>
            </CardSection>



            <CardSection>
              <View style={{ width: 150, alignContent: "center", justifyContent: 'center', }}>
                <Button onPress={() => { }}
                  title="edit Bio"
                />
              </View>
            </CardSection>
            <CardSection>
              <View style={style.headerContainer}>
                <View style={style.DetailHeader}>
                  <Icon name='people' color='#000105' />
                  <Text>
                    {this.state.dataSource.data.company}
                  </Text>
                </View>
                <View style={style.DetailHeader}>
                  <Icon name='place' color='#000105' />
                  <Text>
                    {this.state.dataSource.data.location}
                  </Text>
                </View>
                <View style={style.DetailHeader}>
                  <Icon name='mail' color='#000105' />
                  <Text>
                    {this.state.dataSource.data.email}
                  </Text>
                </View>
              </View>
            </CardSection>


          </View>
        </Card>


        <TabView navigate={navigate} />

      </View>
    );
  }
}

const style = {
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  DetailHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
}
