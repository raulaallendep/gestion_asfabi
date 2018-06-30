export const handleError = (error, res) => {
  res.status(500).json({
    message: 'an error ocurred',
    error
  })
}
