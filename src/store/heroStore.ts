import { defineStore } from 'pinia';
import axios from 'axios';
import { Hero } from '../interfaces';
import { API_KEY, URL } from '../api';
import heroById from '../mock/heroById.json';
import heroByName from '../mock/heroByName.json';

export const useHeroStore = defineStore('hero', {
  state: () => ({
    hero: null as Hero | null, // Héroe seleccionado
    heros: [] as Hero[], // Lista de héroes
    isLoading: false as boolean, // Indicador de carga
    hasError: null as null, // Mensaje de error
    useMock: false as boolean, // Indicador de uso de datos simulados
    showModal: false as boolean, // Indicador de mostrar modal
  }),

  getters: {
    getHeroState: (state) => state.hero,
    getHerosState: (state) => state.heros,
    isLoadingState: (state) => state.isLoading,
    getHasErrorState: (state) => state.hasError,
    getShowModalState: (state) => state.showModal,
  },
  actions: {
    // Buscar un héroe por ID o nombre
    async fetchHero(value: string) {
      this.isLoading = true;
      this.hero = null;
      this.heros = [];
      this.hasError = null;

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
    // Configurar el uso de datos simulados
    setUseMock(value: boolean) {
      this.useMock = value;
    },
    // Establecer el héroe actual por ID
    setHero(id: string) {
      this.hero = this.heros.find((hero) => hero.id === id) || null;
    },
    // Configurar el estado de carga
    setIsloading(value: boolean) {
      this.isLoading = value;
    },
    // Configurar el estado de mostrar modal y resetar el héroe si se cierra
    setShowModal(value: boolean) {
      this.showModal = value;

      if (value === false) {
        this.hero = null;
      }
    },
  },
});
