import React, { useRef } from 'react';

export default function CodeBlock(props: { code: string }) {
  const { code } = props;
  // Split the code string into an array of lines
  const lines = code.split('\n') as string[];
  const codeRef = useRef(null);

  const copyToClipboard = () => {
    const el = codeRef.current || document.createElement('textarea');
    el.select();
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch((err) => {
        alert('Failed to copy code to clipboard.' + err);
      });
  };

  return (
    <div className='bg-gray-100 p-5 rounded-md text-left relative overflow-x-auto'>
      <pre className='mb-4'>
        {lines.map((line, index) => (
          <div key={index} className='relative'>
            <textarea ref={codeRef} className='hidden' value={code} readOnly />
            <code className='ml-6 block text-sm'>{line}</code>
            <div className='absolute left-0 top-0 text-gray-500 pr-4 text-sm'>
              {index + 1}
            </div>
          </div>
        ))}
      </pre>
      <button
        className='absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
        onClick={copyToClipboard}
      >
        Copy
      </button>
    </div>
  );
}
