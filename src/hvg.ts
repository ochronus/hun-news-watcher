import cheerio from 'cheerio';
import { NewsData } from './data';
import { NewsSource } from './newssource';

export const HVGBaseURL = 'https://hvg.hu';

export function ParseHVG($: cheerio.Root): NewsData[] {
    const news: NewsData[] = [];
    const newsArticles: cheerio.Cheerio = $('h1 a');
    newsArticles.each((_, elem) => {
        const title = $(elem).text().trim();
        let url = $(elem).attr('href');
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = HVGBaseURL + url;
        }
        news.push({
            title,
            url,
        })
    })
    return news;
}

export class HVG implements NewsSource {
    fetch(): NewsData[] {
        const news: NewsData[] = [];
        return news
    }
}