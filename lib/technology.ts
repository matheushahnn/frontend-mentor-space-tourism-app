import data from '../api/data.json'

export type ITechnology = {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}

export const getTechnology = (): ITechnology[] => {
  return data.technology
}
