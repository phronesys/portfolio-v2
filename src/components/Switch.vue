<template>
  <label class="switch">
    <input type="checkbox" @click="aLog" :checked="true" />
    <span class="slide" />
  </label>
</template>

<script>
export default {
  methods: {
    aLog(){
      console.log("clicked");
    }
  }
};
</script>

<style lang="postcss">
.switch {
  @apply relative inline-block w-6 h-4 lg:w-10 lg:h-6;
  & > input {
    @apply opacity-0 w-0 h-0;
    &:checked + .slide {
      @apply bg-pink-600;
      &::before {
        @apply transform translate-x-4;
      }
    }
  }
  & .slide {
    @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0;
    @apply bg-gray-800 rounded-full border border-[#020202] hover:border-pink-600;
    @apply transition-all duration-200 ease-linear;
    &::before {
      @apply content-[""] absolute h-4 w-4 left-[-5px] bottom-[-1px];
      @apply lg:h-6 lg:w-6 lg:left-[-1px] lg:bottom-[-1px];
      @apply bg-[#020202] border border-pink-600 transition-all duration-200 rounded-full;
    }
  }
}
</style>
