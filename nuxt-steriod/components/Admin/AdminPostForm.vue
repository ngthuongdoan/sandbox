<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author"> Author Name </AppControlInput>
    <AppControlInput v-model="editedPost.title"> Title </AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">
      Thumbnail Link
    </AppControlInput>
    <AppControlInput v-model="editedPost.content" control-type="textarea">
      Content
    </AppControlInput>
    <AppButton type="submit"> Save </AppButton>
    <AppButton
      btn-style="cancel"
      style="margin-left: 10px"
      type="button"
      @click="onCancel"
    >
      Cancel
    </AppButton>
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput';
import AppButton from '@/components/UI/AppButton';

export default {
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnailLink: '',
            content: '',
          },
    };
  },
  methods: {
    async onSave() {
      // Save the post
      await this.$axios.$post('/posts', this.editedPost);
      await this.$router.push('/admin');
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin');
    },
  },
};
</script>
