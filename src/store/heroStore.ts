import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import { Hero } from '../interfaces';
import { API_KEY, URL } from '../api';
import axios from 'axios';

export const useHeroStore = defineStore('hero', () => {
  const hero: Ref<Hero | null> = ref(null);
  const isLoading = ref<boolean>(false);
  const hasError = ref<string>('');

  const getHero = async (id: string) => {
    isLoading.value = true;
    hero.value = null;
    hasError.value = '';
    try {
      console.log(URL, API_KEY, id);
      return;
      const response = await axios.get(`${URL}${API_KEY}/${id}`);
      console.log(response);
      hero.value = response.data.results;
      return;
    } catch (error: any) {
      console.error(error);
      hasError.value = error.response?.data?.message || 'There was an error';
    } finally {
      isLoading.value = false;
    }
  };

  return { hero, isLoading, hasError, getHero };
});
