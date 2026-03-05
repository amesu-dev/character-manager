<template>
  <div>
    <h1>Login</h1>
    <div>
      <input type="text" placeholder="Username" id="username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click.once="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import * as bcrypt from '@/assets/scripts/bcrypt.min.js';

export default {
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    async login() {
      console.log('Logging in with', this.username, this.password);
      // Here you would typically send a request to your backend to authenticate the user

      const res = await fetch('/auth/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      console.log('Login response:', await res.text());
    }
  }
}
</script>