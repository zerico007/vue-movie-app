import { ref } from "vue";
import { defineStore } from "pinia";

export const useColorThemeStore = defineStore("colorTheme", () => {
  const useDark = ref(false);

  function saveDarkPreferenceToLocalStorage() {
    localStorage.setItem("useDark", useDark.value.toString());
  }

  function loadDarkPreferenceFromLocalStorage() {
    const preference = localStorage.getItem("useDark");
    if (preference) {
      useDark.value = preference === "true";
    }
  }

  function toggleDarkMode(state: boolean) {
    document.documentElement.classList.toggle("dark-mode", state);
    useDark.value = state;
    saveDarkPreferenceToLocalStorage();
  }

  return {
    useDark,
    toggleDarkMode,
    loadDarkPreferenceFromLocalStorage,
  };
});
