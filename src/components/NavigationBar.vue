<template>
  <section class="dark">
    <svg-logo />
    <navigation-desktop v-if="width > 640"></navigation-desktop>
    <div class="burger" :class="{ open }" v-else @click="showOptions">
      <div />
      <div />
      <div />
    </div>
  </section>
  <transition name="modal">
    <div v-show="open && width < 640" class="modal">
      <navigation-mobil></navigation-mobil>
    </div>
  </transition>
</template>

<script>
import NavigationDesktop from "./NavigationDesktop.vue";
import NavigationMobil from "./NavigationMobil.vue";
import useBreakpoints from "../modules/useBreakpoints";
import SvgLogo from "./images/SvgLogo.vue";

export default {
  name: "NavigationBar",
  components: {
    NavigationDesktop,
    NavigationMobil,
    SvgLogo,
  },
  setup: () => {
    const { width, type } = useBreakpoints();
    return {
      width,
      type,
    };
  },
  data: () => ({
    openSidebar: false,
  }),
  computed: {
    open() {
      return this.openSidebar;
    },
  },
  methods: {
    showOptions() {
      this.openSidebar = !this.openSidebar;
    },
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply px-8 py-4 flex flex-row items-center fixed top-0 left-0 right-0 z-20;
  @apply xl:py-10 xl:px-36 w-full xl:h-20;
  @apply bg-gradient-to-t from-transparent to-black text-white transition-all duration-200 ease-linear;
  & > svg {
    @apply w-24 xl:w-32;
  }
  & > .burger {
    @apply w-6 h-4  relative ml-auto flex flex-col justify-between;
    @apply cursor-pointer;
    & > div {
      @apply w-6 h-0.5 bg-white transition-all ease-linear duration-200;
    }
  }
  & > .burger.open {
    & > div:nth-child(1) {
      @apply translate-y-1.5 -rotate-45;
    }
    & > div:nth-child(2) {
      @apply bg-transparent;
    }
    & > div:nth-child(3) {
      @apply -translate-y-2 rotate-45;
    }
  }
}
.modal {
  @apply py-24 h-screen w-[200px] fixed right-0 translate-x-0 z-10;
  @apply bg-black text-white;
  @apply flex flex-col gap-2 items-center;
  & > .languages {
    @apply !m-0;
  }
}
.modal-enter-active,
.modal-leave-active {
  @apply transition-all duration-200 ease-linear;
}
.modal-enter-from,
.modal-leave-to {
  @apply translate-x-[100px];
}
</style>
