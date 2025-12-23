import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IconWrapper } from "@/data/Icons";
import { XIcon } from "lucide-react";

export function Modal({
  isOpen,
  onRequestClose,
  modalHeader = {},
  maxWidth = "md:max-w-[500px]",
  children,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent
        className={`
      [&>button]:hidden
      ${maxWidth}
      max-w-full
      !duration-300
      !ease-linear
      pt-4
      top-[unset]
      md:top-1/2
      bottom-0
      md:bottom-[unset]
      translate-y-0
      !rounded-t-2xl
      md:!rounded-2xl
      gap-y-0
      p-0
      md:-translate-y-1/2
      bg-white dark:bg-[#1A1A1A] text-[#202020] dark:text-white
    `}
      >
        {modalHeader?.hasHeader && (
          <DialogHeader
            className={`flex items-center flex-row justify-between px-4 py-3.5 ${
              modalHeader?.style ?? ""
            }`}
          >
            <div className="flex flex-col items-center justify-center mx-auto">
              <DialogTitle
                className={`
            font-bold
            text-2xl
            w-full
            ${modalHeader?.textAlign ?? "text-center"}
            ${modalHeader?.textStyle ?? "text-main"}
          `}
              >
                {modalHeader.modalTitle ?? ""}
              </DialogTitle>
              <span className="text-sm text-[#565D6D]">
                {modalHeader.modalSubTitle ?? ""}
              </span>
            </div>

            <button
              type="button"
              onClick={onRequestClose}
              className="absolute text-[#565D6D] rounded-full top-2 right-3 ms-auto"
            >
              <IconWrapper>
                <XIcon className="w-5 h-5 transition-all hover:rotate-180" />
              </IconWrapper>
            </button>
          </DialogHeader>
        )}

        {children}
      </DialogContent>
    </Dialog>
  );
}
