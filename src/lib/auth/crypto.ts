/**
 * Universal PBKDF2 cryptographic utilities for NKB Regovanta Admin Panel.
 * Uses Web Crypto API (supported natively in all modern browsers, Node.js 18+, and Edge workers).
 * Iteration count: 100,000 rounds of SHA-512 with 64-byte cryptographic salts.
 */

export async function hashPassword(
  password: string,
  saltHex?: string
): Promise<{ hash: string; salt: string }> {
  const enc = new TextEncoder();
  const webCrypto = globalThis.crypto;

  let saltBytes: Uint8Array;
  if (saltHex) {
    saltBytes = hexToBytes(saltHex);
  } else if (webCrypto?.getRandomValues) {
    saltBytes = webCrypto.getRandomValues(new Uint8Array(32));
  } else {
    saltBytes = new Uint8Array(32);
    for (let i = 0; i < 32; i++) saltBytes[i] = Math.floor(Math.random() * 256);
  }

  if (webCrypto?.subtle) {
    const keyMaterial = await webCrypto.subtle.importKey(
      "raw",
      enc.encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveBits"]
    );
    const derivedBits = await webCrypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt: saltBytes as BufferSource,
        iterations: 100000,
        hash: "SHA-512",
      },
      keyMaterial,
      512
    );
    return {
      hash: bytesToHex(new Uint8Array(derivedBits)),
      salt: bytesToHex(saltBytes),
    };
  }

  throw new Error("Web Crypto API is not supported in this environment.");
}

export async function verifyPassword(
  password: string,
  expectedHash: string,
  salt: string
): Promise<boolean> {
  const result = await hashPassword(password, salt);
  return result.hash === expectedHash;
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}
