import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL!;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const client = global.prismadb || new PrismaClient({ adapter });

if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
