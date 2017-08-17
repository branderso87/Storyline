import React from 'react'
import ReactDOM from 'react-dom'
import '.styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BaseLayout} from './component/BaseLayout'
import {Home} from './component/Home'
import {Profile} from './component/Profile'
import {StoryMap} from './component/StoryMap'
import {About} from './component/About'

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
