import axios from "axios"
import { CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from '../Types/Company'

interface SearchRequestBody {
    search_text?: string;
    quote_types: string[];
    symbols?: string[];
    offset: number;
    limit: number;
    filters?: string[];
    sort_by: { selector: string; desc: boolean }[];
    has_public_financial_reports: boolean;
    tag: string;
}

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {  
    try {
        const result = await axios.get<[]>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY2}`
        )

        return result.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.message
        } else {
            console.log("unexpected error: ", error)
            return "Un unexpected error ocurred"
        }
    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const data = axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY2}`
        );
        return data;
    } catch (error: any) {
        console.log(`error message from API: ${error.message}`);
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY2}`
        );
        return data;
    } catch (error: any) {
        console.log(`error message from API: ${error.message}`);
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY2}`
        );
        return data;
    } catch (error: any) {
        console.log(`error message from API: ${error.message}`);
    }
}