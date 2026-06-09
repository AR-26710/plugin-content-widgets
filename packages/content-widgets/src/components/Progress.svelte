<script lang="ts">
  let {
    value = 0,
    max = 100,
    color,
    label,
    showPercent = true,
  }: {
    value?: number;
    max?: number;
    color?: string;
    label?: string;
    showPercent?: boolean;
  } = $props();

  let percent = $derived(Math.min(100, Math.max(0, (Number(value) / Number(max || 100)) * 100)));
</script>

<div class="xhhao-com-progress">
  {#if label}
    <div class="xhhao-com-progress-label">{label}</div>
  {/if}
  <div class="xhhao-com-progress-bar" style:--xhhao-com-progress-color={color}>
    <div class="xhhao-com-progress-fill" style:width={`${percent}%`}></div>
  </div>
  {#if showPercent}
    <div class="xhhao-com-progress-text">{Math.round(percent)}%</div>
  {/if}
</div>
