import React, { useEffect } from "react";
import Masonry from "../components/Masonry";
import useAuthStore from "../store/useAuthStore";
import { useCookies } from "react-cookie";
import Nav from "../components/Nav";
import ModalForm from "../components/ModalForm";
import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { getUserImages } from "../api/auth.js";

const Home = () => {
  const [cookies] = useCookies(["token"]);
  const getFile = useAuthStore((state) => state.getFile);
  // const files = useAuthStore((state) => state.files);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    if (cookies.token) getFile(cookies.token);
  }, [cookies.token, getFile]);

  useEffect(() => {
    const fetchImages = async () => {
      if (cookies.token) {
        const res = await getUserImages(cookies.token);
        setItems(res.data.items);
      }
    };
    fetchImages();
  }, [cookies.token]);

  // const items = [
  //   {
  //     id: "1",
  //     img: "https://picsum.photos/id/1015/600/900?grayscale",
  //     url: "https://example.com/one",
  //     height: 400,
  //   },
  //   {
  //     id: "2",
  //     img: "https://picsum.photos/id/1011/600/750?grayscale",
  //     url: "https://example.com/two",
  //     height: 250,
  //   },
  //   {
  //     id: "3",
  //     img: "https://picsum.photos/id/1020/600/800?grayscale",
  //     url: "https://example.com/three",
  //     height: 600,
  //   },
  //   {
  //     id: "4",
  //     img: "https://picsum.photos/id/1015/600/900?grayscale",
  //     url: "https://example.com/one",
  //     height: 400,
  //   },
  //   {
  //     id: "5",
  //     img: "https://picsum.photos/id/1011/600/750?grayscale",
  //     url: "https://example.com/two",
  //     height: 250,
  //   },
  // ];

  return (
    <div className="min-h-screen relative">
      <Nav />
      <main className="container mx-auto py-32 mb-20">
        <h1 className="text-3xl font-light italic tracking-widest mb-5 text-white px-4">
          Your Memories
        </h1>
        <div className="w-full max-w-8xl px-4 min-h-[600px]">
          <Masonry
            items={items}
            ease="power2.out"
            duration={0.4}
            stagger={0.06}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
        {/* Add File Button */}
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
        {showModal && <ModalForm onClose={() => setShowModal(false)} />}
      </main>
    </div>
  );
};

export default Home;
