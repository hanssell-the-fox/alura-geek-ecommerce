<script>
  export let route = '/';
</script>

<a class="button" href={route} on:click|preventDefault={() => {}}>
  <slot />
</a>

<style lang="scss">
  @use 'reset';
  @include reset.link-style;

  .button {
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: inherit;
    color: inherit;
    display: inline-flex;
    font-size: inherit;
    font-weight: inherit;
    height: inherit;
    justify-content: center;
    line-height: inherit;
    padding: 0.6em 0;
    width: inherit;
  }
</style>
