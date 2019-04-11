<template>
  <div>
    <PostList :posts="fetchedPosts"/>
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";
export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPosts: [
          {
            id: 1,
            title: "Article Title 1",
            subTitle: "Article Subtitle 1",
            text:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            author: "Orhan Asım"
          },
          {
            id: 2,
            title: "Article Title 2",
            subTitle: "Article Subtitle 2",
            text:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            author: "Orhan Asım"
          }
        ]
      });
    }, 2000);
  }
};
</script>
<style scoped></style>
