<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/feed"> Feed </router-link> |
      <!-- <router-link to="/register"> Register </router-link> | -->
      <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button> 
      <router-link to="/sign-in" v-else="isLoggedIn"> Login </router-link> |
    </nav>
    <router-view />
  </div>
</template>
<script setup>
import { onMounted, ref} from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() =>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut =() => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
