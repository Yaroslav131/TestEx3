export function getUserGeolocation(): Promise<{
  latitude: number;
  longitude: number;
}> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          if (permissionStatus.state === 'granted') {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                resolve({ latitude, longitude });
              },
              (error) => {
                reject(error);
              }
            );
          } else {
            reject(new Error('Geolocation permission denied.'));
          }
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}