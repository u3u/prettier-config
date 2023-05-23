declare module 'prettier-plugin-twin.macro' {
  import { type Plugin } from 'prettier'

  const tailwindPlugin: Required<Plugin>

  export default tailwindPlugin
}
