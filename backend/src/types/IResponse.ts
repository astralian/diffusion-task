import { Response } from 'express';

export interface IResponse<Data> extends Response {
  success: boolean
  data: Data | Data[]
}
