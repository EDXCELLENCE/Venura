export function getNextBatchDate() {
  const today = new Date()
  const nextBatch = new Date(today.getFullYear(), today.getMonth() + 1, 15)

  return nextBatch.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
