import cheerio from 'cheerio';
import { NewsData } from './data';

export default function Parse24hu($: cheerio.Root): NewsData[] {
    const news: NewsData[] = [];
    const newsArticles: cheerio.Cheerio = $('h2.m-articleWidget__title');
    newsArticles.each((_, elem) => {
        const title = $(elem).text().trim();
        const url = $(elem).find('a').attr('href');
        news.push({
            title,
            url,
        })
    })
    return news;
}