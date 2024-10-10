interface GTMEventData {
  event: string;
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  [key: string]: any;
}

let lastEventData: GTMEventData | null = null;

export const sendToGTM = (eventData: GTMEventData) => {
  if (lastEventData && isSameEvent(eventData, lastEventData)) {
    return;
  }

  lastEventData = { ...eventData };
  
  if (window && window.dataLayer) {
    window.dataLayer.push(eventData);
    
  } else {
    console.warn('Google Tag Manager no está cargado.');
  }
};

const isSameEvent = (event1: GTMEventData, event2: GTMEventData): boolean => {
  return (
    event1.event === event2.event &&
    event1.eventCategory === event2.eventCategory &&
    event1.eventAction === event2.eventAction
  );
};
