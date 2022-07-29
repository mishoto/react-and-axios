import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title'
import FirstRequest from './examples/FirstRequest';
import Headers from './examples/Headers';
import PostRequest from './examples/PostRequest';
import GlobalInstance from './examples/GlobalInstance'
import CustomInstance from './examples/CustomInstance'
import Interceptors from './examples/Interceptors'
// import axios from './axios/global'

import './index.css';

const App = () => (
  <main>
    <Title/>
    {/* <FirstRequest/> */}
    {/* <Headers/> */}
    {/* <PostRequest/> */}
    {/* <GlobalInstance/> */}
    {/* <CustomInstance/> */}
    <Interceptors/>
  </main>
);
ReactDOM.render(<App />, document.getElementById('app'));
