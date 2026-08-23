import axios from "axios"
import { CompanySearch } from '../Types/Company'

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
    const body: SearchRequestBody = {
        search_text: query,
        quote_types: ["mutualfund", "etf", "stock"],
        offset: 0,
        limit: 10,
        sort_by: [{ selector: "amount_usd", desc: true }],
        has_public_financial_reports: true,
        tag: "",
    };
    
    try {
        const response = await axios.post<SearchResponse>(
            "/v1/search",
            body,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message)
            console.log("error data:", error.response?.data); 
            console.log("error:", error); 
            return error.message
        } else {
            console.log("unexpected error: ", error)
            return "Un unexpected error ocurred"
        }
    }
}