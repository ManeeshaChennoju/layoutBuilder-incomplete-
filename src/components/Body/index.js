import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body_container">
          {showLeftNavbar && (
            <ul className="left_nav_container">
              <h1 className="body_headings">Left Navbar Menu</h1>
              <ul className="ul_items_container">
                <li className="li_item">Item 1</li>
                <li className="li_item">Item 2</li>
                <li className="li_item">Item 3</li>
                <li className="li_item">Item 4</li>
              </ul>
            </ul>
          )}

          {showContent && (
            <div className="content_container">
              <h1 className="body_headings">Content</h1>
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                eim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right_nav_container">
              <h1 className="body_headings">Right Navbar Menu</h1>
              <div className="boxes">
                <p className="adds">Ad 1</p>
              </div>
              <div className="boxes">
                <p className="adds">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
