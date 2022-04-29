
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge,Text } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
export default class FooterTabs extends Component {
    
        state = {
            fontsAreLoaded: false,
        };
        
        async componentWillMount() {
            await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            });
        
            this.setState({ fontsAreLoaded: true });
        }
    
    render() {
        if (!this.state.fontsAreLoaded) {
            return <AppLoading />;
        }
        return (
    
            <Footer>
            <FooterTab>
                <Button badge vertical>
                <Badge><Text>2</Text></Badge>
                <Icon name="apps" />
                <Text>Apps</Text>
                </Button>
                <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
                </Button>
                <Button active badge vertical>
                <Badge ><Text>51</Text></Badge>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
                </Button>
                <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
                </Button>
            </FooterTab>
            </Footer>
        
        );
    }
}