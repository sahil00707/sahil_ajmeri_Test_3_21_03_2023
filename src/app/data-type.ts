export interface DataType {
    isActive: boolean;
    isVirtual: boolean;
    programBudget: number;
    programDescription: string;
    programID: string;
    programName: string;
    programNumber: string;
    canDelete:boolean
}

export interface DataType2 {
    isActive: boolean,
    virtualProgram: boolean,
    programBudget: number,
    programDescription: string,
    programID: string,
    programName: string,
    programNumber: string,
    canDelete:boolean
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    programs: T;
  }