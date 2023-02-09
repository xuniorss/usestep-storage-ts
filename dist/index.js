"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useStep(key, defaultValue) {
    const [step, setStep] = (0, react_1.useState)(() => {
        try {
            const value = localStorage.getItem(key);
            return value !== null ? JSON.parse(value) : defaultValue;
        }
        catch (error) {
            return defaultValue;
        }
    });
    (0, react_1.useEffect)(() => {
        localStorage.setItem(key, JSON.stringify(step));
    }, [key, step]);
    return [step, setStep];
}
exports.default = useStep;
