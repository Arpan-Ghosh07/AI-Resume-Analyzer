/**
 * Formats a size in bytes into a human-readable string (KB, MB, GB).
 * 
 * @param bytes - The size in bytes to format.
 * @param decimals - The number of decimal places to include (default: 2).
 * @returns A formatted string (e.g., "1.50 MB").
 */
export function formatSize(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();
