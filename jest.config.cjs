/* .cjs em vez de .js porque o package.json tem "type": "module", 
o que tornaria qualquer .js na raiz um arquivo ESM — incompatível com o formato de config do Jest.*/

/** @type {import('jest').Config} */
const config = {
  projects: [
    {
      displayName: 'unit',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/tests/unit/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
      transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
      },
    },
    {
      displayName: 'integration',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/tests/integration/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
      transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
      },
    },
  ],
}

module.exports = config