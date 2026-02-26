'use client'

import { useState } from 'react'

export default function PracticePage() {
  const [code, setCode] = useState('// Write your code here\n\nfunction hello() {\n  console.log("Hello, IftiVerse!");\n}\n\nhello();')
  const [language, setLanguage] = useState('javascript')
  const [output, setOutput] = useState('')

  const handleRun = () => {
    // Mock output (no real execution)
    setOutput('> Running code...\n\nHello, IftiVerse!\n\n✓ Code executed successfully!')
  }

  const handleClear = () => {
    setCode('')
    setOutput('')
  }

  const languages = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'TypeScript',
    'Go',
    'Rust'
  ]

  const codeExamples = {
    javascript: '// Write your code here\n\nfunction hello() {\n  console.log("Hello, IftiVerse!");\n}\n\nhello();',
    python: '# Write your code here\n\ndef hello():\n    print("Hello, IftiVerse!")\n\nhello()',
    java: '// Write your code here\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, IftiVerse!");\n    }\n}',
  }

  const handleLanguageChange = (lang) => {
    setLanguage(lang.toLowerCase())
    setCode(codeExamples[lang.toLowerCase()] || `// ${lang} code here`)
    setOutput('')
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Coding</h1>
          <p className="text-gray-600">Write, run, and test your code in our practice environment</p>
        </div>

        {/* Info Banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 text-sm">
            ⚠️ <strong>Demo Mode:</strong> This is a UI-only code editor. Real code execution will be available soon!
          </p>
        </div>

        {/* Editor Container */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Toolbar */}
          <div className="bg-gray-100 border-b border-gray-200 p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Language Selector */}
              <div className="flex items-center gap-4">
                <label className="font-semibold text-sm">Language:</label>
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleRun}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center gap-2"
                >
                  <span>▶</span>
                  Run Code
                </button>
                <button
                  onClick={handleClear}
                  className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors font-semibold"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Code Editor */}
            <div className="border-r border-gray-200">
              <div className="bg-gray-800 text-white p-3 text-sm font-semibold">
                📝 Editor
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm resize-none focus:outline-none bg-gray-900 text-green-400"
                spellCheck="false"
                style={{ fontFamily: 'Consolas, Monaco, "Courier New", monospace' }}
              />
            </div>

            {/* Output Panel */}
            <div>
              <div className="bg-gray-800 text-white p-3 text-sm font-semibold">
                📤 Output
              </div>
              <div className="h-96 p-4 font-mono text-sm bg-gray-900 text-gray-300 whitespace-pre-wrap overflow-auto">
                {output || 'Click "Run Code" to see output here...'}
              </div>
            </div>
          </div>
        </div>

        {/* Practice Challenges */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-2">🎯 Challenge 1</h3>
            <p className="text-sm text-gray-600 mb-4">
              Write a function to reverse a string
            </p>
            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">
              Easy
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-2">🎯 Challenge 2</h3>
            <p className="text-sm text-gray-600 mb-4">
              Find the largest number in an array
            </p>
            <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs rounded-full">
              Medium
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-2">🎯 Challenge 3</h3>
            <p className="text-sm text-gray-600 mb-4">
              Implement a binary search algorithm
            </p>
            <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full">
              Hard
            </span>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">💡 Practice Tips</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-accent">→</span>
              <span>Start with simple problems and gradually increase difficulty</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">→</span>
              <span>Write clean, readable code with proper indentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">→</span>
              <span>Test your code with different inputs and edge cases</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">→</span>
              <span>Practice daily to build consistency and improve problem-solving skills</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
