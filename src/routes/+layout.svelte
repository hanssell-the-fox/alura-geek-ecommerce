<script>
  import AluraGeekLogo from '$lib/AluraGeekLogo.svelte';
  import Button from '$shared/Button.svelte';
  import SearchBox from '$lib/SearchBox.svelte';
  import ContactSection from '$lib/shared/ContactSection.svelte';
</script>

<template>
  <header class="navigation">
    <AluraGeekLogo />
    <span class="navigation__login-button">
      <Button route="/login">Login</Button>
    </span>
    <SearchBox />
  </header>

  <slot />

  <footer class="main-footer">
    <ContactSection />
    <section class="author-info">
      <p>Desenvolvido por <b>Wederson de Oliveira Calixto</b></p>
      <p><b>2022</b></p>
    </section>
  </footer>
</template>

<style lang="scss">
  @use 'reset';
  @use 'layout';
  @use 'color';

  :global(body) {
    background-color: color.$bg-default;
  }

  // Top navigation bar
  .navigation {
    @include layout.flex-container;
    @include layout.padding;

    background-color: color.$bg-light;
    gap: 1em;
    justify-content: space-between;
    min-height: 4.5rem;
    user-select: none;

    @include layout.on-tablet {
      gap: 2em;
    }

    &__login-button {
      max-width: 10em;
      width: 100%;
      color: color.$call-to-action;

      @include layout.on-tablet {
        display: inline-flex;
        justify-content: flex-end;
        margin-left: auto;
        order: 2;
      }
    }
  }

  // Footer section
  .author-info {
    @include layout.flex-container;
    @include layout.direction(column);
    @include layout.padding;
    align-items: center;
    background-color: color.$bg-light;
    color: color.$text-default;
    font-size: 0.8em;
    text-align: center;
    padding-top: 2em;
    padding-bottom: 2em;
    user-select: none;
  }
</style>
