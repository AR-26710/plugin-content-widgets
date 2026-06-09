import { definePlugin } from '@halo-dev/ui-shared'

export default definePlugin({
  components: {},
  routes: [],
  extensionPoints: {
    'default:editor:extension:create': async () => {
      const { ContentWidgetBlockExtension, ContentWidgetInlineExtension, ContentWidgetMenuExtension } =
        await import('./editor')

      return [ContentWidgetBlockExtension, ContentWidgetInlineExtension, ContentWidgetMenuExtension]
    },
  },
})
