function geolocationSupport(){
  return 'geolocation' in navigator
}

const defaultOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 100000,
}

function getPostion(options = defaultOptions){
  if(!geolocationSupport()) throw new Error('Geolocation is not avialiable on your navigator')

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition( position => {
        resolve(position)
      }, () => {
        reject('imposible get your location')
      }, options)
    })
}

export async function getLatLon(options = defaultOptions){
  try{
    const { coords: { latitude: lat, longitude: lon }} = await getPostion(options)
    return {lat, lon}
  } catch(err){
    throw new Error('Imposible get lat and lon')
  }
}