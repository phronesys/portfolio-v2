<template>
  <textarea
    v-model="value"
    class="textarea"
    placeholder="Message"
    name="message"
    maxlength="300"
    cols="30"
    rows="10"
  ></textarea>
</template>

<script setup>
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String,
});

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<style lang="postcss">
.textarea {
  @apply p-4 w-11/12 rounded-md border focus:outline-none text-black valid:border-purple-500 invalid:border-red-500;
}
</style>
