<script>
  import Button from '$shared/Button.svelte';
</script>

<section class="banner">
  <div class="banner__promotion">
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
  @use 'color';
  @use 'layout';

  .banner {
    background: url(https://images.unsplash.com/photo-1527896573815-b7dd74893deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
    background-size: cover;
    background-position: center;
    color: #fff;

    &__promotion {
      display: inline-flex;
      width: 100%;
      height: 100%;
      @include layout.padding;
      height: 100%;
      background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
    }
  }

  .promotion {
    &__text {
      margin-top: 5rem;
      width: 100%;
    }

    &__title {
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    &__description {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    &__button {
      max-width: 8rem;
      border-color: transparent;
      width: 100%;
      display: inline-flex;
      align-items: stretch;
      background-color: color.$secondary-text;
    }

    @include layout.on-tablet {
      &__text {
        margin-top: 10rem;
      }

      &__title {
        font-size: 3.25rem;
        margin-bottom: 1.2rem;
      }

      &__description {
        font-size: 1.37rem;
        margin-bottom: 1rem;
      }
    }
  }
</style>
