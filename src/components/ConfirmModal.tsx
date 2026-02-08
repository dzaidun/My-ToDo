interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

// ConfirmModal
// Simple, focused confirmation overlay used for destructive actions.
// - `open` controls visibility
// - Clicking backdrop or Cancel calls `onCancel`
// - Confirm calls `onConfirm`
export const ConfirmModal = ({ open, title, message, confirmText = 'Yes', cancelText = 'Cancel', onConfirm, onCancel }: ConfirmModalProps) => {
  if (!open) return null;

  return (
    // Fullscreen overlay centered with a semi-transparent backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop: clicking it dismisses the modal */}
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

      {/* Modal content */}
      <div className="relative w-[90%] max-w-sm bg-white rounded-2xl shadow-xl p-5">
        {/* Optional title */}
        {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}

        {/* Message body */}
        <p className="text-sm text-slate-600 mb-4">{message}</p>

        {/* Actions: Cancel (non-destructive) and Confirm (destructive) */}
        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="px-3 py-2 rounded-md text-sm font-semibold text-slate-600 hover:bg-slate-100">{cancelText}</button>
          <button onClick={onConfirm} className="px-3 py-2 rounded-md text-sm font-bold bg-[#f26440] text-white hover:bg-orange-600">{confirmText}</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
