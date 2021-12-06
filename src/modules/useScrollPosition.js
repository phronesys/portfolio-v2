import { computed, onMounted, onUnmounted, ref } from "vue";

export default () => {
  let scrollPositionY = ref(window.scrollY);

  const onScrollChange = () => scrollPositionY.value = window.scrollY;
  onMounted(() => window.addEventListener('scroll', onScrollChange))
  onUnmounted(() => window.removeEventListener('scroll', onScrollChange))

  const scrollPosition = computed(() => scrollPositionY.value)

  return { scrollPosition }
}