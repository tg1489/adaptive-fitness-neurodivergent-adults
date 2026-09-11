import { createSignal, createMemo, For, Show, type Component } from "solid-js";
import styles from "./App.module.css";
import { listings, allTags, type Category, type Tag } from "./data/directory";

const FALLBACK_IMG = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60";
const onImgError = (e: Event) => {
  const t = e.currentTarget as HTMLImageElement;
  if (t.src !== FALLBACK_IMG) {
    t.onerror = null;
    t.src = FALLBACK_IMG;
  }
};

const categories: { id: Category | "all"; label: string; emoji: string }[] = [
  { id: "all", label: "All", emoji: "✨" },
  { id: "gym", label: "Gyms", emoji: "🏋️" },
  { id: "trainer", label: "Trainers", emoji: "🧠" },
  { id: "equipment", label: "Equipment", emoji: "🎧" },
];

const App: Component = () => {
  const [query, setQuery] = createSignal("");
  const [activeCat, setActiveCat] = createSignal<Category | "all">("all");
  const [activeTags, setActiveTags] = createSignal<Tag[]>([]);

  const toggleTag = (t: Tag) => {
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  const counts = createMemo(() => ({
    all: listings.length,
    gym: listings.filter((l) => l.category === "gym").length,
    trainer: listings.filter((l) => l.category === "trainer").length,
    equipment: listings.filter((l) => l.category === "equipment").length,
  }));

  const filtered = createMemo(() => {
    const q = query().toLowerCase().trim();
    const cat = activeCat();
    const tags = activeTags();
    return listings.filter((l) => {
      if (cat !== "all" && l.category !== cat) return false;
      if (tags.length && !tags.every((t) => l.tags.includes(t))) return false;
      if (!q) return true;
      const hay = `${l.name} ${l.description} ${l.location} ${l.tags.join(" ")} ${(l.features || []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  });

  const featured = listings.filter((l) => l.badge);

  return (
    <div class={styles.shell}>
      {/* HEADER */}
      <header class={styles.header}>
        <div class={styles.headerInner}>
          <a class={styles.brand} href="#">
            <div class={styles.logo}>💙</div>
            <div class={styles.brandText}>
              <span class={styles.brandTitle}>Adaptive Fitness</span>
              <span class={styles.brandSub}>Neurodivergent Directory</span>
            </div>
          </a>

          <nav class={styles.nav} aria-label="Primary">
            <a class={styles.active} href="#directory">Directory</a>
            <a href="#why">Why us</a>
            <a href="#resources">Resources</a>
            <a href="#add">For Gyms</a>
          </nav>

          <div style={{ display: "flex", gap: "8px", "align-items": "center" }}>
            <button class={`${styles.cta} ${styles.ctaSecondary}`} style={{ display: "none" } as any}>
              Sign in
            </button>
            <a href="#directory" class={styles.cta}>
              Find a gym →
            </a>
            <button class={styles.mobileMenu} aria-label="Menu" style={{ border: "1px solid var(--border)", background: "#1e293b", color: "var(--fg)", padding: "8px 10px", "border-radius": "10px" } as any}>
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section class={styles.hero}>
        <div class={styles.container}>
          <div class={styles.heroInner}>
            <div class={styles.heroCopy}>
              <div style={{ display: "inline-flex", gap: "8px", "align-items": "center", background: "#1e293b", border: "1px solid var(--border)", padding: "6px 12px", "border-radius": "999px", "font-size": "12px", "font-weight": "700", "letter-spacing": "0.02em" } as any}>
                <span style={{ background: "#4f46e5", color: "white", padding: "2px 8px", "border-radius": "999px" } as any}>NEW</span> Sensory-friendly • Vetted • Peer-reviewed
              </div>

              <h1>
                Fitness that <span>fits your sensory</span> needs.
              </h1>

              <p class={styles.heroLead}>
                A curated directory of sensory-friendly gyms, certified neuro-inclusive trainers, and equipment designed for autism, ADHD, and other sensory-processing needs. Every listing is vetted for calm, predictability, and choice.
              </p>

              <ul class={styles.heroBullets}>
                <li>🔇 Quiet hours & dim lighting</li>
                <li>🧩 Visual schedules</li>
                <li>🎧 Noise options</li>
                <li>🏳️ Stimming-affirming</li>
              </ul>

              <div class={styles.searchWrap} role="search">
                <input
                  id="searchInput"
                  type="search"
                  placeholder="Search gyms, trainers, or equipment… e.g. “quiet hours Portland”"
                  value={query()}
                  onInput={(e) => setQuery(e.currentTarget.value)}
                  aria-label="Search directory"
                  enterkeyhint="search"
                  inputmode="search"
                />
                <button
                  class={styles.searchBtn}
                  onClick={() => document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Search →
                </button>
              </div>

              <div class={styles.searchMeta}>
                <span>Popular: <button class={styles.clearBtn} onClick={() => { setActiveCat("gym"); setActiveTags(["Quiet Hours"]); setQuery(""); document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" }); }}>Quiet Hours</button> • <button class={styles.clearBtn} onClick={() => { setActiveCat("trainer"); setActiveTags(["Autism-Informed"]); setQuery(""); document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" }); }}>Autism-Informed</button> • <button class={styles.clearBtn} onClick={() => { setActiveCat("equipment"); setActiveTags(["Weighted Equipment"]); setQuery(""); document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" }); }}>Weighted</button></span>
                <span>{filtered().length} results • {counts().gym} gyms • {counts().trainer} trainers • {counts().equipment} equipment</span>
              </div>
            </div>

            <div class={styles.heroVisual} aria-hidden="true">
              <div class={styles.visualGrid}>
                <For each={featured.slice(0, 4)}>
                  {(item) => (
                    <div class={styles.visualCard}>
                      <img src={item.image} alt="" loading="lazy" onError={onImgError} />
                      <div class={styles.visualCardBody}>
                        <strong>{item.name.split("—")[0].split(",")[0]}</strong>
                        <span>{item.location.split("•")[0]}</span>
                      </div>
                    </div>
                  )}
                </For>
              </div>

              <div class={styles.heroStat}>
                <div>
                  <strong>4.8/5</strong>
                  <span>Avg rating</span>
                </div>
                <div>
                  <strong>1.2k+</strong>
                  <span>Reviews</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Vetted</span>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST */}
          <div class={styles.trust}>
            <div class={styles.trustLeft}>
              <div class={styles.trustAvatars}>
                <img src="https://i.pravatar.cc/100?img=32" alt="" />
                <img src="https://i.pravatar.cc/100?img=15" alt="" />
                <img src="https://i.pravatar.cc/100?img=23" alt="" />
                <img src="https://i.pravatar.cc/100?img=11" alt="" />
              </div>
              <span>
                Trusted by <strong style={{ color: "var(--fg)" } as any}>3,400+ families</strong> & 120 OT clinics • <span style={{ color: "#f59e0b" } as any}>★★★★★</span> 4.9 on Google
              </span>
            </div>
            <div class={styles.trustLogos}>
              <span>NASM</span>
              <span>ACSM</span>
              <span>AOTA</span>
              <span>Autism Society</span>
              <span>CHADD</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <div class={styles.filters} id="directory">
        <div class={styles.container}>
          <div class={styles.filtersInner}>
            <div class={styles.tabs} role="tablist" aria-label="Categories">
              <For each={categories}>
                {(c) => (
                  <button
                    role="tab"
                    aria-selected={activeCat() === c.id}
                    class={`${styles.tab} ${activeCat() === c.id ? styles.active : ""}`}
                    onClick={() => setActiveCat(c.id)}
                  >
                    <span>{c.emoji}</span> {c.label}{" "}
                    <span class={styles.tabCount}>{counts()[c.id as keyof typeof counts]}</span>
                  </button>
                )}
              </For>
            </div>

            <div style={{ display: "flex", gap: "8px", "align-items": "center" } as any}>
              <span style={{ "font-size": "13px", color: "var(--muted)", "font-weight": "600" } as any}>Filters:</span>
              <div class={styles.pills}>
                <For each={allTags.slice(0, 8)}>
                  {(tag) => (
                    <button
                      class={`${styles.pill} ${activeTags().includes(tag) ? styles.active : ""}`}
                      onClick={() => toggleTag(tag)}
                      aria-pressed={activeTags().includes(tag)}
                    >
                      {tag}
                    </button>
                  )}
                </For>
              </div>
            </div>
          </div>

          <div class={styles.resultsMeta}>
            <span>
              Showing <strong>{filtered().length}</strong> of <strong>{listings.length}</strong> listings
              <Show when={activeTags().length > 0}> • {activeTags().join(" + ")}</Show>
              <Show when={query()}> • “{query()}”</Show>
            </span>
            <Show when={activeTags().length > 0 || query() || activeCat() !== "all"}>
              <button
                class={styles.clearBtn}
                onClick={() => {
                  setQuery("");
                  setActiveCat("all");
                  setActiveTags([]);
                }}
              >
                Clear all ×
              </button>
            </Show>
          </div>
        </div>
      </div>

      {/* GRID */}
      <main class={styles.main}>
        <div class={styles.container}>
          <Show
            when={filtered().length > 0}
            fallback={
              <div class={styles.empty}>
                <h3>No matches for “{query()}”</h3>
                <p>Try fewer filters or browse all sensory-friendly gyms. Every listing is tag-vetted.</p>
                <button
                  class={styles.cta}
                  onClick={() => {
                    setQuery("");
                    setActiveTags([]);
                    setActiveCat("all");
                  }}
                >
                  Clear filters
                </button>
              </div>
            }
          >
            <div class={styles.grid}>
              <For each={filtered()}>
                {(item) => (
                  <article class={styles.card}>
                    <div class={styles.cardMedia}>
                      <img src={item.image} alt={item.name} loading="lazy" onError={onImgError} />
                      <Show when={item.badge}>
                        <span
                          class={`${styles.badge} ${
                            item.badge === "Editor’s Pick"
                              ? styles.badgeTop
                              : item.badge === "New"
                                ? styles.badgeNew
                                : item.badge === "Top Rated"
                                  ? styles.badgeTop
                                  : item.badge === "Best Seller"
                                    ? styles.badgeBest
                                    : ""
                          }`}
                        >
                          {item.badge}
                        </span>
                      </Show>
                      <span class={styles.catTag}>
                        {item.category === "gym" ? "🏋️ Gym" : item.category === "trainer" ? "🧠 Trainer" : "🎧 Equipment"}
                      </span>
                    </div>

                    <div class={styles.cardBody}>
                      <div class={styles.cardHead}>
                        <h3>{item.name}</h3>
                        <div class={styles.cardLoc}>📍 {item.location}</div>
                      </div>

                      <div class={styles.rating}>
                        <span class={styles.stars}>{"★".repeat(Math.floor(item.rating))}</span>
                        <span>{item.rating.toFixed(1)}</span>
                        <span class={styles.reviews}>({item.reviews})</span>
                        <Show when={item.price}>
                          <span style={{ "margin-left": "auto", "font-weight": "800", color: "var(--fg)" } as any}>{item.price}</span>
                        </Show>
                      </div>

                      <p class={styles.cardDesc}>{item.description}</p>

                      <div class={styles.tags}>
                        <For each={item.tags.slice(0, 4)}>
                          {(t) => (
                            <span class={`${styles.tag} ${["Sensory-Friendly", "Autism-Informed", "ADHD-Friendly"].includes(t) ? styles.tagHighlight : ""}`}>
                              {t}
                            </span>
                          )}
                        </For>
                        <Show when={item.tags.length > 4}>
                          <span class={styles.tag}>+{item.tags.length - 4}</span>
                        </Show>
                      </div>

                      <Show when={item.features}>
                        <ul class={styles.features}>
                          <For each={item.features!.slice(0, 3)}>{(f) => <li>{f}</li>}</For>
                        </ul>
                      </Show>

                      <div class={styles.cardFoot}>
                        <span class={styles.price}>{item.category === "equipment" ? item.price : "Free tour"}</span>
                        <a href={item.href} class={styles.viewBtn} aria-label={`View ${item.name}`}>
                          View →
                        </a>
                      </div>
                    </div>
                  </article>
                )}
              </For>
            </div>
          </Show>

          {/* WHY SECTION */}
          <section class={styles.why} id="why">
            <h2>What makes a gym sensory-smart? ♿✨</h2>
            <p class={styles.whySub}>Our vetting checklist — built with OTs, autistic adults, and ADHD coaches.</p>
            <div class={styles.whyGrid}>
              <div class={styles.whyCard}>
                <div class={styles.whyIcon}>🔇</div>
                <h3>Sound Control</h3>
                <p>Measured dB, quiet hours, ear-defenders available, no auto-play music.</p>
              </div>
              <div class={styles.whyCard}>
                <div class={styles.whyIcon}>💡</div>
                <h3>Lighting & Scent</h3>
                <p>Tunable warm LEDs, no fluor. flicker, scent-free blocks, low glare floors.</p>
              </div>
              <div class={styles.whyCard}>
                <div class={styles.whyIcon}>🧩</div>
                <h3>Predictability</h3>
                <p>Visual schedules, first-then boards, social stories sent before visit #1.</p>
              </div>
              <div class={styles.whyCard}>
                <div class={styles.whyIcon}>🤝</div>
                <h3>Choice & Consent</h3>
                <p>Opt-in cueing, stimming-affirming, clear start/finish, regulation breaks honored.</p>
              </div>
            </div>
          </section>

          {/* RESOURCES */}
          <section class={styles.why} id="resources" style={{ background: "linear-gradient(180deg, #1e293b, #0f1419)" } as any}>
            <div style={{ display: "flex", "justify-content": "space-between", gap: "16px", "flex-wrap": "wrap", "align-items": "center" } as any}>
              <div>
                <h2>Free resources for families & clinicians</h2>
                <p class={styles.whySub} style={{ margin: "4px 0 0" } as any}>Downloadable, clinician-reviewed.</p>
              </div>
              <a href="#" class={styles.clearBtn} style={{ "font-size": "14px" } as any}>View all →</a>
            </div>
            <div class={styles.whyGrid} style={{ "margin-top": "16px" } as any}>
              <a href="#" class={styles.whyCard} style={{ "text-decoration": "none", color: "inherit" } as any}>
                <div class={styles.whyIcon}>📋</div>
                <h3>Sensory Profile One-Pager</h3>
                <p>Share your needs without repeating yourself.</p>
                <span style={{ "font-size": "12px", color: "var(--primary)", "font-weight": "700" } as any}>PDF →</span>
              </a>
              <a href="#" class={styles.whyCard} style={{ "text-decoration": "none", color: "inherit" } as any}>
                <div class={styles.whyIcon}>🗓️</div>
                <h3>First-Visit Social Story</h3>
                <p>Photos + script for predictable first visit.</p>
                <span style={{ "font-size": "12px", color: "var(--primary)", "font-weight": "700" } as any}>Download →</span>
              </a>
              <a href="#" class={styles.whyCard} style={{ "text-decoration": "none", color: "inherit" } as any}>
                <div class={styles.whyIcon}>🎒</div>
                <h3>Gym Bag Checklist</h3>
                <p>Regulation kit for between sets.</p>
                <span style={{ "font-size": "12px", color: "var(--primary)", "font-weight": "700" } as any}>Get list →</span>
              </a>
              <a href="#" class={styles.whyCard} style={{ "text-decoration": "none", color: "inherit" } as any}>
                <div class={styles.whyIcon}>📊</div>
                <h3>SEO Checklist for Gyms</h3>
                <p>How we rank “sensory-friendly” honestly.</p>
                <span style={{ "font-size": "12px", color: "var(--primary)", "font-weight": "700" } as any}>Read guide →</span>
              </a>
            </div>
          </section>

          {/* CTA */}
          <section class={styles.ctaSection} id="add">
            <div>
              <h2>List your gym or practice. Get found by families searching for calm.</h2>
              <p>Free peer review, SEO schema, and “sensory-smart” badge if you meet our checklist. No pay-to-rank — ever.</p>
              <div class={styles.ctaActions}>
                <button class={styles.btnWhite}>Add a listing — free</button>
                <button class={styles.btnGhost}>See vetting criteria</button>
              </div>
            </div>
            <div class={styles.ctaChecks}>
              <div>✓ Structured data (LocalBusiness + FAQ) auto-generated</div>
              <div>✓ Photos flagged for glare / clutter / crowding</div>
              <div>✓ Quiet-hours indexed for SEO</div>
              <div>✓ Families can filter by support need, not just zip code</div>
            </div>
          </section>
        </div>
      </main>

      {/* BOTTOM NAV SPACER FOR MOBILE PWA */}
      <div class={styles.bottomNavSpacer} aria-hidden="true" />

      {/* MOBILE BOTTOM NAV - APP LIKE */}
      <nav class={styles.bottomNav} aria-label="Mobile navigation">
        <a href="#directory" class={`${styles.bottomNavItem} ${styles.active}`} aria-current="page">
          <span>◧</span>
          <span>Directory</span>
        </a>
        <a
          href="#directory"
          class={styles.bottomNavItem}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("searchInput")?.focus();
            document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>⌕</span>
          <span>Search</span>
        </a>
        <a href="#why" class={styles.bottomNavItem}>
          <span>♡</span>
          <span>Saved</span>
        </a>
        <a href="#add" class={styles.bottomNavItem}>
          <span>＋</span>
          <span>Add</span>
        </a>
      </nav>

      {/* FOOTER */}
      <footer class={styles.footer}>
        <div class={styles.footerInner}>
          <div class={styles.footerBrand}>
            <a href="#" class={styles.brand}>
              <div class={styles.logo}>💙</div>
              <div class={styles.brandText}>
                <span class={styles.brandTitle}>Adaptive Fitness</span>
                <span class={styles.brandSub}>Neurodivergent Directory</span>
              </div>
            </a>
            <p>
              Curated directory of sensory-friendly gyms, certified neuro-inclusive trainers, and equipment for autism, ADHD, and sensory-processing needs. Vetted with OTs — no ads, no pay-to-rank.
            </p>
          </div>

          <div class={styles.footerCol}>
            <h4>Directory</h4>
            <a href="#directory">All Gyms</a>
            <a href="#directory">Trainers</a>
            <a href="#directory">Equipment</a>
            <a href="#">Map view</a>
            <a href="#">Recently vetted</a>
          </div>

          <div class={styles.footerCol}>
            <h4>For Providers</h4>
            <a href="#">Add a listing</a>
            <a href="#">Vetting checklist</a>
            <a href="#">Sensory audit</a>
            <a href="#">Badges & SEO</a>
          </div>

          <div class={styles.footerCol}>
            <h4>Support</h4>
            <a href="#">Accessibility</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="https://solidjs.com" target="_blank" rel="noopener">Built with SolidJS</a>
          </div>
        </div>

        <div class={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Adaptive Fitness Directory • Not medical advice • Community peer-reviewed</span>
          <span>🏋️‍♀️🧠💙 Made for calm, choice & joy in movement</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
