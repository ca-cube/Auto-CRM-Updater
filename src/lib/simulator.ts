import { Deal, DealStage, ForecastData } from "./types";

/**
 * Simulates the Bayesian Confidence Layer
 * Predicts the probability distribution of stages based on signals
 */
export function inferStageProbability(deal: Deal): Record<DealStage, number> {
    // Mock probability distribution
    const stages: DealStage[] = ["Qualification", "Discovery", "Proposal", "Negotiation", "Closing", "Closed Won"];
    const currentIdx = stages.indexOf(deal.stage);

    const distribution: any = {};
    stages.forEach((s, idx) => {
        if (idx === currentIdx) distribution[s] = 0.7;
        else if (idx === currentIdx + 1) distribution[s] = 0.2;
        else if (idx === currentIdx - 1) distribution[s] = 0.1;
        else distribution[s] = 0.0;
    });

    return distribution;
}

/**
 * Monte Carlo Simulation for Pipeline
 */
export function runMonteCarlo(deals: Deal[], iterations: number = 1000): ForecastData {
    let totalPredicted = 0;
    let wins = 0;

    // Simple simulation logic
    const results = [];
    for (let i = 0; i < iterations; i++) {
        let iterationTotal = 0;
        deals.forEach(deal => {
            const winProb = deal.confidence / 100;
            if (Math.random() < winProb) {
                iterationTotal += deal.value;
            }
        });
        results.sort((a, b) => a - b);
        results.push(iterationTotal);
    }

    const avg = results.reduce((a, b) => a + b, 0) / iterations;

    return {
        predictedRevenue: avg,
        variance: 14.2, // Mocked based on case study
        dealsAtRisk: deals.filter(d => d.confidence < 50).length,
        bestCase: Math.max(...results),
        worstCase: Math.min(...results)
    };
}
