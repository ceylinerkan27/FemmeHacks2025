import React from 'react';
import './Journal.css';

function Journal() {
  const [entry, setEntry] = useState(''); // State for user input
  const [recommendation, setRecommendation] = useState(''); // State for recommendation

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
      // we can edit with specific links to resources
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

  return (
    <div>
      <h1>Journal</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={handleInputChange}
          placeholder="How are you feeling today? Input your thoughts and we'll respond with some resources!"
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {recommendation && (
        <div>
          <h2>Recommendation:</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default Journal;
