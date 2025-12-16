import { List, TaskBar } from "@react95/core";
import {
  Inetcpl1313,
  Wordpad,
  Mail,
  Mspaint
} from "@react95/icons";
import { FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useWindowsStore } from "../store/windows";
import { FaGoogle } from "react-icons/fa6";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "0 10px", alignSelf: "center" }}>
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}

function WindowBar() {
  const { openWindow } = useWindowsStore();
  return (
    <>
      <TaskBar
        list={
          <List width={"200px"}>
            <List.Item
              onClick={() => openWindow("My Info")}
              icon={<Wordpad variant="32x32_4" />}
            >
              My Info
            </List.Item>
            <List.Item icon={<Mail variant="32x32_4" />}>
              <List width={"200px"}>
                <List.Item icon={<FaGithub size={16} />}>
                  <a href="https://github.com/ishtardsama" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>GitHub</a>
                </List.Item>
                <List.Item icon={<FaInstagram size={16} />}>
                  <a href="https://instagram.com/zzzaaacccc" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>Instagram</a>
                </List.Item>
                <List.Item icon={<FaGoogle size={16} />}>
                  <a href="mailto:noteethme@gmail.com" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>Gmail</a>
                </List.Item>
                <List.Item icon={<FaLinkedinIn size={16} />}>
                  <a href="https://www.linkedin.com/in/choong-jun-zac-4394a63a0/" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>LinkedIn</a>
                </List.Item>
              </List>
              Contact Me
            </List.Item>

            <List.Item
              onClick={() => openWindow("Gallery")}
              icon={<Mspaint variant="32x32_4" />}
            >
              Gallery
            </List.Item>

            <List.Item
              onClick={() => openWindow("Browser")}
              icon={<Inetcpl1313 variant="32x32_4" />}
            >
              Browser
            </List.Item>
          </List>
        }
      >
        <Clock />
      </TaskBar>
    </>
  );
}

export default WindowBar;
