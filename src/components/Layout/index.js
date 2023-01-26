// Write your code here
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

const Layout = () => (
  <div className="layout_container">
    <div className="responsive_container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
