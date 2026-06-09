<script lang="ts">
  let {
    leftTitle = "之前",
    rightTitle = "之后",
    left = "",
    right = "",
  }: {
    leftTitle?: string;
    rightTitle?: string;
    left?: string;
    right?: string;
  } = $props();
</script>

<div class="xhhao-com-compare">
  <section class="xhhao-com-compare-panel xhhao-com-compare-before">
    <div class="xhhao-com-compare-title">{leftTitle}</div>
    <div class="xhhao-com-compare-body">{@html left}</div>
  </section>
  <section class="xhhao-com-compare-panel xhhao-com-compare-after">
    <div class="xhhao-com-compare-title">{rightTitle}</div>
    <div class="xhhao-com-compare-body">{@html right}</div>
  </section>
</div>
