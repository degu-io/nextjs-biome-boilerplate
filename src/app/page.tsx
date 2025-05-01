import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex flex-col items-center sm:items-start gap-4 mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Degu IO Boilerplate</h1>
          <a
            href="https://degu.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline hover:underline-offset-4 font-medium"
          >
            degu.io →
          </a>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          NextJS with Biome, Lefthook and TailwindCSS
        </p>
      </header>

      <main className="w-full max-w-4xl mx-auto overflow-y-auto">
        <section className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            A modern, feature-rich boilerplate for NextJS applications with
            built-in linting, formatting, and styling solutions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Next.js 15</strong> - The React framework for production
            </li>
            <li>
              <strong>React 19</strong> - The library for web and native user
              interfaces
            </li>
            <li>
              <strong>TypeScript</strong> - JavaScript with syntax for types
            </li>
            <li>
              <strong>TailwindCSS 4</strong> - A utility-first CSS framework
            </li>
            <li>
              <strong>Biome</strong> - Fast linter and formatter for JavaScript,
              TypeScript, JSX, and more
            </li>
            <li>
              <strong>Lefthook</strong> - Git hooks manager
            </li>
            <li>
              <strong>PNPM</strong> - Fast, disk space efficient package manager
            </li>
            <li>
              <strong>Turbopack</strong> - Incremental bundler for development
            </li>
            <li>
              <strong>Geist Fonts</strong> - Beautiful, modern typeface by
              Vercel
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Prerequisites</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://nodejs.org/"
                className="text-blue-600 hover:underline"
              >
                Node.js
              </a>{" "}
              (v18 or newer)
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

          <h3 className="text-xl font-semibold mt-6 mb-3">Installation</h3>

          <h4 className="text-lg font-medium mt-4 mb-2">
            Option 1: Clone the repository
          </h4>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">
              git clone https://github.com/yourusername/nextjs_boilerplate.git
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

          <h4 className="text-lg font-medium mt-4 mb-2">
            Option 3: Using the template directly
          </h4>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">
              pnpm create next-app --example
              https://github.com/yourusername/nextjs_boilerplate my-project
            </code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">Development</h3>
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

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Build for Production
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">pnpm build</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Start Production Server
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">pnpm start</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">Linting</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">
              # Check for linting issues{"\n"}
              pnpm lint{"\n"}
              {"\n"}# Fix linting issues{"\n"}
              pnpm lint:fix
            </code>
          </pre>

          <h2 className="text-2xl font-bold mt-8 mb-4">Project Structure</h2>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">
              nextjs_boilerplate/{"\n"}
              ├── public/ # Static assets{"\n"}
              ├── src/{"\n"}│ ├── app/ # App router pages and layouts{"\n"}│ │
              ├── globals.css # Global styles{"\n"}│ │ ├── layout.tsx # Root
              layout{"\n"}│ │ └── page.tsx # Home page{"\n"}│ └── lib/ # Utility
              functions{"\n"}
              ├── .gitignore # Git ignore file{"\n"}
              ├── biome.json # Biome configuration{"\n"}
              ├── components.json # UI components configuration{"\n"}
              ├── lefthook.yml # Git hooks configuration{"\n"}
              ├── next.config.ts # Next.js configuration{"\n"}
              ├── package.json # Project dependencies and scripts{"\n"}
              ├── postcss.config.mjs # PostCSS configuration{"\n"}
              ├── README.md # Project documentation{"\n"}
              └── tsconfig.json # TypeScript configuration
            </code>
          </pre>

          <h2 className="text-2xl font-bold mt-8 mb-4">Git Hooks</h2>
          <p>This boilerplate uses Lefthook to manage Git hooks:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>pre-commit</strong>: Automatically formats and lints
              staged files using Biome
            </li>
            <li>
              <strong>pre-push</strong>: Checks files for linting issues before
              pushing
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Customization</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">TailwindCSS</h3>
          <p>
            The project uses TailwindCSS 4 with a custom configuration. You can
            modify the theme in{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              src/app/globals.css
            </code>
            .
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Biome</h3>
          <p>
            Biome is configured in{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              biome.json
            </code>
            . You can adjust linting and formatting rules to match your
            preferences.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Next.js</h3>
          <p>
            Customize your Next.js configuration in{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              next.config.ts
            </code>
            .
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contributing</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Fork the repository</li>
            <li>
              Create your feature branch (
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                git checkout -b feature/amazing-feature
              </code>
              )
            </li>
            <li>
              Commit your changes (
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                git commit -m 'Add some amazing feature'
              </code>
              )
            </li>
            <li>
              Push to the branch (
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                git push origin feature/amazing-feature
              </code>
              )
            </li>
            <li>Open a Pull Request</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">License</h2>
          <p>
            This project is licensed under the MIT License - see the LICENSE
            file for details.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Acknowledgments</h2>
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
          </ul>
        </section>
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
