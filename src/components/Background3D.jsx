import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

export default function Background3D() {
  const globeRef = useRef();
  const [countries, setCountries] = useState({ features: [] });
  // Set dimensions to match window initially
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1200, 
    height: typeof window !== 'undefined' ? window.innerHeight : 800 
  });

  useEffect(() => {
    // Handle window resize dynamically to prevent weird scaling
    const onResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);

    // Fetch GeoJSON countries to map out real borders
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotate the globe slowly for aesthetic background feel
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      
      // Initially focus on the general area between China and Tunisia
      globeRef.current.pointOfView({ lat: 38, lng: 63, altitude: 2 });
    }
  }, [globeRef, countries]);

  // Coordinates for Trade Route Arc
  const arcsData = [
    {
      startLat: 39.9,
      startLng: 116.4,
      endLat: 36.8,
      endLng: 10.18,
      color: '#CFA570',
      name: 'China to Tunisia Trade Route'
    }
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', opacity: 0.8 }}>
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)" // Transparent to inherit our #101827 dark theme background
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        polygonsData={countries.features}
        // Slightly elevate the target countries to make them pop
        polygonAltitude={d => (['CHN', 'TUN'].includes(d.properties.ISO_A3) ? 0.03 : 0.01)}
        // Highlight China and Tunisia in gold, the rest in a sleek slate/dark blue
        polygonCapColor={d => (['CHN', 'TUN'].includes(d.properties.ISO_A3) ? '#CFA570' : '#1e293b')}
        polygonSideColor={() => 'rgba(0,0,0,0.5)'}
        polygonStrokeColor={() => '#0f172a'}
        arcsData={arcsData}
        arcColor={'color'}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcAltitude={0.25}
        arcStroke={1.5}
      />
    </div>
  );
}
