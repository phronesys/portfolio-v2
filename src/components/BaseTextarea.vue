<template>
  <textarea
    class="textarea"
    placeholder="Message"
    name="message"
    cols="30"
    rows="10"
  ></textarea>
</template>

<style lang="postcss">
.textarea {
  @apply p-4 w-11/12 rounded-md border focus:outline-none text-black valid:border-purple-500 invalid:border-red-500;
}
</style>
