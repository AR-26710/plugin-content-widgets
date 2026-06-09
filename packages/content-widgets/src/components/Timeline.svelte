<script lang="ts">
  export interface TimelineItem {
    time: string;
    content: string;
  }

  let { items = [] }: { items?: TimelineItem[] } = $props();
</script>

<ol class="xhhao-com-timeline">
  {#each items as item}
    <li class="xhhao-com-timeline-item">
      <div class="xhhao-com-timeline-marker" aria-hidden="true"></div>
      <div class="xhhao-com-timeline-body">
        <time>{item.time}</time>
        <div class="xhhao-com-timeline-content">{@html item.content}</div>
      </div>
    </li>
  {/each}
</ol>
