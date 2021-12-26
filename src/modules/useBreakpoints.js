import { computed, onMounted, onUnmounted, ref } from "vue";

export default () => {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => windowWidth.value = window.innerWidth;
  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  const type = computed(() => {
    let value = windowWidth.value;
    if (value < 440) return 'xxs';
    if (value > 440 && value < 640) return 'xs';
    if (value > 640 && value < 768) return 'sm';
    if (value > 768 && value < 1024) return 'md';
    if (value > 1024 && value < 1280) return 'lg';
    if (value > 1280 && value < 1536) return 'xl';
    if (value > 1536) return 'xxl';
  })

  const width = computed(() => windowWidth.value);

  return { width, type }
}