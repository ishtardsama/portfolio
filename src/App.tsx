import WindowBar from "./components/WindowBar";
import DesktopIcon from "./components/DesktopIcon";
import Contact from "./components/Contact";
import { Inetcpl1313, Wordpad, Mail, Mspaint } from "@react95/icons";
import Resume from "./components/Resume";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div style={{ width: "100%", background: "#098684", minHeight: "100vh", position: "relative" }}>
      <img src="/logo.png" width={400} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-70%)" }} />

      <>
        <div className="fixed">
          <DesktopIcon width={650} height={450} icon={<Wordpad variant="32x32_4" />} name="My Info">
            <Resume />
          </DesktopIcon>

          <DesktopIcon width={350} height={250} icon={<Mail variant="32x32_4" />} name="Contact Me">
            <Contact />
          </DesktopIcon>

          <DesktopIcon width={500} height={500} icon={<Mspaint variant="32x32_4" />} name="Gallery">
            <Gallery />
          </DesktopIcon>

          <DesktopIcon width={850} height={550} icon={<Inetcpl1313 variant="32x32_4" />} name="Browser">
            <iframe width={800} height={500} src="https://www.google.com/webhp?igu=1" style={{ border: "none" }} />
          </DesktopIcon>
        </div>
        <WindowBar />
      </>
    </div>
  );
}

export default App;