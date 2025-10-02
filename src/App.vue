<script setup>
import { profile, news, publications, projects, footer } from './data/site'
import EntryItem from './components/EntryItem.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div>
    <!-- 顶部头像 + 姓名 + 链接 -->
    <header class="container" style="padding-bottom:0">
      <div class="header">
        <img class="photo" :src="profile.photo" alt="avatar" />
        <div>
          <h1 class="h1">{{ profile.name }}</h1>
          <div class="summary">{{ profile.title }}</div>
          <div class="summary"> {{ profile.summary }}</div>
          <div class="links" style="margin-top:10px">
            <a v-for="l in profile.links" :key="l.href" :href="l.href" target="_blank">{{ l.text }}</a>
          </div>
        </div>
      </div>
    </header>

    <!-- 顶部锚点导航（粘性） -->
    <NavBar />

    <!-- About -->
    <main class="container">
      <section id="about" class="section">
        <h2>About</h2>
        <p>
          我目前就读于南京农业大学人工智能专业（本科），研究/实践兴趣在计算机视觉、机器学习、大语言模型、知识图谱，关注从模型到系统的落地。
          曾参与病害分级一体化系统、票房预测平台与操作系统模拟等项目。26年入学东南大学计软智学院攻读计算机技术硕士学位。
        </p>
      </section>

      <!-- News -->
      <section id="news" class="section news">
        <h2>News</h2>
        <ul>
          <li v-for="n in news" :key="n.date">
            <span class="date">{{ n.date }}</span> {{ n.text }}
          </li>
        </ul>
      </section>

      <!-- Publications -->
      <section id="publications" class="section">
        <h2>Publications</h2>
        <EntryItem v-for="(p, i) in publications" :key="i" :item="p" />
      </section>

      <!-- Projects -->
      <section id="projects" class="section">
        <h2>Projects</h2>
        <ul class="project-list">
          <li v-for="(p,i) in projects" :key="i">
            <EntryItem :item="p"></EntryItem>
          </li>
        </ul>
      </section>

      <!-- Contact -->
      <section id="contact" class="section">
        <h2>Contact</h2>
        <p>
          <b>Email:</b> <a :href="profile.links.find(l=>l.text==='Email')?.href?.toString()">{{ profile.links.find(l=>l.text==='Email')?.href?.replace('mailto:','') }}</a><br />
          <b>GitHub:</b> <a :href="profile.links.find(l=>l.text==='GitHub')?.href" target="_blank">{{ profile.links.find(l=>l.text==='GitHub')?.href }}</a>
        </p>
      </section>

      <div class="footer">{{ footer }}</div>
    </main>
  </div>
</template>

