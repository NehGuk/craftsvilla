import "./Gallery.css"
import { ColumnsPhotoAlbum } from "react-photo-album"
import "react-photo-album/columns.css"

import img1 from "../../assets/gallery/akvarellmaling/annie-spratt-sVAXV_PbvLs-unsplash.jpg"
import img2 from "../../assets/gallery/akvarellmaling/evie-s-MicqqGyDQ6w-unsplash.jpg"
import img3 from "../../assets/gallery/akvarellmaling/geordanna-cordero-2Qg4y32pdCc-unsplash.jpg"
import img4 from "../../assets/gallery/akvarellmaling/greg-rosenke-TMXIWZncTZU-unsplash.jpg"
import img5 from "../../assets/gallery/akvarellmaling/kseniya-lapteva-Dr8jO199ORY-unsplash.jpg"
import img6 from "../../assets/gallery/akvarellmaling/mona-eendra-vC8wj_Kphak-unsplash.jpg"
import img7 from "../../assets/gallery/mosaikkkunst/anna-hu-m4wgQdEsJZU-unsplash.jpg"
import img8 from "../../assets/gallery/mosaikkkunst/annie-spratt-Z5VMR-7s4JY-unsplash.jpg"
import img9 from "../../assets/gallery/mosaikkkunst/annie-spratt-hCzHhu1v0fA-unsplash.jpg"
import img10 from "../../assets/gallery/mosaikkkunst/colin-watts-HvFckEd3SUg-unsplash.jpg"
import img11 from "../../assets/gallery/mosaikkkunst/giulia-may-hclMkLbYE_M-unsplash.jpg"
import img12 from "../../assets/gallery/mosaikkkunst/iryna-muller-nEbUNxYaWQU-unsplash.jpg"
import img13 from "../../assets/gallery/mosaikkkunst/max-williams-_OoK2W7OPRM-unsplash.jpg"
import img14 from "../../assets/gallery/leirettsmaling/anne-nygard-HUdZ00yfTXE-unsplash.jpg"
import img15 from "../../assets/gallery/leirettsmaling/birmingham-museums-trust-4lDX-xTLl3Q-unsplash.jpg"
import img16 from "../../assets/gallery/leirettsmaling/birmingham-museums-trust-HEEvYhNzpEo-unsplash.jpg"
import img17 from "../../assets/gallery/leirettsmaling/birmingham-museums-trust-RRn7VvZCbas-unsplash.jpg"
import img18 from "../../assets/gallery/leirettsmaling/europeana-TjegK_z-0j8-unsplash.jpg"
import img19 from "../../assets/gallery/leirettsmaling/europeana-a0KlhY8GXPg-unsplash.jpg"
import img20 from "../../assets/gallery/leirettsmaling/europeana-qs7z-_c3s-Y-unsplash.jpg"
import img21 from "../../assets/gallery/leirettsmaling/josep-martins-l3-erg8nPRU-unsplash.jpg"
import img22 from "../../assets/gallery/leirettsmaling/klara-kulikova-kiLdjFm2y14-unsplash.jpg"

function Gallery() {
  const photos = [
    {
      src: img1,
      width: 800,
      height: 1200,
      alt: "Example of alt text here",
    },
    {
      src: img2,
      width: 800,
      height: 400,
      alt: "Example of alt text here",
    },
    {
      src: img3,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
    },
    {
      src: img4,
      width: 800,
      height: 1300,
      alt: "Example of alt text here",
    },
    {
      src: img5,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
    },
    {
      src: img6,
      width: 800,
      height: 300,
      alt: "Example of alt text here",
    },
    {
      src: img7,
      width: 800,
      height: 800,
      alt: "Example of alt text here",
    },
    {
      src: img8,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
    },
    {
      src: img9,
      width: 800,
      height: 500,
      alt: "Example of alt text here",
    },
    {
      src: img10,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
    },
    {
      src: img11,
      width: 800,
      height: 400,
      alt: "Example of alt text here",
    },
    {
      src: img12,
      width: 800,
      height: 900,
      alt: "Example of alt text here",
    },
    {
      src: img13,
      width: 800,
      height: 300,
      alt: "Example of alt text here",
    },
    {
      src: img14,
      width: 800,
      height: 800,
      alt: "Example of alt text here",
    },
    {
      src: img15,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
    },
    {
      src: img16,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
    },
    {
      src: img17,
      width: 800,
      height: 1500,
      alt: "Example of alt text here",
    },
    {
      src: img18,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
    },
    {
      src: img19,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
    },
    {
      src: img20,
      width: 800,
      height: 400,
      alt: "Example of alt text here",
    },
    {
      src: img21,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
    },
    {
      src: img22,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
    },
  ]
  {
    console.log(img1)
  }
  return (
    <section className="gallery">
      <h1>Gallery</h1>
      <article className="gallery_area">
        <ColumnsPhotoAlbum
          photos={photos}
          spacing={0}
          columns={(containerWidth) => {
            if (containerWidth < 480) return 2
            if (containerWidth < 768) return 3
            return 4
          }}
        />
      </article>
    </section>
  )
}

export default Gallery
