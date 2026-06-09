<script lang="ts">
  type StatusType = "default" | "info" | "success" | "warning" | "error";

  const statusColors: Record<StatusType, string> = {
    default: "#64748b",
    info: "#2f8df4",
    success: "#2fb579",
    warning: "#f59e0b",
    error: "#ef4444",
  };

  let {
    label = "",
    value = "",
    type = "default",
    color,
  }: {
    label?: string;
    value?: string;
    type?: StatusType;
    color?: string;
  } = $props();

  let statusColor = $derived(color || statusColors[type] || statusColors.default);
</script>

<span class="xhhao-com-status" style:--xhhao-com-status-color={statusColor}>
  {#if label}<span class="xhhao-com-status-label">{label}</span>{/if}
  <span class="xhhao-com-status-value">{value}</span>
</span>
