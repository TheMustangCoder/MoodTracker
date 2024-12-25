document.addEventListener('DOMContentLoaded', () => {
    const moodSelect = document.getElementById('mood-select');
    const saveMoodButton = document.getElementById('save-mood');
    const moodList = document.getElementById('mood-list');
  
    // Load moods from local storage
    const moods = JSON.parse(localStorage.getItem('moods')) || [];
  
    // Save mood entry
    saveMoodButton.addEventListener('click', () => {
      const selectedMood = moodSelect.value;
      const moodEntry = {
        mood: selectedMood,
        date: new Date().toLocaleDateString()
      };
  
      moods.push(moodEntry);
      localStorage.setItem('moods', JSON.stringify(moods));
      updateMoodList();
    });
  
    // Update mood log
    function updateMoodList() {
      moodList.innerHTML = '';
      moods.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.date}: ${entry.mood}`;
        moodList.appendChild(listItem);
      });
    }
  
    // Initial load
    updateMoodList();
  });
  