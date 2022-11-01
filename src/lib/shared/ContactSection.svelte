<script>
  import AluraGeekLogo from '$lib/AluraGeekLogo.svelte';
  import Button from '$shared/Button.svelte';
</script>

<section class="contact">
  <div class="contact__links">
    <span class="contact__logo">
      <AluraGeekLogo />
    </span>

    <ul class="contact__list list">
      <li class="list__item">
        <a class="contact__link" href="/">Quem somos nós</a>
      </li>
      <li class="list__item">
        <a class="contact__link" href="/">Política de privacidade</a>
      </li>
      <li class="list__item">
        <a class="contact__link" href="/">Programa de fidelidade</a>
      </li>
      <li class="list__item">
        <a class="contact__link" href="/">Nossas lojas</a>
      </li>
      <li class="list__item">
        <a class="contact__link" href="/">Quero ser franqueado</a>
      </li>
      <li class="list__item">
        <a class="contact__link" href="/">Anuncie aqui</a>
      </li>
    </ul>
  </div>

  <form class="contact__form form">
    <h3 class="form__title">Fale conosco</h3>

    <div class="form__section">
      <label for="name" class="form__label">Nome</label>
      <input type="text" name="name" class="form__input" />
    </div>

    <textarea class="form__message" placeholder="Escreva sua mensagem" />
    <span class="form__submit">
      <Button>Enviar mensagem</Button>
    </span>
  </form>
</section>

<style lang="scss">
  @use 'color';
  @use 'layout';

  $bg-color: #eaf2fd;

  .contact {
    @include layout.flex-container;
    @include layout.padding;
    @include layout.direction(column);
    background-color: $bg-color;
    padding-top: 2rem;
    text-align: center;

    @include layout.on-tablet {
      flex-direction: row;
      align-items: center;
    }

    &__links {
      flex-grow: 1;

      @include layout.on-desktop {
        text-align: left;
        display: inline-flex;
        justify-content: space-between;
      }
    }

    &__logo {
      font-size: 2em;
    }

    &__link {
      text-decoration: none;
      color: inherit;

      &:visited,
      &:active {
        color: inherit;
      }
    }

    @include layout.on-desktop {
      padding-top: 4rem;
      padding-bottom: 4rem;

      &__list {
        width: 50%;
      }
    }

    @include layout.on-tablet {
      &__form {
        display: flex;
        flex-wrap: wrap;
        width: 70%;
        flex-direction: column;

        @include layout.on-desktop {
          width: 50%;
        }
      }
    }
  }

  .list {
    list-style: none;

    &__item {
      text-decoration: none;
      margin: 1em auto;
    }
  }

  .form {
    text-align: left;

    &__title {
      font-size: 1rem;
    }

    &__section {
      display: inline-flex;
      flex-direction: column;
      width: 100%;
      background-color: color.$section-background;
      padding: 0.5em 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 0.2rem;
      border-bottom: 1px solid #ccc;
    }

    &__label {
      color: #a2a2a2;
      font-size: 0.8rem;
      margin-bottom: 0.3em;
    }

    &__input {
      font-size: 1rem;
      border: none;
      outline: none;
    }

    &__message {
      width: 100%;
      min-height: 5rem;
      background-color: color.$section-background;
      padding: 1rem;
      resize: none;
      border: none;
      border-bottom: 1px solid #ccc;
      outline: none;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    &__submit {
      display: inline-flex;
      align-items: stretch;
      border-color: color.$secondary-text;
      background-color: color.$secondary-text;
      color: #fff;
      width: 50%;

      @include layout.on-desktop {
        width: 35%;
      }
    }
  }
</style>
