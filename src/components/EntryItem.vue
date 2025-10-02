<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true }
})


const firstLink = computed(() => props.item?.links?.[0] || null)
const badges = computed(() => props.item?.badges ?? [])
const links  = computed(() => props.item?.links  ?? [])
</script>

<template>
  <div class="entry">
    <img class="thumb" :src="item.thumb || '/images/placeholder.png'" alt="" />
    <div>
      <div class="title">
        <a v-if="firstLink" :href="firstLink.href" target="_blank">{{ item.title }}</a>
        <span v-else>{{ item.title }}</span>
      </div>

      <div class="meta" style="margin:4px 0 6px">
        {{ item.authors }}<span v-if="item.venue"> · {{ item.venue }}</span>
      </div>

      <div v-if="badges.length" class="badges" style="margin-bottom:6px">
        <span v-for="b in badges" :key="b" class="badge">{{ b }}</span>
      </div>

      <div v-if="item.desc" style="margin:6px 0">{{ item.desc }}</div>

      <div v-if="links.length" style="margin-top:6px">
        <a v-for="(l,i) in links" :key="i" :href="l.href" target="_blank" style="margin-right:12px">
          {{ l.text }}
        </a>
      </div>
    </div>
  </div>
</template>
