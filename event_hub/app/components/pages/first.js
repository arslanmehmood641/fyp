// import React , {Component} from 'react';
// import {
//     Text,
//     Switch,
//     View,
//     TextInput,
//     StyleSheet,
//     TouchableOpacity,
//     TouchableHighlight,
//     ListView
//     } from 'react-native';

// users = [
//     {name : 'Tassaduq Hussain'},
//     {name : 'Sadaf Hussain'},
//     {name : 'Aman Ullah'},
//     {name : 'Abbas Fateh Muhammad'},
//     {name : 'Arslan Mehmood'}
// ]

// export default class First extends Component{
//     constructor(props){
//         super(props);
//         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.state =  {
//             name : 'Brad',
//             flag : false,
//             mess : this.props.mess,
//             userDataSource: ds
//         }
//     }

//     componentDidMount(){
//         this.fetchUsers();
//     }

//     fetchUsers(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((response) => {
//             this.setState({
//                 userDataSource : this.state.userDataSource.cloneWithRows(response)
//             });
//         });
//     }
//     static defaultProps = {
//         mess : 'Abou Huraira'
//     }

//     chalo(){
//         console.log("Chal Gaya");
//     }
//     chalo2(){
//         console.log("2nd B Chal Gaya");
//     }

//     xalo(){
//         console.log("Input Is Changing");
//     }

//     kalo(){
//         console.log("Input Is Submitted");
//     }

//     handleKaro(val){
//         this.setState({
//             flag : val
//         });
//     }

//     renderRow(user, sectionId, rowId, highlightRow){
//         return(
//             <View style = {styles.row}>
//                 <Text style = {styles.rowText}>{user.name}</Text>
//             </View>
//         );
//     }

//     render(){
//         let name = this.state.flag ? this.state.name : 'Why We Need Name';
//         return(
//         <View>
//             <View style={styles.myView}>
//                 <Text style={styles.myText}>{name}</Text>
//                 <Text style={styles.myText}>{this.state.mess}</Text>
//             </View>
//             <TextInput 
//                 placeholder = "Enter Text Here..."
//                 onChange = {this.xalo}
//                 onSubmitEditing  = {this.kalo}
//             />

//             <View style={styles.cont}>
//                 <TouchableHighlight
//                     onPress={this.chalo}
//                     style={styles.p1}
//                     underlayColor = 'yellow'
//                     >  
//                     <View>
//                         <Text>The First</Text>
//                     </View>
//                 </TouchableHighlight>
//                 <TouchableOpacity
//                     style={styles.p2}
//                     onPress={this.chalo2}>
//                     <View >
//                         <Text>The Second</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <View style={styles.p3}>
//                     <Text>The Third</Text>
//                 </View>
//             </View>
//             <Switch
//                 value = {this.state.flag}
//                 onValueChange = {(val) => this.handleKaro(val)}
//             />
//             <ListView
//                 dataSource = {this.state.userDataSource}
//                 renderRow = {this.renderRow.bind(this)}
//             />
//         </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     myView : {
//         backgroundColor : 'black'
//     },
//     myText : {
//         color : 'white'
//     },
//     cont : {
//         flexDirection : 'row',
//         backgroundColor : 'red',
//         height : 100
//     },
//     p1 : {
//         flex : 1
//     },
//     p2 : {
//         flex : 1,
//         color : 'green'
//     },
//     p3 : {
//         flex : 1,
//         color : 'blue'
//     },
//     row : {
//         flexDirection : 'row',
//         justifyContent: 'center',
//         padding: 10,
//         backgroundColor : 'gray',
//         marginBottom: 3
//     },
//     rowText : {
//         flex : 1
//     }
// });