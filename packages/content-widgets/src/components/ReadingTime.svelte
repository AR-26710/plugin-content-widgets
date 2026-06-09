<script lang="ts">
  let {
    minutes,
    words,
    label = "阅读时间",
    content = "",
  }: {
    minutes?: number;
    words?: number;
    label?: string;
    content?: string;
  } = $props();

  let computedWords = $derived(words || content.replace(/\s+/g, "").length);
  let computedMinutes = $derived(minutes || Math.max(1, Math.ceil(computedWords / 400)));
</script>

<span class="xhhao-com-reading-time">
  <span>{label}</span>
  <strong>{computedMinutes} 分钟</strong>
  {#if computedWords}<em>{computedWords} 字</em>{/if}
</span>
