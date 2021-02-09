import { NewsData } from './data';

export interface NewsSource {
    fetch(): NewsData[]
};