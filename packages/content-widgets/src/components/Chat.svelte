<script lang="ts">
  export interface ChatItem {
    name: string;
    content: string;
    avatar?: string;
    badge?: string;
    self?: boolean;
    system?: boolean;
  }

  let { items = [] }: { items?: ChatItem[] } = $props();

  function initial(name: string) {
    return name.trim().charAt(0).toUpperCase() || "?";
  }
</script>

<div class="xhhao-com-chat">
  {#each items as item}
    <div
      class={`xhhao-com-chat-row${item.self ? " xhhao-com-chat-row-self" : ""}${item.system ? " xhhao-com-chat-row-system" : ""}`}
    >
      {#if item.system}
        <div class="xhhao-com-chat-system">
          {#if item.name}<span>{item.name}</span>{/if}
          <div>{@html item.content}</div>
        </div>
      {:else}
        <div class="xhhao-com-chat-avatar" aria-hidden="true">
          {#if item.avatar}
            <img src={item.avatar} alt="" loading="lazy" referrerpolicy="no-referrer" />
          {:else}
            <span>{initial(item.name)}</span>
          {/if}
        </div>
        <div class="xhhao-com-chat-message">
          <div class="xhhao-com-chat-meta">
            <div class="xhhao-com-chat-name">{item.name}</div>
            {#if item.badge}
              <div class="xhhao-com-chat-badge">{item.badge}</div>
            {/if}
          </div>
          <div class="xhhao-com-chat-bubble">{@html item.content}</div>
        </div>
      {/if}
    </div>
  {/each}
</div>
