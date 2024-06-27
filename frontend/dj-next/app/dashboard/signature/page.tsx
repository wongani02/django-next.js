'use client'

import React, { useRef, useState } from 'react';
import SignaturePad from 'react-signature-pad-wrapper';

const SignatureComponent = () => {
  const signaturePadRef = useRef();
  const [signatureData, setSignatureData] = useState('');

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      setSignatureData('');
    }
  };

  const saveSignature = () => {
    if (signaturePadRef.current) {
      const dataUrl = signaturePadRef.current.toDataURL();
      setSignatureData(dataUrl);
      console.log(dataUrl)
    }
  };

  return (
    <div>
      <SignaturePad
        ref={signaturePadRef}
        canvasProps={{ width: 400, height: 200, className: 'signature-pad' }}
      />
      <div>
        <button onClick={clearSignature}>Clear Signature</button>
        <button onClick={saveSignature}>Save Signature</button>
      </div>
      {signatureData && (
        <div>
          <h3>Signature Preview</h3>
          <img src={signatureData} alt="Signature" />
        </div>
      )}
    </div>
  );
};

export default SignatureComponent;

// import React, { useRef, useEffect, useState } from 'react';
// import SignaturePad from 'signature_pad';

// const SignatureCapture = () => {
//   const signaturePadRef = useRef(null);
//   const [signatureData, setSignaturePad] = useState(null);

//   useEffect(() => {
//     // Initialize signature pad after component mounts
//     const signaturePad = new SignaturePad(signaturePadRef.current);
//     setSignaturePad(signaturePad);
//   }, []);

//   const handleClear = () => {
//     signaturePadRef.current.clear();
//     setSignaturePad(null);
//   };

//   const handleSave = () => {
//     const signatureDataURL = signaturePadRef.current.toDataURL();
//     setSignatureData(signatureDataURL);
//   };

//   return (
//     <div>
//       <canvas ref={signaturePadRef} height="200" width="400" />
//       <button onClick={handleClear}>Clear</button>
//       <button onClick={handleSave}>Save</button>
//       {signatureData && <img src={signatureData} alt="Signature" />}
//     </div>
//   );
// };

// export default SignatureCapture;
