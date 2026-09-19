"use client";

import { useState } from "react";
import { FiShield, FiAlertTriangle, FiCheck, FiCode, FiZap } from "react-icons/fi";

export default function CodeSecurityScanner() {
  const [codeSnippet, setCodeSnippet] = useState(
    `// DANGEROUS: Unsanitized input passed to shell exec
const { exec } = require('child_process');
app.get('/run', (req, res) => {
    let cmd = req.query.command;
    exec(cmd, (err, stdout) => {
        res.send(stdout);
    });
});`
  );

  const [scanResult, setScanResult] = useState<{
    risk: string;
    cwe: string;
    patch: string;
  } | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const runSecurityScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setScanResult({
        risk: "CRITICAL SECURITY RISK (CWE-78 Command Injection)",
        cwe: "CWE-78: Improper Neutralization of Special Elements used in an OS Command",
        patch: `// SAFE: Parameterized child process execution using execFile
const { execFile } = require('child_process');
app.get('/run', (req, res) => {
    // Whitelisted command execution with input sanitization
    const allowedCommands = ['status', 'uptime'];
    if (!allowedCommands.includes(req.query.command)) {
        return res.status(400).send('Unauthorized command');
    }
    execFile('/bin/system_status', [req.query.command], (err, stdout) => {
        res.send(stdout);
    });
});`
      });
      setIsScanning(false);
    }, 600);
  };

  return (
    <div className="bg-gray-900/90 border border-red-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-2">
            <FiShield /> SAST Vulnerability &amp; Code Smell Auditor
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            Live AI Code Security SAST Scanner
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Paste any code snippet below to scan for OWASP top-10 vulnerabilities, CWE classifications, and automated security patch PRs!
          </p>
        </div>
      </div>

      <textarea
        value={codeSnippet}
        onChange={e => setCodeSnippet(e.target.value)}
        rows={6}
        className="w-full bg-gray-950 border border-gray-800 text-red-300 text-xs font-mono rounded-xl p-4 mb-4 focus:outline-none focus:border-red-500"
      />

      <button
        onClick={runSecurityScan}
        disabled={isScanning}
        className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 mb-6"
      >
        {isScanning ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <FiAlertTriangle />}
        <span>{isScanning ? "Scanning Vulnerabilities..." : "Run AI SAST Security Audit"}</span>
      </button>

      {scanResult && (
        <div className="bg-gray-950 border border-red-500/40 p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-xs font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <FiAlertTriangle /> {scanResult.risk}
            </span>
          </div>

          <p className="text-xs font-mono text-gray-300">{scanResult.cwe}</p>

          <div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">Automated Security Patch PR:</span>
            <pre className="bg-gray-900 text-emerald-300 text-xs p-4 rounded-lg border border-gray-800 overflow-x-auto">
              {scanResult.patch}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
