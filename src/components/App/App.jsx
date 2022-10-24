import { Component } from 'react';
import css from './App.module.css';
import Section from 'components/Section';
import FeedbackOptions from 'components/Feedback';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHandler = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    if (!good) {
      return 0;
    }
    return ((good / (good + bad + neutral)) * 100).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className={css.app}>
        <div className={css.wrapper}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              title="Please leave feedback"
              onLeaveFeedback={this.feedbackHandler}
              options={['good', 'neutral', 'bad']}
            />
          </Section>
          <Section title="Statistics">
            {total === 0 ? (
              <Notification message="There is no feedback 🥺" />
            ) : (
              <Statistics
                title="Statistics"
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
