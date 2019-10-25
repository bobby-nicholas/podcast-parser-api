import { getFeed } from '../../feed'

export const resolvers = {
  Query: {
    async show(_, { url }) {
      const show = await getFeed(url)
      return show
    }
  },
  Show: {
    title: ({ title }) => title,
    description: ({ description }) => description,
    lastUpdate: ({ pubDate, lastBuildDate, items }) => pubDate || lastBuildDate || items[0].pubDate,
    image: ({ image, itunes }) => image ? image.url : itunes ? itunes.image : '',
    episodes: ({ items }) => items
  },
  Episode: {
    title: ({ title }) => title,
    description: (item) => item.contentSnippet || item.content || item['content:encoded'],
    published: ({ pubDate }) => pubDate,
    image: ({ itunes }) => itunes ? itunes.image : '',
    file: (item) => item
  },
  File: {
    link: ({ enclosure }) => enclosure ? enclosure.url : '',
    size: ({ enclosure }) => enclosure ? parseInt(enclosure.length) : 0,
    duration: ({ itunes }) => itunes ? itunes.duration : ''
  }
}