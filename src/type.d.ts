export {}

declare global {
}

// 自定义globalProperties类型申明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $imgUrl: (path: string) => string
    $showModal: (modal?: string, tab?: string) => void
  }
}
