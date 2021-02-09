import cheerio from 'cheerio';
import { NewsData } from './data';

export const OrigoBaseURL = 'https://www.origo.hu';
export const OrigoIndexURL = 'https://www.origo.hu/index.html';

export function ParseOrigo($: cheerio.Root): NewsData[] {
    const news: NewsData[] = [];
    const newsArticles: cheerio.Cheerio = $('h1');
    newsArticles.each((_, elem) => {
        const title = $(elem).text().trim();
        let url = $(elem).parent('a').attr('href');
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = OrigoBaseURL + url;
        }
        news.push({
            title,
            url,
        })
    })
    return news;
}