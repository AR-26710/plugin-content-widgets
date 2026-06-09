import ContentWidgetPicker from '@/components/ContentWidgetPicker.vue'
import { createApp } from 'vue'
import { insertContentWidget } from './insert-content-widget'
import type { ContentWidgetDefinition, ContentWidgetInsertTarget } from './content-widget-types'

let activeApp: ReturnType<typeof createApp> | undefined
let activeContainer: HTMLDivElement | undefined

export function openContentWidgetPicker(target: ContentWidgetInsertTarget) {
  activeApp?.unmount()
  activeContainer?.remove()

  const container = document.createElement('div')
  container.dataset.xhhaoContentWidgetPicker = 'true'
  document.body.append(container)

  const close = () => {
    app.unmount()
    container.remove()
    if (activeApp === app) {
      activeApp = undefined
      activeContainer = undefined
    }
  }

  const select = (definition: ContentWidgetDefinition) => {
    insertContentWidget(target.editor, definition, target.range)
    close()
  }

  const app = createApp(ContentWidgetPicker, {
    onClose: close,
    onSelect: select,
  })

  activeApp = app
  activeContainer = container

  try {
    app.mount(container)
  } catch (error) {
    console.error('[content-widgets] failed to open widget picker', error)
    close()
  }
}
