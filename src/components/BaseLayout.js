import React, {Component} from 'react'
import './styles/css'
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header>
          <nav>
            <NavLink className='mainNav' to='/'>Storyline</NavLink>
            <ul>
              <li><NavLink className='mainNav' to='/storymap/:id'>New Story Map</NavLink></li>
              <li><NavLink className='mainNav' to='/login'>Login</NavLink></li>
              <li><NavLink className='mainNav' to='/profile'>Profile</NavLink></li>
              <li><NavLink className='mainNav' to='/logout'>Logout</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
