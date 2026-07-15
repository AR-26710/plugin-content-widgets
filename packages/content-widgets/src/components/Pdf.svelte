<script lang="ts">
  let {
    src = "",
    title,
    width,
    height,
  }: {
    src?: string;
    title?: string;
    width?: string | number;
    height?: string | number;
  } = $props();
</script>

<div class="xhhao-com-pdf">
  {#if title}
    <div class="xhhao-com-pdf__header">
      <svg class="xhhao-com-pdf__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
      <span class="xhhao-com-pdf__title">{title}</span>
      <a class="xhhao-com-pdf__download" href={src} download target="_blank" title="下载 PDF">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>
    </div>
  {/if}
  <div class="xhhao-com-pdf__body" style:width style:height>
    <iframe src={src} title={title || "PDF 预览"}></iframe>
  </div>
  <a class="xhhao-com-pdf__fallback" href={src} target="_blank">
    在新窗口打开 PDF
  </a>
</div>
