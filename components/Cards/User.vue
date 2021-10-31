<template>
<div class="ml-3 mt-3" style="">
    <v-card width="300">
        <!-- <pre>
            {{post}}
        </pre> -->
        <v-card-title>
            {{post.first_name}}
            {{post.last_name}}
        </v-card-title>
        <v-card-text>
            <img src="" alt="">
            <p>{{post.director_position}}</p>
            <p>{{post.position}}</p>
            <p>{{post.phone}}</p>
            <p>{{post.email}}</p>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
    data: () => {
        return ({

        })
    },
    props: {
        post: Object
    },
    computed: {

    }
}
</script>

<style>

</style>
