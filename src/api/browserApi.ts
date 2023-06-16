 export function getUserGeolocation(callback: (latitude: number, longitude: number) => void): () => void {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          callback(latitude, longitude);
        },
        (error) => {
          console.error(error);
        }
      );
  
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error('Geolocation is not supported by this browser.');
      return () => {};
    }
  }