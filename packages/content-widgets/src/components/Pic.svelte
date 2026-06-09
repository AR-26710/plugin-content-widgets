<script lang="ts">
  let {
    src = "",
    caption,
    alt,
    width,
    height,
  }: {
    src?: string;
    caption?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
  } = $props();
</script>

<figure class="xhhao-com-pic">
  <img {src} alt={alt || caption || ""} style:width={width} style:height={height} />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>
