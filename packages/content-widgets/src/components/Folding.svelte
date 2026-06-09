<script lang="ts">
  let {
    title = "",
    open = false,
    content = "",
  }: {
    title?: string;
    open?: boolean;
    content?: string;
  } = $props();
</script>

<details class="xhhao-com-folding" {open}>
  <summary>{title}</summary>
  <div class="xhhao-com-folding-detail">
    {@html content}
  </div>
</details>
