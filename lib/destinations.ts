import data from '../api/data.json'

export type IDestination = {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

export const getDestinations = (): IDestination[] => {
  return data.destinations
}
