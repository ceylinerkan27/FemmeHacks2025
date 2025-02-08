import React, { useState } from 'react';
import './Journal.css';

function Journal() {
  const [entry, setEntry] = useState(''); // State for user input
  const [recommendation, setRecommendation] = useState(''); // State for recommendation
  const [activeTab, setActiveTab] = useState('anxiety'); // State for active tab

  const handleInputChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecommendation(entry);
  };

  const getRecommendation = (text) => {
    const keywords = [
      'anxious', 'stressed', 'sad', 
      'happy', 'angry', 'overwhelmed', 
      'excited', 'lonely'
    ];

    const recs = {
      anxious: 'Try some deep breathing exercises or meditation.',
      stressed: 'Take a break and go for a walk outside to clear your mind.',
      sad: 'Connect with a friend or family member for support.',
      happy: 'Keep doing what makes you feel happy and celebrate small wins!',
      angry: 'Take a moment to cool down, try journaling or venting to release your frustration.',
      overwhelmed: 'Break down tasks into smaller, manageable steps. Prioritize and take breaks.',
      excited: 'Channel your excitement into a creative outlet or share your excitement with others.',
      lonely: 'Reach out to someone you trust, or consider joining a group or community activity.'
    };

    // Find the first keyword that matches the text
    for (let keyword of keywords) {
      if (text.includes(keyword)) {
        setRecommendation(recs[keyword]);
        return;
      }
    }

    setRecommendation('No specific recommendation for how you’re feeling, but stay positive!');
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const resourceContent = {
    anxiety: (
      <ul>
        <li>
          <a href="https://www.anxiety.org" target="_blank" rel="noopener noreferrer">
            Anxiety Resources
          </a>
        </li>
        <li>
          <a href="https://www.headspace.com/meditation" target="_blank" rel="noopener noreferrer">
            Meditation for Calmness
          </a>
        </li>
      </ul>
    ),
    stress: (
      <ul>
        <li>
          <a href="https://www.stress.org" target="_blank" rel="noopener noreferrer">
            Coping with Stress
          </a>
        </li>
        <li>
          <a href="https://www.mindful.org" target="_blank" rel="noopener noreferrer">
            Mindful Practices to Reduce Stress
          </a>
        </li>
      </ul>
    ),
    sadness: (
      <ul>
        <li>
          <a href="https://www.verywellmind.com/ways-to-cope-with-sadness-5093285" target="_blank" rel="noopener noreferrer">
            Dealing with Sadness
          </a>
        </li>
        <li>
          <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer">
            Talk to a Therapist Online
          </a>
        </li>
      </ul>
    ),
    loneliness: (
      <ul>
        <li>
          <a href="https://www.psychologytoday.com/us/blog/living-forward/202005/how-deal-loneliness" target="_blank" rel="noopener noreferrer">
            How to Deal with Loneliness
          </a>
        </li>
        <li>
          <a href="https://www.meetup.com" target="_blank" rel="noopener noreferrer">
            Join a Group Near You
          </a>
        </li>
      </ul>
    )
  };

  const textArea = document.querySelector('textarea')
    const textRowCount = textArea ? textArea.value.split("\n").length : 0
    const rows = textRowCount + 1
    return (
        <div className="journal-container">
            <h1 className = 'PageTitle'>Journal</h1>
            <form onSubmit={handleSubmit}>
        <textarea
            value={entry}
            onChange={handleInputChange}
            placeholder="How are you feeling today? Input your thoughts and we'll respond with some resources!"
            rows={rows}
        ></textarea>
                <button type="submit">Submit</button>
            </form>

            {recommendation && (
                <div className="recommendation-section">
                    <h2>Recommendation:</h2>
                    <p>{recommendation}</p>
                </div>
            )}


      {/* Mental Health Resources Tabs */}
      <div className="resources-section">
        <h2>Mental Health Resources</h2>
        <div className="tabs">
          <button 
            className={activeTab === 'anxiety' ? 'active-tab' : ''} 
            onClick={() => changeTab('anxiety')}
          >
            Anxiety
          </button>
          <button 
            className={activeTab === 'stress' ? 'active-tab' : ''} 
            onClick={() => changeTab('stress')}
          >
            Stress
          </button>
          <button 
            className={activeTab === 'sadness' ? 'active-tab' : ''} 
            onClick={() => changeTab('sadness')}
          >
            Sadness
          </button>
          <button 
            className={activeTab === 'loneliness' ? 'active-tab' : ''} 
            onClick={() => changeTab('loneliness')}
          >
            Loneliness
          </button>
        </div>

        <div className="resource-content">
          {resourceContent[activeTab]}
        </div>
      </div>
    </div>
  );
}

export default Journal;
