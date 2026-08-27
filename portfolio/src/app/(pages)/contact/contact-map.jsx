'use client';

import { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function ContactMap({ pin }) {
  const containerRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let map;

    async function mountMap() {
      try {
        const maplibregl = (await import('maplibre-gl')).default;

        if (cancelled || !containerRef.current) {
          return;
        }

        map = new maplibregl.Map({
          container: containerRef.current,
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

        const marker = document.createElement('div');
        marker.className =
          'h-4 w-4 rounded-full bg-magenta ring-4 ring-magenta/30';
        marker.setAttribute('aria-hidden', 'true');

        new maplibregl.Marker({ element: marker })
          .setLngLat([pin.lng, pin.lat])
          .addTo(map);
      } catch (cause) {
        console.error('contact map failed to load', {
          operation: 'ContactMap',
          cause,
        });
        if (!cancelled) {
          setFailed(true);
        }
      }
    }

    mountMap();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [pin.lat, pin.lng, pin.zoom]);

  if (failed) {
    return (
      <div className="flex items-center justify-center w-full h-[320px] border bg-surface border-line rounded-lg">
        <p className="text-sm text-copy-muted">{pin.label}</p>
      </div>
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
