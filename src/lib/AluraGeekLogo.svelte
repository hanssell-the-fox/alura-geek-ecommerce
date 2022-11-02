<div class="logo" role="img">
  <img class="logo__image" src="/joystick.svg" alt="Uma ilustração de um controle" />
  <span class="logo__special-text">Alura</span>
  Geek
</div>

<style lang="scss">
  @use 'colors' as *;

  .logo {
    align-items: center;
    color: $text-default;
    display: inline-flex;
    font-weight: 600;

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
