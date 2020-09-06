import React, { Component } from 'react';
import FeedbackOptions from './components/feedback/FeedbackOptions';
import Section from './components/section/Section';
import Statistics from './components/statistics/Statistics';
import Notification from './components/notification/Notification';


export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const totalFeedback = good + neutral + bad;
        return totalFeedback;
    };
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const positiveFeedbackPercentage =
            ((good / this.countTotalFeedback()) * 100).toFixed(1);
        return Number(positiveFeedbackPercentage);
    };
    onLeaveFeedback = event => {
        const { name } = event.target;
        // console.log(event.target);
        this.setState(prevState => ({ [name]: prevState[name] + 1 }));
        
    };

    render() {
        // const { good, neutral, bad } = this.state;

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>
                <Section title="Statistic">
                    {this.countTotalFeedback() > 0 ? (
                        <Statistics
                        options={this.state}
                            // good={good}
                            // neutral={neutral}
                            // bad={bad}
                            total={this.countTotalFeedback()}
                            positiveFeedback={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        < Notification message="No feedback given" />
                    )
                    }
                </Section>
            </>
        );
    }
}
