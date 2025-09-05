const { z } = require("zod");

const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, "Name must be at least 3 characters long"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),

  role: z.enum(["alumni", "admin"], {
    required_error: "Role is required",
  }),

  graduationYear: z
    .string()
    .regex(/^\d{4}$/, "Graduation year must be a 4-digit year")
    .optional(),

  city: z.string().trim().optional(),
})
.refine(
  (data) => {
    if (data.role === "alumni") {
      return data.graduationYear && data.city;
    }
    return true;
  },
  {
    message: "Graduation year and city are required for alumni",
    path: ["graduationYear"],
  }
);

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email"),
  password: z.string({ required_error: "Password is required" }),
});

module.exports = { registerSchema, loginSchema };
