import React, { type ReactElement, type ReactNode, type ComponentType, useEffect, useState } from "react";
import { Modal, TitleBar, useModal } from "@react95/core";
import { useWindowsStore } from "../store/windows";
import { createPortal } from "react-dom";

const styles = {
  desktopIcon: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    width: "100px",
    gap: "10px",
  },
  iconName: {
    color: "#ffffff",
    fontSize: "14px",
    margin: "0",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
    userSelect: "none",
  },
} as const;

interface WindowProps {
  icon: ReactElement<{ variant?: string }>;
  title: string;
  children: ReactNode;
  width?: number;
  height?: number;
  onClose: () => void;
}

const Window = ({ title, onClose, children, icon, width, height }: WindowProps) => {
  const { minimize } = useModal();
  const [mounted, setMounted] = useState(false);

  // Wait for mount to ensure window.innerWidth is accurate
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;
  
  const w = width || 500; 
  const h = height || 500;

  const x = Math.round((screenW - w) / 2);
  const y = Math.round((screenH - h) / 2);

  return createPortal(
    <SafeModal
      id={title}
      icon={icon}
      title={title}
      defaultPosition={{ x, y }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
      titleBarOptions={[
        <TitleBar.Minimize key="minimize" onClick={() => minimize(title)} />,
        <TitleBar.Close key="close" onClick={onClose} />,
      ]}
    >
      <Modal.Content width={`${w}px`} height={`${h}px`}>
        <div style={{ height: "100%", overflow: "auto", padding: "1rem" }}>
          {children}
        </div>
      </Modal.Content>
    </SafeModal>,
    document.body // Teleport to the body tag
  );
};

interface DesktopIconProps {
  icon: ReactElement<{ variant?: string }>;
  name: string;
  children: ReactNode;
  width?: number;
  height?: number;
}

const DesktopIcon = ({
  icon,
  name,
  children,
  width,
  height,
}: DesktopIconProps) => {
  const { openWindow, closeWindow, isWindowOpen } = useWindowsStore();
  const isOpen = isWindowOpen(name);

  const handleDoubleClick = () => {
    openWindow(name);
  };

  const handleCloseWindow = () => {
    closeWindow(name);
  };

  return (
    <>
      <div style={styles.desktopIcon} onDoubleClick={handleDoubleClick}>
        {React.cloneElement(icon, { variant: "32x32_4" })}
        <p style={styles.iconName}>{name}</p>
      </div>
      {isOpen && (
        <Window
          width={width}
          height={height}
          icon={React.cloneElement(icon, { variant: "16x16_4" })}
          title={name}
          onClose={handleCloseWindow}
        >
          {children}
        </Window>
      )}
    </>
  );
};

export default DesktopIcon;

const SafeModal = Modal as unknown as ComponentType<any>;