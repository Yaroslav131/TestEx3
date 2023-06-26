export function getUserGeolocation(): Promise<{
  latitude: number;
  longitude: number;
  cancelGeolocation: () => void;
}> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude, cancelGeolocation });
        },
        (error) => {
          reject(error);
        }
      );

      function cancelGeolocation() {
        navigator.geolocation.clearWatch(watchId);
      }
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}
