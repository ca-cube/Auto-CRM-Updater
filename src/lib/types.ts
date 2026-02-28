export type DealStage =
    | "Qualification"
    | "Discovery"
    | "Proposal"
    | "Negotiation"
    | "Closing"
    | "Closed Won"
    | "Closed Lost";

export interface Deal {
    id: string;
    company: string;
    value: number;
    stage: DealStage;
    confidence: number;
    lastUpdate: string;
    signals: Signal[];
    explanation: string;
}

export interface Signal {
    type: 'email' | 'call';
    content: string;
    sentiment: 'positive' | 'neutral' | 'negative';
    intent: string;
    timestamp: string;
}

export interface ForecastData {
    predictedRevenue: number;
    variance: number;
    dealsAtRisk: number;
    bestCase: number;
    worstCase: number;
}
