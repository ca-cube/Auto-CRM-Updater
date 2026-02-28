import { Deal } from "./types";

export const MOCK_DEALS: Deal[] = [
    {
        id: "1",
        company: "Acme Corp",
        value: 50000,
        stage: "Negotiation",
        confidence: 85,
        lastUpdate: "2024-03-20T10:00:00Z",
        explanation: "Buyer explicitly asked for pricing flexibility and mentioned 'budget approval pending internal review'. This aligns with late-stage negotiation behavior.",
        signals: [
            {
                type: 'email',
                content: "We've reviewed the proposal. Can we discuss the multi-year discount structure tomorrow?",
                sentiment: 'positive',
                intent: 'Pricing Query',
                timestamp: "2024-03-20T09:30:00Z"
            },
            {
                type: 'call',
                content: "TRANSCRIPT: 'The team loves the UI. We just need to make sure the data residency requirements are met before we sign off.'",
                sentiment: 'positive',
                intent: 'Compliance Verification',
                timestamp: "2024-03-19T14:00:00Z"
            }
        ]
    },
    {
        id: "2",
        company: "Stellar Cloud",
        value: 120000,
        stage: "Proposal",
        confidence: 62,
        lastUpdate: "2024-03-21T08:15:00Z",
        explanation: "The customer requested a formal documentation package. While intent is positive, we identified a delay in response time indicating potential internal friction.",
        signals: [
            {
                type: 'email',
                content: "Please send over the updated security whitepaper. We have a meeting with the CTO on Friday.",
                sentiment: 'neutral',
                intent: 'Information Request',
                timestamp: "2024-03-21T08:00:00Z"
            }
        ]
    },
    {
        id: "3",
        company: "IndoLogistics",
        value: 25000,
        stage: "Qualification",
        confidence: 94,
        lastUpdate: "2024-03-21T11:45:00Z",
        explanation: "Initial discovery call showed high pain point alignment. Prospect mentioned 'our manual process is costing us 20 hours a week'.",
        signals: [
            {
                type: 'call',
                content: "TRANSCRIPT: 'Currently we are using Excel to track everything and it is a mess. We need a solution by next month.'",
                sentiment: 'positive',
                intent: 'Pain Point Admission',
                timestamp: "2024-03-21T11:30:00Z"
            }
        ]
    },
    {
        id: "4",
        company: "Zeno Tech",
        value: 85000,
        stage: "Discovery",
        confidence: 45,
        lastUpdate: "2024-03-20T16:20:00Z",
        explanation: "AI detected a 'stalled but optimistic' pattern. Rep believes it's moving, but Bayesian model predicts 45% chance of slipping due to lack of stakeholder engagement.",
        signals: [
            {
                type: 'email',
                content: "Thanks for the demo. We'll get back to you soon.",
                sentiment: 'neutral',
                intent: 'Closing Statement',
                timestamp: "2024-03-20T16:15:00Z"
            }
        ]
    }
];
