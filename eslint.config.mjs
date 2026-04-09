import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'next-env.d.ts',
    ]),
    // HACK: Avoids auto-detection crash.
    // https://github.com/vercel/next.js/issues/89764#issuecomment-3928272828
    {
        settings: {
            react: { version: '19' },
        },
    },
])

export default eslintConfig
