'use client';

import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

type MarkerClickDetail = {
  id?: number;
  lat?: number;
  lng?: number;
  [key: string]: unknown;
};

declare global {
  interface WindowEventMap {
    /** Custom event fired when an infoWindow "View Details" is clicked */
    markerClick: CustomEvent<MarkerClickDetail>;
  }
}

interface ProjectMarker {
  id: number;
  title: string;
  position: google.maps.LatLngLiteral;
  category: string;
  image: string;
  location: string;
  date: string;
  budget: string;
  area: string;
}

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  markers: ProjectMarker[];
  onMarkerClick?: (marker: ProjectMarker) => void;
}

interface GoogleMapComponentProps {
  map: google.maps.Map;
  markers: ProjectMarker[];
  onMarkerClick?: (marker: ProjectMarker) => void;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ map, markers, onMarkerClick }) => {
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);

  useEffect(() => {
    const newInfoWindow = new google.maps.InfoWindow();
    setInfoWindow(newInfoWindow);
    return () => {
      newInfoWindow.close();
    };
  }, []);

  useEffect(() => {
    if (!map || !infoWindow) return;

    const mapMarkers: google.maps.Marker[] = [];

    markers.forEach((markerData) => {
      const marker = new google.maps.Marker({
        position: markerData.position,
        map,
        title: markerData.title,
        icon: {
          url:
            'data:image/svg+xml;charset=UTF-8,' +
            encodeURIComponent(`
            <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C9.0 0 0 9.0 0 20C0 35 20 50 20 50S40 35 40 20C40 9.0 31.0 0 20 0Z" fill="#ea580c"/>
              <circle cx="20" cy="20" r="8" fill="white"/>
              <path d="M16 16L24 24M16 24L24 16" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 50),
          anchor: new google.maps.Point(20, 50),
        },
      });

      // HTML content rendered inside InfoWindow (uses inline onclick to dispatch a CustomEvent)
      const infoContent = `
        <div style="max-width: 300px; padding: 12px;">
          <img src="${markerData.image}" alt="${markerData.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;" />
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: bold; color: #1f2937;">${markerData.title}</h3>

          <div style="display: flex; align-items: center; margin-bottom: 6px; color: #6b7280;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span style="font-size: 14px;">${markerData.location}</span>
          </div>

          <div style="display: flex; align-items: center; margin-bottom: 6px; color: #6b7280;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span style="font-size: 14px;">${markerData.date}</span>
          </div>

          <div style="display: flex; align-items: center; margin-bottom: 12px; color: #6b7280;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span style="font-size: 14px; font-weight: 600; color: #ea580c;">${markerData.budget}</span>
          </div>

          <div style="text-align: center;">
            <button
              onclick="window.dispatchEvent(new CustomEvent('markerClick', { detail: { id: ${markerData.id} } }))"
              style="background: linear-gradient(135deg, #ea580c, #dc2626); color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
              View Details
            </button>
          </div>
        </div>
      `;

      marker.addListener('click', () => {
        infoWindow.setContent(infoContent);
        infoWindow.open(map, marker);

        if (onMarkerClick) onMarkerClick(markerData);
      });

      mapMarkers.push(marker);
    });

    // Handle custom "markerClick" events (typed via WindowEventMap augmentation)
    const handleMarkerClick = (event: WindowEventMap['markerClick']) => {
      const markerId = event.detail?.id;
      if (markerId == null) return;
      const marker = markers.find((m) => m.id === markerId);
      if (marker && onMarkerClick) onMarkerClick(marker);
    };

    window.addEventListener('markerClick', handleMarkerClick);

    return () => {
      mapMarkers.forEach((marker) => marker.setMap(null));
      window.removeEventListener('markerClick', handleMarkerClick);
    };
  }, [map, markers, infoWindow, onMarkerClick]);

  return null;
};

const Map: React.FC<MapProps> = ({ center, zoom, markers, onMarkerClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new google.maps.Map(ref.current, {
        center,
        zoom,
        styles: [
          { featureType: 'all', elementType: 'geometry.fill', stylers: [{ weight: '2.00' }] },
          { featureType: 'all', elementType: 'geometry.stroke', stylers: [{ color: '#9c9c9c' }] },
          { featureType: 'all', elementType: 'labels.text', stylers: [{ visibility: 'on' }] },
          { featureType: 'landscape', elementType: 'all', stylers: [{ color: '#f2f2f2' }] },
          { featureType: 'landscape', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }] },
          { featureType: 'landscape.man_made', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }] },
          { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'off' }] },
          { featureType: 'road', elementType: 'all', stylers: [{ saturation: -100 }, { lightness: 45 }] },
          { featureType: 'road', elementType: 'geometry.fill', stylers: [{ color: '#eeeeee' }] },
          { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#7b7b7b' }] },
          { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
          { featureType: 'road.highway', elementType: 'all', stylers: [{ visibility: 'simplified' }] },
          { featureType: 'road.arterial', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
          { featureType: 'transit', elementType: 'all', stylers: [{ visibility: 'off' }] },
          { featureType: 'water', elementType: 'all', stylers: [{ color: '#46bcec' }, { visibility: 'on' }] },
          { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#c8d7d4' }] },
          { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#070707' }] },
          { featureType: 'water', elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
      });
      setMap(newMap);
    }
  }, [ref, map, center, zoom]);

  return (
    <>
      <div ref={ref} style={{ width: '100%', height: '100%' }} />
      {map && <GoogleMapComponent map={map} markers={markers} onMarkerClick={onMarkerClick} />}
    </>
  );
};

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      );
    case Status.FAILURE:
      return (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div className="text-center text-gray-600">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p>Unable to load map</p>
            <p className="text-sm mt-2">Please check your internet connection</p>
          </div>
        </div>
      );
    default:
      return <div className="h-full bg-gray-100 rounded-lg" />;
  }
};

interface GoogleMapProps {
  apiKey: string;
  center: google.maps.LatLngLiteral;
  zoom: number;
  markers: ProjectMarker[];
  onMarkerClick?: (marker: ProjectMarker) => void;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  apiKey,
  center,
  zoom,
  markers,
  onMarkerClick,
  className = '',
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Wrapper apiKey={apiKey} render={render}>
        <Map center={center} zoom={zoom} markers={markers} onMarkerClick={onMarkerClick} />
      </Wrapper>
    </div>
  );
};

export default GoogleMap;
export type { ProjectMarker };
