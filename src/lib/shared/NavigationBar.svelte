<script>
  import Logo from '$shared/Logo.svelte';
  import Button from '$shared/Button.svelte';
  import SearchBox from '$lib/SearchBox.svelte';

  export let userAuthenticated = false;
</script>

<header class="navbar">
  <Logo />

  {#if !userAuthenticated}
    <span class="navbar__login">
      <Button route="/login">Login</Button>
    </span>
  {/if}

  <SearchBox />
</header>

<style lang="scss">
  @use 'colors' as *;
  @use 'layout' as *;

  .navbar {
    @include responsive-padding;
    align-items: stretch;
    display: flex;
    background-color: $background-light;
    flex-wrap: wrap;
    font-size: 0.9em;
    gap: clamp(1em, 1% + 1em, 2em);
    justify-content: space-between;
    padding-top: clamp($padding-size, 1% + $padding-size, 3vh);
    padding-bottom: clamp($padding-size, 1% + $padding-size, 3vh);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;

    @include on-desktop {
      font-weight: bold;
    }

    &__login {
      color: $call-to-action;
      display: inline-flex;
      max-width: 8em;
      width: 100%;

      &:hover {
        background-color: rgba($color: $call-to-action, $alpha: 0.1);
      }

      @include on-tablet {
        margin-left: auto;
        order: 1;
      }

      @include on-desktop {
        max-width: 10em;
      }
    }
  }
</style>
