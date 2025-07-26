import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install (app: { directive: (arg0: string, arg1: { mounted(el: any, binding: any): void }) => void }) {
    app.directive('img-lazy', {
      mounted (el, binding) {
        
        console.log(el, binding.value)
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}