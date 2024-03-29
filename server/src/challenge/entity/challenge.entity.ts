export class Challenge {
    name: string;
    description: string;
    isFeeApplied: boolean;
    fee?: number;
    totalPrize: number;
    imrUrl?: string;
    featured?: boolean;
    category?: string;
    locationId: string;
    peopleLimit: number;
    isChallengeCompleted: boolean;
}
