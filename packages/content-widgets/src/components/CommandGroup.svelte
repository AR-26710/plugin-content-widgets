<script lang="ts">
  import { checkIcon, copyIcon } from "./icons/copyIcons";

  export interface CommandItem {
    prompt?: string;
    content: string;
  }

  let { title = "", commands = [] }: { title?: string; commands?: CommandItem[] } = $props();
  let copied = $state(false);

  let commandText = $derived(commands.map((item) => item.content).join("\n"));

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(commandText);
      copied = true;
      window.setTimeout(() => {
        copied = false;
      }, 1800);
    } catch (error) {
      console.error("复制失败:", error);
    }
  }
</script>

<div class="xhhao-com-command-group">
  <div class="xhhao-com-command-group-head">
    {#if title}<strong>{title}</strong>{/if}
    <button type="button" onclick={copyAll} aria-label="复制命令组">
      <span class="xhhao-com-command-group-copy-icon" aria-hidden="true">{@html copied ? checkIcon : copyIcon}</span>
      <span>{copied ? "已复制" : "复制"}</span>
    </button>
  </div>
  <div class="xhhao-com-command-group-body">
    {#each commands as item}
      <code class="xhhao-com-command-line">
        {#if item.prompt}<span>{item.prompt}</span>{/if}
        <b>{item.content}</b>
      </code>
    {/each}
  </div>
</div>
