import { MixedType } from "./types";
export declare function isValidEmail(email: string): boolean;
export declare function deepCloneArray(arr: MixedType[]): boolean;
export declare function VariableIsEmpty(inputValue: any): boolean;
export declare function isTextArabic(text: string): boolean;
export declare function isTextEnglish(text: string): boolean;
export declare function checkIsNumber(num: any): boolean;
export declare function isValidPhoneNumber(phoneNumber: string, requiredLength?: number): boolean;
export declare function isStrongPassword(password: string | number): boolean;
export declare function isValidDate(date: any): boolean;
export declare function removeDuplicatesFromArray<T>(array: T[]): T[];
export declare function sortArray<T extends number | string>(array: T[], ascending?: boolean): T[];
export declare function removeDuplicatesAndSortArray<T extends number | string>(array: T[], ascending?: boolean): T[];
export declare function compareTwoStrings(str1: string, str2: string): boolean;
