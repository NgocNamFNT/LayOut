import React from 'react';
import {
  View, Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Picker,
  Item,
  Alert,
  Switch,
  Image

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RadioButton from 'radio-button-react-native';
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right } from 'native-base';
import { Button } from 'react-native-elements';


var { height } = Dimensions.get('screen');

var box_count = 16;
var box_height = height / box_count;
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Web com to ',
  };



  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Cấu hình chấm công công ty',
  };
  constructor(props) {
    super(props);
    data = ['Chấm công bằng mạng Wfri và GPRS', 'Chấm công bằng Wfri', 'Chấm công bằng 3G', 'Chấm công bằng 2G'];
    this.state = {
      selected: "Chấm công bằng Wfri và GPRS",
    }
    this.state = {
      switchVar: false
    }

    this.state = {
      switchVar: false
    }
    //radio
    this.state = {
      value: 0
    }
    //nutkeo
    this.state = {
      switchVar: false

    }

  }
  renderItem() {
    items = [];
    for (let item of data) {
      items.push(<Picker.Item key={items} label={item} value={item} />)
    }
    return items;
  }
  _onpresButton() {
    <Picker selectedValue={this.state.selected}
      onValueChange={(value) => this.setState({ selected: value })}>
      {this.renderItem()}
    </Picker>
  }

  _onSelect = (item) => {
    console.log(item);
  };


  SwitchGo(value) {
    this.setState({
      switchVar: value
    });
  };
  //radio
  handleOnPress(value) {
    this.setState({ value: value })
  }
  //nutkeo
  SwitchGo(value) {
    this.setState({
      switchVar: value

    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={[styles.box, styles.box1]}>
          <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
            <Text style={{ marginTop: 32, marginLeft: 40, color:'black',fontFamily:'Montserrat-SemiBold'}}>HÌNH THỨC </Text>
          </View>
          <Text style={{ marginBottom: 1, marginLeft: 230, color:'black',fontFamily:'Montserrat-SemiBold'}} >THỜI GIAN</Text>
        </View>

        <View style={[styles.box, styles.box2]}>
          <Text style={{ left: 10 }}>Hình thức chấm công</Text>
          <Picker selectedValue={this.state.selected}
            onValueChange={(value) => this.setState({ selected: value })}>
            {this.renderItem()}
          </Picker>
        </View>

        <View style={[styles.box, styles.box3]}>
          <View style={{ width: 320, height: 60, backgroundColor: 'white' }}>
            <Text style={{ left: 10 }}>THIẾT BỊ WIFI</Text>
            <Text style={{ left: 10, fontWeight: '600', fontSize: 15,fontFamily:'Montserrat-SemiBold' }}>TP-Link 1390</Text>
            <Text style={{ left: 10 }}>00:11:33:55:77</Text>
          </View>
          <View style={{ width: 40, height: 60, backgroundColor: 'white' }}>
            <Image source={{ uri: 'https://zhijiaprofessionalcontext.files.wordpress.com/2014/04/logotype17.jpg' }} style={{ width: 40, height: 60, marginTop: 10 }} />
          </View>
        </View>

        <View style={[styles.box, styles.box4]}>
          <View style={{ width: 40, height: 40, backgroundColor: 'white' }}>
            <Image source={{ uri: 'data:image/png;base64,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' }} style={{ width: 20, height: 20, marginTop: 10, left: 10 }} />
          </View>
          <View style={{ width: 320, height: 40, backgroundColor: 'white' }}>
            <Text style={{ paddingTop: 10, fontWeight: '600', fontSize: 15,fontFamily:'Montserrat-SemiBold' }}>THÊM THIẾT BỊ WIFI</Text>
          </View>

        </View>
        <View style={[styles.box, styles.box5]}>
          <View style={{ width: 320, height: 60, backgroundColor: 'white' }}>
            <Text style={{ left: 10 }}>ĐIA ĐIỂM CHẤM CÔNG</Text>
            <Text style={{ left: 10, fontWeight: '600', fontSize: 15 }}>Văn phòng A26</Text>
            <Text style={{ left: 10 }}>Hồ Tùng Mậu-Cầu Giấy- Hà Nội</Text>
          </View>
          <View style={{ width: 40, height: 60, backgroundColor: 'white' }}>
            <Image source={{ uri: 'https://zhijiaprofessionalcontext.files.wordpress.com/2014/04/logotype17.jpg' }} style={{ width: 40, height: 60, marginTop: 10 }} />
          </View>
        </View>

        <View style={[styles.box, styles.box6]}>
          <View style={{ width: 40, height: 40, backgroundColor: 'white' }}>
            <Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUxr5H///8Uqonl9PDq9fEorY4irIwkrI3h8u3C5NvM6OG23tPv+Pb6/f0LqYj1+/lTuqF2xbFHtpuOzr2U0cCc1MVyxK6HzLrY7uhiv6cApIFOuJ2+4ddcvKN0xbA3sZSn2Muu3M967Q7qAAAIAElEQVR4nOXd2XqiMBQA4BBNAqhRwKWOtcj7v+TEpVWUJcA5SQjnbjrzFf5JyL6QAD3W8/i72GXJcXNK85zkeXraHJNsV3zH8zX+4wnmL1/GxeGcC0o5F4wx8gz1J8E5pSI/H4p4ifkSWMJltD0LSQV/dVUF44JKcd5GWEwM4XKR5JyKNlvJKSjPkwWGElq4irNUtiZcXXLKNItXwG8EKlxFPyrteul+Q6XlTwSKBBQqXs/Ee09K8RPBvRaUcLZlFIL3QFK2nQG9GYxwsRmYOT9D0M0C5N0AhMtde53QJ1Ru3QEUroOFYcI5Au8enCehZWG4lxjJ9wwm9wONg4ThHrB0qTXSYcYBwjl2+v0Z5X5uQbjKDKTfn5FmvVsBfYUFwytfqoKzwqjwKzXruxnTL3PCg8EM+gxGD4aEMTGfgPfgJDYhPEhLvmvI7snYVfiV20rAe/C869fYUbijVn3XoDtE4XJjNwHvwTed2uNdhDGzUYR+BmNdCpwOwp3NIqYcskNO1Rce7X+Cz6BH7VacrnCZQnfih4VIdYfLNYWhI5/gMxjT7FPpCSOXcuhvUL3yRktYuFPGvIYsoIQXN4GaRA2hQ7XEe8gLhNCBhlp9aDThWoUOp+A12uv+NqGz3+BvtGbUFqGjpehryJbB/2bhwn1gK7FRGI8BqIiNVX+TMHShN6gTvGkmrkG4tv3iHaKhGd4gTF1rbNcHS/sIj3DdJUarA+6/UBy7CwGbMuwczqsiPMMR6xs3dULIYpTWDQB+ATYIawvUGuESskdP64q6GWSTV9SMwNUIT5CljBkhO3URbkFrQjNCwrf6wi/YtowhYc33XiVcgT7XnJDkusIEeODQmFAkekLwgTVjQiIr1sNVCMEba+aEpILz+aMD+OC2QSH/nEH9EEK2Mx5hMg0/y9MPIUKPwqTws5fxLiwQxg5NCgktmoUrjD6hUSFhb/Nub8IMY+DCrPC98VYWzlHGt80KCS0v8ysL9ygDF4aFbF8vDHFGDw0LiSzNnZaEOEloXFhOxFdhiDTLZFpI6GsivgqRktC8sJSIL0Kkr9CCsPQlvggTrBFg80L20lF8CpdosxTmhYQ/B96ewp1XwucA8VOIN9FkQUjEp3Dhl5D/TZv+CTd4M002hGzzLsSq7a9hQ/is9X+FGeLSQytCkb0JMWdDrQgJKwtRFx/aEdKoJPzxMA2TV+EKdQGwHSERqxch7gpZS8JHNr0L0Rrd90fZET6yKcHPpLaEj2x6E8a4T7IlvC8Evwkxq3tiMQ2zP2GK+iBrQpL+CufISxCtCeXyIUTsON3CmvDWhboKcesKi8JbfXEV5rjPsSe8Lc4gWNMxL2FPeJ2kUcIIeymwPSGPbsIt9r47e0KxvQkRR2juYU94Ha1RQvRdP/aEhF6FBh5jUThTwhh9z4FNYayEF5+F/KKE2C0aq0LVqiGwC54rw6bwpITYbTarQtVuI2v8zU02hXxN9J9St/OlNf7V7ZwP//X9ldpfFp0R7TEadg5n/SKsO+Fh1fs3au+2oTFZ6LZK6eDz/QBDexWsWBDt6pAOOBUOPLR7fPxCtHsW4xSKHTlo5+hRCtmBaDdpRipMyNFz4ZFsNP/pSIXKd/JceCLaI/ojFaZEu+E9UmE+AaF2jFTYwThS4RRyqf9lqf/1oe/CDdHvLY9SqNql/vct/O8f+t/H93+cxvextu8JjJf6P+bt/7yF/3NPE5g/9H8O2P95fPRFX1aF0STW0/i/JmoC69qQV+o7sDbR//Wl/q8R9n+d9wTW6vu/38LfPTPzYCr7niawd83//Yf+7yH1fx/wBPZy+78f3/8zFSZwLob/Z5tM4Hwa/88Y8v+cqAmc9RXgfYiOnNc2gTP3/D830f+zLydwfqn/Z9BO4Bxh/8+CnsB53v6fyT6Bc/WBr7L6faRDdyNM4H6L8d9Rwou3h0zvnpkJ3BUUHMALG8fue1I/gg6DQvb5kKp716BbNs7du+b/3Xng+dRcGlZiqn7o/R2WE7iHdAJ3yY7xPmDW7T5g/+90NnMvN+BcSfd7uSdwtzpKLwMrPnsUWsL1eIRk3UuIOmsKGo0bB5uEoAUqYtQWo+3CYDEGolw0GpqFQeE+URbNhBZhcHH9W6SXFkGbMNi5nYqytqbXFrpNbAdqCIOLu0TZlkX1hO4WN22FjLbQ1UpDfuu8vJbQwInYPYI3VvQdhUHIXGukMqZ5xoOmMFin2Hv4uoVIGxrbvYSqv+hS3U/r+4P9hS5VjBrVYB+hKm/c+BiZZhnTXRgsTy6UqfxUM6oGIAyCrf2cWj/mBCIMvnK7ZarI64YmoYRBcLCZjPJzBhReGMTE1tfISZcipr8wCDLAkU79YDRrfzUgYRCm5qt/mvY7iqufUHU3DGdVTprHm+CFwWprMKsyuq07LwxPGATzvTRjZHI/4DS8AUL1Oe4NpCOj+0Fn4Q0SKuMROR2ZPA4862+gUBkTjlfmcJ4MPstwsFC1x7ccpdPBON91amOjCVUsNhS6uSropm/9UA4YocqsGQMsddTvyqCO2oQSqoj2HATJKN9XrE/rG4BC1QqIfvjA7Cqo+Il61+5VASpUsYqzVPYseBiXaRaD8gJ44TXmiyTnXHRhMkF5niwwDvLFEF5jGW3PXFLeOpLMGKeSn7cRQMVQGVjCW8zjS3LKOaXXFC1Z1Z8Ev/5FfkouMeoZzKjCe6xn8Xexy5Lj5pTmOcnz9LQ5Jtmu+I5nugPXA+I/Q0SEuYl8l+kAAAAASUVORK5CYII=' }} style={{ width: 20, height: 20, marginTop: 10, left: 10 }} />
          </View>
          <View style={{ width: 320, height: 40, backgroundColor: 'white' }}>
            <Text style={{ paddingTop: 10, fontWeight: '600', fontSize: 15,fontFamily:'Montserrat-SemiBold' }}>THÊM ĐỊA ĐIỂM CHẤM CÔNG</Text>
          </View>
        </View>
        <View style={[styles.box, styles.box7]}>
        <View style={{height:10}}>
          <Text style={{ left: 10, marginTop:3 }}>Chế độ chấm công tính lương</Text>
          </View>
          <Picker selectedValue={this.state.selected}
            onValueChange={(value) => this.setState({ selected: value })}>
            {this.renderItem()}
          </Picker>
        </View>
        <View style={[styles.box, styles.box8]}>
          <View style={{ width: 360, height: 20, backgroundColor: 'white' }}>
            <Text style={{ left: 10,fontFamily:'Montserrat-SemiBold' }}>Số lần chấm công trong ngày</Text>
          </View>
          <View style={{ flexDirection: 'row', width: 360, height: 42, borderRadius: 4, borderColor: '#AAAAAA', marginTop: 5 }}>
            <View style={{ width: 90, height: 40, borderColor: '#AAAAAA', borderStyle: 'solid', borderWidth: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 15, paddingTop: 5, color: 'black',fontFamily:'Montserrat-SemiBold' }}>1 Lần</Text>
            </View>
            <View style={{ width: 90, height: 40, borderColor: '#AAAAAA', borderStyle: 'solid', borderWidth: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 15, paddingTop: 5, color: 'black',fontFamily:'Montserrat-SemiBold' }}>2 Lần</Text>

            </View>
            <View style={{ width: 90, height: 40, backgroundColor: 'green', borderColor: '#AAAAAA', borderStyle: 'solid', borderWidth: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 15, paddingTop: 5, color: 'white',fontFamily:'Montserrat-SemiBold' }}>3 Lần</Text>

            </View>
            <View style={{ width: 90, height: 40, borderColor: '#AAAAAA', borderStyle: 'solid', borderWidth: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 15, paddingTop: 5, color: 'black',fontFamily:'Montserrat-SemiBold' }}>4 Lần</Text>

            </View>
          </View>
        </View>
        <View style={[styles.box, styles.box9]}>
          <Text style={{ left: 10 }}>Cách tính công trong ngày</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <RadioButton currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}>
              <Text style={{ marginLeft: 5, color:'black',fontFamily:'Montserrat-SemiBold' }}>Quy tròn</Text>
            </RadioButton>
            <RadioButton currentValue={this.state.value} value={2} onPress={this.handleOnPress.bind(this)}>
              <Text style={{ marginLeft: 5, color:'black',fontFamily:'Montserrat-SemiBold' }}>Chính xách</Text>
            </RadioButton>
          </View>
        </View>

        <View style={[styles.box, styles.box10]}>
          <Text style={{ left: 10, fontFamily: 'FontAwesome', paddingTop: 4 }}>Số giờ làm việc tối thiểu để tính công</Text>
          <Picker selectedValue={this.state.selected}
            onValueChange={(value) => this.setState({ selected: value })}>
            {this.renderItem()}
          </Picker>
        </View>
        <View style={[styles.box, styles.box11]}>
          <Text style={{ left: 10, fontFamily: 'FontAwesome', paddingTop: 4 }}>Cho phép đi sớm về muộn</Text>
          <Picker selectedValue={this.state.selected}
            onValueChange={(value) => this.setState({ selected: value })}>
            {this.renderItem()}
          </Picker>
        </View>
        <View style={[styles.box, styles.box12]}>

          <View style={{ width: 315, height: 60, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, marginTop: 16, left: 10, color: 'black',fontFamily:'Montserrat-SemiBold' }}>Kiểm soát đi muộn, về sớm</Text>
          </View>
          <View style={{ width: 45, height: 60, backgroundColor: 'white' }}>
            <Switch
              value={this.state.switchVar}
              onValueChange={(value) => this.SwitchGo(value)}
              style={{ marginTop: 17 }}
            />
          </View>

        </View>

        <View style={[styles.box, styles.box13]}>

          <View style={{ width: 315, height: 60, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, marginTop: 16, left: 10, color: 'black',fontFamily:'Montserrat-SemiBold' }}>Tự động checkout, cuối giờ</Text>
          </View>
          <View style={{ width: 45, height: 60, backgroundColor: 'white' }}>
            <Switch
              value={this.state.switchVar}
              onValueChange={(value) => this.SwitchGo(value)}
              style={{ marginTop: 17 }}
            />
          </View>
        </View>
        <View style={[styles.box, styles.box14]}>

          <View style={{ width: 315, height: 60, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, marginTop: 16, left: 10, color: 'black',fontFamily:'Montserrat-SemiBold' }}>Kiểm soát thiết bị chấm công</Text>
          </View>
          <View style={{ width: 45, height: 60, backgroundColor: 'white' }}>
            <Switch
              value={this.state.switchVar}
              onValueChange={(value) => this.SwitchGo(value)}
              style={{ marginTop: 17 }}
            />
          </View>
        </View>
        <View style={[styles.box, styles.box15]}>
          <Button
            title="LƯU THÔNG TIN"
            titleStyle={{ fontWeight: "700", color: 'green',fontFamily:'Montserrat-SemiBold' }}
            color={{ color: 'green' }}
            buttonStyle={{
              backgroundColor: "white",
              width: 150,
              height: 45,
              borderColor: "green",
              borderWidth: 3,
              borderRadius: 8,
              marginTop: 5,
              marginLeft: 100
            }}
          />
        </View>
        <View style={[styles.box, styles.box16]}></View>
      </ScrollView>

    );
  }
}

