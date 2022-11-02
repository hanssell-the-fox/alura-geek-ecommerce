<script>
  import AluraGeekLogo from '$lib/AluraGeekLogo.svelte';
  import Button from '$shared/Button.svelte';
  import SearchBox from '$lib/SearchBox.svelte';
  import ContactSection from '$lib/ContactSection.svelte';
</script>

<template>
  <header class="navigation">
    <AluraGeekLogo />
    <span class="navigation__login-button">
      <Button route="/login">Login</Button>
    </span>
    <SearchBox />
  </header>

  <main class="content">
    <slot />
  </main>

  <footer class="footer">
    <ContactSection />
    <section class="footer__section author">
      <p class="author__info">
        Desenvolvido por <b>Wederson de Oliveira Calixto</b><br /><b>2022</b>
      </p>
    </section>
  </footer>
</template>

<style lang="scss">
  @use 'reset';
  @use 'layout' as *;
  @use 'colors' as *;

  @include reset.page-structure;

  :global(body) {
    background-color: $background-default;
  }

  // Top navigation bar
  .navigation {
    @include responsive-padding;
    display: flex;
    background-color: $background-light;
    gap: 2em;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 10;

    @include on-desktop-screen {
      font-size: 1.1em;
      padding-top: calc($vertical-padding + 0.5em);
      padding-bottom: calc($vertical-padding + 0.5em);
    }

    &__login-button {
      color: $call-to-action;
      font-weight: 600;
      max-width: 8em;
      width: 100%;

      @include on-tablet-screen {
        display: inline-flex;
        justify-content: flex-end;
        margin-left: auto;
        order: 2;
      }

      @include on-desktop-screen {
        font-weight: 400;
      }

      &:hover {
        background-color: rgba($color: $call-to-action, $alpha: 0.1);
      }
    }
  }

  .content {
    margin-top: 4.5rem;

    @include on-desktop-screen {
      margin-top: 6rem;
    }
  }

  // Footer section
  .footer {
    display: flex;
    flex-direction: column;
    color: $text-default;

    &__section {
      @include responsive-padding;
    }
  }

  // About ME :)
  .author {
    background-color: $background-light;
    color: inherit;
    padding: 2em 0;

    &__info {
      font-size: 0.8em;
      line-height: 1.5em;
      text-align: center;

      @include on-tablet-screen {
        font-size: 0.9em;
      }
    }
  }
</style>
