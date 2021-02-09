import axios from 'axios';
import cheerio from 'cheerio';
import Parse24hu from './24hu';
import { OrigoIndexURL, ParseOrigo } from './origo';
import ParseIndexHu from './indexhu';
import { HVGBaseURL, ParseHVG } from './hvg';
import { NewsData } from './data';

const AxiosInstance = axios.create();

export function FetchNews() {

    AxiosInstance.get('https://24.hu')
        .then(
            response => {
                const html = response.data;
                const $ = cheerio.load(html);
                const news: NewsData[] = Parse24hu($);
                console.log("24.hu", news.length);
            }
        )
        .catch(console.error);

    AxiosInstance.get(OrigoIndexURL)
        .then(
            response => {
                const html = response.data;
                const $ = cheerio.load(html);
                const news: NewsData[] = ParseOrigo($);
                console.log("origo.hu", news.length);
            }
        )
        .catch(console.error);

    AxiosInstance.get('https://index.hu/')
        .then(
            response => {
                const html = response.data;
                const $ = cheerio.load(html);
                const news: NewsData[] = ParseIndexHu($);
                console.log("index.hu", news.length);
            }
        )
        .catch(console.error);

    AxiosInstance.get(HVGBaseURL)
        .then(
            response => {
                const html = response.data;
                const $ = cheerio.load(html);
                const news: NewsData[] = ParseHVG($);
                console.log("hvg.hu", news.length);
            }
        )
        .catch(console.error);
}