import data from '../api/data.json'

export type ICrew = {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}

export const getCrew = (): ICrew[] => {
  return data.crew
}
