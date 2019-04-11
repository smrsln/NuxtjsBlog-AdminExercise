<template>
    <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="onSubmit">
        <fieldset>
            <legend v-if="isUpdate">Edit Blog Post</legend>
            <legend v-else>Add New Blog</legend>
            <div class="form-group">
                <label>Author Name</label>
                <input v-model="post.author" type="text" class="form-control" placeholder="Please enter the author name..">
            </div>
            <div class="form-group">
                <label>Title</label>
                <input v-model="post.title" type="text" class="form-control" placeholder="Please enter a title..">
            </div>
            <div class="form-group">
                <label>Subtitle</label>
                <input v-model="post.subTitle" type="text" class="form-control" placeholder="Please enter a subtitle..">
            </div>
            <div class="form-group">
                <label >Post</label>
                <textarea v-model="post.text" class="form-control" rows="5"></textarea>
            </div>
            <button @click="$router.push('/admin')" class="btn btn-danger">Cancel</button>
            <button type="submit" class="btn btn-primary">Save</button>
        </fieldset>
    </form>
</div>
</template>
<script>
export default {
    data(){
        return{
            post:{
                title: null,
                subTitle: null,
                author: null,
                text: null
            }
        }
    },
    props:{
        isUpdate:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods:{
        onSubmit(){
            this.$emit("submit", this.post)
        }
    }
}
</script>
