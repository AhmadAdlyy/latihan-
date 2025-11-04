"use client"

import { ReactNode } from "react"

type HeaderProps = {
  title?: string
  subtitle?: string
  actions?: ReactNode
  className?: string
}

export default function Header({ title, subtitle, actions, className = "" }: HeaderProps) {
  return (
    <header className={`w-full bg-white border-b border-gray-200 ${className}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          {title ? (
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          ) : null}
          {subtitle ? (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          ) : null}
        </div>

        <div className="flex items-center space-x-3">{
          actions ?? (
            <>
              <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700">Search</button>
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Sign in</button>
            </>
          )
        }</div>
      </div>
    </header>
  )
}