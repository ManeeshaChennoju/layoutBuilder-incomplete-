import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="controller_container">
          <h1 className="controller_heading">Layout</h1>
          <ul className="ul_inputs_container">
            <li>
              <input
                id="content"
                type="checkbox"
                checked={showContent}
                className="checkboxes"
                onChange={this.onToggleShowContent}
              />
              <label className="labels" htmlFor="content">
                Content
              </label>
            </li>
            <li>
              <input
                id="leftNavbar"
                type="checkbox"
                checked={showLeftNavbar}
                className="checkboxes"
                onChange={this.onToggleShowLeftNavbar}
              />
              <label className="labels" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </li>
            <li>
              <input
                id="rightNavbar"
                type="checkbox"
                checked={showRightNavbar}
                className="checkboxes"
                onChange={this.onToggleShowRightNavbar}
              />
              <label className="labels" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      </ConfigurationContext.Provider>
    )
  }
}
export default ConfigurationController

/* <div className="controller_container">
        <h1 className="controller_heading">Layout</h1>
        <ul className="ul_inputs_container">
          <li>
            <input id="content" type="checkbox" className="checkboxes" />
            <label className="labels" htmlFor="content">
              Content
            </label>
          </li>
          <li>
            <input id="leftNavbar" type="checkbox" className="checkboxes" />
            <label className="labels" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </li>
          <li>
            <input id="rightNavbar" type="checkbox" className="checkboxes" />
            <label className="labels" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </li>
        </ul>
</div> */
