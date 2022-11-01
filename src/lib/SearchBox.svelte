<form class="search-box">
  <input class="search-box__input" type="text" placeholder="O que deseja encontrar?" />
  <button class="search-box__button" on:click|preventDefault={() => {}}>
    <img class="search-box__image" src="/search.svg" alt="Ilustração de uma lupa" />
  </button>
</form>

<style lang="scss">
  @use 'color';
  @use 'layout';

  $tablet-width: 17em;
  $desktop-width: 24.56em;

  .search-box {
    display: flex;

    &__input {
      display: none;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
    }

    @include layout.on-tablet {
      background-color: color.$body-background;
      border-radius: 1.5em;
      min-width: $tablet-width;
      padding: 0.5em 1em;
      order: 0;

      &__input {
        display: block;
        flex-grow: 1;
        border: none;
        outline: none;
        color: color.$default-text;
      }

      &__button {
        margin: auto 0;
        opacity: 0.5;
      }

      &__image {
        height: 1em;
      }
    }

    @include layout.on-desktop {
      min-width: $desktop-width;
    }
  }
</style>
