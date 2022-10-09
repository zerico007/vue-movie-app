import { ref } from "vue";
import { defineStore } from "pinia";

export const useColorThemeStore = defineStore("colorTheme", () => {
  const useDark = ref(false);

  function saveDarkPreferenceToLocalStorage() {
    localStorage.setItem("useDark", useDark.value.toString());
  }

  function loadDarkPreferenceFromLocalStorage() {
    const preference = localStorage.getItem("useDark");
    const windowPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (preference) {
      useDark.value = preference === "true";
      toggleDarkMode(preference === "true");
    } else {
      toggleDarkMode(windowPrefersDark);
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
