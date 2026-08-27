'use client';

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function ContactMap({ pin }) {
  const containerRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return undefined;
    }

    let map;

    try {
      map = new maplibregl.Map({
        container: node,
        style: {
          version: 8,
          sources: {
            carto: {
              type: 'raster',
              tiles: [
                'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
              ],
              tileSize: 256,
              attribution: '© OpenStreetMap © CARTO',
            },
          },
          layers: [{ id: 'carto', type: 'raster', source: 'carto' }],
        },
        center: [pin.lng, pin.lat],
        zoom: pin.zoom,
        attributionControl: true,
      });
    } catch (cause) {
      console.error('contact map failed to construct', {
        operation: 'ContactMap',
        cause,
      });
      setFailed(true);
      return undefined;
    }

    map.on('load', () => {
      new maplibregl.Marker({ color: '#d22d80' })
        .setLngLat([pin.lng, pin.lat])
        .addTo(map);
      map.resize();
    });

    map.on('error', (event) => {
      console.error('contact map error', {
        operation: 'ContactMap',
        cause: event?.error,
      });
    });

    const observer = new ResizeObserver(() => {
      map.resize();
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
      map.remove();
    };
  }, [pin.lat, pin.lng, pin.zoom]);

  if (failed) {
    const bbox = `${pin.lng - 0.18},${pin.lat - 0.12},${pin.lng + 0.18},${pin.lat + 0.12}`;
    return (
      <iframe
        title={pin.label}
        className="w-full h-[320px] border border-line rounded-lg lg:h-[420px] grayscale contrast-125"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${pin.lat}%2C${pin.lng}`}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[320px] overflow-hidden border border-line rounded-lg lg:h-[420px]"
      role="img"
      aria-label={pin.label}
    />
  );
}
