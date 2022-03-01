import { Response } from "express";
const sucResponse = (res: Response, statusCode: number, data: any) => {
  res.status(statusCode).json({
    success: true,
    ...data,
  });
};

export default sucResponse;