import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  RotateCcw, 
  Sun, 
  Moon, 
  Type, 
  Link2, 
  Eye, 
  MousePointer, 
  AlignLeft 
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  isHighContrast: boolean;
  darkMode: boolean;
  bigCursor: boolean;
  highlight: boolean;
  dyslexicFont: boolean;
  lineHeight: number;
  letterSpacing: number;
  textAlign: 'right' | 'left';
}

const MIN_FONT_SIZE = 70;
const MAX_FONT_SIZE = 150;
const DEFAULT_FONT_SIZE = 100;

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: DEFAULT_FONT_SIZE,
  isHighContrast: false,
  darkMode: false,
  bigCursor: false,
  highlight: false,
  dyslexicFont: false,
  lineHeight: 1.5,
  letterSpacing: 0,
  textAlign: 'right'
};

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    return savedSettings ? JSON.parse(savedSettings) : DEFAULT_SETTINGS;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.fontSize}%`;
    document.documentElement.style.lineHeight = String(settings.lineHeight);
    document.documentElement.style.letterSpacing = `${settings.letterSpacing}px`;
    
    document.body.classList.toggle('high-contrast', settings.isHighContrast);
    document.body.classList.toggle('dark-mode', settings.darkMode);
    document.body.classList.toggle('big-cursor', settings.bigCursor);
    document.body.classList.toggle('highlight-hover', settings.highlight);
    document.body.classList.toggle('dyslexic-font', settings.dyslexicFont);
    document.body.style.textAlign = settings.textAlign;
    
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [settings]);

  const handleFontSizeChange = useCallback((change: number) => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, prev.fontSize + change))
    }));
  }, []);

  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    if (typeof settings[key] === 'boolean') {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  }, [settings]);

  const handleReset = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div 
      className="fixed top-20 right-4 z-50"
      role="region"
      aria-label="תפריט נגישות"
    >
      <button
        onClick={toggleMenu}
        className="mb-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        aria-expanded={isOpen}
        aria-controls="accessibility-controls"
      >
        <span className="sr-only">תפריט נגישות</span>
        {isOpen ? 'סגור תפריט' : 'פתח תפריט'}
      </button>

      {isOpen && (
        <div
          id="accessibility-controls"
          className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-lg w-64"
          role="group"
          aria-label="אפשרויות נגישות"
        >
          <button 
            onClick={() => handleFontSizeChange(10)}
            className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={settings.fontSize >= MAX_FONT_SIZE}
          >
            <span>הגדלת גופן</span>
            <ChevronUp className="w-4 h-4 ml-2" />
          </button>

          <button 
            onClick={() => handleFontSizeChange(-10)}
            className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={settings.fontSize <= MIN_FONT_SIZE}
          >
            <span>הקטנת גופן</span>
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          {[
            {
              label: 'מצב כהה',
              key: 'darkMode' as const,
              icon: Moon
            },
            {
              label: 'ניגודיות גבוהה',
              key: 'isHighContrast' as const,
              icon: Eye
            },
            {
              label: 'סמן גדול',
              key: 'bigCursor' as const,
              icon: MousePointer
            },
            {
              label: 'פונט לדיסלקטים',
              key: 'dyslexicFont' as const,
              icon: Type
            },
            {
              label: 'הדגשת אלמנטים',
              key: 'highlight' as const,
              icon: Link2
            }
          ].map(({ label, key, icon: Icon }) => (
            <button 
              key={key}
              onClick={() => toggleSetting(key)}
              className={`flex items-center justify-between px-4 py-2 ${
                settings[key] ? 'bg-blue-500' : 'bg-gray-500'
              } text-white rounded hover:opacity-90 transition-colors`}
              aria-pressed={settings[key]}
            >
              <span>{settings[key] ? `ביטול ${label}` : label}</span>
              <Icon className="w-4 h-4 ml-2" />
            </button>
          ))}

          <div className="flex items-center justify-between gap-4 px-4 py-2">
            <span>מרווח שורות</span>
            <input
              type="range"
              min="1"
              max="2"
              step="0.1"
              value={settings.lineHeight}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                lineHeight: parseFloat(e.target.value)
              }))}
              className="w-32"
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-2">
            <span>מרווח אותיות</span>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={settings.letterSpacing}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                letterSpacing: parseFloat(e.target.value)
              }))}
              className="w-32"
            />
          </div>

          <button 
            onClick={handleReset}
            className="flex items-center justify-between px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors mt-4"
          >
            <span>איפוס הגדרות</span>
            <RotateCcw className="w-4 h-4 ml-2" />
          </button>

          <div className="text-sm text-gray-500 mt-2">
            גודל גופן נוכחי: {settings.fontSize}%
          </div>
        </div>
      )}

      <style>{`
        .dark-mode {
          background-color: #1a1a1a !important;
          color: #ffffff !important;
        }
        
        .high-contrast {
          filter: contrast(150%) !important;
        }
        
        .big-cursor,
        .big-cursor * {
          cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23000000"><path d="M13 21l-1-1-1-1h-2l-1-1V3l1-1 1-1h2l1 1 1 1v17z"/></svg>') 12 12, auto !important;
        }
        
        .highlight-hover *:hover {
          outline: 2px solid #2563eb !important;
          outline-offset: 2px;
        }
        
        .dyslexic-font {
          font-family: 'Open Dyslexic', Arial, sans-serif !important;
          letter-spacing: 0.35em;
          word-spacing: 1.5em;
        }
        
        body, body * {
          transition: all 300ms ease;
        }
      `}</style>
    </div>
  );
};

export default AccessibilityMenu;