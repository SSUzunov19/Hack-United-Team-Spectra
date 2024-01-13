export class Challenge {
    name: string;
    description: string;
    isFeeApplied: boolean;
    fee?: number;
    totalPrize: number;
    imrUrl?: string;
    featured?: boolean;
    locationId: string;
    peopleLimit: number;
    isChallengeCompleted: boolean;
}
