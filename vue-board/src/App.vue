<template>
  <div>
    <nav>
      <router-link to="/posts">목록</router-link> |
      <router-link to="/posts/new">글쓰기</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  margin-bottom: 1.5rem;
  background-color: #605adf; /* 연보라색 배경 */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(96, 90, 223, 0.3);
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

nav a {
  color: #f0efff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a.router-link-exact-active {
  background-color: #483dcf; /* 진한 보라 */
  color: #fff;
  box-shadow: 0 0 8px rgba(72, 61, 207, 0.7);
}

nav a:hover {
  background-color: #7f75ff;
  color: #fff;
  box-shadow: 0 2px 8px rgba(127, 117, 255, 0.7);
}
</style>
