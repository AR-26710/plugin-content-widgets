<script lang="ts">
  type NoteColor = "yellow" | "green" | "blue" | "pink" | "purple";

  let {
    color = "yellow",
    rotate = false,
    content = "",
  }: {
    color?: NoteColor;
    rotate?: boolean;
    content?: string;
  } = $props();
</script>

<div class={`xhhao-com-note xhhao-com-note-${color}${rotate ? " xhhao-com-note-rotate" : ""}`}>
  {@html content}
</div>
