"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  X,
  Share2,
  Calendar,
  User,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: "Materiality" | "Philosophy" | "Case Studies" | "Living Well";
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: string;
  content: string[];
}

const ARTICLES: Article[] = [
  {
    id: "aging-materials",
    title: "Choosing Materials That Age Gracefully",
    category: "Materiality",
    date: "February 2025",
    readTime: "6 min read",
    author: "Eleanor Voss",
    excerpt:
      "Why we favour honest, tactile materials — limewash, white oak, raw brass — that only grow richer with time rather than degrading.",
    image: "/images/journal-1.jpg",
    content: [
      "In an era where modern manufacturing prioritizes high-gloss perfection and indestructible synthetic sealers, something vital has been forfeited: the poetic beauty of time. We believe a home should not look frozen in the hour it was delivered; rather, it should gently record the life lived inside it.",
      "Consider unlacquered brass. Brand new from the foundry, it carries an almost blinding, reflective gold sheen. But placed on a high-traffic kitchen cabinet or entryway door, the warmth of hands and atmospheric moisture begin their quiet work. Within months, dark undertones emerge in the crevices while high points retain a soft, polished glow. It becomes an authentic chronicle of habitation.",
      "The same holds true for European white oak finished with cold-pressed natural oils rather than heavy plastic polyurethanes. You feel the grain beneath your bare feet; spills can be wiped and re-oiled; scratches are absorbed into the natural character of the timber rather than becoming unsightly peeling blemishes.",
      "When designing spaces to endure decades, we always ask: 'How will this look ten years from today?' If the answer is 'shabby or dated,' it has no place in our studio's palette. If the answer is 'richer, deeper, and more soulful,' it belongs.",
    ],
  },
  {
    id: "quiet-luxury",
    title: "The Case for Quiet Luxury in the Home",
    category: "Philosophy",
    date: "January 2025",
    readTime: "8 min read",
    author: "Sofia Marini",
    excerpt:
      "Restraint, proportion, and craft over flashy ornament — notes from a decade of designing considered luxury interiors.",
    image: "/images/journal-2.jpg",
    content: [
      "Real luxury does not clamor for attention. It doesn't scream through massive gilded logos, loud hyper-contrasting palettes, or theatrical chandeliers designed merely to impress casual guests. Real luxury is private. It is how silence feels in a room when the acoustics have been perfected by hidden wool underlays and limewash plaster.",
      "When entering a truly quiet home, your shoulders drop within five seconds. You might not immediately pinpoint why: you won't notice that the baseboard aligns flush with the door jamb without trim; you won't consciously analyze the hidden HVAC diffusers integrated into shadow reveals; you won't register that the daylight has been bounced off textured travertine.",
      "Yet your nervous system registers every single millimeter of that harmony. By editing away visual noise, we make space for life, conversation, art, and deep rest.",
    ],
  },
  {
    id: "coastal-renovation",
    title: "Inside a Coastal Renovation, Two Years On",
    category: "Case Studies",
    date: "December 2024",
    readTime: "5 min read",
    author: "James Alderton",
    excerpt:
      "Revisiting the Marrow House on Kiawah Island to observe how materials, ocean light, and layout have settled into daily life.",
    image: "/images/journal-3.jpg",
    content: [
      "Two years after handing over the keys to Marrow House, we returned with camera and notebook to see how the home breathes in winter. Situated directly behind the maritime dunes of Kiawah Island, this residence faces relentless salt air, humid summers, and blinding afternoon sun.",
      "The exterior cedar shingles have silvered into a warm grey that mirrors the driftwood on the beach. Inside, the honed travertine floor remains cool underfoot, having resisted damp footprints and beach sand with effortless grace.",
      "The homeowners remarked that the layout changes — specifically shifting the master suite to catch the morning sunrise while buffering the western living pavilion with an outdoor loggia — transformed their daily routine into something unhurried and restorative.",
    ],
  },
  {
    id: "architectural-lighting",
    title: "The Art of Architectural Lighting: Beyond the Grid",
    category: "Philosophy",
    date: "November 2024",
    readTime: "7 min read",
    author: "Eleanor Voss",
    excerpt:
      "Why recessed ceiling grids ruin spaces, and how layered ambient, task, and architectural grazing create emotional warmth.",
    image: "/images/hero.jpg",
    content: [
      "Nothing damages an otherwise thoughtful interior faster than a grid of bright LED can lights drilled into the ceiling like Swiss cheese. It creates an institutional, flat glare that casts unflattering shadows across faces and washes out material textures.",
      "In our studio, we treat light as a sculpting medium. We place light where hands rest, where books are read, and where architectural textures deserve to cast gentle shadows.",
      "By combining concealed perimeter covelights, low-placed table lamps, picture lights, and focused grazing sconces at eye level, rooms become warm, inviting retreats as dusk settles.",
    ],
  },
  {
    id: "spatial-transitions",
    title: "Spatial Flow: Why Portals Matter More Than Salons",
    category: "Living Well",
    date: "October 2024",
    readTime: "6 min read",
    author: "James Alderton",
    excerpt:
      "The psychological magic of compression and release: how entering through narrow, darkened vestibules magnifies the beauty of high-ceilinged living rooms.",
    image: "/images/philosophy.jpg",
    content: [
      "Architecture is experienced sequentially, like music. A grand living room has no emotional weight if you enter it directly from an equally vast foyer. The contrast is lost.",
      "We often design transitional portals — lower ceilings, darker limewash, intimate acoustics — that hold you momentarily before opening out into expansive, sun-drenched volumes.",
      "This rhythm of compression and release creates a subtle sense of arrival every time you walk from room to room.",
    ],
  },
  {
    id: "curating-art",
    title: "Collecting Art for Considered Interiors",
    category: "Living Well",
    date: "September 2024",
    readTime: "5 min read",
    author: "Sofia Marini",
    excerpt:
      "Moving beyond matchy-matchy art purchases toward pieces that challenge, provoke, and resonate across generations.",
    image: "/images/about.jpg",
    content: [
      "The worst advice anyone can give is: 'Find a painting that matches your couch cushions.' Art is not an accessory; it is the soul of a home.",
      "We encourage our clients to acquire artwork that evokes authentic emotional reactions — whether serene minimalism, textural fiber art, or bold figurative drawings.",
      "When the architectural envelope is restrained and natural, almost any powerful piece of art finds its rightful resonance without visual competition.",
    ],
  },
];

