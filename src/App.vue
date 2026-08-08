<template>
  <div class="app-container">
    <header class="header">
      <h1 class="title">2026 宅建士 核心考点通关卡</h1>
      <div class="stats-box">
        掌握进度：{{ stats.mastered }} / {{ stats.total }}（{{ stats.percent }}%） 
        | 需复习: {{ stats.review }} | 未刷: {{ stats.unlearned }}
      </div>
    </header>

    <!-- 科目分类 Tab -->
    <div class="tab-group">
      <button 
        v-for="tab in tabs" 
        :key="tab.key" 
        :class="['tab-btn', { active: category === tab.key }]"
        @click="category = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- 卡片区域 -->
    <div v-if="currentCard" class="card-wrapper">
      <div class="card-meta">
        <span class="category-tag">[{{ currentCard.category }}] {{ currentCard.title }}</span>
        <span class="counter">{{ currentIndex + 1 }} / {{ filteredQuestions.length }}</span>
      </div>

      <div class="card" @click="isFlipped = !isFlipped">
        <div class="question-text">{{ currentCard.question }}</div>
        
        <div v-if="isFlipped" class="answer-box">
          <div class="answer-title">【核心解析 / 正确答案】</div>
          <div class="answer-text">{{ currentCard.answer }}</div>
        </div>
        <div v-else class="flip-hint">
          💡 点击卡片查看答案与解析
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="action-grid">
        <button :disabled="currentIndex === 0" @click="prevCard">上一题</button>
        <button class="btn-review" @click="markStatus(1)">⚠️ 标记模糊</button>
        <button class="btn-master" @click="markStatus(2)">✅ 标记掌握</button>
        <button :disabled="currentIndex === filteredQuestions.length - 1" @click="nextCard">下一题</button>
      </div>
    </div>

    <div v-else class="empty-state">
      🎉 当前分类下暂无题库卡片
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { getQuestionsByCategory, getUserProgress, saveCardStatus } from './utils/dataLoader';

const category = ref('all');
const currentIndex = ref(0);
const isFlipped = ref(false);
const progress = ref({});

const tabs = [
  { key: 'all', label: '全部' },
  { key: 'gyohou', label: '宅建業法' },
  { key: 'kenri', label: '権利関係' },
  { key: 'hourei', label: '法令上の制限' },
  { key: 'zeitsu', label: '税・その他' }
];

onMounted(() => {
  progress.value = getUserProgress();
});

const rawQuestions = computed(() => {
  return getQuestionsByCategory(category.value);
});

const filteredQuestions = computed(() => rawQuestions.value);

const currentCard = computed(() => filteredQuestions.value[currentIndex.value] || null);

const stats = computed(() => {
  const total = rawQuestions.value.length;
  let mastered = 0, review = 0, unlearned = 0;
  rawQuestions.value.forEach(q => {
    const st = progress.value[q.id] || 0;
    if (st === 2) mastered++;
    else if (st === 1) review++;
    else unlearned++;
  });
  return {
    total,
    mastered,
    review,
    unlearned,
    percent: total ? Math.round((mastered / total) * 100) : 0
  };
});

watch(category, () => {
  currentIndex.value = 0;
  isFlipped.value = false;
});

const markStatus = (status) => {
  if (!currentCard.value) return;
  saveCardStatus(currentCard.value.id, status);
  progress.value = getUserProgress();
  isFlipped.value = false;
  if (currentIndex.value < filteredQuestions.value.length - 1) {
    currentIndex.value++;
  }
};

const nextCard = () => {
  if (currentIndex.value < filteredQuestions.value.length - 1) {
    currentIndex.value++;
    isFlipped.value = false;
  }
};

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    isFlipped.value = false;
  }
};
</script>

<style scoped>
.app-container {
  max-width: 680px;
  margin: 0 auto;
  padding: 20px 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1f2937;
}

.header {
  margin-bottom: 16px;
  text-align: center;
}

.title {
  font-size: 20px;
  margin-bottom: 8px;
}

.stats-box {
  background: #f3f4f6;
  padding: 10px;
  border-radius: 8px;
  font-size: 13px;
  color: #4b5563;
}

.tab-group {
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
  overflow-x: auto;
}

.tab-btn {
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
  white-space: nowrap;
}

.tab-btn.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
  color: #6b7280;
}

.category-tag {
  color: #2563eb;
  font-weight: 600;
}

.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  min-height: 220px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.question-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

.answer-box {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px dashed #d1d5db;
}

.answer-title {
  font-size: 12px;
  font-weight: bold;
  color: #059669;
  margin-bottom: 4px;
}

.answer-text {
  font-size: 14px;
  color: #064e3b;
  white-space: pre-line;
  line-height: 1.6;
}

.flip-hint {
  text-align: center;
  font-size: 12px;
  color: #9ca3af;
  margin-top: 24px;
}

.action-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
  margin-top: 12px;
}

.action-grid button {
  padding: 10px 0;
  font-size: 12px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
}

.action-grid button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-review {
  background: #f59e0b !important;
  color: #fff !important;
  border: none !important;
  font-weight: 600;
}

.btn-master {
  background: #10b981 !important;
  color: #fff !important;
  border: none !important;
  font-weight: 600;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #9ca3af;
}
</style>
