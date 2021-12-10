
export interface Validatable {
    value: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
}

export const validate = (input: Validatable) => {
    let isValid = true;
    if (input.required) {
        isValid = isValid && input.value.toString().trim().length !==0;
    }
    if (input.minLength != null && typeof input.value === "string") {
        isValid = isValid && input.value.length >= input.minLength;
    }
    if (input.maxLength != null && typeof input.value === "string") {
        isValid = isValid && input.value.length <= input.maxLength;
    }
    return isValid;
};