<script>
  import ContactSection from '$lib/ContactSection.svelte';
</script>

<footer class="footer">
  <ContactSection />
  <section class="footer__section author">
    <p class="author__info">
      Desenvolvido por <b>Wederson de Oliveira Calixto</b><br /><b>2022</b>
    </p>
  </section>
</footer>

<style lang="scss">
  @use 'colors' as *;
  @use 'layout' as *;

  .footer {
    display: flex;
    flex-direction: column;
    color: $text-default;

    &__section {
      @include responsive-padding;
    }
  }

  .author {
    background-color: $background-light;
    color: inherit;
    padding: 2em 0;

    &__info {
      font-size: 0.8em;
      line-height: 1.5em;
      text-align: center;

      @include on-tablet {
        font-size: 0.9em;
      }
    }
  }
</style>
