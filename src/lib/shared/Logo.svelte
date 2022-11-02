<a class="logo" href="/">
  <img class="logo__image" src="/joystick.svg" alt="Uma ilustração de um controle" />
  <span class="logo__special-text">Alura</span>
  Geek
</a>

<style lang="scss">
  @use 'colors' as *;
  @use 'reset';

  @include reset.link-style;

  .logo {
    align-items: center;
    color: $text-default;
    display: inline-flex;
    font-size: inherit;
    font-weight: 600;
    min-height: 3em;

    &__image {
      height: 1.3em;
      margin-right: 0.2em;
      margin-bottom: 0.1em;
    }

    &__special-text {
      color: $call-to-action;
    }
  }
</style>
