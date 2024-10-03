import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../components/Firebase";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSwipeable } from "react-swipeable";
import '../assets/css/Gallery.css';
import assets from '../assets/Image/Image';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [videos, setVideos] = useState([]);
  const [showVideos, setShowVideos] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 20;

  const apiKey = "AIzaSyBVuQnIaLoQ_nXxxhWI4TEBUHl1Fq95LOQ"; // Replace with your YouTube API key
  const channelId = "UCCdolGdNvQ-24sw4sSvPFvA"; // Replace with your YouTube channel ID

  useEffect(() => {
    const fetchImages = async (page = 0) => {
      let folders = [];
      if (filter === "all") {
        folders = ["Images/Indian", "Images/Western", "Images/Kandyan"];
      } else {
        folders = [`Images/${filter.charAt(0).toUpperCase() + filter.slice(1)}`];
      }

      let allFetchedImages = [];
      try {
        for (let folder of folders) {
          const storageRef = ref(storage, folder);
          const result = await listAll(storageRef);
          const urls = await Promise.all(
            result.items.map((item) => getDownloadURL(item))
          );
          allFetchedImages = [...allFetchedImages, ...urls];
        }
        setImages(allFetchedImages.slice(0, imagesPerPage * (page + 1))); // Load images based on current page
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages(currentPage);
  }, [filter, currentPage]);

  useEffect(() => {
    if (filter === "videos") {
      setShowVideos(true);
      setShowAlbums(false);
      const fetchVideos = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
          );
          const fetchedVideos = response.data.items;
          // Filter out unwanted video thumbnails
          const filteredVideos = fetchedVideos.filter(video => 
            video.snippet.thumbnails.medium.url !== "https://yt3.ggpht.com/ytc/AIdro_mrjO9OGCV3s4KL5FAO-JkZCuMMdHk-I8doHCLmp6C9osfz_JqGDDAT1lwVBwdRzZ35_w=s240-c-k-c0xffffffff-no-rj-mo"
          );
          setVideos(filteredVideos);
        } catch (error) {
          console.error("Error fetching videos", error);
        }
      };
      fetchVideos();
    } else if (filter === "albums") {
      setShowVideos(false);
      setShowAlbums(true);
      // Here you can fetch albums as before or set them as needed
      setAlbums([]); // Clear previous albums if necessary
    } else {
      setShowVideos(false);
      setShowAlbums(false);
    }
  }, [filter]);

  const openModal = (url, index) => {
    setSelectedImage(url);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
    setSelectedVideo(null);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => showNext(),
    onSwipedRight: () => showPrevious(),
  });

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const loadMoreImages = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="gallery-container">
      <div className="gal-banner">
        <div className="gal-banner-container">
          <h1>Gallery</h1>
        </div>
      </div>

      <div className="gal-container">
        <div className="gallery-filters">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("Indian")}>Indian</button>
          <button onClick={() => setFilter("Western")}>Western</button>
          <button onClick={() => setFilter("Kandyan")}>Kandyan</button>
          <button onClick={() => setFilter("videos")}>Videos</button>
          <button onClick={(e) => setFilter("albums")}>Albums</button>
          <button onClick={(e) => setFilter("Tv_Programmes")}>Tv Programmes</button>
        </div>

        {showAlbums ? (
          <div className="album-grid">
            {/* Add your new images here */}
            <a href="https://online.flippingbook.com/view/756855976/" target="_blank" rel="noopener noreferrer">
              <img src={assets.k1} width='200px' alt="Album Image 1" />
            </a>
            <a href="https://online.flippingbook.com/view/756724009/" target="_blank" rel="noopener noreferrer">
              <img src={assets.k2} width='200px' alt="Album Image 2" />
            </a>
            <a href="https://online.flippingbook.com/view/756385508/" target="_blank" rel="noopener noreferrer">
              <img src={assets.k3} width='200px' alt="Album Image 3" />
            </a>
            <a href="https://online.flippingbook.com/view/756713767/" target="_blank" rel="noopener noreferrer">
              <img src={assets.k4} width='200px' alt="Album Image 4" />
            </a>
            
          </div>
        ) : !showVideos ? (
          <div className="image-grid">
            {images.length === 0 ? (
              <p>Loading images...</p>
            ) : (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1200: 4 }}
              >
                <Masonry gutter="10px">
                  {images.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Gallery Image ${index}`}
                      onClick={() => openModal(url, index)}
                      style={{
                        width: "100%",
                        display: "block",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        ) : (
          <div className="video-grid">
            {videos.length === 0 ? (
              <p>Loading Videos...</p>
            ) : (
              videos.map((video) => (
                <div key={video.id.videoId} className="video-card">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="video-thumbnail"
                  />
                  <button
                    className="play-button"
                    onClick={() => openVideoModal(video.id.videoId)}
                  >
                    ▶️
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {images.length > 0 && !showVideos && (
          <button className="load-more" onClick={loadMoreImages}>
            See More
          </button>
        )}

        {selectedImage && (
          <div className="modal" onClick={closeModal} {...handlers}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="prev" onClick={showPrevious}>
                &#10094;
              </button>
              <img src={selectedImage} alt="Selected" className="modal-image" />
              <button className="next" onClick={showNext}>
                &#10095;
              </button>
            </div>
          </div>
        )}

        {selectedVideo && (
          <div className="video-modal" onClick={closeModal}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-video" onClick={closeModal}>
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
