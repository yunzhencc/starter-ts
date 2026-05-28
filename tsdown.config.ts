import { defineConfig } from 'tsdown'
import { StaleGuardRecorder } from 'tsdown-stale-guard'
import ApiSnapshot from 'tsnapi/rolldown'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  dts: true,
  exports: true,
  publint: true,
  plugins: [
    ApiSnapshot(),
    StaleGuardRecorder(),
  ],
})
