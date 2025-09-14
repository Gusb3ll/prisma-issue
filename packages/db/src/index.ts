import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient, Prisma as PrismaTypes } from "./generated/client";
import type * as PrismaModels from "./generated/client";

export { PrismaPg, PrismaClient, PrismaTypes, PrismaModels };
