import { onMounted, onUnmounted, ref, watch } from "vue";
import { defineStore } from "pinia";

export const useColorThemeStore = defineStore("colorTheme", () => {
  const useDark = ref(false);

  const windowPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  watch(useDark, (value) => {
    localStorage.setItem("useDark", value.toString());
    document.documentElement.classList.toggle("dark-mode", value);
  });

  function loadDarkPreferenceFromLocalStorage() {
    const preference = localStorage.getItem("useDark");
    if (preference) {
      useDark.value = preference === "true";
      toggleDarkMode(preference === "true");
    } else {
      toggleDarkMode(windowPrefersDark.matches);
    }
  }

  function toggleDarkMode(state: boolean) {
    useDark.value = state;
  }

  onMounted(() => {
    loadDarkPreferenceFromLocalStorage();
    windowPrefersDark.addEventListener("change", (e) => {
      toggleDarkMode(e.matches);
    });
  });

  onUnmounted(() => {
    windowPrefersDark.removeEventListener("change", (e) => {
      toggleDarkMode(e.matches);
    });
  });

  return {
    useDark,
    toggleDarkMode,
    loadDarkPreferenceFromLocalStorage,
  };
});
