import ContentWidgetPreview from '@/components/ContentWidgetPreview.vue'
import {
  deleteNode,
  EditorState,
  isActive,
  Node,
  type NodeBubbleMenuType,
  VueNodeViewRenderer,
} from '@halo-dev/richtext-editor'
import { markRaw } from 'vue'
import IconDeleteBin from '~icons/ri/delete-bin-2-line'
import { blockWidgetTags, inlineWidgetTags } from './content-widget-registry'
import { createWidgetElement, elementToNodeAttrs } from './content-widget-html'
import { CONTENT_WIDGET_BLOCK_NODE, CONTENT_WIDGET_INLINE_NODE } from './node-names'

function baseAttributes() {
  return {
    tagName: {
      default: '',
    },
    attributes: {
      default: {},
    },
    innerHTML: {
      default: '',
    },
    title: {
      default: '',
    },
  }
}

function createParseRules(tags: string[]) {
  return tags.map((tag) => ({
    tag,
    getAttrs: (element: HTMLElement) => elementToNodeAttrs(element),
  }))
}

function createBubbleMenu(nodeName: string): NodeBubbleMenuType {
  return {
    pluginKey: `${nodeName}BubbleMenu`,
    shouldShow: ({ state }: { state: EditorState }) => isActive(state, nodeName),
    items: [
      {
        priority: 10,
        props: {
          icon: markRaw(IconDeleteBin),
          title: '删除',
          action: ({ editor }) => {
            deleteNode(nodeName, editor)
          },
        },
      },
    ],
  }
}

export const ContentWidgetBlockExtension = Node.create({
  name: CONTENT_WIDGET_BLOCK_NODE,
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes: baseAttributes,

  addOptions() {
    return {
      ...this.parent?.(),
      getBubbleMenu: () => createBubbleMenu(CONTENT_WIDGET_BLOCK_NODE),
    }
  },

  parseHTML() {
    return createParseRules(blockWidgetTags)
  },

  renderHTML({ node }) {
    return createWidgetElement({
      tagName: node.attrs.tagName,
      attributes: node.attrs.attributes,
      innerHTML: node.attrs.innerHTML,
    }) as unknown as [string, Record<string, unknown>]
  },

  addNodeView() {
    return VueNodeViewRenderer(ContentWidgetPreview)
  },
})

export const ContentWidgetInlineExtension = Node.create({
  name: CONTENT_WIDGET_INLINE_NODE,
  group: 'inline',
  inline: true,
  atom: true,

  addAttributes: baseAttributes,

  addOptions() {
    return {
      ...this.parent?.(),
      getBubbleMenu: () => createBubbleMenu(CONTENT_WIDGET_INLINE_NODE),
    }
  },

  parseHTML() {
    return createParseRules(inlineWidgetTags)
  },

  renderHTML({ node }) {
    return createWidgetElement({
      tagName: node.attrs.tagName,
      attributes: node.attrs.attributes,
      innerHTML: node.attrs.innerHTML,
    }) as unknown as [string, Record<string, unknown>]
  },

  addNodeView() {
    return VueNodeViewRenderer(ContentWidgetPreview)
  },
})
