<script>
  import Button from '$shared/Button.svelte';
</script>

<section class="banner">
  <div class="banner__promotion promotion">
    <div class="promotion__text">
      <h1 class="promotion__title">Dezembro Promocional</h1>
      <p class="promotion__description">Produtos selecionados com 33% de desconto</p>
      <span class="promotion__button">
        <Button>Ver Consoles</Button>
      </span>
    </div>
  </div>
</section>

<style lang="scss">
  @use 'colors';
  @use 'layout';

  .banner {
    background: url(https://images.unsplash.com/photo-1527896573815-b7dd74893deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
    background-size: cover;
    background-position: center;
    color: colors.$text-light;

    &__promotion {
      @include layout.responsive-padding;
      background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  .promotion {
    padding-top: 5em;

    @include layout.on-tablet-screen {
      padding-top: 10em;
      padding-bottom: 2em;
    }

    &__title {
      margin-bottom: 0.5em;

      @include layout.on-tablet-screen {
        font-size: 3.25em;
        margin-bottom: 0.4em;
      }
    }

    &__description {
      font-size: 0.9em;
      font-weight: 600;
      margin-bottom: 0.5em;

      @include layout.on-tablet-screen {
        font-size: 1.37rem;
        margin-bottom: 1rem;
      }
    }

    &__button {
      background-color: colors.$call-to-action;
      border-color: transparent;
      display: inline-block;
      max-width: 8em;
      width: 100%;

      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
