import React, { useState } from 'react';
import { marked } from 'marked';

const Content = () => {
  // State management
  const [selectedFile, setSelectedFile] = useState(null);
  const [role, setRole] = useState('');
  const [showError, setShowError] = useState(false);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  // Event handlers
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setShowError(false);
    setResult('');
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setShowError(false);
  };

  // Helper functions
  const extractAnalysis = (text) => {
    const idx = text.toLowerCase().indexOf("here's the analysis");
    return idx !== -1 ? text.slice(idx) : text;
  };

  const validateInputs = () => {
    if (!selectedFile || !role) {
      setShowError(true);
      return false;
    }
    return true;
  };

  // API call
  const handleAnalyze = async () => {
    if (!validateInputs()) return;
    
    setLoading(true);
    setResult('');

    try {
      const formData = new FormData();
      formData.append('resume', selectedFile);
      formData.append('role', role);

      const response = await fetch('https://matchwise.onrender.com', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.result || `Error: ${data.error || 'No analysis returned'}`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // UI components
  const ErrorAlert = () => (
    <div role="alert" className="alert alert-error mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Error! Please upload a resume and select a role.</span>
    </div>
  );

  const FileInput = () => (
    <div className="mb-4">
      <label className="block mb-2 font-semibold text-white">
        Upload your Resume 📄
      </label>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full"
        disabled={loading}
        style={{ backgroundColor: '#2d2d2d' }}
      />
      <div className="mt-2 text-sm text-gray-300">
        {selectedFile ? `Selected: ${selectedFile.name}` : "No file chosen"}
      </div>
    </div>
  );

  const RoleSelect = () => (
    <div className="mb-4">
      <label className="block mb-2 font-semibold text-white">Select Role 🔍</label>
      <select
        value={role}
        onChange={handleRoleChange}
        className="select select-bordered w-full "
        disabled={loading}
        style={{ backgroundColor: '#2d2d2d' }}
      >
        <option value="">-- Choose a role --</option>
        <option value="Software Developer">Software Developer</option>
        <option value="Data Analyst">Data Analyst</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
      </select>
    </div>
  );

  const AnalyzeButton = () => (
    <button
      onClick={handleAnalyze}
      className="btn btn-primary w-full"
      disabled={loading}
    >
      {loading ? (
        <>
          <span className="loading loading-spinner"></span>
          Analyzing...
        </>
      ) : (
        'Analyze'
      )}
    </button>
  );

  const ResultDisplay = () => (
    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
      <h3 className="font-semibold text-black mb-2">Analysis Result:</h3>
      <div
        className="text-black prose max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(extractAnalysis(result)) }}
      />
    </div>
  );

  return (
    <div
      className="max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-md"
      style={{ backgroundColor: '#2d2d2d' }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Upload Resume & Analyze
      </h2>

      {showError && <ErrorAlert />}

      <FileInput />
      <RoleSelect />
      <AnalyzeButton />

      {loading && (
        <p className="text-center text-white mt-4">Processing your resume...</p>
      )}

      {result && !loading && <ResultDisplay />}
    </div>
  );
};

export default Content;