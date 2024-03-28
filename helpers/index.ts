import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
}

// Generate JWT token
export function generateJwtToken(
  payload: JwtPayload,
  secretKey: string,
  expiresIn: number
): string {
  return jwt.sign(payload, secretKey, { expiresIn });
}

export function verifyJwtToken(token: string, secretKey: string): JwtPayload {
  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    return decoded;
  } catch (error) {
    throw new Error("Invalid JWT token");
  }
}

// Function to save data to localStorage
export function saveToLocalStorage(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

// Function to retrieve data from localStorage
export function getFromLocalStorage(key: string): any {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return null;
  }
}

// Function to delete data from localStorage
export function deleteFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleting from localStorage:", error);
  }
}
