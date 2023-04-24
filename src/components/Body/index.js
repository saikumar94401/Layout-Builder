import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const LeftNavbarMenu = () => (
    <div className="left-navbar-container">
      <h1 className="left-navbar-heading">Left Navbar Menu</h1>
      <ul className="left-navbar-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )

  const Content = () => (
    <div className="content-container">
      <h1 className="content-container-heading">Content</h1>
      <p className="content-para">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially u
      </p>
    </div>
  )

  const RightNavbarMenu = () => (
    <div className="left-navbar-container">
      <h1 className="left-navbar-heading">Right Navbar Menu</h1>
      <div className="add-container">
        <p className="add-content">Ad 1</p>
      </div>
      <div className="add-container">
        <p className="add-content">Ad 2</p>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar && <LeftNavbarMenu />}
            {showContent && <Content />}
            {showRightNavbar && <RightNavbarMenu />}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
