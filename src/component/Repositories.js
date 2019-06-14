import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TextInput, Button } from 'react-native';
import axios from 'axios';
import { Card, } from '../common/index.a';
import { Select, Option } from "react-native-chooser";

class Repositories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataRepository: [],
            searchText: '',
            text: '',
            value: "All"

        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/supreetsingh247/repos')
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataRepository: responseJson.data,

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    filterNotes(search, language, responseJson) {
        this.setState({ dataRepository: responseJson.data })

    }

    setSearchText(event) {
        let searchText = event.nativeEvent.text;
        this.setState({ searchText });

        axios.get('https://api.github.com/users/supreetsingh247/repos')
            .then((responseJson) => {
                let filteredData = responseJson.data.map((data) => this.filterNotes(searchText, data.language, responseJson));
                this.setState({
                    isLoading: false,
                    dataRepository: responseJson.data
                });

            })
            .catch((error) => {
                console.error(error);
            });

    }
    onSelect(value, label) {
        this.setState({ value: value });
    }

    renderCards = () => {
        return this.state.dataRepository.map((data) => {
            if ((data.language) == this.state.searchText || (this.state.searchText == '' && (data.language) == this.state.value) || this.state.value == "All" || (data.language) == this.state.value) {
                return <Card key={data.id}>

                    <View style={style.headerContainer}>
                        <Text style={{ fontWeight: "bold", color: 'black' }}>{data.name}</Text>
                        <Text style={{ padding: 10 }}>{data.description}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text>{data.language}</Text>
                            <Text>{data.license == null ? " " : data.license.spdx_id}</Text>
                            <Text>updated  {data.updated_at}</Text>
                        </View>
                    </View>

                </Card>
            }
        }

        )


    }
    onSelect(value, label) {
        this.setState({ value: value });
    }
    buildMenu = () => {
        return this.state.dataRepository.map((data) => {
            console.log("lsangajs" + data.language)
            return data.language != null ? <Option value={data.language}>{data.language}</Option> : ''
        }
        )
    }
    render() {


        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={style.input}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        value={this.state.searchText}
                        onChange={this.setSearchText.bind(this)}
                        placeholder="search" />
                    <View style={style.input}>

                        <Select
                            onSelect={this.onSelect.bind(this)}
                            defaultText={this.state.value}
                            style={{ borderWidth: 1, borderColor: "green" }}
                            textStyle={{}}
                            backdropStyle={{ backgroundColor: "#d3d5d6" }}
                            optionListStyle={{ backgroundColor: "#F5FCFF" }}
                        >

                            {this.buildMenu()}


                        </Select>

                    </View>
                    <View style={{ width: 50, alignContent: "center", justifyContent: 'center', }}>
                        <Button onPress={() => { }}
                            title="New"
                        />
                    </View>

                </View>


                <ScrollView>
                    {this.renderCards()}
                </ScrollView>
            </View>

        );
    }
};
const style = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        left: 10

    },
    input: {
        margin: 15,
        height: 40,
        width: 120,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
}

export default Repositories; 