const CATEGORIES = ["All", "Materiality", "Philosophy", "Case Studies", "Living Well"] as const;

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  const filteredArticles =
    selectedCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  const featured = ARTICLES[0];

  return (
    <div className="bg-beige text-charcoal">
      {/* ── Hero Banner ── */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src="/images/journal-1.jpg"
          alt="Housen & Co. architectural editorial and journal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/65 to-espresso/35" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-bronze mb-3">
              <Link href="/" className="hover:text-beige transition-colors">Home</Link>
              <span>/</span>
              <span>The Journal</span>
            </div>
            <h1 className="font-serif text-4xl font-medium leading-[1.15] text-beige sm:text-5xl md:text-6xl">
              The Housen Journal
            </h1>
            <p className="mt-4 text-base leading-relaxed text-beige/80 sm:text-lg">
              Notes on architectural restraint, timeless materiality, and the quiet poetry of considered living spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Article Spotlight ── */}
      <section className="py-16 container">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">
          Featured Editorial
        </span>
        <div className="mt-6 bg-white border border-charcoal/10 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 bg-charcoal/10 min-h-[340px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-xs text-charcoal/60 mb-4">
                <span className="bg-charcoal/5 px-2.5 py-1 font-semibold uppercase tracking-wider text-bronze">
                  {featured.category}
                </span>
                <span>{featured.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                {featured.title}
              </h2>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-charcoal/70">
                {featured.excerpt}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-center justify-between">
              <div className="text-xs">
                <span className="text-charcoal/50 block">By {featured.author}</span>
                <span className="text-charcoal/40 font-mono text-[0.7rem]">{featured.date}</span>
              </div>

              <button
                type="button"
                onClick={() => setReadingArticle(featured)}
                className="inline-flex items-center gap-2 bg-charcoal text-beige px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-bronze"
              >
                Read Article
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="py-16 container">
        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/10 pb-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-charcoal text-beige border-charcoal shadow-sm"
                    : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-bronze hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50">
            {filteredArticles.length} {filteredArticles.length === 1 ? "Article" : "Articles"}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-charcoal/10 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-md px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-beige">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[0.7rem] text-charcoal/50 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-bronze" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-bronze" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-bronze transition-colors">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-charcoal/70 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between">
                  <span className="text-[0.7rem] text-charcoal/50">By {article.author}</span>
                  <button
                    type="button"
                    onClick={() => setReadingArticle(article)}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-bronze hover:text-charcoal transition-colors"
                  >
                    Read Essay
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Article Reader Modal ── */}
      <AnimatePresence>
        {readingArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md"
            onClick={() => setReadingArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-beige border border-charcoal/20 shadow-2xl p-6 sm:p-10"
            >
              <button
                type="button"
                onClick={() => setReadingArticle(null)}
                className="absolute top-5 right-5 z-20 bg-charcoal/80 text-beige p-2 hover:bg-bronze transition-colors"
                aria-label="Close article"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-bronze font-semibold uppercase tracking-widest mb-3">
                <span>{readingArticle.category}</span>
                <span>•</span>
                <span>{readingArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium leading-tight">
                {readingArticle.title}
              </h2>

              <div className="mt-4 flex items-center gap-4 text-xs text-charcoal/60 border-b border-charcoal/10 pb-6">
                <span>By {readingArticle.author}</span>
                <span>•</span>
                <span>{readingArticle.date}</span>
              </div>

              <div className="relative aspect-[16/9] w-full my-6 overflow-hidden">
                <Image
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 760px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 text-charcoal/85 text-sm sm:text-base leading-relaxed">
                {readingArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-charcoal/10 flex items-center justify-between">
                <span className="text-xs text-charcoal/60">
                  Enjoyed this essay? Share with fellow design lovers.
                </span>
                <button
                  type="button"
                  onClick={() => setReadingArticle(null)}
                  className="bg-bronze text-beige px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-charcoal transition-colors"
                >
                  Close Essay
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Newsletter / Stay Inspired ── */}
      <section className="bg-espresso text-beige py-20 text-center">
        <div className="container max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-bronze">
            Stay In Touch
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-beige">
            Receive Studio Essays &amp; Reveals
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-beige/70">
            We publish essays once a month covering material sourcing, architecture, and project reveals. Zero spam.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bronze px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-beige transition-colors hover:bg-beige hover:text-charcoal"
            >
              Inquire With Our Studio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
