"use client";

import { useState } from "react";
import { FiCode, FiCheck, FiAlertOctagon, FiCpu, FiZap, FiRefreshCw } from "react-icons/fi";

const CODE_PRESETS = [
  {
    name: "Python SQL Injection & Memory Leak",
    original: `def get_user_data(user_id):
    # DANGEROUS: Direct string concatenation SQL injection
    query = "SELECT * FROM users WHERE id = '" + user_id + "'"
    cursor.execute(query)
    
    # MEMORY LEAK: Unclosed connection pool
    results = cursor.fetchall()
    return results`,
    refactored: `def get_user_data(user_id: str) -> list[dict]:
    # SAFE: Parameterized prepared statement preventing SQL injection
    query = "SELECT id, username, email FROM users WHERE id = %s"
    
    with connection_pool.get_connection() as conn:
        with conn.cursor(dictionary=True) as cursor:
            cursor.execute(query, (user_id,))
            return cursor.fetchall()`,
    issues: ["SQL Injection Vulnerability (CWE-89)", "Database Connection Memory Leak", "Missing Explicit Type Hints"]
  },
  {
    name: "Java Microservice Thread Deadlock",
    original: `public synchronized void transferMoney(Account from, Account to, double amt) {
    synchronized (from) {
        synchronized (to) {
            from.withdraw(amt);
            to.deposit(amt);
        }
    }
}`,
    refactored: `public boolean transferMoney(Account from, Account to, double amt) {
    Account first = from.getId() < to.getId() ? from : to;
    Account second = from.getId() < to.getId() ? to : from;
    
    synchronized (first) {
        synchronized (second) {
            if (from.getBalance() >= amt) {
                from.withdraw(amt);
                to.deposit(amt);
                return true;
            }
            return false;
        }
    }
}`,
    issues: ["Nested Synchronized Lock Deadlock (Race Condition)", "Unchecked Insufficient Balance Condition"]
  }
];

export default function CodeDebuggerSandbox() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showRefactored, setShowRefactored] = useState(false);

  const preset = CODE_PRESETS[selectedPresetIndex];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowRefactored(true);
    }, 600);
  };

  return (
    <div className="bg-gray-900/90 border border-cyan-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-2">
            <FiCode /> In-Browser AI Code Auditor
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            Code Debugger & Refactoring Diff Sandbox
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Audit buggy snippets for vulnerabilities, memory leaks, and deadlocks with instant side-by-side AI refactoring diffs.
          </p>
        </div>
      </div>

      {/* Preset Pickers */}
      <div className="flex flex-wrap gap-3 mb-6">
        {CODE_PRESETS.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedPresetIndex(idx);
              setShowRefactored(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedPresetIndex === idx
                ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/20"
                : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Action Trigger */}
      <div className="mb-6">
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-cyan-600/20 flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Analyzing Code Vulnerabilities & Generating Diff...</span>
            </>
          ) : (
            <>
              <FiZap /> Run AI Code Security Audit & Refactor
            </>
          )}
        </button>
      </div>

      {/* Side-by-Side Diff View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Original Buggy Code */}
        <div className="bg-gray-950 border border-red-500/30 rounded-xl p-5 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
            <span className="font-bold text-red-400 flex items-center gap-2">
              <FiAlertOctagon /> Vulnerable Input Code
            </span>
            <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-800">ORIGINAL</span>
          </div>
          <pre className="text-gray-300 leading-relaxed overflow-x-auto whitespace-pre">
            {preset.original}
          </pre>

          {/* Issues Detected List */}
          <div className="mt-4 pt-3 border-t border-gray-800/80 space-y-1">
            <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Audit Findings:</span>
            {preset.issues.map((issue, idx) => (
              <div key={idx} className="text-[11px] text-red-300 flex items-center gap-1.5">
                <span>⚠️</span> <span>{issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Refactored Code */}
        <div className={`bg-gray-950 border transition-all rounded-xl p-5 font-mono text-xs ${
          showRefactored ? "border-emerald-500/50" : "border-gray-800 opacity-60"
        }`}>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
            <span className="font-bold text-emerald-400 flex items-center gap-2">
              <FiCheck /> Production Refactored Code
            </span>
            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">AI OPTIMIZED</span>
          </div>

          {showRefactored ? (
            <pre className="text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre">
              {preset.refactored}
            </pre>
          ) : (
            <div className="h-48 flex items-center justify-center text-gray-600 text-center italic">
              Click &quot;Run AI Code Security Audit &amp; Refactor&quot; above to view refactored production diff.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
