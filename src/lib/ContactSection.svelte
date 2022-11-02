<script>
  import AluraGeekLogo from '$lib/AluraGeekLogo.svelte';
  import Button from '$shared/Button.svelte';

  const services = [
    'Quem somos nós',
    'Política de privacidade',
    'Programa de fidelidade',
    'Nossas lojas',
    'Quero ser franqueado',
    'Anuncie aqui'
  ];
</script>

<section class="contact">
  <div class="contact__section">
    <span class="contact__logo">
      <AluraGeekLogo />
    </span>

    <ul class="list">
      {#each services as service}
        <li class="list__item">
          <a href="/">{service}</a>
        </li>
      {/each}
    </ul>
  </div>

  <form class="form">
    <h3 class="form__title">Fale conosco</h3>

    <div class="form__field bordered">
      <label for="name" class="form__label">Nome</label>
      <input type="text" name="name" class="form__input" />
    </div>

    <textarea class="form__message bordered" placeholder="Escreva sua mensagem" />
    <span class="form__submit-button">
      <Button>Enviar mensagem</Button>
    </span>
  </form>
</section>

<style lang="scss">
  @use 'colors';
  @use 'layout';
  @use 'reset';
  @include reset.link-style;

  $background-color: #eaf2fd;

  .contact {
    @include layout.responsive-padding;
    display: flex;
    flex-direction: column;
    background-color: $background-color;
    text-align: center;

    @include layout.on-tablet-screen {
      flex-direction: row;
      text-align: left;
    }

    @include layout.on-desktop-screen {
      align-items: center;
      &__section {
        display: inline-flex;
        flex-grow: 1;
        height: 100%;
        justify-content: space-between;
        padding-top: 4rem;
        padding-bottom: 4rem;
        text-align: left;
      }
    }

    &__logo {
      display: inline-block;
      margin: 0.5em auto;
      font-size: 2em;
    }
  }

  // Only applies style to the list on the component
  .list {
    display: inline-block;
    list-style: none;
    margin: 1em 0;

    @include layout.on-desktop-screen {
      margin-left: 1em;
      margin-right: 1em;
      min-width: 11em;
      width: 50%;
    }

    &__item {
      margin: 1em auto;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      &:hover {
        color: colors.$call-to-action;
      }
    }
  }

  .bordered {
    background-color: colors.$background-light;
    border-bottom: 1px solid #ccc;
    border-radius: 0.1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0.5em 0.7em;
  }

  .form {
    margin-top: 1em;
    text-align: left;
    font-size: inherit;
    width: 100%;

    @include layout.on-desktop-screen {
      width: 50%;
    }

    &__title {
      font-size: 1em;
    }

    &__field {
      display: inline-flex;
      flex-direction: column;
      width: 100%;
    }

    &__label {
      color: #a2a2a2;
      font-size: 0.75em;
      margin-bottom: 0.3em;
    }

    &__input {
      border: none;
      font-size: inherit;
      outline: none;
    }

    &__message {
      border: none;
      border-bottom: 1px solid #ccc;
      font-size: inherit;
      min-height: 5em;
      outline: none;
      resize: none;
      width: 100%;
    }

    &__submit-button {
      align-items: stretch;
      border-color: colors.$call-to-action;
      background-color: colors.$call-to-action;
      color: colors.$text-light;
      cursor: pointer;
      display: inline-flex;
      padding: 0 1em;

      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
