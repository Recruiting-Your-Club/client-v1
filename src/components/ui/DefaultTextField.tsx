import { InputHTMLAttributes, forwardRef } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const DefaultTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label = "", error = "", className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={props.id} className="block text-sm text-gray-600">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-xl text-black
            bg-gray-50 border-2 border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition-colors
            ${
              error
                ? "border-red-400 focus:ring-rid-100 focus:border-red-300"
                : ""
            } ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

DefaultTextField.displayName = "DefaultTextField";

export default DefaultTextField;
