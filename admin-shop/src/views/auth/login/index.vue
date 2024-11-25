<template>
  <div class="text-blue-500">
    <div class="mb-4">
      <label for="email">{{ $t('form.email') }}</label>
      <input 
        v-model="email" 
        type="text" 
        name="email" 
        id="email"
        :placeholder="$t('form.emailPlaceholder')"
        class="w-full p-2 border rounded"
      >
    </div>

    <div class="mb-4">
      <label for="password">{{ $t('form.password') }}</label>
      <input 
        v-model="password" 
        type="password" 
        name="password" 
        id="password"
        :placeholder="$t('form.passwordPlaceholder')"
        class="w-full p-2 border rounded"
      >
    </div>

    <button 
      @click="handleClick"
      class="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {{ $t('form.submit') }}
    </button>

    <!-- Language Selector -->
    <div class="mt-4">
      <select 
        v-model="currentLocale" 
        @change="changeLanguage"
        class="p-2 border rounded"
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
    </div>

    <!-- Show error message if exists -->
    <p v-if="error" class="mt-4 text-red-500">
      {{ $t(`errors.${error}`) }}
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { login } from "../services/auth"

const { t, locale } = useI18n()

const email = ref('')
const password = ref('')
const error = ref('')

// Language handling
const currentLocale = ref(locale.value)

// Watch for language changes
watch(currentLocale, (newLocale) => {
  locale.value = newLocale
  // Optionally save to localStorage
  localStorage.setItem('language', newLocale)
})

const handleClick = async () => {
  error.value = '' // Reset error
  
  try {
    const response = await login(email.value, password.value)
    console.log($t('messages.loginSuccess'))
    // Handle successful login (e.g., redirect, store token, etc.)
  } catch (err) {
    error.value = err.response?.data?.error || 'unknownError'
    console.error($t('messages.loginFailed'), err)
  }
}
</script>