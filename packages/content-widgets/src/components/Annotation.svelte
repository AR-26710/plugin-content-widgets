<script lang="ts">
  let { note = "", content = "" }: { note?: string; content?: string } = $props();
</script>

<span class="xhhao-com-annotation">
  <span class="xhhao-com-annotation-content">{@html content}</span>
  {#if note}<span class="xhhao-com-annotation-note">{note}</span>{/if}
</span>
