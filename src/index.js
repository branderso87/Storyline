import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import Profile from './components/Profile'
import StoryMap from './components/StoryMap'
import About from './components/About'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/storymap' component={StoryMap} />
        <Route exact path='/about' component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'))
registerServiceWorker()
