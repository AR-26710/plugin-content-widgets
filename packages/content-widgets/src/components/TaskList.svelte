<script lang="ts">
  export interface TaskItem {
    checked?: boolean;
    content: string;
  }

  let { items = [] }: { items?: TaskItem[] } = $props();
</script>

<ul class="xhhao-com-task-list">
  {#each items as item}
    <li class={`xhhao-com-task${item.checked ? " xhhao-com-task-checked" : ""}`}>
      <span class="xhhao-com-task-box" aria-hidden="true">{item.checked ? "✓" : ""}</span>
      <span class="xhhao-com-task-content">{@html item.content}</span>
    </li>
  {/each}
</ul>
