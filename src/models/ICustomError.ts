export interface ICustomError {
     status: number;
     data: {
          error: {
               code: number;
               message: string;
          }
     }
}