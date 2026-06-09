import type { Editor, Range } from '@halo-dev/richtext-editor'
import type { ContentWidgetDefinition } from './content-widget-types'
import { definitionToNodeAttrs } from './content-widget-html'
import { CONTENT_WIDGET_BLOCK_NODE, CONTENT_WIDGET_INLINE_NODE } from './node-names'

export function insertContentWidget(
  editor: Editor,
  definition: ContentWidgetDefinition,
  range?: Range,
) {
  const nodeName =
    definition.kind === 'inline' ? CONTENT_WIDGET_INLINE_NODE : CONTENT_WIDGET_BLOCK_NODE
  const chain = editor.chain().focus()

  if (range) {
    chain.deleteRange(range)
  }

  chain
    .insertContent({
      type: nodeName,
      attrs: definitionToNodeAttrs(definition),
    })
    .run()
}
