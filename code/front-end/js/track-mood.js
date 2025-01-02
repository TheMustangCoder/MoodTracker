const tracker = document.getElementById('tracker');
const modal = document.getElementById('journal-modal');
const journalEntry = document.getElementById('journal-entry');
const saveEntryButton = document.getElementById('save-entry');

// Generate days for the current month
const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
const journalData = JSON.parse(localStorage.getItem('journalData')) || {};

for (let day = 1; day <= daysInMonth; day++) {
  const dayDiv = document.createElement('div');
  dayDiv.className = 'day';
  dayDiv.innerText = day;

  // Highlight days with entries
  if (journalData[day]) {
    dayDiv.classList.add('journaled');
  }

  dayDiv.addEventListener('click', () => openJournalModal(day));
  tracker.appendChild(dayDiv);
}

// Open modal for journaling
function openJournalModal(day) {
  modal.style.display = 'flex';
  journalEntry.value = journalData[day] || '';
  saveEntryButton.onclick = () => saveJournalEntry(day);
}

// Save journal entry
function saveJournalEntry(day) {
  const entry = journalEntry.value.trim();

  if (entry) {
    journalData[day] = entry;
    localStorage.setItem('journalData', JSON.stringify(journalData));
    document.querySelectorAll('.day')[day - 1].classList.add('journaled');
  }

  modal.style.display = 'none';
}

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
