<script>
  export let route = '/';
</script>

<a class="button" href={route} on:click|preventDefault={() => {}}>
  <slot />
</a>

<style lang="scss">
  .button {
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: inherit;
    color: inherit;
    display: inline-flex;
    height: 2.5rem;
    font-size: 0.9em;
    font-weight: 600;
    justify-content: center;
    width: 100%;
    padding: 0.8em 0;
    text-decoration: none;

    &:visited,
    &:active {
      color: inherit;
    }
  }
</style>
