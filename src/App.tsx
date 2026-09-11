import { createSignal, type Component } from "solid-js";
import styles from "./App.module.css";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class={styles.app}>
      <header class={styles.header}>
        <h1>Adaptive Fitness</h1>
        <p class={styles.subtitle}>
          Inclusive fitness support for neurodivergent adults
        </p>
      </header>

      <main class={styles.main}>
        <section class={styles.card}>
          <h2>Welcome to SolidJS + Vite</h2>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR.
          </p>

          <div class={styles.counter}>
            <button
              class={styles.button}
              onClick={() => setCount((c) => c - 1)}
              aria-label="decrement"
            >
              -
            </button>
            <span class={styles.count} aria-live="polite">
              Count is {count()}
            </span>
            <button
              class={styles.button}
              onClick={() => setCount((c) => c + 1)}
              aria-label="increment"
            >
              +
            </button>
          </div>

          <button
            class={`${styles.button} ${styles.reset}`}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </section>

        <section class={styles.info}>
          <h3>Getting Started</h3>
          <ul>
            <li>
              <code>npm run dev</code> - Start dev server at{" "}
              <a href="http://localhost:3000" target="_blank">
                localhost:3000
              </a>
            </li>
            <li>
              <code>npm run build</code> - Build for production
            </li>
            <li>
              <code>npm run preview</code> - Preview production build
            </li>
          </ul>
        </section>
      </main>

      <footer class={styles.footer}>
        <p>
          Built with{" "}
          <a href="https://solidjs.com" target="_blank" rel="noopener">
            SolidJS
          </a>{" "}
          &{" "}
          <a href="https://vitejs.dev" target="_blank" rel="noopener">
            Vite
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
