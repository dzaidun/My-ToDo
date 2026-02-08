import { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import type { Language } from '../utils/translations';

interface ClearAllProps {
  todosLength: number;
  labels: any;
  lang: Language;
  clearAll: () => void;
}

export default function ClearAll({ todosLength, labels, lang, clearAll }: ClearAllProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (todosLength === 0) return null;

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full mt-5 p-2 text-[11px] font-bold text-slate-300 hover:text-red-400 uppercase tracking-widest transition-colors cursor-pointer"
      >
        {labels.clearAll}
      </button>

      <ConfirmModal
        open={isModalOpen}
        title={labels.confirmTitle || (lang === 'ua' ? 'Підтвердження' : 'Confirm')}
        message={labels.confirmMessage || (lang === 'ua' ? 'Видалити всі справи?' : 'Delete all tasks?')}
        confirmText={labels.confirmYes || (lang === 'ua' ? 'Так' : 'Yes')}
        cancelText={labels.confirmNo || (lang === 'ua' ? 'Ні' : 'No')}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={() => {
          clearAll();
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
