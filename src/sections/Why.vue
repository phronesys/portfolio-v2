<template>
  <section>
    <h2>¿Por qué trabajar conmigo?</h2>
    <ul>
      <li>
        <container colored>
          <template #title>
            Me gusta crear una buena experiencia de usuario
          </template>
          <template #subtitle>
            <p>
              Da igual con que uno arme un sitio, lo que importa es que se
              sienta y se vea bien, potenciando la imagen tu negocio, sea cual
              sea este!
            </p>
          </template>
          <template #footer>
            <div class="text-gray-500 mb-4">
              Sin dejar de lado la escalabilidad y mantenibilidad, claro!
            </div>
            <the-button secondary>Hablemos</the-button>
          </template>
        </container>
        <the-card class="max-w-[300px]" secondary>
          <template #title>¿Tienes un diseño en Figma?</template>
          <template #body>
            <div>Te puedo ayudar con el diseño y/o a pasarlo a código</div>
          </template>
          <template #footer>
            <the-button primary> Diseños en figma </the-button>
          </template>
        </the-card>
      </li>
      <li>
        <the-card class="max-w-[300px]" primary>
          <template #title>Suscríbete</template>
          <template #body>
            <div>Tu e-mail</div>
            <the-input />
          </template>
          <template #footer>
            <the-button secondary>Anótame!</the-button>
          </template>
        </the-card>
        <container colored left dark>
          <template #title> Quiero compartir mis conocimientos </template>
          <template #subtitle>
            Tengo una sección con guías y tutoriales, orientadas al
            desarrollador, los cuales entregan lo necesario para crear esa app
            millonaria que tienes en mente.
          </template>
          <template #footer>
            <the-button secondary>Ver blog</the-button>
          </template>
        </container>
      </li>
    </ul>
  </section>
</template>

<script>
import Container from "../components/Container.vue";
import TheCard from "../components/Card.vue";
import TheButton from "../components/Button.vue";
import TheInput from "../components/Input.vue";
export default {
  components: {
    Container,
    TheCard,
    TheButton,
    TheInput,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply h-[1200px] bg-indigo-100 flex flex-col items-center justify-start pt-20;
}
section > ul {
  @apply flex flex-col h-screen;
}
section > ul > li {
  @apply flex flex-row justify-between items-center gap-20 relative mx-10 my-2 w-[1200px] h-[500px];
}
section > h2 {
  @apply text-5xl font-normal text-transparent bg-gradient-to-r to-purple-500 from-green-400 bg-clip-text p-8 italic;
}
</style>
