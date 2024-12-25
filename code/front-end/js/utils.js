// Utility functions for MoodTracker
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  function capitalizeMood(mood) {
    return mood.charAt(0).toUpperCase() + mood.slice(1);
  }
  