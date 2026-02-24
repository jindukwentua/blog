
const posts = [
  {
    date: "2026-01-12",
    title: "Respectful use of AI in software development teams",
    url: "#",
    category: "Data",
    section: "latest",
  },
  {
    date: "2025-11-18",
    title: "Measuring the accuracy of record linkage",
    url: "#",
    category: "Data",
    section: "latest",
  },
  {
    date: "2025-09-23",
    title: "Using a fault tolerant trie for address matching",
    url: "#",
    category: "Data",
    section: "latest",
  },
  // Data science and engineering section
  {
    date: "2026-01-12",
    title: "Respectful use of AI in software development teams",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2025-05-18",
    title: "Putting Scaffolding Around Vibe Coding to Build More Complex Apps",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2025-03-16",
    title: "Why DuckDB is my first choice for data processing",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2025-01-01",
    title: "AI probably won't replace me in 2025",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2024-12-08",
    title: "The emerging impact of LLMs on my productivity",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2023-10-19",
    title: "Thoughts and questions about the short term impact of LLMs on knowledge workers",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2023-03-09",
    title: "Splink and the Open Source Dividend",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2023-01-30",
    title: "SQL should be the default choice for data transformation logic",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2023-01-09",
    title: "Why parquet files are my preferred API for bulk open data",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2022-08-05",
    title: "Splink 3: Fast, accurate and scalable linkage in Python",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2021-10-29",
    title: "The Thorniest Problem of Building an Analytical Platform",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2020-11-17",
    title: "The Downfall of Command and Control Data Leadership",
    url: "#",
    category: "Data",
    section: "data",
  },
  {
    date: "2020-12-22",
    title: "Demystifying Apache Arrow",
    url: "#",
    category: "Data",
    section: "data",
  },
];

const categories = [
  "All",
  "Data",
  "Probabilistic linkage",
  "Energy",
  "Other",
  "Quotes/Links",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-100 bg-[#1a237e] px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            <span className="text-[#42a5f5]">&gt;</span>
            <span className="text-white">Jindu</span>
            <span className="text-[#42a5f5]"> Kwentua</span>
          </span>
        </div>
        <nav className="flex items-center gap-6 text-base">
          <a href="/" className="hover:underline text-white">Home</a>
          <a href="/about" className="hover:underline text-white">About</a>
        </nav>
      </header>

      {/* Filter Bar */}
      <div className="border-b border-gray-100 bg-gray-50 px-4 py-2 flex items-center gap-4 text-sm">
        <span className="font-semibold text-gray-700">Filter:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-md border text-gray-600 border-gray-200 bg-white font-medium mr-1 ${cat === "All" ? "bg-[#e3f2fd] text-[#1a237e] border-[#42a5f5]" : "hover:bg-gray-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto py-8 px-4">
        {/* Latest Posts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Latest Posts</h2>
          <ul>
            {posts.filter((p) => p.section === "latest").map((post) => (
              <li key={post.title} className="mb-2 flex gap-4">
                <span className="text-gray-400 w-28 inline-block">{post.date}</span>
                <a href={post.url} className="text-[#1a237e] hover:underline">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Data science and engineering */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-700">Data science and engineering</h2>
          <ul>
            {posts.filter((p) => p.section === "data").map((post) => (
              <li key={post.title} className="mb-2 flex gap-4">
                <span className="text-gray-400 w-28 inline-block">{post.date}</span>
                <a href={post.url} className="text-[#1a237e] hover:underline">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
