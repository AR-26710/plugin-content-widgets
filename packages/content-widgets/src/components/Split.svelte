<script lang="ts">
  let {
    cols = 2,
    gap = "1rem",
    items = [],
  }: {
    cols?: number | string;
    gap?: string;
    items?: string[];
  } = $props();

  let gridTemplateColumns = $derived(
    typeof cols === "number" || /^\d+$/.test(String(cols))
      ? `repeat(${Number(cols)}, 1fr)`
      : `repeat(auto-fill, minmax(${cols}, 1fr))`,
  );
</script>

<div class="xhhao-com-split" style:grid-template-columns={gridTemplateColumns} style:gap={gap}>
  {#each items as item}
    <div>{@html item}</div>
  {/each}
</div>
