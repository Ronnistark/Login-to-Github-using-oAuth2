<template>
    <div>
        <form @submit.prevent="register">
            <b-card title="Register" class="mb-2">
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
                <b-button variant="primary" type="submit">Register</b-button>
            </b-card>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully registered! Please login.');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>
