import { useRef, useState } from "react";
import Nav from "../components/Nav";
import ModalForm from "../components/ModalForm";
import { PlusIcon, XIcon } from "lucide-react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="min-h-screen bg-zinc-950 relative">
      <Nav />
      <main className="container mx-auto px-6 py-32 mb-20">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white">
            One Stop to Organize
          </h1>
          <p className="text-zinc-400 mt-2">Your Files</p>
        </div>

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

        <button
          className="fixed bottom-8 right-8 bg-white text-zinc-900 p-4 rounded-full shadow-lg 
                     hover:bg-transparent hover:border-2 hover:border-white hover:text-white 
                     cursor-pointer transition-all duration-200 z-10"
          aria-label="Add new file"
          onClick={handleModal}
        >
          {showModal ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <PlusIcon className="h-6 w-6" />
          )}
        </button>
      </main>
      {showModal && <ModalForm />}
    </div>
  );
};

export default Home;
