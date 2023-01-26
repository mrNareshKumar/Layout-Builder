import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavBar: true,
    showRightNavBar: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavBar, showRightNavBar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavBar,
          showRightNavBar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
