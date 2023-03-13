export const maskDate = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1/$2')
    .slice(0, 10)
}

export const formatValue = (value: string | number, minimumFractionDigits: number, maximumFractionDigits: number) => {

  return value.toLocaleString(
    'pt-br',
    {
      minimumFractionDigits,
      maximumFractionDigits,
    }
  ).replace(',', '.')
}