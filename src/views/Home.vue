<template>
    <div>
        <br />
        <div class="login">
            <form @submit.prevent="login">
                <b-card title="Login Page " class="mb-2">
                    <b-card-text>
                        <input
                            type="email"
                            placeholder="Email address..."
                            v-model="email"
                        />
                    </b-card-text>
                    <b-card-text>
                        <input
                            type="password"
                            placeholder="password..."
                            v-model="password"
                        />
                    </b-card-text>

                    <b-button variant="primary" type="submit">Login</b-button>
                </b-card>
            </form>
        </div>
        <b-button variant="primary" @click="githubSignin()"
            >Login with Github</b-button
        >
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Home',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully logged in');
                    this.$router.push('/dashboard');
                })
                .catch(error => {
                    alert(error.message);
                });
        },

        githubSignin() {
            var provider = new firebase.auth.GithubAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    this.$router.push({
                        name: 'Dashboard',
                        params: { uID: result },
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
};
</script>
