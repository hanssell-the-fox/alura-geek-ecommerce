<script>
  export let title = '';
  export let products = [];

  const getImage = (url) =>
    `background: url(${url}) no-repeat; background-size: cover; background-position: center;`;
</script>

<section class="products">
  <div class="products__header section">
    <h2 class="section__title">{title}</h2>
    <a class="section__link" href="/" on:click|preventDefault={() => {}}>Ver tudo</a>
  </div>

  <ul class="products__list product">
    {#each products as product}
      <li class="product__item">
        <div class="product__image" style={getImage(product)} />
        <div class="product__info">
          <span class="product__description">{product?.description || 'Produto XYZ'}</span>
          <span class="product__price">R$ 60,00</span>
          <a class="product__link" href="/">Ver produto</a>
        </div>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  @use 'colors';
  @use 'layout';
  @use 'reset';

  @include reset.link-style;

  .products {
    @include layout.responsive-padding;
    color: colors.$text-default;

    &__header {
      padding: 1em 0;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
    }
  }

  .product {
    gap: 1rem;

    &__item {
      width: calc(100% / 2 - 1rem);
      flex-grow: 1;

      &:nth-of-type(n + 5) {
        display: none;
      }

      @include layout.on-tablet-screen {
        max-width: calc(100% / 4 - 0.75em);
      }

      @include layout.on-desktop-screen {
        max-width: calc(100% / 6 - 0.85em);
        &:nth-of-type(n + 5) {
          display: block;
        }
      }
    }

    &__image {
      aspect-ratio: 1 / 1;
    }

    &__info {
      display: inline-flex;
      flex-direction: column;
      padding: 0.5em 0;
    }
    &__description {
      font-size: 0.9em;
    }

    &__price {
      font-weight: 700;
      padding: 0.2em 0;
    }
    &__link {
      font-weight: bold;
      font-size: 0.9em;
      color: colors.$call-to-action;
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
      color: colors.$call-to-action;
      position: relative;
      margin-right: 1rem;

      &:visited,
      &:active {
        color: colors.$call-to-action;
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
