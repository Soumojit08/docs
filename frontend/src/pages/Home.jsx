import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import ModalForm from "../components/ModalForm";
import { PlusIcon, XIcon } from "lucide-react";
import { useCookies } from "react-cookie";
import useAuthStore from "../store/useAuthStore";

const Home = () => {
  const [cookies] = useCookies(["token"]);
  const getFile = useAuthStore((state) => state.getFile);
  const files = useAuthStore((state) => state.files);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cookies.token) {
      getFile(cookies.token);
    }
  }, [cookies.token, getFile]);

  const filterFiles = (types) => {
    return files.filter((file) => types.includes(file.fileType));
  };

  // Category-wise file counts
  const imageFiles = filterFiles(["jpg", "jpeg", "png"]);
  const pdfFiles = filterFiles(["pdf"]);
  const docFiles = filterFiles(["docx", "txt", "xlsx", "pptx"]);

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
              <span className="text-sm text-zinc-500">
                ({imageFiles.length})
              </span>
            </h2>
            <div className="space-y-4 rounded-xl bg-zinc-900/50 p-4 min-h-[150px] flex items-center justify-center">
              {imageFiles.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 w-full">
                  {imageFiles.map((file) => (
                    <div
                      key={file._id}
                      className="rounded-lg overflow-hidden bg-zinc-800/50"
                    >
                      <img
                        src={file.fileUrl}
                        alt={file.fileName}
                        className="w-full h-24 object-cover"
                      />
                      <div className="p-2">
                        <p className="text-sm text-white truncate">
                          {file.fileName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-500 text-sm">No images uploaded yet</p>
              )}
            </div>
          </section>

          {/* PDFs Section */}
          <section className="space-y-6 min-h-[200px]">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <span>PDFs</span>
              <span className="text-sm text-zinc-500">({pdfFiles.length})</span>
            </h2>
            <div className="space-y-4 rounded-xl bg-zinc-900/50 p-4 min-h-[150px] flex items-center justify-center">
              {pdfFiles.length > 0 ? (
                <div className="space-y-2 w-full">
                  {pdfFiles.map((file) => (
                    <div
                      key={file._id}
                      className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg"
                    >
                      <p className="text-sm text-white truncate">
                        {file.fileName}
                      </p>
                      <span className="text-xs text-zinc-400">
                        {Math.round(file.fileSize / 1024)} KB
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-500 text-sm">No PDFs uploaded yet</p>
              )}
            </div>
          </section>

          {/* Documents Section */}
          <section className="space-y-6 min-h-[200px]">
            <h2 className="text-xl font-semibold text-white/80 flex items-center gap-2">
              <span>Documents</span>
              <span className="text-sm text-zinc-500">({docFiles.length})</span>
            </h2>
            <div className="space-y-4 rounded-xl bg-zinc-900/50 p-4 min-h-[150px] flex items-center justify-center">
              {docFiles.length > 0 ? (
                <div className="space-y-2 w-full">
                  {docFiles.map((file) => (
                    <div
                      key={file._id}
                      className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg"
                    >
                      <p className="text-sm text-white truncate">
                        {file.fileName}
                      </p>
                      <span className="text-xs text-zinc-400">
                        {Math.round(file.fileSize / 1024)} KB
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-500 text-sm">
                  No documents uploaded yet
                </p>
              )}
            </div>
          </section>
        </div>

        <button
          className="fixed bottom-8 right-8 bg-white text-zinc-900 p-4 rounded-full shadow-lg 
                     hover:bg-transparent hover:border-2 hover:border-white hover:text-white 
                     cursor-pointer transition-all duration-200 z-10"
          aria-label="Add new file"
          onClick={() => setShowModal(true)}
        >
          {showModal ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <PlusIcon className="h-6 w-6" />
          )}
        </button>
      </main>
      {showModal && <ModalForm onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Home;
