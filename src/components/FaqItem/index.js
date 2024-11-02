// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isQuestionOpen: false}

  onClickFaq = () => {
    console.log('click')
    this.setState(prevState => ({
      isQuestionOpen: !prevState.isQuestionOpen,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {id, questionText, answerText} = faqDetails
    const {isQuestionOpen} = this.state
    const plusOrMinusSrc = isQuestionOpen
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

    return (
      <li className="faq-list-item mb-4">
        <div className="ques-container">
          <h1 className="question">{questionText}</h1>
          <button className="faq-btn" onClick={this.onClickFaq}>
            <img src={plusOrMinusSrc} alt={isQuestionOpen ? 'minus' : 'plus'} />
          </button>
        </div>
        {isQuestionOpen && (
          <div className="ans-container">
            <hr className="hr-line" />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
