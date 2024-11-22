import { User } from "@/db/models/user";
import { handlError } from "@/lib/error";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await User.register(body);

    return Response.json({ message: "Registered succesnfully" });
  } catch (error) {
    return handlError(error);
  }
}