export default StackNavigator({
  Home: {

    screen: HomeScreen
  },
  Details: {

    screen: DetailsScreen

  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: 'white'
  },
  box2: {
    backgroundColor: 'white',
    marginTop: 5,
    height: 60
  },
  box3: {
    backgroundColor: '#e3aa1a',
    height: 60,
    flexDirection: 'row'
  },
  box4: {
    backgroundColor: '#FF66FF',
    height: 40,
    flexDirection: 'row',
    marginTop: 2
  },
  box5: {
    backgroundColor: '#669999',
    height: 60,
    flexDirection: 'row',
    marginTop: 2

  },
  box6: {
    backgroundColor: '#FFFF99',
    height: 40,
    flexDirection: 'row',
    marginTop: 2
  },
  box7: {
    backgroundColor: 'white',
    marginTop: 5,
    height: 60
  },
  box8: {
    backgroundColor: 'white',
    height: 65,
    flexDirection: 'column'
  },
  box9: {
    backgroundColor: 'white',
    height: 70
  },
  box10: {
    backgroundColor: 'white',
    height: 60,
    marginTop: 2
  },

  box11: {
    backgroundColor: 'white',
    height: 60,
    marginTop: 2
  },
  box12: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    marginTop: 2
  },
  box13: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    marginTop: 2
  },
  box14: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    marginTop: 2
  },
  box15: {
    backgroundColor: 'white',
    height:60,
    marginTop: 2
  },
  style_text: {
    color: 'gray',
    fontSize: 13,
    textAlign: 'center'
  },


});