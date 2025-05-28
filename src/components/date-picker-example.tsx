"use client"

import { useState } from "react"
import { DatePicker } from "./date-picker"

export function DatePickerExample() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Selecione uma Data</h2>
      <DatePicker date={date} onDateChange={setDate} />
      {date && (
        <p className="mt-4 text-sm text-gray-500">
          Data selecionada: {date.toLocaleDateString('pt-BR')}
        </p>
      )}
    </div>
  )
} 