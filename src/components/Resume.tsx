import { Avatar, Fieldset, Tab, Tabs } from '@react95/core';
import { useWindowsStore } from "../store/windows";

function Resume() {
  const { openWindow } = useWindowsStore();
  return (
    <Tabs defaultActiveTab="AboutMe">
      <Tab title="AboutMe">
        <h3>Hi, I'm Zac!</h3>
        <Avatar src="cc.jpg" size="140px" />

        <p>A first year CS student based in Penang, Malaysia.</p>
        <Fieldset legend="README">
          <p>
            I'm an 18 year old student currently learning all about coding. <br></br>
            Feel free to reach out to offer feedback regarding my projects or just to talk!
          </p>
        </Fieldset>
      </Tab>
      <Tab title="Experience">
        <Fieldset legend="Google Developer Groups (GDG) Georgetown DevFest 2025">
          <p>
            Emcee for all the workshops conducted.<br></br><br></br>
            <span 
  onClick={() => openWindow("Gallery")} 
  style={{ 
    color: "blue", 
    textDecoration: "underline", 
    cursor: "pointer", 
    fontWeight: "bold" 
  }}
>
  View Images
</span>
          </p>
        </Fieldset>
        <Fieldset legend="NextUP Hackathon 2025">
          <p>
            Me and my 4 teammates built KZOLM Microhabits for our submission, this website utilizes microhabits to help users to build up good habits, focusing more on the consistency instead of the magnitude of the task. 
          </p>
          <a href="https://github.com/Meng-prog-ux/KZOLM-Microhabits.git" target="_blank" rel = "noopener noreferrer" style={{ 
    color: "blue", 
    textDecoration: "underline", 
    cursor: "pointer", 
    fontWeight: "bold" 
  }}>
          GitHub Link
          </a>
        </Fieldset>
      </Tab>
      <Tab title="Technologies">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <ul>
          <li>C++</li>
          <li>Python </li>
          <li>HTML</li>
          <li>CSS</li>
         </ul>
        </div>
      </Tab>
    </Tabs>
  );
}

export default Resume;