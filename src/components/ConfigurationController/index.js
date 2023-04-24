import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const toggleContentNavbar = () => {
        onToggleShowContent()
      }

      const toggleLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const toggleRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-container">
          <h1 className="configuration-heading">Layout</h1>
          <div className="configuration-checkbox-container">
            <div className="input-container">
              <input
                className="configuration-checkbox"
                type="checkbox"
                checked={showContent}
                id="checkbox1"
                onChange={toggleContentNavbar}
              />
              <label
                htmlFor="checkbox1"
                className="configuration-checkbox-label"
              >
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                className="configuration-checkbox"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={toggleLeftNavbar}
                id="checkbox2"
              />
              <label
                htmlFor="checkbox2"
                className="configuration-checkbox-label"
              >
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                className="configuration-checkbox"
                type="checkbox"
                checked={showRightNavbar}
                id="checkbox3"
                onChange={toggleRightNavbar}
              />
              <label
                htmlFor="checkbox3"
                className="configuration-checkbox-label"
              >
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
