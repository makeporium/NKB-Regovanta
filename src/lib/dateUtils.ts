/**
 * Date and time utilities for handling India Standard Time (IST, UTC+05:30)
 * accurately across the admin panel, avoiding browser timezone shifts.
 */

/**
 * Converts a Date object or ISO string into a "YYYY-MM-DDTHH:mm" string in IST
 * suitable for HTML <input type="datetime-local">.
 */
export function toIstDatetimeLocalString(dateInput: Date | string = new Date()): string {
  const d = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  if (isNaN(d.getTime())) return "";

  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  let year = "";
  let month = "";
  let day = "";
  let hour = "";
  let minute = "";

  for (const part of formatter.formatToParts(d)) {
    if (part.type === "year") year = part.value;
    else if (part.type === "month") month = part.value;
    else if (part.type === "day") day = part.value;
    else if (part.type === "hour") hour = part.value === "24" ? "00" : part.value;
    else if (part.type === "minute") minute = part.value;
  }

  return `${year}-${month}-${day}T${hour}:${minute}`;
}

/**
 * Converts an IST datetime-local value (e.g. "2026-09-28T20:45")
 * into a UTC ISO string (e.g. "2026-09-28T15:15:00.000Z") for database storage.
 */
export function fromIstDatetimeLocalToIso(val: string): string {
  if (!val) return new Date().toISOString();
  const normalized = val.length === 16 ? `${val}:00` : val;
  // If string already has a timezone indicator (+/- or Z), parse directly
  if (normalized.slice(10).includes("+") || normalized.slice(10).includes("-") || normalized.endsWith("Z")) {
    const d = new Date(normalized);
    return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
  }
  // Otherwise, explicitly treat as Asia/Kolkata (IST = UTC+05:30)
  const withTz = `${normalized}+05:30`;
  const parsed = new Date(withTz);
  if (!isNaN(parsed.getTime())) {
    return parsed.toISOString();
  }
  return new Date(val).toISOString();
}

/**
 * Formats an ISO string into IST date (e.g. "28 Sep 2026")
 */
export function formatIstDate(isoString: string): string {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return isoString;
  }
}

/**
 * Formats an ISO string into IST time (e.g. "08:45 PM IST")
 */
export function formatIstTime(isoString: string): string {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return "";
    return (
      d.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }) + " IST"
    );
  } catch {
    return "";
  }
}
