'use client'

import { useRef, useState } from 'react'
import { FileText, Loader2, Upload } from 'lucide-react'
import { cn } from '@/lib/utils'

const FORMATTER_URL = 'https://Eddy12597.pythonanywhere.com/upload'

type Status =
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'success'; filename: string }
  | { type: 'error'; message: string }

function getFilename(response: Response, original: string) {
  const disposition = response.headers.get('Content-Disposition')
  const match = disposition?.match(/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i)
  if (match) return decodeURIComponent(match[1])
  return `formatted_${original}`
}

export function ResolutionFormatter() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [dragging, setDragging] = useState(false)
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  function selectFile(selected: File | undefined) {
    if (!selected) return
    if (!selected.name.toLowerCase().endsWith('.docx')) {
      setFile(null)
      setStatus({ type: 'error', message: 'Please choose a .docx file.' })
      return
    }
    setFile(selected)
    setStatus({ type: 'idle' })
  }

  async function format() {
    if (!file) return
    setStatus({ type: 'loading' })
    try {
      const formData = new FormData()
      formData.append('file', file)
      const response = await fetch(FORMATTER_URL, { method: 'POST', body: formData })
      if (!response.ok) {
        const text = await response.text().catch(() => '')
        throw new Error(text || `The server returned an error (${response.status}).`)
      }
      const blob = await response.blob()
      const filename = getFilename(response, file.name)
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
      setStatus({ type: 'success', filename })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error && error.message !== 'Failed to fetch'
            ? error.message
            : 'Could not reach the formatter server. Please try again later.',
      })
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="text-center text-base text-muted-foreground">
        Upload your .docx draft to fix formatting mistakes in MUN resolutions. This does not apply
        to Security Council-style committees.
      </p>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          selectFile(e.dataTransfer.files[0])
        }}
        className={cn(
          'flex min-h-56 flex-col items-center justify-center gap-4 border-2 border-dashed bg-background p-8 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
          dragging ? 'border-brand bg-accent' : 'border-border hover:border-brand',
        )}
      >
        {file ? (
          <FileText className="size-10 text-brand" aria-hidden="true" />
        ) : (
          <Upload className="size-10 text-muted-foreground" aria-hidden="true" />
        )}
        <span className="text-lg font-semibold">
          {file ? file.name : 'Drag and drop your file here, or click to browse'}
        </span>
        <span className="text-sm text-muted-foreground">.docx files only</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className="sr-only"
        tabIndex={-1}
        aria-label="Choose a resolution file"
        onChange={(e) => {
          selectFile(e.target.files?.[0])
          e.target.value = ''
        }}
      />

      <button
        type="button"
        onClick={format}
        disabled={!file || status.type === 'loading'}
        className="flex items-center justify-center gap-2 bg-brand px-6 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status.type === 'loading' && <Loader2 className="size-5 animate-spin" aria-hidden="true" />}
        {status.type === 'loading' ? 'Formatting…' : 'Format and download'}
      </button>

      <p role="status" aria-live="polite" className="min-h-6 text-center text-base">
        {status.type === 'success' && (
          <span className="text-brand">{`Done. ${status.filename} has been downloaded.`}</span>
        )}
        {status.type === 'error' && <span className="text-destructive">{status.message}</span>}
      </p>

      <p className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
        Developed by <span className="font-semibold text-foreground">Eddy Zhang</span>,
        Secretary-General of BIPHMUN 2026
      </p>
    </div>
  )
}
