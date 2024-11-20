import { ZodError } from "zod";

export class HttpError extends Error {
  status: number;

  constructor(message: string = "Internal Server Error", status: number = 500) {
    super(message);
    this.name = "HttpError"; // Set the error name
    this.status = status;
  }
}

export function handlError(error: unknown) {
  if (error instanceof ZodError) {
    return new Response(
      JSON.stringify({ message: error.issues[0].message }),
      { status: 400 } // Bad Request
    );
  } else if (error instanceof HttpError) {
    return Response.json(
      {
        message: error.message,
      },
      { status: error.status }
    );
  }
  return Response.json(
    {
      message: "Internal Server Error",
    },
    { status: 500 }
  );
}
