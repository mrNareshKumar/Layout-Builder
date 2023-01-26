// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavBar, showRightNavBar} = value

      return (
        <div className="body_container">
          {showLeftNavBar ? (
            <div className="left_Navbar">
              <h1 className="body_heading">Left Navbar Menu</h1>
              <ul className="list_items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content_container">
              <h1 className="body_heading">Content</h1>
              <p className="body_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavBar ? (
            <div className="right_Navbar">
              <h1 className="body_heading">Right Navbar</h1>
              <div className="adBox_container">
                <p className="ad">Ad 1</p>
                <p className="ad">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
