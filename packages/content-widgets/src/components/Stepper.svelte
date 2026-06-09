<script lang="ts">
  export interface StepItem {
    title: string;
    content: string;
  }

  let { items = [] }: { items?: StepItem[] } = $props();
</script>

<ol class="xhhao-com-stepper">
  {#each items as item, index}
    <li class="xhhao-com-stepper-item">
      <div class="xhhao-com-stepper-marker">{index + 1}</div>
      <div class="xhhao-com-stepper-content">
        <div class="xhhao-com-stepper-title">{item.title}</div>
        <div class="xhhao-com-stepper-body">{@html item.content}</div>
      </div>
    </li>
  {/each}
</ol>
