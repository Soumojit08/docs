import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 relative">
      <Nav />
      {/* Main content wrapper with padding and margin */}
      <main className="container mx-auto px-6 py-32 mb-20">
        {/* Section title with margin */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white">Your Files</h1>
          <p className="text-zinc-400 mt-2">Manage and organize your files</p>
        </div>

        {/* Grid layout for file cards with better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Images Section */}
          <section className="space-y-6 min-h-[200px]">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <span>Images</span>
              <span className="text-sm text-zinc-500">(0)</span>
            </h2>
            <div className="space-y-4 rounded-xl bg-zinc-900/50 p-4 min-h-[150px] flex items-center justify-center">
              <p className="text-zinc-500 text-sm">No images uploaded yet</p>
            </div>
          </section>

          {/* PDFs Section */}
          <section className="space-y-6 min-h-[200px]">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <span>PDFs</span>
              <span className="text-sm text-zinc-500">(0)</span>
            </h2>
            <div className="space-y-4 rounded-xl bg-zinc-900/50 p-4 min-h-[150px] flex items-center justify-center">
              <p className="text-zinc-500 text-sm">No PDFs uploaded yet</p>
            </div>
          </section>

          {/* Docs Section */}
          <section className="space-y-6 min-h-[200px]">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <span>Documents</span>
              <span className="text-sm text-zinc-500">(0)</span>
            </h2>
            <div className="space-y-4 rounded-xl bg-zinc-900/50 p-4 min-h-[150px] flex items-center justify-center">
              <p className="text-zinc-500 text-sm">No documents uploaded yet</p>
            </div>
          </section>
        </div>

        {/* Floating Add Button with proper z-index */}
        <button
          className="fixed bottom-8 right-8 bg-white text-zinc-900 p-4 rounded-full shadow-lg 
                     hover:bg-transparent hover:border-2 hover:border-white hover:text-white 
                     cursor-pointer transition-all duration-200 z-10"
          aria-label="Add new file"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </main>
    </div>
  );
}

export default Home;