//官方套件
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAuth = defineStore('auth', () => {
  const jwt = ref('')
  const isLogin = ref(false)
  const member = ref({
    user_id: '',
    email: ''
  });
  const setJWT = (newjwt) => {
    jwt.value = newjwt
  }
  const setMember = (user_id, email) => {
    member.value.user_id = user_id
    member.value.email = email
    isLogin.value = true
  }

  const logout = () => {
    jwt.value = ''
    member.value.user_id = ''
    member.value.email = ''
    isLogin.value = false
  }

  return { jwt, member, isLogin, setJWT, setMember,logout };
}, {
  persist: true,
},
);