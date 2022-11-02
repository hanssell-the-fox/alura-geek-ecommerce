<form class="search-box">
  <input class="search-box__input" type="text" placeholder="O que deseja encontrar?" />
  <button class="search-box__button" on:click|preventDefault={() => {}}>
    <img class="search-box__image" src="/search.svg" alt="Ilustração de uma lupa" />
  </button>
</form>

<style lang="scss">
  @use 'colors';
  @use 'layout';

  .search-box {
    display: inline-flex;

    @include layout.on-tablet-screen {
      background-color: colors.$background-default;
      border-radius: 1.5em;
      min-width: 17em;
      padding: 0.5em 1em;
      order: 0;
    }

    &__input {
      display: none;

      @include layout.on-tablet-screen {
        border: none;
        color: colors.$text-default;
        display: block;
        flex-grow: 1;
        outline: none;
      }
    }

    &__button {
      align-items: center;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;

      @include layout.on-tablet-screen {
        margin: auto 0;
        opacity: 0.5;
      }
    }

    @include layout.on-tablet-screen {
      &__image {
        height: 1em;
      }
    }

    @include layout.on-desktop-screen {
      min-width: 24.56em;
    }
  }
</style>
