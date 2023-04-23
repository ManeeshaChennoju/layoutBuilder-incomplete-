import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import Body from '../Body'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="layout_container">
          <Header />
          <Body />
          <Footer />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
