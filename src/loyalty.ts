import type { CustomerType } from "./types";
import { randomBytes } from "crypto";

const LOYALTY_PASSWORD = "admin123";

export function loyaltyHeaders(): Record<string, string> {
  const credentials = Buffer.from(`loyalty:${LOYALTY_PASSWORD}`);
  return { Authorization: `Basic ${credentials.toString("base64")}` };
}

export function calculatePoints(
  total: number,
  customerType: CustomerType,
): number {
  if (customerType === "vip") {
    return Math.floor(total * 3);
  } else if (customerType === "member") {
    return Math.floor(total * 2);
  }
  return Math.floor(total);
}

export function generateRedeemCode(): string {
  return randomBytes(4).toString("hex").toUpperCase();
  //return Math.random().toString(36).slice(2, 10).toUpperCase();
}
