<script lang="ts">
  export interface TabPanel {
    content: string;
  }

  let {
    tabs = [],
    panels = [],
    center = false,
    active = 1,
  }: {
    tabs?: string[];
    panels?: TabPanel[];
    center?: boolean;
    active?: number;
  } = $props();

  let activeTab = $state(1);

  $effect(() => {
    activeTab = Number(active) || 1;
  });
</script>

<div class={`xhhao-com-tab-wrapper${center ? " xhhao-com-tab-wrapper-center" : ""}`}>
  <div class="xhhao-com-tabs" role="tablist">
    {#each tabs as tab, index}
      <button
        type="button"
        role="tab"
        class={`xhhao-com-tab-button${activeTab === index + 1 ? " xhhao-com-tab-button-active" : ""}`}
        aria-selected={activeTab === index + 1}
        onclick={() => (activeTab = index + 1)}
      >
        {tab}
      </button>
    {/each}
  </div>
  <div class="xhhao-com-tab-content">
    {#each panels as panel, index}
      <div
        class={`xhhao-com-tab-panel${activeTab === index + 1 ? " xhhao-com-tab-panel-active" : ""}`}
        role="tabpanel"
      >
        {@html panel.content}
      </div>
    {/each}
  </div>
</div>
