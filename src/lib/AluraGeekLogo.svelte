<div class="logo" role="img">
  <img class="logo__image" src="/joystick.svg" alt="Uma ilustração de um controle" />
  <span class="logo__special-text">Alura</span>
  Geek
</div>

<style lang="scss">
  @use 'color';
  @use 'layout';

  .logo {
    align-items: center;
    color: color.$default-text;
    display: inline-flex;
    font-size: 0.8em;
    font-weight: 600;

    &__image {
      max-width: 2em;
      height: 1.5em;
      margin-right: 0.2em;
      margin-bottom: 0.1em;
    }

    &__special-text {
      color: color.$secondary-text;
    }
  }
</style>
