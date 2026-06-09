import { IconMagic, IconPlug } from '@halo-dev/components'
import {
  Extension,
  ToolboxItem,
  type CommandMenuItemType,
  type ExtensionOptions,
  type ToolboxItemType,
} from '@halo-dev/richtext-editor'
import { markRaw } from 'vue'
import { openContentWidgetPicker } from './open-content-widget-picker'

export const ContentWidgetMenuExtension = Extension.create<ExtensionOptions>({
  name: 'xhhaoContentWidgetMenu',

  addOptions() {
    return {
      ...this.parent?.(),
      getCommandMenuItems(): CommandMenuItemType {
        return {
          priority: 80,
          icon: markRaw(IconMagic),
          title: '文章组件',
          keywords: ['文章组件', '内容组件', 'xhhao', 'widget', 'component'],
          command: ({ editor, range }) => {
            openContentWidgetPicker({ editor, range })
          },
        }
      },
      getToolboxItems({ editor }): ToolboxItemType {
        return {
          priority: 80,
          component: markRaw(ToolboxItem),
          props: {
            editor,
            icon: markRaw(IconPlug),
            title: '文章组件',
            description: '插入提示框、标签页、复制命令等内容组件',
            action: () => openContentWidgetPicker({ editor }),
          },
        }
      },
    }
  },
})
