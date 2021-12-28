<template>
  <transition name="modal">
    <div v-show="open && width < 640" class="modal">
      <slot />
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  open: Boolean,
  width: Number
})
</script>

<style lang="postcss" scoped>
.modal {
  @apply pt-24 px-8 h-screen min-w-max fixed right-0 translate-x-0 z-[15];
  @apply bg-gradient-to-bl from-black  to-transparent text-white;
  @apply flex flex-col gap-2;
 
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
