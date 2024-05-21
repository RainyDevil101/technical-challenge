import { defineStore } from 'pinia';
import axios from 'axios';
import { Hero } from '../interfaces';
import { API_KEY, URL } from '../api';
import heroById from '../mock/heroById.json';
import heroByName from '../mock/heroByName.json';

export const useHeroStore = defineStore('hero', {
  state: () => ({
    hero: null as Hero | null,
    heros: [] as Hero[],
    isLoading: false as boolean,
    hasError: '' as string,
    useMock: false as boolean,
  }),

  getters: {
    getHeroState: (state) => state.hero,
    getHerosState: (state) => state.heros,
    isLoadingState: (state) => state.isLoading,
    getHasErrorState: (state) => state.hasError,
  },
  actions: {
    async fetchHero(value: string) {
      this.isLoading = true;
      this.hero = null;
      this.heros = [];
      this.hasError = '';

      try {
        if (this.useMock) {
          console.log('Using mock data');
          console.log(heroById);
          this.hero = heroById as Hero;
          this.heros = heroByName as unknown as Hero[];
        } else {
          console.log('Using real API');
          let response;

          const apiUrl = /^\d+$/.test(value) 
            ? `${URL}${API_KEY}/${value}`
            : `${URL}${API_KEY}/search/${value}`;
          response = await axios.get(apiUrl);

          if (response.data.response === 'error') {
            this.hasError = response.data.error;
            return;
          }

          if (response.data.results) {
            this.heros = response.data.results;
            return;
          }

          this.hero = response.data;
        }
      } catch (error: any) {
        console.error(error);
        this.hasError = error.response?.data?.message || 'There was an error';
      } finally {
        this.isLoading = false;
      }
    },
    setUseMock(value: boolean) {
      this.useMock = value;
    },
    setHero(id: string) {
      this.hero = this.heros.find((hero) => hero.id === id) || null;
    }
  },
});
