export class Response<T> {
  status!: number;
  body?: T
  message?: string;
  error?: Array<{ key: string, message: string }>;
}