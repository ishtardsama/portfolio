import { Frame, Fieldset } from "@react95/core";

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
    title: "Pictures that I would like to show",
    items: [
      {
        src: "https://i.pinimg.com/564x/46/cf/d3/46cfd36a2bb4b019c35f09976efe5336.jpg",
        alt: "cccat",
        description: "I'm a big fan of CC from Code Geass!"
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
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "20px" }}>
      {galleryData.map((section, sectionIndex) => (
        <Fieldset key={sectionIndex} legend={section.title}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
            
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                
                <Frame variant="well" style={{ padding: "4px", background: "white", display: 'flex' }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "100%", height: "auto", display: "block" }}
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