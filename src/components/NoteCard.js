export default function NoteCard({ note }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <span className="text-xs font-semibold text-accent bg-indigo-50 px-3 py-1 rounded-full">
          {note.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{note.title}</h3>
      
      <p className="text-gray-600 text-sm mb-4">
        {note.description}
      </p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span>📄 {note.pages} pages</span>
        <span>💾 {note.fileSize}</span>
      </div>
      
      <button className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors">
        Download PDF
      </button>
    </div>
  )
}
