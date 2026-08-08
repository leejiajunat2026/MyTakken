import gyohouData from '../data/gyohou.json';
import kenriData from '../data/kenri.json';
import houreiData from '../data/hourei.json';
import zeitsuData from '../data/zeitsu.json';

export function getQuestionsByCategory(categoryKey) {
  switch (categoryKey) {
    case 'gyohou': return gyohouData;
    case 'kenri': return kenriData;
    case 'hourei': return houreiData;
    case 'zeitsu': return zeitsuData;
    default: return [...gyohouData, ...kenriData, ...houreiData, ...zeitsuData];
  }
}

export function getUserProgress() {
  const saved = localStorage.getItem('takken_2026_progress');
  return saved ? JSON.parse(saved) : {};
}

export function saveCardStatus(cardId, status) {
  const currentProgress = getUserProgress();
  currentProgress[cardId] = status;
  localStorage.setItem('takken_2026_progress', JSON.stringify(currentProgress));
}
