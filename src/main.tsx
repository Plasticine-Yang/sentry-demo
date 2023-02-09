import { setupReact, setupSentry } from './setup'

const bootstrap = () => {
  // sentry
  setupSentry()

  // react
  setupReact()
}

bootstrap()
