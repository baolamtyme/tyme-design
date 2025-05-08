"use client";
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [heroText, setHeroText] = useState('Tyme is a\nrelative concept');
  const [fontSize, setFontSize] = useState(150);
  const [tracking, setTracking] = useState(-5);
  const [lineHeight, setLineHeight] = useState(1);
  const [textAlign, setTextAlign] = useState('center');
  const [fontWeight, setFontWeight] = useState('medium');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main className={`min-h-screen ${isDarkTheme ? 'bg-[#003033] text-[#88DBDD]' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className={`sticky top-0 bg-transparent backdrop-blur-sm px-6 py-4 flex justify-between items-center`}>
        <h1 className="text-xl font-medium font-['GoTymeSans']">Tyme Design</h1>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className={`px-4 py-2 rounded border ${isDarkTheme ? 'border-[#88DBDD] text-[#88DBDD]' : 'border-black text-black'} hover:opacity-70 transition-opacity font-['GoTymeSans']`}
        >
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Hero Specimen */}
      <section className="h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center w-full h-full">
          <div className="flex-1 w-full flex items-center justify-center">
            <textarea
              value={heroText}
              onChange={(e) => setHeroText(e.target.value)}
              className={`text-[10vw] leading-none tracking-tighter text-center font-medium w-full bg-transparent resize-none border-none focus:outline-none focus:ring-0 font-['GoTymeSans'] ${isDarkTheme ? 'text-[#88DBDD]' : 'text-black'}`}
              style={{ 
                height: 'auto', 
                fontSize: `${fontSize}px`, 
                letterSpacing: `${tracking}px`, 
                lineHeight: `${lineHeight}`, 
                minHeight: '100px', 
                textAlign,
                fontWeight: fontWeight === 'thin' ? 100 :
                          fontWeight === 'light' ? 300 :
                          fontWeight === 'regular' ? 400 :
                          fontWeight === 'medium' ? 500 :
                          fontWeight === 'bold' ? 700 : 900
              }}
              placeholder="Type something..."
            />
          </div>
          <div className="w-1/2 py-8">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center space-x-4">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <label className={`block text-sm font-medium ${isDarkTheme ? 'text-[#88DBDD]' : 'text-gray-700'} font-['GoTymeSans']`}>Font Size</label>
                  </div>
                  <input
                    type="range"
                    min="32"
                    max="200"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className={`w-full h-1 rounded-full appearance-none cursor-pointer ${isDarkTheme ? 'bg-[#88DBDD]/30' : 'bg-gray-300'} font-['GoTymeSans']`}
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none',
                      '&::-webkit-slider-thumb': {
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: isDarkTheme ? '#88DBDD' : '#000000',
                        cursor: 'pointer'
                      },
                      '&::-moz-range-thumb': {
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: isDarkTheme ? '#88DBDD' : '#000000',
                        cursor: 'pointer',
                        border: 'none'
                      }
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <label className={`block text-sm font-medium ${isDarkTheme ? 'text-[#88DBDD]' : 'text-gray-700'} font-['GoTymeSans']`}>Tracking</label>
                  </div>
                  <input
                    type="range"
                    min="-10"
                    max="10"
                    value={tracking}
                    onChange={(e) => setTracking(Number(e.target.value))}
                    className={`w-full h-1 rounded-full appearance-none cursor-pointer ${isDarkTheme ? 'bg-[#88DBDD]/30' : 'bg-gray-300'} font-['GoTymeSans']`}
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none',
                      '&::-webkit-slider-thumb': {
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: isDarkTheme ? '#88DBDD' : '#000000',
                        cursor: 'pointer'
                      },
                      '&::-moz-range-thumb': {
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: isDarkTheme ? '#88DBDD' : '#000000',
                        cursor: 'pointer',
                        border: 'none'
                      }
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <label className={`block text-sm font-medium ${isDarkTheme ? 'text-[#88DBDD]' : 'text-gray-700'} font-['GoTymeSans']`}>Line Height</label>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={lineHeight}
                    onChange={(e) => setLineHeight(Number(e.target.value))}
                    className={`w-full h-1 rounded-full appearance-none cursor-pointer ${isDarkTheme ? 'bg-[#88DBDD]/30' : 'bg-gray-300'} font-['GoTymeSans']`}
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none',
                      '&::-webkit-slider-thumb': {
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: isDarkTheme ? '#88DBDD' : '#000000',
                        cursor: 'pointer'
                      },
                      '&::-moz-range-thumb': {
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: isDarkTheme ? '#88DBDD' : '#000000',
                        cursor: 'pointer',
                        border: 'none'
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium ${isDarkTheme ? 'text-[#88DBDD]' : 'text-gray-700'} font-['GoTymeSans'] mb-2`}>Weight</label>
                  <select
                    value={fontWeight}
                    onChange={(e) => setFontWeight(e.target.value)}
                    className={`w-full px-2 py-1 text-sm border-b rounded-none ${isDarkTheme ? 'border-[#88DBDD] bg-transparent text-[#88DBDD]' : 'border-gray-300 bg-transparent text-black'} font-['GoTymeSans'] focus:outline-none`}
                  >
                    <option value="thin">Thin</option>
                    <option value="light">Light</option>
                    <option value="regular">Regular</option>
                    <option value="medium">Medium</option>
                    <option value="bold">Bold</option>
                    <option value="black">Black</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className={`block text-sm font-medium ${isDarkTheme ? 'text-[#88DBDD]' : 'text-gray-700'} font-['GoTymeSans']`}>Alignment</label>
                  <div className="flex mt-2">
                    <button
                      onClick={() => setTextAlign('left')}
                      className={`flex-1 py-1 text-sm border font-['GoTymeSans'] ${
                        isDarkTheme 
                          ? textAlign === 'left' 
                            ? 'bg-[#88DBDD] text-[#003033] border-[#88DBDD]' 
                            : 'bg-transparent text-[#88DBDD] border-[#88DBDD]'
                          : textAlign === 'left'
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-black'
                      }`}
                    >
                      Left
                    </button>
                    <button
                      onClick={() => setTextAlign('center')}
                      className={`flex-1 py-1 text-sm border font-['GoTymeSans'] ${
                        isDarkTheme 
                          ? textAlign === 'center' 
                            ? 'bg-[#88DBDD] text-[#003033] border-[#88DBDD]' 
                            : 'bg-transparent text-[#88DBDD] border-[#88DBDD]'
                          : textAlign === 'center'
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-black'
                      }`}
                    >
                      Middle
                    </button>
                    <button
                      onClick={() => setTextAlign('right')}
                      className={`flex-1 py-1 text-sm border font-['GoTymeSans'] ${
                        isDarkTheme 
                          ? textAlign === 'right' 
                            ? 'bg-[#88DBDD] text-[#003033] border-[#88DBDD]' 
                            : 'bg-transparent text-[#88DBDD] border-[#88DBDD]'
                          : textAlign === 'right'
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-black'
                      }`}
                    >
                      Right
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Text */}
      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className={`text-lg leading-relaxed text-center font-['GoTymeSans'] ${isDarkTheme ? 'text-[#88DBDD]' : 'text-[#4A4A4A]'}`}>
            GoTyme Sans reimagines the geometric sans-serif, blending Futura's timeless structure with contemporary warmth. Its balanced design—featuring subtle curves and precise details—makes it perfect for digital interfaces where clarity meets personality.
          </p>
        </div>
      </section>

      {/* Image Specimens */}
      <section className="px-6">
        {/* Removed image section */}
      </section>

      {/* Footer */}
      <footer className="h-16 px-6 flex items-center justify-center">
        <div className={`text-sm ${isDarkTheme ? 'text-[#88DBDD]' : 'text-gray-500'} font-['GoTymeSans'] flex items-center gap-4`}>
          <a href="mailto:design@tyme.com" className={`hover:opacity-70 ${isDarkTheme ? 'text-[#88DBDD]' : 'text-gray-800'}`}>
            design@tyme.com
          </a>
          <span>© 2025 GoTymeBank. All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}
