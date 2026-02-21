'use client'

import { useState } from 'react'
import { MAKES, MAKE_MODELS, YEARS, getMakeLogoUrl } from '../lib/vehicle'

export default function VehicleMakeSelector({ categorySlug, subcategorySlug, subsubcategorySlug }) {
  const [year, setYear] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')

  const basePath = categorySlug && subcategorySlug
    ? `/c/${categorySlug}/${subcategorySlug}${subsubcategorySlug ? `/${subsubcategorySlug}` : ''}`
    : '/c'

  const handleGo = () => {
    if (year && make && model) {
      const params = new URLSearchParams({ year, make, model })
      window.location.href = `${basePath}?${params.toString()}`
    }
  }

  const handleMakeClick = (m) => {
    setMake(m)
    setModel('')
    setYear('')
  }

  const handleModelClick = (m) => {
    setModel(m)
    setYear('')
  }

  const handleBack = (step) => {
    if (step === 'make') {
      setMake('')
      setModel('')
      setYear('')
    } else if (step === 'model') {
      setModel('')
      setYear('')
    } else if (step === 'year') {
      setYear('')
    }
  }

  const models = make ? (MAKE_MODELS[make] || []).slice().sort((a, b) => a.localeCompare(b)) : []

  // Step 1: Select Make
  if (!make) {
    return (
      <div className="shadow-xl p-5 rounded-lg overflow-hidden bg-white">
        <p className="text-lg font-semibold text-gray-900 mb-4">Please select your vehicle make</p>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
          {MAKES.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => handleMakeClick(m)}
              className="flex items-center justify-between p-2 sm:p-3 w-full min-w-0 overflow-hidden rounded-sm border border-solid border-gray-200 bg-white shadow-lg outline-none transition text-left font-bold text-xs text-gray-900 hover:text-[#ea290f] hover:shadow-xl"
            >
              <span className="truncate">{m}</span>
              <img
                src={getMakeLogoUrl(m)}
                alt=""
                className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 object-contain ml-1"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Step 2: Select Model
  if (make && !model) {
    return (
      <div className="shadow-xl p-5 rounded-lg overflow-hidden bg-white">
        <button
          type="button"
          onClick={() => handleBack('make')}
          className="text-sm text-[#ea290f] hover:underline mb-3 flex items-center gap-1"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to makes
        </button>
        <p className="text-lg font-semibold text-gray-900 mb-4">Please select your vehicle model</p>
        <p className="text-sm text-gray-500 mb-4">Make: <span className="font-semibold text-gray-900">{make}</span></p>
        <div className="grid grid-cols-2 gap-3">
          {models.map((modelName) => (
            <button
              key={modelName}
              type="button"
              onClick={() => handleModelClick(modelName)}
              className="p-4 text-left font-semibold rounded-xl shadow-md transition-all bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-lg"
            >
              {modelName}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Step 3: Select Year
  if (make && model && !year) {
    return (
      <div className="shadow-xl p-5 rounded-lg overflow-hidden bg-white">
        <button
          type="button"
          onClick={() => handleBack('model')}
          className="text-sm text-[#ea290f] hover:underline mb-3 flex items-center gap-1"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to models
        </button>
        <p className="text-lg font-semibold text-gray-900 mb-4">Please select your vehicle year</p>
        <p className="text-sm text-gray-500 mb-4">
          Vehicle: <span className="font-semibold text-gray-900">{make} {model}</span>
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYear(String(y))}
              className="p-3 text-center font-semibold rounded-xl shadow-md transition-all bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-lg"
            >
              {y}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Step 4: Confirmation & GO
  return (
    <div className="shadow-xl p-5 rounded-lg overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => handleBack('year')}
        className="text-sm text-[#ea290f] hover:underline mb-3 flex items-center gap-1"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Change year
      </button>
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
        <p className="text-sm text-gray-600 mb-1">Your vehicle:</p>
        <p className="text-xl font-bold text-gray-900">{year} {make} {model}</p>
      </div>
      <button
        type="button"
        onClick={handleGo}
        className="w-full py-3 bg-[#ea290f] hover:bg-[#c8240d] text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        GO
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => handleBack('make')}
        className="w-full mt-2 py-2 text-gray-500 hover:text-gray-700 text-sm"
      >
        Start over
      </button>
    </div>
  )
}
