import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyCompData, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from '../Types/Company'
import { format } from "path";
import { formatDate } from "../Helpers/DateFormatting";

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
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
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

export const getBalanceSheet = async (query: string) => {
    try {
        const data = axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY2}`
        );
        return data;
    } catch (error: any) {
        console.log(`error message from API: ${error.message}`);
    }
}

export const getCashFlowStatement = async (query: string) => {
    try {
        const data = axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY2}`
        );
        return data;
    } catch (error: any) {
        console.log(`error message from API: ${error.message}`);
    }
}

export const getCompData = async (query: string) => {
    try {
        const data = axios.get<CompanyCompData[]>(
            `https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log(`error message from API: ${error.message}`);
    }
}

export const getTenK = async (query: string) => {
    try {
        const actualDate = formatDate(0);
        const previousDate = formatDate(29);

        const data = axios.get<CompanyTenK[]>(
            `https://financialmodelingprep.com/stable/sec-filings-search/symbol?symbol=${query}&from=${previousDate}&to=${actualDate}&page=0&limit=20&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log(`error message from API: ${error.message}`);
    }
}