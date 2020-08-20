import { createAppContainer } from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import UserScreen from "./screens/users";
import PostsScreen from "./screens/posts";
import DetailScreen from "./screens/detail";


UserScreen.navigationOptions = {
  title:"Usuarios",
}

PostsScreen.navigationOptions= ({ navigation }) =>{
  return {
    title: "Posts De: " + navigation.getParam("name")
  }
}

DetailScreen.navigationOptions= ({ navigation }) =>{
  return {
    title: navigation.getParam("title")
  }
}

const AppNavigator = createStackNavigator({
  Users: {
    screen: UserScreen,
  },
  Posts:{
    screen: PostsScreen,
  },
  Detail:{
    screen: DetailScreen
  },

},
{
  initialRouname:"Users",
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: "cyan",
    },
    headerTitleStyle:{
      textAlign:"center",
      fontWeight:"bold",
    }
  }
})

export default createAppContainer(AppNavigator)
