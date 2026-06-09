<script lang="ts">
  let { tip = "", content = "" }: { tip?: string; content?: string } = $props();
</script>

<span class="xhhao-com-tip" data-tip={tip}>{@html content}</span>
