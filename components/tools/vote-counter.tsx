'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Vote = 'for' | 'against' | 'abstain'
type Rule = 'simple' | 'two-thirds'

const voteOptions: { value: Vote; label: string }[] = [
  { value: 'for', label: 'For' },
  { value: 'against', label: 'Against' },
  { value: 'abstain', label: 'Abstain' },
]

const rules: { value: Rule; label: string }[] = [
  { value: 'simple', label: 'Simple (>50%)' },
  { value: 'two-thirds', label: 'Two-thirds (≥66.7%)' },
]

function requiredToPass(rule: Rule, voting: number) {
  if (voting <= 0) return 0
  return rule === 'simple' ? Math.floor(voting / 2) + 1 : Math.ceil((voting * 2) / 3)
}

export function VoteCounter() {
  const [totalInput, setTotalInput] = useState('')
  const [rule, setRule] = useState<Rule>('simple')
  const [votes, setVotes] = useState<Vote[]>([])

  const total = Math.max(0, Math.floor(Number(totalInput) || 0))
  const count = (v: Vote) => votes.filter((x) => x === v).length
  const counts = { for: count('for'), against: count('against'), abstain: count('abstain') }
  const cast = votes.length
  const voting = total - counts.abstain
  const required = total > 0 ? requiredToPass(rule, voting) : null
  const complete = total > 0 && cast >= total
  const passed = complete && required !== null && voting > 0 && counts.for >= required

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Total delegates</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            value={totalInput}
            onChange={(e) => setTotalInput(e.target.value)}
            placeholder="e.g. 24"
            className="border border-border bg-background px-4 py-3 text-lg tabular-nums focus-visible:border-brand focus-visible:outline-none"
          />
        </label>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm font-semibold">Majority rule</legend>
          <div className="grid grid-cols-2 border border-border bg-background">
            {rules.map((r) => (
              <label
                key={r.value}
                className={cn(
                  'cursor-pointer px-3 py-3 text-center text-sm font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand',
                  rule === r.value ? 'bg-brand text-white' : 'hover:bg-muted',
                )}
              >
                <input
                  type="radio"
                  name="majority-rule"
                  value={r.value}
                  checked={rule === r.value}
                  onChange={() => setRule(r.value)}
                  className="sr-only"
                />
                {r.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {voteOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            disabled={total === 0 || complete}
            onClick={() => setVotes((v) => [...v, option.value])}
            className={cn(
              'py-6 text-lg font-bold uppercase tracking-wide transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 md:py-8 md:text-2xl',
              option.value === 'for' && 'bg-brand text-white',
              option.value === 'against' && 'bg-foreground text-background',
              option.value === 'abstain' && 'border-2 border-foreground bg-background',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <dl className="grid grid-cols-2 gap-px bg-border md:grid-cols-5" aria-live="polite">
        {[
          ['For', counts.for],
          ['Against', counts.against],
          ['Abstain', counts.abstain],
          ['Cast', `${cast} / ${total}`],
          ['Required to pass', required ?? '–'],
        ].map(([label, value]) => (
          <div key={label} className="bg-background p-4 text-center">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {label}
            </dt>
            <dd className="mt-1 text-2xl font-bold tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>

      <p role="status" className="min-h-8 text-center text-2xl font-bold">
        {total === 0 && (
          <span className="text-base font-medium text-muted-foreground">
            Set total delegates to begin
          </span>
        )}
        {complete && (
          <span className={passed ? 'text-brand' : 'text-destructive'}>
            {passed ? 'Motion passes' : 'Motion fails'}
          </span>
        )}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setVotes((v) => v.slice(0, -1))}
          disabled={cast === 0}
          className="border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
        >
          Undo last vote
        </button>
        <button
          type="button"
          onClick={() => setVotes([])}
          disabled={cast === 0}
          className="border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
        >
          Reset
        </button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Abstentions are not counted when working out the majority.
      </p>
    </div>
  )
}
