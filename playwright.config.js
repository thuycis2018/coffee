import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests/e2e',
    use: {
        baseURL: 'http://localhost:5173',
        headless: true,
        viewport: { width: 1280, height: 720 },
    },
    webServer: {
        command: 'npm run dev',
        port: 5173,
        timeout: 120 * 1000,
        // eslint-disable-next-line no-undef
        reuseExistingServer: !process.env.CI,
    },
    reporter: [
        // HTML Report, output will be saved in 'test-results/report'
        ['html', { outputFolder: 'test-results/report', open: 'never' }],

        // JSON Report, output will be saved in 'test-results/results.json'
        ['json', { outputFile: 'test-results/results.json' }],

        // List Reporter, prints results in a simple list format in the console
        ['list'],

        // Dot Reporter, prints dots in the console to show progress
        ['dot']
    ],
});
