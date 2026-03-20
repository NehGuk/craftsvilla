import "./Gallery.css"
import img1 from "../../assets/gallery/akvarellmaling/annie-spratt-sVAXV_PbvLs-unsplash.jpg"
import img2 from "../../assets/gallery/akvarellmaling/evie-s-MicqqGyDQ6w-unsplash.jpg"
import img3 from "../../assets/gallery/akvarellmaling/geordanna-cordero-2Qg4y32pdCc-unsplash.jpg"
import img4 from "../../assets/gallery/akvarellmaling/greg-rosenke-TMXIWZncTZU-unsplash.jpg"
import img5 from "../../assets/gallery/akvarellmaling/kseniya-lapteva-Dr8jO199ORY-unsplash.jpg"
import img6 from "../../assets/gallery/akvarellmaling/mona-eendra-vC8wj_Kphak-unsplash.jpg"

function Gallery() {
  const images = [
    { src: img1, alt: "Image description" },
    { src: img2, alt: "Image description" },
    { src: img3, alt: "Image description" },
    { src: img4, alt: "Image description" },
    { src: img5, alt: "Image description" },
    { src: img6, alt: "Image description" },
  ]
  return (
    <section className="gallery">
      <h1>Gallery</h1>
      <article className="gallery_area">
        {images.map((image) => (
          <div className="gallery_area_img">
            <img key={image.src} src={image.src} alt={image.alt} />
          </div>
        ))}
      </article>
    </section>
  )
}

export default Gallery
