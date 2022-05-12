<template>
    <div>
        <h2>Dashboard</h2>
        <div>
            <img :src="imagedata" />
            <h2>Full Name:{{ data.user.displayName }}</h2>
            <h2>Email:{{ data.user.email }}</h2>
        </div>
        <button @click="getUserList()">List Repos</button>
        <div v-if="show">
            <li v-for="items in listrepo" :key="items.name">
                {{ items.name }}
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            showrepos: false,
            data: [],
            imagedata: '',
            listrepo: [],
            show: false,
        };
    },
    mounted() {
        this.data = this.$route.params.uID;
        console.log(this.data);
        this.imagedata = this.data.user.photoURL;
        this.username = this.data.additionalUserInfo.username;
    },
    methods: {
        getUserList() {
            fetch(`https://api.github.com/users/${this.username}/repos`)
                .then(response => response.json())
                .then(data => {
                    this.listrepo = data;
                    this.show = true;
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
