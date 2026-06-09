<script lang="ts">
  import { quoteIcon } from "./icons/quoteIcons";

  let { icon, content = "" }: { icon?: string; content?: string } = $props();

  let iconValue = $derived(icon?.trim() || quoteIcon);
  let iconIsSvg = $derived(iconValue.startsWith("<svg"));
  let iconIsImage = $derived(!iconIsSvg && /^https?:\/\//.test(iconValue));
</script>

<div class="xhhao-com-quote">
  <div class="xhhao-com-quote-icon">
    {#if iconIsSvg}
      <span aria-hidden="true">{@html iconValue}</span>
    {:else if iconIsImage}
      <img src={iconValue} alt="" loading="lazy" referrerpolicy="no-referrer" />
    {:else}
      <span aria-hidden="true">{iconValue}</span>
    {/if}
  </div>
  <div class="xhhao-com-quote-content">{@html content}</div>
</div>
