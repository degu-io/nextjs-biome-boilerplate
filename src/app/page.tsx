import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/**
 * Renders the home page for the Next.js boilerplate, including an overview, features, setup instructions, project structure, customization options, contribution guidelines, and acknowledgments.
 *
 * @returns The complete homepage layout as a React element.
 */
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex flex-col items-center sm:items-start gap-4 mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Degu IO Boilerplate</h1>
          <Button variant="link" asChild>
            <a href="https://degu.io" target="_blank" rel="noopener noreferrer">
              degu.io →
            </a>
          </Button>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          NextJS with Biome, Lefthook and TailwindCSS
        </p>
        <div className="flex gap-2 flex-wrap">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </header>

      <main className="w-full max-w-4xl mx-auto overflow-y-auto">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Modern Next.js Boilerplate</CardTitle>
              <CardDescription>
                A modern, feature-rich boilerplate for NextJS applications with
                built-in linting, formatting, and styling solutions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Separator data-testid="features-separator" />

          <Card data-testid="features-card">
            <CardHeader>
              <CardTitle className="text-2xl">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Next.js 15</Badge>
                  <Badge variant="secondary">React 19</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="secondary">TailwindCSS 4</Badge>
                  <Badge variant="outline">Biome</Badge>
                  <Badge variant="secondary">Lefthook</Badge>
                  <Badge variant="outline">PNPM</Badge>
                  <Badge variant="secondary">Turbopack</Badge>
                  <Badge variant="outline">Vitest</Badge>
                </div>
                <ul className="list-disc pl-6 space-y-2" data-testid="features">
                  <li>
                    <strong>Next.js 15</strong> - The React framework for
                    production
                  </li>
                  <li>
                    <strong>React 19</strong> - The library for web and native
                    user interfaces
                  </li>
                  <li>
                    <strong>TypeScript</strong> - JavaScript with syntax for
                    types
                  </li>
                  <li>
                    <strong>TailwindCSS 4</strong> - A utility-first CSS
                    framework
                  </li>
                  <li>
                    <strong>Biome</strong> - Fast linter and formatter for
                    JavaScript, TypeScript, JSX, and more
                  </li>
                  <li>
                    <strong>Lefthook</strong> - Git hooks manager
                  </li>
                  <li>
                    <strong>PNPM</strong> - Fast, disk space efficient package
                    manager
                  </li>
                  <li>
                    <strong>Turbopack</strong> - Incremental bundler for
                    development
                  </li>
                  <li>
                    <strong>Geist Fonts</strong> - Beautiful, modern typeface by
                    Vercel
                  </li>
                  <li>
                    <strong>Vitest</strong> - Fast unit/integration testing
                    framework
                  </li>
                  <li>
                    <strong>@testing-library/react</strong> - Simple and
                    complete React DOM testing utilities
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="https://nodejs.org/"
                      className="text-blue-600 hover:underline"
                    >
                      Node.js
                    </a>{" "}
                    (v22 or newer)
                  </li>
                  <li>
                    <a
                      href="https://pnpm.io/"
                      className="text-blue-600 hover:underline"
                    >
                      PNPM
                    </a>{" "}
                    (v10 or newer)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Installation</h3>

                <h4 className="text-lg font-medium mb-2">
                  Option 1: Clone the repository
                </h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                  <code className="font-mono text-sm">
                    git clone
                    https://github.com/yourusername/nextjs_boilerplate.git
                    my-project{"\n"}
                    cd my-project{"\n"}
                    pnpm install
                  </code>
                </pre>

                <h4 className="text-lg font-medium mt-4 mb-2">
                  Option 2: Using degit
                </h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                  <code className="font-mono text-sm">
                    npx degit yourusername/nextjs_boilerplate my-project{"\n"}
                    cd my-project{"\n"}
                    pnpm install
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p>Start the development server with Turbopack:</p>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                  <code className="font-mono text-sm">pnpm dev</code>
                </pre>
                <p>
                  Your application will be available at{" "}
                  <a
                    href="http://localhost:3000"
                    className="text-blue-600 hover:underline"
                  >
                    http://localhost:3000
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Project Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code className="font-mono text-sm">
                  nextjs_boilerplate/{"\n"}
                  ├── public/ # Static assets{"\n"}
                  ├── src/{"\n"}│ ├── app/ # App router pages and layouts{"\n"}│
                  │ ├── globals.css # Global styles{"\n"}│ │ ├── layout.tsx #
                  Root layout{"\n"}│ │ ├── page.tsx # Home page{"\n"}│ │ └──
                  favicon.ico # Favicon{"\n"}│ └── lib/ # Utility functions
                  {"\n"}│ └── utils.ts # Class name utility{"\n"}
                  ├── test/ # Vitest and Testing Library tests{"\n"}│ ├──
                  home.test.tsx # Example test for Home page{"\n"}│ └── setup.ts
                  # Test setup file{"\n"}
                  ├── .gitignore # Git ignore file{"\n"}
                  ├── biome.json # Biome configuration{"\n"}
                  ├── components.json # UI components configuration{"\n"}
                  ├── lefthook.yml # Git hooks configuration{"\n"}
                  ├── next.config.ts # Next.js configuration{"\n"}
                  ├── next-env.d.ts # Next.js type definitions{"\n"}
                  ├── package.json # Project dependencies and scripts{"\n"}
                  ├── pnpm-lock.yaml # Lockfile for pnpm{"\n"}
                  ├── README.md # Project documentation{"\n"}
                  ├── tsconfig.json # TypeScript configuration{"\n"}
                  ├── vitest.config.ts # Vitest configuration{"\n"}
                  └── .nvmrc # Node version
                </code>
              </pre>
            </CardContent>
          </Card>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Acknowledgments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://nextjs.org/"
                    className="text-blue-600 hover:underline"
                  >
                    Next.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="text-blue-600 hover:underline"
                  >
                    TailwindCSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://biomejs.dev/"
                    className="text-blue-600 hover:underline"
                  >
                    Biome
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/evilmartians/lefthook"
                    className="text-blue-600 hover:underline"
                  >
                    Lefthook
                  </a>
                </li>
                <li>
                  <a
                    href="https://vitest.dev/"
                    className="text-blue-600 hover:underline"
                  >
                    Vitest
                  </a>
                </li>
                <li>
                  <a
                    href="https://testing-library.com/docs/react-testing-library/intro/"
                    className="text-blue-600 hover:underline"
                  >
                    @testing-library/react
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="w-full mt-8 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://degu.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Degu IO
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/next.svg"
            alt="Next.js logo"
            width={60}
            height={12}
            className="dark:invert"
          />
        </a>
      </footer>
    </div>
  );
}
