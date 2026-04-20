import { useState, useCallback } from 'react';

export function useGlitch() {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = useCallback(() => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
    }, 300);
  }, []);

  return { isGlitching, triggerGlitch };
}