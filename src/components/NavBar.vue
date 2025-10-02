<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => ([
      { text: 'About', href: '#about' },
      { text: 'News', href: '#news' },
      { text: 'Publications', href: '#publications' },
      { text: 'Projects', href: '#projects' },
      { text: 'Contact', href: '#contact' }
    ])
  },
  sticky: { type: Boolean, default: true }
})
</script>

<template>
  <nav class="nav" :style="sticky ? '' : 'position:static;border-bottom:none'">
    <div class="container" style="padding:0">
      <a v-for="i in items" :key="i.href" :href="i.href">{{ i.text }}</a>
    </div>
  </nav>
</template>
