import cheerio from 'cheerio';
import { NewsData } from './data';

export default function ParseIndexHu($: cheerio.Root): NewsData[] {
    const news: NewsData[] = [];
    const newsArticles: cheerio.Cheerio = $('h1.cikkcim');
    const sideArticles: cheerio.Cheerio = $('h3.post-title');
    newsArticles.each((_, elem) => {
        const title = $(elem).text().trim();
        const url = $(elem).find('a').attr('href');
        news.push({
            title,
            url,
        })
    })
    sideArticles.each((_, elem) => {
        const title = $(elem).text().trim();
        const url = $(elem).find('a').attr('href');
        news.push({
            title,
            url,
        })
    })
    return news;
}