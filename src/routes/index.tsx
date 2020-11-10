import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Post from '../pages/Post';
import Register from '../pages/Register';
import DocumentsList from '../pages/Documents/List';
import DocumentDetail from '../pages/Documents/Detail';
import MidiasDetail from '../pages/Midias/Detail';
import VideoDetail from '../pages/Video/Detail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/post" exact component={Post} />
    <Route path="/register" exact component={Register} />
    <Route path="/mensagens" exact component={DocumentsList} />
    <Route path="/mensagem" exact component={DocumentDetail} />
    <Route path="/midias" exact component={MidiasDetail} />
    <Route path="/video" exact component={VideoDetail} />

    {/* <Route path="/dashboard" isPrivate component={Dashboard} />
    <Route path="/profile" isPrivate component={Profile} /> */}
  </Switch>
);

export default Routes;
