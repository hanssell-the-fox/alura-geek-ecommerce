<script>
  import NavigationBar from '$shared/NavigationBar.svelte';
  import Footer from '$shared/Footer.svelte';
</script>

<NavigationBar />
<slot />
<Footer />

<style lang="scss">
  @use 'reset';
  @include reset.page-structure;
</style>
