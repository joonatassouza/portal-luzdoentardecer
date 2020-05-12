import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Post from './Pages/Post';
import Register from './Pages/Register';
import DocumentsList from './Pages/Documents/List';
import DocumentDetail from './Pages/Documents/Detail';
import MidiasDetail from './Pages/Midias/Detail';
import VideoDetail from './Pages/Video/Detail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" exact component={Post} />
        <Route path="/register" exact component={Register} />
        <Route path="/mensagens" exact component={DocumentsList} />
        <Route path="/mensagem" exact component={DocumentDetail} />
        <Route path="/midias" exact component={MidiasDetail} />
        <Route path="/video" exact component={VideoDetail} />
      </Switch>
    </BrowserRouter>
  );
}
