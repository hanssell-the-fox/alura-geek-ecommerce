<script>
  export let title = '';
  export let products = [];
</script>

<section class="products">
  <div class="products__header section">
    <h2 class="section__title">{title}</h2>
    <a class="section__link" href="/" on:click|preventDefault={() => {}}>Ver tudo</a>
  </div>

  <ul class="products__list">
    {#each products as product}
      <li class="products__item">
        <figure class="product">
          <img class="product__image" src={product} alt="Imagem de um produto" />
          <figcaption class="product__description">Produto XYZ</figcaption>
        </figure>
        <span class="products__price">R$ 60,00</span>
        <a class="products__link" href="/">Ver produto</a>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  @use 'color';
  @use 'layout';

  .products {
    @include layout.padding;
    color: color.$text-default;
    width: 100%;

    &__header {
      margin-bottom: 1rem;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      gap: 1rem;
    }

    &__item {
      display: inline-flex;
      flex-direction: column;
      width: calc(100% / 2 - 1rem);
      max-width: calc(100% / 2);
      flex-grow: 1;

      &:nth-of-type(n + 5) {
        display: none;
      }

      @include layout.on-tablet {
        max-width: calc(100% / 4 - 0.8rem);
      }

      @include layout.on-desktop {
        max-width: calc(100% / 6 - 0.9rem);
        &:nth-of-type(n + 5) {
          display: block;
        }
      }
    }

    &__price {
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    &__link {
      text-decoration: none;
      font-weight: bold;
      font-size: 0.9rem;
      color: color.$call-to-action;
      margin-right: 1rem;

      &:visited,
      &:active {
        color: color.$call-to-action;
      }
    }
  }

  .product {
    &__image {
      display: block;
      width: 100%;
      aspect-ratio: 1 / 1;
    }

    &__description {
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }
  }

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__link {
      text-decoration: none;
      font-weight: bold;
      color: color.$call-to-action;
      position: relative;
      margin-right: 1rem;

      &:visited,
      &:active {
        color: color.$call-to-action;
      }

      &::after {
        content: '';
        position: absolute;
        background: url('/arrow.svg') no-repeat;
        width: 1rem;
        height: 1rem;
        top: 20%;
        right: -30%;
      }
    }
  }
</style>
