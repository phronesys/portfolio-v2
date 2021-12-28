<template>
  <input class="input" type="email" placeholder="john@doe.com" />
</template>

<style lang="postcss">
.input {
  @apply p-4 w-11/12 rounded-md border focus:outline-none text-black valid:border-purple-500 invalid:border-red-500;
}
</style>
