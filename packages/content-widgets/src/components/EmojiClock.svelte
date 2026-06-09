<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  const emojiClockList = [
    "🕛",
    "🕧",
    "🕐",
    "🕜",
    "🕑",
    "🕝",
    "🕒",
    "🕞",
    "🕓",
    "🕟",
    "🕔",
    "🕠",
    "🕕",
    "🕡",
    "🕖",
    "🕢",
    "🕗",
    "🕣",
    "🕘",
    "🕤",
    "🕙",
    "🕥",
    "🕚",
    "🕦",
  ];

  let emoji = $state("🕛");
  let timer: number | undefined;

  function update() {
    const now = new Date();
    const index = now.getHours() * 2 + Math.round(now.getMinutes() / 30);
    emoji = emojiClockList[index % emojiClockList.length];
  }

  onMount(() => {
    update();
    timer = window.setInterval(update, 60000);
  });

  onDestroy(() => {
    if (timer) {
      window.clearInterval(timer);
    }
  });
</script>

<span class="xhhao-com-emoji-clock">{emoji}</span>
