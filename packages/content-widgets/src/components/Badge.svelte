<script lang="ts">
  type BadgeType = "default" | "info" | "success" | "warning" | "error";

  const badgeColors: Record<BadgeType, string> = {
    default: "#64748b",
    info: "#2f8df4",
    success: "#2fb579",
    warning: "#f59e0b",
    error: "#ef4444",
  };

  let {
    type = "default",
    color,
    outline = false,
    content = "",
  }: {
    type?: BadgeType;
    color?: string;
    outline?: boolean;
    content?: string;
  } = $props();

  let badgeColor = $derived(color || badgeColors[type] || badgeColors.default);
</script>

<span
  class={`xhhao-com-badge${outline ? " xhhao-com-badge-outline" : ""}`}
  style:--xhhao-com-badge-color={badgeColor}
>{@html content}</span>
