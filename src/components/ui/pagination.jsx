import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("flex w-full", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-3", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const PaginationButton = ({ children, isActive, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-150",
      isActive
        ? "bg-[#1C144F] text-white border-transparent"
        : "border-gray-200 bg-white text-gray-600 hover:bg-gray-100",
      disabled && "opacity-50 cursor-not-allowed"
    )}
  >
    {children}
  </button>
);

const PaginationDemo = () => {
  const [page, setPage] = React.useState(1);

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous button */}
        <PaginationItem>
          <PaginationButton
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </PaginationButton>
        </PaginationItem>

        {/* Page numbers */}
        {[1, 2].map((num) => (
          <PaginationItem key={num}>
            <PaginationButton
              isActive={page === num}
              onClick={() => setPage(num)}
            >
              {num}
            </PaginationButton>
          </PaginationItem>
        ))}

        {/* Next button */}
        <PaginationItem>
          <PaginationButton
            onClick={() => setPage((p) => Math.min(p + 1, 2))}
            disabled={page === 2}
          >
            <ChevronRight className="w-5 h-5" />
          </PaginationButton>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationDemo,
};
