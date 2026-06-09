<script lang="ts">
  import { alertIcons } from "./icons/alertIcons";

  type AlertType = "tip" | "info" | "question" | "warning" | "error";

  const alertConfig: Record<AlertType, { color: string; title: string }> = {
    tip: { color: "#2fb579", title: "提醒" },
    info: { color: "#64748b", title: "信息" },
    question: { color: "#2f8df4", title: "问题" },
    warning: { color: "#f59e0b", title: "警告" },
    error: { color: "#ef4444", title: "错误" },
  };

  let {
    type = "tip",
    title,
    icon,
    card = false,
    gradient = true,
    content = "",
  }: {
    type?: AlertType;
    title?: string;
    icon?: string;
    card?: boolean;
    gradient?: boolean;
    content?: string;
  } = $props();

  let config = $derived(alertConfig[type] || alertConfig.tip);
  let iconValue = $derived(icon?.trim() || alertIcons[type] || alertIcons.tip);
  let iconIsSvg = $derived(iconValue.startsWith("<svg"));
  let iconIsImage = $derived(!iconIsSvg);
</script>

<div
  class={`xhhao-com-alert xhhao-com-alert-type-${type}${card ? " xhhao-com-alert-card" : ""}${gradient ? "" : " xhhao-com-alert-no-gradient"}`}
  style:--xhhao-com-primary={config.color}
>
  <div class="xhhao-com-alert-title">
    <span class="xhhao-com-alert-title-icon" aria-hidden="true">
      {#if iconIsSvg}
        {@html iconValue}
      {:else if iconIsImage}
        <img src={iconValue} alt="" loading="lazy" referrerpolicy="no-referrer" />
      {/if}
    </span>
    {title || config.title}
  </div>
  <div class="xhhao-com-alert-body">
    {@html content}
  </div>
</div>
