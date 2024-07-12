import React, { createContext, ReactNode, useState } from "react";

interface SpeechContextComponentProps {
  children: ReactNode;
}

interface SpeechContextType {
  ttsEnabled: boolean;
  toggleTts: () => void;
}

const defaultValue: SpeechContextType = {
    ttsEnabled: true,
    toggleTts: () => {},
  };
  

export const SpeechContext = createContext<SpeechContextType>(
    defaultValue
);

export const SpeechContextComponent: React.FC<SpeechContextComponentProps> = ({
  children,
}) => {
  const [ttsEnabled, setTtsEnabled] = useState(true);

  const toggleTts = () => {
    setTtsEnabled(!ttsEnabled)
  }

  return (
    <SpeechContext.Provider
      value={{
        ttsEnabled,
        toggleTts,
      }}
    >
      {children}
    </SpeechContext.Provider>
  );
};
