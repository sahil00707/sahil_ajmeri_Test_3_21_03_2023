export interface programDataType {
    isActive: boolean;
    isVirtual: boolean;
    programBudget: number;
    programDescription: string;
    programID: string;
    programName: string;
    programNumber: string;
    canDelete:boolean
}

export interface ApiDataType<programs> {
    success: boolean;
    message: string;
    programs: programs;
  }