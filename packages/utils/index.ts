import { twMerge } from 'tailwind-merge';
import type { ClassNameValue } from 'tailwind-merge';
export const classNames = (...string: ClassNameValue[]) => twMerge(...string);
