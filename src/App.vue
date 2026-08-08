<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans pb-10">
    <header class="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-20">
      <div class="max-w-md mx-auto flex justify-between items-center">
        <div>
          <h1 class="text-xl font-bold tracking-wide">宅建 2026 速记卡</h1>
          <p class="text-xs text-indigo-200 mt-0.5">重难点: {{ starredCount }} / {{ cards.length }}</p>
        </div>
        <button @click="showOnlyStarred = !showOnlyStarred" :class="['px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1', showOnlyStarred ? 'bg-amber-400 text-slate-900' : 'bg-indigo-500 text-white']">
          <span>★ 错题/重点</span>
          <span class="bg-indigo-900/30 px-1.5 py-0.5 rounded-full text-[10px]">{{ starredCount }}</span>
        </button>
      </div>
    </header>
    <main class="max-w-md mx-auto w-full px-4 mt-4 flex-1 flex flex-col gap-4">
      <section class="flex flex-col gap-2">
        <input v-model="searchQuery" type="text" placeholder="搜索考点（如：35条、代理）..." class="w-full px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"/>
        <div class="flex gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat" :class="['px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium', selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border border-slate-200']">{{ cat }}</button>
        </div>
      </section>
      <section v-if="filteredCards.length > 0" class="flex-1 flex flex-col justify-center items-center py-2">
        <div class="w-full aspect-[4/5] perspective-1000 relative cursor-pointer" @click="isFlipped = !isFlipped">
          <div :class="['w-full h-full duration-500 transform-style-3d transition-transform relative rounded-2xl shadow-lg', isFlipped ? 'rotate-y-180' : '']">
            <div class="absolute inset-0 bg-white rounded-2xl p-6 flex flex-col justify-between backface-hidden border border-slate-100">
              <div class="flex justify-between items-center">
                <span class="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-bold">{{ currentCard.category }}</span>
                <button @click.stop="toggleStar(currentCard.id)" class="text-2xl transition-transform active:scale-125">
                  <span :class="currentCard.isStarred ? 'text-amber-400' : 'text-slate-300'">★</span>
                </button>
              </div>
              <div class="my-auto text-center">
                <h3 class="text-lg font-bold text-slate-800 leading-snug mb-2">{{ currentCard.title }}</h3>
                <p class="text-sm text-slate-600">{{ currentCard.question }}</p>
              </div>
              <div class="text-center text-xs text-slate-400 font-medium">点击卡片翻面看解析 🔄</div>
            </div>
            <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between backface-hidden rotate-y-180 border border-slate-800">
              <div class="flex justify-between items-center">
                <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded-md text-xs font-semibold">【解答/要点】</span>
                <span class="text-xs text-slate-400">#{{ currentCard.id }}</span>
              </div>
              <div class="my-auto">
                <p class="text-base font-medium leading-relaxed text-slate-100">{{ currentCard.answer }}</p>
                <div v-if="currentCard.tags" class="flex flex-wrap gap-1 mt-4">
                  <span v-for="tag in currentCard.tags" :key="tag" class="text-[10px] bg-slate-800 text-indigo-300 px-2 py-0.5 rounded">#{{ tag }}</span>
                </div>
              </div>
              <div class="text-center text-xs text-slate-500">点击卡片返回正面</div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between w-full mt-6 px-2">
          <button @click="prevCard" :disabled="currentIndex === 0" class="px-4 py-2 bg-white text-slate-700 rounded-xl shadow-sm border border-slate-200 disabled:opacity-40 text-sm font-medium">← 上一题</button>
          <span class="text-xs font-semibold text-slate-500">{{ currentIndex + 1 }} / {{ filteredCards.length }}</span>
          <button @click="nextCard" :disabled="currentIndex === filteredCards.length - 1" class="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-sm disabled:opacity-40 text-sm font-medium">下一题 →</button>
        </div>
      </section>
      <div v-else class="flex-1 flex flex-col items-center justify-center text-slate-400 gap-2 py-12">
        <p class="text-sm">没有匹配到相关的考点内容。</p>
        <button @click="resetFilters" class="text-xs text-indigo-600 underline">重置筛选条件</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { takkenData } from './data/takkenData.js'

const categories = ["全部", "宅建業法", "権利関係", "法令上の制限", "税・その他"]
const selectedCategory = ref("全部")
const searchQuery = ref("")
const showOnlyStarred = ref(false)
const isFlipped = ref(false)
const currentIndex = ref(0)
const cards = ref([])

onMounted(() => {
  const savedStars = JSON.parse(localStorage.getItem('takken_stars') || '[]')
  cards.value = takkenData.map(card => ({ ...card, isStarred: savedStars.includes(card.id) }))
})

const filteredCards = computed(() => cards.value.filter(card => {
  const matchCat = selectedCategory.value === "全部" || card.category === selectedCategory.value
  const matchSearch = card.title.includes(searchQuery.value) || card.question.includes(searchQuery.value) || card.answer.includes(searchQuery.value)
  const matchStar = !showOnlyStarred.value || card.isStarred
  return matchCat && matchSearch && matchStar
}))

const currentCard = computed(() => filteredCards.value[currentIndex.value] || {})
const starredCount = computed(() => cards.value.filter(c => c.isStarred).length)

const nextCard = () => { if (currentIndex.value < filteredCards.value.length - 1) { isFlipped.value = false; currentIndex.value++; } }
const prevCard = () => { if (currentIndex.value > 0) { isFlipped.value = false; currentIndex.value--; } }
const toggleStar = (id) => {
  const card = cards.value.find(c => c.id === id)
  if (card) {
    card.isStarred = !card.isStarred
    localStorage.setItem('takken_stars', JSON.stringify(cards.value.filter(c => c.isStarred).map(c => c.id)))
  }
}
const resetFilters = () => { selectedCategory.value = "全部"; searchQuery.value = ""; showOnlyStarred.value = false; }
watch([selectedCategory, searchQuery, showOnlyStarred], () => { currentIndex.value = 0; isFlipped.value = false; })
</script>