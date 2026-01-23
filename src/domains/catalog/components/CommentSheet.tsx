"use client";

import React, { useEffect, useState } from 'react';
import { Icon } from '@/src/ui/base/Icon';
import { MOCK_COMMENTS } from '../constants';

interface CommentSheetProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export const CommentSheet: React.FC<CommentSheetProps> = ({ isOpen, onClose, productName }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40" 
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div 
        className={`relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-t-xl overflow-hidden flex flex-col h-[75vh] transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Handle */}
        <div className="flex justify-center p-2 cursor-pointer" onClick={onClose}>
          <div className="w-10 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-100 dark:border-zinc-800">
          <div className="w-8" /> {/* Spacer */}
          <h2 className="text-base font-bold">Comments</h2>
          <button onClick={onClose} className="p-1 hover:opacity-70">
            <Icon name="x" size={24} />
          </button>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
           {MOCK_COMMENTS.map((comment) => (
             <div key={comment.id} className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 shrink-0 overflow-hidden">
                 <img src={`https://i.pravatar.cc/150?u=${comment.username}`} alt={comment.username} />
               </div>
               <div className="flex flex-col flex-1">
                 <div className="text-sm">
                   <span className="font-semibold mr-2">{comment.username}</span>
                   <span className="text-zinc-800 dark:text-zinc-200">{comment.text}</span>
                 </div>
                 <div className="flex gap-4 mt-2">
                   <span className="text-xs text-zinc-500">{comment.time}</span>
                   <button className="text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200">Reply</button>
                 </div>
               </div>
               <button className="shrink-0 mt-1">
                 <Icon name="heart" size={12} className="text-zinc-400" />
               </button>
             </div>
           ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-full px-4 py-2">
            <div className="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-700 shrink-0 overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=me" alt="me" />
            </div>
            <input 
              type="text" 
              placeholder={`Add a comment...`}
              className="flex-1 bg-transparent text-sm focus:outline-none"
            />
            <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
