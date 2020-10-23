function cleanChars(chars: string, regex: RegExp) {
  return chars.match(regex).join('')
}

function getChars(n: number): string {
  function getSomeChars() {
    const min = 1000 * 1000 * 1000
    const max = 10 * min - 1
    return (Math.random() * (max - min) + min).toString(36)
  }

  let ret = ''
  while (ret.length < n) {
    ret = ret.concat(cleanChars(getSomeChars().toLowerCase(), /[a-z0-9]/g))
  }

  return ret.slice(0, n)
}

export function generateID(options?: {
  prefix?: string
  length?: number
}): string {
  let prefix = 'fn-'
  let length = 10

  // Set user-provided values
  if (options && (options.prefix || options.prefix === '')) {
    prefix = options.prefix
  }
  if (options && (options.length || options.length === 0)) {
    length = options.length
  }

  // Check for invalid input
  if (length < 0) {
    throw new Error('options.length cannot be negative')
  }
  if (!Number.isInteger(length)) {
    throw new Error('options.length must be integer')
  }
  return `${prefix}${getChars(length)}`
}
