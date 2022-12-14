<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMoviesStore } from "../stores";
import Button from "../components/ButtonComponent.vue";
import RatingsBar from "../components/RatingsBar.vue";

const route = useRoute();
const router = useRouter();
const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.fetchMovieDetails(route.params.id as string);
});

function returnHome() {
  router.push("/vue-movie-app");
  moviesStore.resetMovieDetails();
}
</script>
<template>
  <div class="wrapper">
    <Button :onClick="returnHome" theme="secondary" width="160px">
      <div class="return-home-btn btn-body">
        <vue-feather type="arrow-left" size="20px" />
        <span>Return Home</span>
      </div>
    </Button>
    <div v-if="moviesStore.movieDetails" class="movie-details-container">
      <div class="movie-details-container__poster">
        <img
          :src="moviesStore.movieDetails?.title.image?.url"
          alt="movie poster"
        />
      </div>
      <div class="movie-details-container__info">
        <h1>{{ moviesStore.movieDetails?.title.title }}</h1>
        <p>Year: {{ moviesStore.movieDetails?.title.year }}</p>
        <p v-if="moviesStore.movieDetails?.title.runningTimeInMinutes">
          Runtime:
          {{ moviesStore.movieDetails?.title.runningTimeInMinutes }} minutes
        </p>
        <p v-if="moviesStore.movieDetails?.plotOutline?.text">
          Plot: {{ moviesStore.movieDetails?.plotOutline?.text }}
        </p>
        <ul class="genres">
          <li v-for="genre in moviesStore.movieDetails?.genres" :key="genre">
            {{ genre }}
          </li>
        </ul>
        <RatingsBar :rating="moviesStore.movieDetails?.ratings?.rating" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  .return-home-btn:hover {
    i {
      transform: translateX(-5px);
      transition: transform 0.3s ease-in-out;
    }
  }
}
.movie-details-container {
  display: flex;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  background: var(--color-background-soft);
  color: var(--text-color);
  border-radius: 0.5rem;

  &__poster {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  &__info {
    width: 50%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0;
    }
    p {
      margin: 0.5rem 0;
      font-size: large;
    }
    .genres {
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      display: inline-flex;
      li {
        margin: 0.5rem;
        padding: 0.25rem;
        background: var(--color-background-soft);
        color: var(--main-green);
        border-radius: 0.3rem;
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 768px) {
  .movie-details-container {
    width: 90%;
    flex-direction: column;
    &__poster,
    &__info {
      width: 100%;
    }
  }
}
</style>
