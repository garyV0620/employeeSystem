import { useState } from 'react';

const FlashMessage = ({ message }) => {
      
  if (!message) return null;

  return (
    <div x-data="{ showMessage: true }" x-show="showMessage" x-init="setTimeout(() => showMessage = false, 3000)" className={`p-3 text-center max-w-7xl mx-auto my-2 ${message.type === 'error' ? 'text-red-700 bg-red-200' : 'text-green-700 bg-green-200'} rounded`}>
      {message.text}
    </div>
  );
};

export default FlashMessage;