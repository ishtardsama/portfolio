import React, { type ReactElement, type ReactNode, type ComponentType } from "react";
import { Modal, TitleBar, useModal } from "@react95/core";
import { useWindowsStore } from "../store/windows";

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
  iconImage: {
    height: "64px",
    marginBottom: "8px",
    width: "64px",
  },
  iconName: {
    color: "#ffffff",
    fontSize: "14px",
    margin: "0",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
    userSelect: "none",
  },
  window: {
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
  },
  titleBar: {
    alignItems: "center",
    background: "#f0f0f0",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    cursor: "move",
    display: "flex",
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: "8px",
  },
  closeButton: {
    alignItems: "center",
    background: "#ff5f56",
    border: "1px solid #e04440",
    borderRadius: "50%",
    color: "#9a0000",
    cursor: "pointer",
    display: "flex",
    fontSize: "10px",
    height: "15px",
    justifyContent: "center",
    lineHeight: "10px",
    width: "15px",
  },
  windowContent: {
    flex: "1",
    overflow: "auto",
    padding: "20px",
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

  const screenW = window.innerWidth;
  const screenH = window.innerHeight;
  
  const w = width || 500; 
  const h = height || 500;

  const x = Math.max(0, (screenW - w) / 2);
  const y = Math.max(0, (screenH - h) / 2);

  return (
    <SafeModal
      id={title}
      icon={icon}
      title={title}
      defaultPosition={{ x, y }}
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
    </SafeModal>
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