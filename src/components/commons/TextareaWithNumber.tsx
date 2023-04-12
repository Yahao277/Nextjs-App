import { Textarea } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

// TODO: no funciona bien, hay que arreglarlo
const TextareaWithNumber = ({ value, onChange, ...rest }: any) => {
  const [lines, setLines] = useState(new Array(30).fill(null)); // Create an array of 30 elements
  const textareaRef = useRef<any>(null);

  useEffect(() => {
    const updateLines = () => {
      if (textareaRef.current) {
        const { scrollTop, lineHeight } = textareaRef.current;
        const newLines = Array.from({ length: textareaRef.current.rows });
        setLines(newLines);
        newLines.forEach((_, i) => {
          const lineNumber = i + 1;
          const y = scrollTop + i * lineHeight;
          const lineEl = document.createElement('div');
          lineEl.textContent = String(lineNumber);
          lineEl.style.position = 'absolute';
          lineEl.style.top = `${y}px`;
          lineEl.style.left = '10px';
          lineEl.style.width = '30px';
          lineEl.style.fontSize = '14px';
          lineEl.style.color = '#aaa';
          lineEl.style.fontFamily = 'monospace';
          lineEl.style.lineHeight = '20px';
          textareaRef.current.parentNode.appendChild(lineEl);
        });
      }
    };

    updateLines();
    textareaRef.current.addEventListener('scroll', updateLines);
    textareaRef.current.addEventListener('input', updateLines);

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener('scroll', updateLines);
        textareaRef.current.removeEventListener('input', updateLines);
      }
    };
  }, []);

  const handleChange = (e: any) => {
    onChange(e);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '300px',
        backgroundColor: '#f7f7f7',
        border: '1px solid #ddd',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '30px',
          fontSize: '14px',
          color: '#aaa',
          fontFamily: 'monospace',
          lineHeight: '20px',
        }}
      >
        {lines.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <Textarea
        ref={textareaRef}
        resize="none"
        height="100%"
        style={{
          fontSize: '14px',
          lineHeight: '20px',
          fontFamily: 'monospace',
          padding: '10px',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          marginLeft: '40px', // Add margin to create space for line numbers
          width: 'calc(100% - 40px)', // Subtract the width of line numbers container
        }}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

export default TextareaWithNumber;
