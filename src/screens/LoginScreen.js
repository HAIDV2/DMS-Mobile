import { WebView, WebViewNavigation } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState } from 'react';

export default function Login() {

    const onMessage = async (event) => {
      try {
        const data = JSON.parse(event.nativeEvent.data);
       await AsyncStorage.setItem('userLogin', JSON.stringify(data));
      } catch (error) {
        console.error('Lỗi khi xử lý dữ liệu đăng nhập:', error);
      }
    };

    return <WebView source={{ uri: '172.16.109.165:2010/Account/Login' }} style={{ flex: 1 }}
        onMessage={onMessage}
    />;
}