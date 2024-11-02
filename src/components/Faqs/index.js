// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="faq-list-container">
            {faqsList.map(eachList => (
              <FaqItem key={eachList.id} faqDetails={eachList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
