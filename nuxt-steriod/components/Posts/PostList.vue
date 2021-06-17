<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      preview-text="This my first post!"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      preview-text="This my second post!"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there - the second time!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      preview-text="This my third post!"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hi!"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
