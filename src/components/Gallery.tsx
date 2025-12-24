import { useState } from "react";
import { createPortal } from "react-dom";
import { Frame, Fieldset, Button } from "@react95/core";

type GalleryItem = {
  src: string;
  alt: string;
  description: string;
};

type GallerySectionType = {
  title: string;
  items: GalleryItem[];
};

const galleryData: GallerySectionType[] = [
    {
    title: "GDG (Google Developer Groups) Georgetown DevFest 2025",
    items: [
      {
        src: "/Devfest_0907.JPG",
        alt: "gdg 1",
        description: ""
      },
      {
        src: "/Devfest_0916.JPG",
        alt: "gdg 2",
        description: "Emcee @ Google Developer Groups Georgetown DevFest 2025"
      },
      {
        src: "/IMG_3331.JPG",
        alt: "gdg 4",
        description: ""
      },
      {
        src: "/WhatsApp Image 2025-12-15 at 5.02.35 AM.jpeg",
        alt: "gdg 5",
        description: ""
      },
    ]
  },
      {
    title: "KZOLM Microhabits @ NextUP Hackathon 2025",
    items: [
      {
        src: "/Screenshot 2025-12-16 142701.png",
        alt: "NextUp Hackathon 2025",
        description: "I'm on the right! (Horrible Picture Quality)"
      },
    ]
  },
  {
    title: "Some of my hobbies",
    items: [
      {
        src: "https://i.pinimg.com/564x/46/cf/d3/46cfd36a2bb4b019c35f09976efe5336.jpg",
        alt: "cccat",
        description: "I'm a big fan of CC from Code Geass!"
      },
      {
        src: "/PXL_20250306_144639851.jpg",
        alt: "fish",
        description: "I love to fish!"
      },
      {
        src: "https://pbs.twimg.com/media/G8LP4ZfXAAgmPvg.png",
        alt: "moke",
        description: "moke."
      },
    ]
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "20px" }}>
      {/* Lightbox Modal */}
      {selectedImage && createPortal(
        <div 
            style={{ 
                position: "fixed", 
                inset: 0, 
                backgroundColor: "rgba(0,0,0,0.5)", 
                zIndex: 10000, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
            }}
            onClick={() => setSelectedImage(null)}
        >
            <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "90vh" }}>
                <Frame variant="window" style={{ padding: "0.5rem", background: "#c6c6c6", display: "flex", flexDirection: "column", gap: "0.5rem", boxShadow: "outset" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button onClick={() => setSelectedImage(null)} style={{ fontWeight: "bold", minWidth: "24px", padding: "0" }}>X</Button>
                    </div>
                    <Frame variant="well" style={{ padding: "2px", background: "white" }}>
                        <img 
                            src={selectedImage} 
                            style={{ maxWidth: "100%", maxHeight: "calc(90vh - 100px)", objectFit: "contain", display: "block" }} 
                            alt="Full size preview"
                        />
                    </Frame>
                </Frame>
            </div>
        </div>,
        document.body
      )}

      {galleryData.map((section, sectionIndex) => (
        <Fieldset key={sectionIndex} legend={section.title}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
            
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                
                <Frame variant="well" style={{ padding: "4px", background: "white", display: 'flex' }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "100%", height: "auto", display: "block", cursor: "pointer" }}
                    onClick={() => setSelectedImage(item.src)}
                  />
                </Frame>
                
                <p style={{ margin: 0, fontSize: "14px" }}>
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </Fieldset>
      ))}
    </div>
  );
}

export default Gallery;