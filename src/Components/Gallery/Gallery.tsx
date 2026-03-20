import "./Gallery.css"
import { ColumnsPhotoAlbum } from "react-photo-album"
import "react-photo-album/columns.css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css"
import { Captions } from "yet-another-react-lightbox/plugins"
import { useState } from "react"
import img1 from "../../assets/gallery/akvarellmaling/annie-spratt-sVAXV_PbvLs-unsplash.webp"
import img2 from "../../assets/gallery/akvarellmaling/evie-s-MicqqGyDQ6w-unsplash.webp"
import img3 from "../../assets/gallery/akvarellmaling/geordanna-cordero-2Qg4y32pdCc-unsplash.webp"
import img4 from "../../assets/gallery/akvarellmaling/greg-rosenke-TMXIWZncTZU-unsplash.webp"
import img5 from "../../assets/gallery/akvarellmaling/kseniya-lapteva-Dr8jO199ORY-unsplash.webp"
import img6 from "../../assets/gallery/akvarellmaling/mona-eendra-vC8wj_Kphak-unsplash.webp"
import img7 from "../../assets/gallery/mosaikkkunst/anna-hu-m4wgQdEsJZU-unsplash.webp"
import img8 from "../../assets/gallery/mosaikkkunst/annie-spratt-Z5VMR-7s4JY-unsplash.webp"
import img9 from "../../assets/gallery/mosaikkkunst/annie-spratt-hCzHhu1v0fA-unsplash.webp"
import img10 from "../../assets/gallery/mosaikkkunst/colin-watts-HvFckEd3SUg-unsplash.webp"
import img11 from "../../assets/gallery/mosaikkkunst/giulia-may-hclMkLbYE_M-unsplash.webp"
import img12 from "../../assets/gallery/mosaikkkunst/iryna-muller-nEbUNxYaWQU-unsplash.webp"
import img13 from "../../assets/gallery/mosaikkkunst/max-williams-_OoK2W7OPRM-unsplash.webp"
import img14 from "../../assets/gallery/leirettsmaling/anne-nygard-HUdZ00yfTXE-unsplash.webp"
import img15 from "../../assets/gallery/leirettsmaling/birmingham-museums-trust-4lDX-xTLl3Q-unsplash.webp"
import img16 from "../../assets/gallery/leirettsmaling/birmingham-museums-trust-HEEvYhNzpEo-unsplash.webp"
import img17 from "../../assets/gallery/leirettsmaling/birmingham-museums-trust-RRn7VvZCbas-unsplash.webp"
import img18 from "../../assets/gallery/leirettsmaling/europeana-TjegK_z-0j8-unsplash.webp"
import img19 from "../../assets/gallery/leirettsmaling/europeana-a0KlhY8GXPg-unsplash.webp"
import img20 from "../../assets/gallery/leirettsmaling/europeana-qs7z-_c3s-Y-unsplash.webp"
import img21 from "../../assets/gallery/leirettsmaling/josep-martins-l3-erg8nPRU-unsplash.webp"
import img22 from "../../assets/gallery/leirettsmaling/klara-kulikova-kiLdjFm2y14-unsplash.webp"
import img23 from "../../assets/gallery/misc/alice-dietrich-FwF_fKj5tBo-unsplash.webp"
import img24 from "../../assets/gallery/misc/boris-izmaylov-s7V5gca7Ma8-unsplash.webp"
import img25 from "../../assets/gallery/misc/centre-for-ageing-better-5tJ5FR-Di5E-unsplash.webp"
import img26 from "../../assets/gallery/misc/frankie-cordoba-fPYJeMmYWM4-unsplash.webp"
import img27 from "../../assets/gallery/misc/hakan-nural--FHFXSVBoHM-unsplash.webp"
import img28 from "../../assets/gallery/misc/long-ma-y1x8MCde_TM-unsplash.webp"
import img29 from "../../assets/gallery/misc/mitchell-griest-2zguON0koq8-unsplash.webp"
import img30 from "../../assets/gallery/misc/rahul-jain-JOYtT8_Y7c8-unsplash.webp"
import img31 from "../../assets/gallery/misc/tetiana-shyshkina-yn7R3DLA-ik-unsplash.webp"
import img32 from "../../assets/gallery/misc/tim-mossholder-hrm0hf8pCdU-unsplash.webp"

function Gallery() {
  const [index, setIndex] = useState(-1)
  const photos = [
    {
      src: img1,
      width: 800,
      height: 1200,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img30,
      width: 800,
      height: 1000,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img2,
      width: 800,
      height: 800,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img3,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img23,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img4,
      width: 800,
      height: 1300,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img5,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img6,
      width: 800,
      height: 300,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img7,
      width: 800,
      height: 800,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img24,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img8,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img9,
      width: 800,
      height: 500,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img25,
      width: 800,
      height: 1200,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img10,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img11,
      width: 800,
      height: 400,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img12,
      width: 800,
      height: 900,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img26,
      width: 800,
      height: 400,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img13,
      width: 800,
      height: 300,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img14,
      width: 800,
      height: 800,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img27,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img15,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img31,
      width: 800,
      height: 800,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img32,
      width: 800,
      height: 1200,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img16,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img28,
      width: 800,
      height: 1000,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img17,
      width: 800,
      height: 1500,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img18,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img29,
      width: 800,
      height: 400,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img19,
      width: 800,
      height: 700,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img20,
      width: 800,
      height: 400,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img21,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
    },
    {
      src: img22,
      width: 800,
      height: 600,
      alt: "Example of alt text here",
      description:
        "Image description here: blablablabla | Credits: Photographer name",
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
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
          controller={{ closeOnBackdropClick: true }}
          styles={{
            root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.9)" },
            captionsDescription: {
              "--yarl__slide_description_text_align": "center",
            },
          }}
          plugins={[Captions]}
        />
      </article>
    </section>
  )
}

export default Gallery
