import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-subtle hover-elevate active-elevate-2 p-2 rounded-full transition-all duration-300"
      data-testid="button-scroll-indicator"
      aria-label="Scroll to content"
    >
      <ChevronDown className="w-8 h-8 text-foreground" />
    </button>
  );
}
