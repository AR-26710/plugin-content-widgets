<script lang="ts">
  import { alertIcons } from "./icons/alertIcons";

  type ResultType = "success" | "info" | "warning" | "error";

  const iconMap: Record<ResultType, string> = {
    success: alertIcons.tip,
    info: alertIcons.info,
    warning: alertIcons.warning,
    error: alertIcons.error,
  };

  let {
    type = "success",
    title = "",
    content = "",
  }: {
    type?: ResultType;
    title?: string;
    content?: string;
  } = $props();

  let icon = $derived(iconMap[type] || iconMap.success);
</script>

<div class={`xhhao-com-result xhhao-com-result-type-${type}`}>
  <span class="xhhao-com-result-icon" aria-hidden="true">{@html icon}</span>
  <div class="xhhao-com-result-main">
    {#if title}<strong>{title}</strong>{/if}
    <div>{@html content}</div>
  </div>
</div>
