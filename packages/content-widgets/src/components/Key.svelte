<script lang="ts">
  let {
    text,
    code,
    cmd = false,
    ctrl = false,
    shift = false,
    alt = false,
  }: {
    text?: string;
    code?: string;
    cmd?: boolean;
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;
  } = $props();

  const isMac = typeof navigator !== "undefined" && /mac/i.test(navigator.userAgent);
  let display = $derived.by(() => {
    const parts: string[] = [];
    if (cmd) parts.push(isMac ? "⌘" : "Ctrl");
    if (ctrl && !cmd) parts.push(isMac ? "⌃" : "Ctrl");
    if (shift) parts.push(isMac ? "⇧" : "Shift");
    if (alt) parts.push(isMac ? "⌥" : "Alt");
    if (code) parts.push(code);
    return text || parts.join(isMac ? "" : "+");
  });
</script>

<kbd class="xhhao-com-key">{display}</kbd>
