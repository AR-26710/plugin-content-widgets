<script lang="ts">
  type ButtonType = "primary" | "secondary" | "ghost";

  let {
    href,
    target = "_self",
    type = "primary",
    icon,
    content = "",
  }: {
    href?: string;
    target?: string;
    type?: ButtonType;
    icon?: string;
    content?: string;
  } = $props();

  let rel = $derived(target === "_blank" ? "noopener noreferrer" : undefined);
  let iconValue = $derived(icon?.trim());
  let iconIsSvg = $derived(Boolean(iconValue?.startsWith("<svg")));
</script>

{#if href}
  <a class={`xhhao-com-button xhhao-com-button-type-${type}`} {href} {target} {rel}>
    {#if iconValue}
      <span class="xhhao-com-button-icon" aria-hidden="true">
        {#if iconIsSvg}{@html iconValue}{:else}<img src={iconValue} alt="" loading="lazy" referrerpolicy="no-referrer" />{/if}
      </span>
    {/if}
    <span class="xhhao-com-button-content">{@html content}</span>
  </a>
{:else}
  <span class={`xhhao-com-button xhhao-com-button-type-${type}`}>
    {#if iconValue}
      <span class="xhhao-com-button-icon" aria-hidden="true">
        {#if iconIsSvg}{@html iconValue}{:else}<img src={iconValue} alt="" loading="lazy" referrerpolicy="no-referrer" />{/if}
      </span>
    {/if}
    <span class="xhhao-com-button-content">{@html content}</span>
  </span>
{/if}
