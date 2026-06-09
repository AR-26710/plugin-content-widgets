<script lang="ts">
  import { checkIcon, copyIcon } from "./icons/copyIcons";

  let { code = "", prompt = "$" }: { code?: string; prompt?: string | boolean } = $props();
  let copied = $state(false);

  let showPrompt = $derived(prompt !== true && prompt !== "");

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      window.setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (error) {
      console.error("复制失败:", error);
    }
  }
</script>

<code class="xhhao-com-copy">
  {#if showPrompt}
    <span class="xhhao-com-copy-prompt">{prompt}</span>
  {/if}
  <span class="xhhao-com-copy-code">{code}</span>
  <button class="xhhao-com-copy-btn" type="button" onclick={copyCode} aria-label="复制">
    <span class="xhhao-com-copy-icon" aria-hidden="true">{@html copied ? checkIcon : copyIcon}</span>
    <span class="xhhao-com-copy-status">{copied ? "已复制" : "复制"}</span>
  </button>
</code>
