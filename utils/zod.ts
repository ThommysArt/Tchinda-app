import * as z from "zod"

export const webAuthnSchema = z.object({
    email: z.string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
  })
