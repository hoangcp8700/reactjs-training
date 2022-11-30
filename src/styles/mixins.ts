export default {
  resetButton: "border-none outline-none border-transparent focus:outline-none appearance-none",
  resetInput:
    "outline-none border-transparent focus:border-transparent focus:outline-none focus:ring-0 appearance-none",
  aspectRatio: (width: number, height: number) => `${(height / width) * 100}%`,
  overlay: (background: string) => `${background} inset-0 fixed z-overlay`,
};
