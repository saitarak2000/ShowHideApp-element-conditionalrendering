// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {visible: 'Hide', visiblelast: 'Hide'}

  Firstname = () => {
    const {visible} = this.state
    if (visible === 'Hide') {
      this.setState(() => ({visible: 'Show'}))
      console.log(visible)
    } else {
      this.setState(() => ({visible: 'Hide'}))
      console.log(visible)
    }
  }

  Lastname = () => {
    const {visiblelast} = this.state
    if (visiblelast === 'Hide') {
      this.setState(() => ({visiblelast: 'Show'}))
      console.log(visiblelast)
    } else {
      this.setState(() => ({visiblelast: 'Hide'}))
      console.log(visiblelast)
    }
  }

  render() {
    const {visible, visiblelast} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="Button-controls">
          <div className="items">
            <button type="submit" onClick={this.Firstname}>
              Show/Hide Firstname
            </button>

            {visible === 'Show' ? (
              <div className="display-message">
                <p className="firstname">Joe</p>
              </div>
            ) : null}
          </div>
          <div className="items">
            <button type="submit" onClick={this.Lastname}>
              Show/Hide Lastname
            </button>
            {visiblelast === 'Show' ? (
              <div className="display-message">
                <p className="firstname">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
