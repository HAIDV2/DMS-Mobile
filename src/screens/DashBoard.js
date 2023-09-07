import { WebView, WebViewNavigation } from 'react-native-webview';

export default function DashBoard() {
    return <WebView source={{ uri: '172.16.109.165:2010/DMSMobile/Dashboard' }} style={{ flex: 1 }}
    />;
}