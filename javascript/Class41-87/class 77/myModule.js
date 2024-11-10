export let text = "welcome to module";

export function setText(txt){
    text=txt;
}


// Named export
export function add(a, b) {
    return a + b;
}

// Named export
export function subtract(a, b) {
    return a - b;
}

// Default export
export default function multiply(a, b) {
    return a * b;
}
