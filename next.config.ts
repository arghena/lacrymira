import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    reactCompiler: true,
    turbopack: {
        rules: {
            '*.css': {
                loaders: ['@tailwindcss/turbopack'],
                // https://github.com/tailwindlabs/tailwindcss/pull/20660
            },
        },
    },
    poweredByHeader: false,
}

export default nextConfig
