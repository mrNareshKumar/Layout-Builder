// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavBar,
        showRightNavBar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="configurationControls_container">
          <div className="responsiveControls_container">
            <h1 className="heading">Layout</h1>
            <div className="checkbox_group">
              <div className="checkbox_container">
                <input
                  id="content"
                  type="checkbox"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label className="label_text" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox_container">
                <input
                  id="leftNavbar"
                  type="checkbox"
                  checked={showLeftNavBar}
                  onChange={onChangeLeftNavbar}
                />
                <label className="label_text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox_container">
                <input
                  id="rightNavbar"
                  type="checkbox"
                  checked={showRightNavBar}
                  onChange={onChangeRightNavbar}
                />
                <label className="label_text" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
