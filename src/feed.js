import rp from 'rss-parser'
import cache from './cache'
const parser = new rp()
export const getFeed = async url => {
  const cached = cache.get(url)
  if (cached) return cached
  const parsed = await parser.parseURL(url)
  cache.set(url, parsed)
  return parsed
}